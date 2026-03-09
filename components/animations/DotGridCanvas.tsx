"use client";

import { useEffect, useRef } from "react";

interface DotGridCanvasProps {
  accentColor?: [number, number, number];
  dotSize?: number;
  spacing?: number;
  pulseSpeed?: number;
  className?: string;
}

const VERT_SHADER = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_uv;
out vec2 v_uv;

void main() {
  v_uv = a_uv;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG_SHADER = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec3 u_accent;
uniform float u_dotSize;
uniform float u_spacing;
uniform float u_speed;

in vec2 v_uv;
out vec4 fragColor;

float dot2(vec2 p, float r) {
  return smoothstep(r, r * 0.6, length(p));
}

void main() {
  vec2 uv = v_uv;
  vec2 px = uv * u_resolution;

  vec2 cell = floor(px / u_spacing);
  vec2 center = (cell + 0.5) * u_spacing;
  vec2 diff = px - center;

  float d = dot2(diff, u_dotSize);

  float dist = length(uv - 0.5) * 2.0;
  float pulse = sin(dist * 6.0 - u_time * u_speed * 3.0) * 0.5 + 0.5;
  pulse = pow(pulse, 3.0) * (1.0 - dist * 0.7);

  vec2 mouseWorld = u_mouse;
  float cursorDist = length(uv - mouseWorld);
  float cursorGlow = smoothstep(0.35, 0.0, cursorDist);

  float brightness = 0.06 + pulse * 0.14 + cursorGlow * 0.35;

  float vig = 1.0 - smoothstep(0.3, 0.9, length(uv - 0.5) * 2.0);
  brightness *= vig;

  vec3 color = u_accent * brightness;
  fragColor = vec4(color, d * brightness * 2.5);
}
`;

function compileShader(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "Shader compile error");
  }
  return shader;
}

function createProgram(gl: WebGL2RenderingContext): WebGLProgram {
  const vert = compileShader(gl, gl.VERTEX_SHADER, VERT_SHADER);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SHADER);
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vert);
  gl.attachShader(prog, frag);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(prog) ?? "Program link error");
  }
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  return prog;
}

export function DotGridCanvas({
  accentColor = [0.0, 0.4, 0.8],
  dotSize = 1.5,
  spacing = 28,
  pulseSpeed = 0.5,
  className = "",
}: DotGridCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<[number, number]>([0.5, 0.5]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    let rafId: number;
    let program: WebGLProgram;

    try {
      program = createProgram(gl);
    } catch (e) {
      console.warn("DotGridCanvas: shader error", e);
      return;
    }

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const uvs = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);

    const vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);

    const posBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uvBuf = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    const uvLoc = gl.getAttribLocation(program, "a_uv");
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);

    gl.bindVertexArray(null);

    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uAccent = gl.getUniformLocation(program, "u_accent");
    const uDotSize = gl.getUniformLocation(program, "u_dotSize");
    const uSpacing = gl.getUniformLocation(program, "u_spacing");
    const uSpeed = gl.getUniformLocation(program, "u_speed");

    gl.useProgram(program);
    gl.uniform3fv(uAccent, accentColor);
    gl.uniform1f(uDotSize, dotSize);
    gl.uniform1f(uSpacing, spacing);
    gl.uniform1f(uSpeed, pulseSpeed);

    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = [
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height,
      ];
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const startTime = performance.now();

    const render = () => {
      const t = (performance.now() - startTime) / 1000;
      gl.useProgram(program);
      gl.uniform1f(uTime, t);
      gl.uniform2fv(uMouse, mouseRef.current);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      gl.bindVertexArray(null);
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      gl.deleteProgram(program);
      gl.deleteBuffer(posBuf);
      gl.deleteBuffer(uvBuf);
      gl.deleteVertexArray(vao);
    };
  }, [accentColor, dotSize, spacing, pulseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
