"use client"

import { WaterTextAnimation } from "@/components/water-text-animation"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function WaterContactsSection({ onCallMaster }: { onCallMaster: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600">
      {/* Simple animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && (
          <>
            {/* Simple floating elements */}
            <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
            <div className="absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
            <div className="absolute bottom-10 right-10 w-5 h-5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <WaterTextAnimation
            text="Контакты"
            className="text-4xl md:text-6xl font-semibold mb-4 tracking-wide text-white"
            color="white"
          />
          <p className="text-xl text-white font-light">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className="rounded-xl p-8 border-2 border-white/20 shadow-lg"
            style={{ backgroundColor: "#1B6568" }}
          >
            <div className="flex items-center mb-6">
              <Phone className="w-8 h-8 text-white mr-4" />
              <h3 className="text-2xl font-semibold text-white tracking-wide">Телефон</h3>
            </div>
            <p className="text-white text-xl font-light mb-2">+38 (067) 123-45-67</p>
            <p className="text-white text-xl font-light">+38 (050) 987-65-43</p>
          </div>

          <div
            className="rounded-xl p-8 border-2 border-white/20 shadow-lg"
            style={{ backgroundColor: "#1B6568" }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-white mr-4" />
              <h3 className="text-2xl font-semibold text-white tracking-wide">Адрес</h3>
            </div>
            <p className="text-white text-xl font-light mb-2">г. Киев</p>
            <p className="text-white text-lg font-light">Выезд по всей Украине</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onCallMaster}
            className="px-8 py-4 bg-white rounded-lg font-semibold text-xl transition-transform duration-200 shadow-lg hover:scale-105"
            style={{ color: "#1B6568" }}
          >
            Вызвать Мастера Сейчас
          </Button>
        </div>
      </div>
    </section>
  )
}