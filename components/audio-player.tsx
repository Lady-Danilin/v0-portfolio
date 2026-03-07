"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  src: string
  title?: string
}

export function AudioPlayer({ src, title = "Audio" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTimeUpdate = () => setCurrentTime(audio.currentTime)
    const onDuration = () => {
      if (isFinite(audio.duration)) setDuration(audio.duration)
    }
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", onTimeUpdate)
    audio.addEventListener("loadedmetadata", onDuration)
    audio.addEventListener("durationchange", onDuration)
    audio.addEventListener("canplay", onDuration)
    audio.addEventListener("ended", onEnded)

    // If already loaded (cached)
    if (audio.readyState >= 1 && isFinite(audio.duration)) {
      setDuration(audio.duration)
    }

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate)
      audio.removeEventListener("loadedmetadata", onDuration)
      audio.removeEventListener("durationchange", onDuration)
      audio.removeEventListener("canplay", onDuration)
      audio.removeEventListener("ended", onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    const bar = progressRef.current
    if (!audio || !bar || !duration) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    audio.currentTime = ratio * duration
  }

  const formatTime = (t: number) => {
    if (!isFinite(t)) return "0:00"
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#0066CC]/8 to-[#FF6600]/8 border border-[#0066CC]/15 p-5">
      <audio ref={audioRef} src={src} preload="auto" />

      {/* Waveform decoration */}
      <div className="flex items-end gap-[2px] h-8 mb-4 opacity-40">
        {Array.from({ length: 40 }).map((_, i) => {
          const heights = [30, 55, 75, 45, 90, 60, 35, 80, 50, 70, 40, 85, 65, 30, 95, 55, 75, 45, 60, 80,
            35, 65, 50, 90, 40, 70, 55, 85, 30, 75, 60, 45, 95, 50, 70, 40, 80, 55, 65, 35]
          const h = heights[i] ?? 50
          const filled = (i / 40) * 100 < progress
          return (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-100"
              style={{
                height: `${h}%`,
                background: filled
                  ? "linear-gradient(to top, #0066CC, #FF6600)"
                  : "hsl(var(--muted-foreground) / 0.3)",
              }}
            />
          )
        })}
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-4">
        {/* Play / Pause button */}
        <button
          onClick={togglePlay}
          className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-br from-[#0066CC] to-[#FF6600] flex items-center justify-center shadow-lg hover:shadow-[0_4px_20px_rgba(0,102,204,0.4)] hover:scale-105 transition-all duration-200 active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white ml-0.5" />
          )}
        </button>

        {/* Progress + time */}
        <div className="flex-1 min-w-0 space-y-1.5">
          {/* Progress bar */}
          <div
            ref={progressRef}
            className="h-3 bg-muted rounded-full cursor-pointer relative overflow-hidden group"
            onClick={seek}
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0066CC] to-[#FF6600] transition-all duration-100 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Thumb dot */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#0066CC] rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Time */}
          <div className="flex justify-between text-xs text-muted-foreground font-mono tabular-nums">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center text-muted-foreground hover:text-[#0066CC] hover:bg-[#0066CC]/10 transition-all duration-200 active:scale-95"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  )
}
