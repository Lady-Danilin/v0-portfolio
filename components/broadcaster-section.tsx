"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Radio, Volume2 } from "lucide-react"
import { AudioPlayer } from "@/components/audio-player"

export function BroadcasterSection() {
  return (
    <section
      id="broadcaster"
      className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">Broadcaster & Voice Actor</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0066CC] to-[#FF6600] mx-auto mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your Voice, Your Vision, Digitally Realized.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-inter bg-gradient-to-r from-[#0066CC] to-[#FF6600] bg-clip-text text-transparent">
              Your Professional Voice
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              With extensive experience in radio production and voice acting, I bring professionalism and versatility to
              every project. From commercial advertising to narrative storytelling, my voice adapts to convey the right
              tone and message for your brand.
            </p>

            <Card className="bg-muted/30 border-none shadow-none">
              <CardContent className="p-0 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center shadow-md">
                    <Volume2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold leading-tight">Main Presentation Audio</h4>
                    <p className="text-xs text-muted-foreground">Demo de locución</p>
                  </div>
                </div>

                <AudioPlayer src="/audios/demo-locucion.mp3" title="Demo de locución" />

                <p className="text-sm text-muted-foreground italic">
                  Further audio examples coming soon (e.g., advertising, narrative, voice acting styles).
                </p>
              </CardContent>
            </Card>

            {/* Voice Services - Hidden for now */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Mic, title: "Commercial Voice", desc: "Professional advertising and promotional content" },
                { icon: Radio, title: "Radio Production", desc: "Program hosting and radio content creation" },
                { icon: Volume2, title: "Narrative Voice", desc: "Storytelling and documentary narration" },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0066CC] to-[#FF6600] rounded-full flex items-center justify-center mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>

          {/* Gallery */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-center">Gallery</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/static/Images/retrato-la-cueva-arg-379.jpg", caption: "Voice & Presence" },
                { src: "/static/Images/retrato-la-cueva-arg-383.jpg", caption: "Studio Session" },
              ].map((image, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <p className="absolute bottom-3 left-0 right-0 text-center text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow">
                      {image.caption}
                    </p>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2 font-medium group-hover:text-[#0066CC] transition-colors">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
