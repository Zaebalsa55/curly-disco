"use client"

import type React from "react"
import { useState, useRef } from "react"
import { WashingMachine } from "@/components/ui/washing-machine"
import { WaterTextAnimation } from "@/components/water-text-animation"
import { WashingMachineDiagnostic } from "@/components/washing-machine-diagnostic"
import { BrandCarousel } from "@/components/brand-carousel"
import { RepairRulesSection } from "@/components/repair-rules-section"
import { WaterContactsSection } from "@/components/water-contacts-section"
import { Phone, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { HryvniaIcon } from "@/components/ui/hryvnia-icon"
import { StepperSection } from "@/components/stepper-section"
import { FAQSection } from "@/components/faq-section"
import { ServiceAdvantagesSection } from "@/components/service-advantages-section"

export default function WashingMachineRepairLanding() {
  const [showCallForm, setShowCallForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const pricesRef = useRef<HTMLDivElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { phoneNumber })
    setFormSubmitted(true)

    setTimeout(() => {
      setFormSubmitted(false)
      setShowCallForm(false)
      setPhoneNumber("")
    }, 3000)
  }

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    if (digits.length === 0) return ""
    if (digits.length <= 2) return `+38${digits}`
    if (digits.length <= 5) return `+38 (${digits.slice(2)})`
    if (digits.length <= 8) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5)}`
    if (digits.length <= 10) return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8)}`
    return `+38 (${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10, 12)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value)
    setPhoneNumber(formattedNumber)
  }

  const scrollToPrices = () => {
    pricesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Simple animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 to-cyan-100/20 animate-pulse"></div>
        </div>

        <div className="relative flex flex-col justify-between items-center px-4 min-h-[85vh] py-16">
          {/* Header */}
          <div className="text-center flex-shrink-0">
            <WaterTextAnimation
              text="Ремонт Стиральных Машин"
              className="text-3xl md:text-5xl font-semibold tracking-wide mb-2"
              color="#1B6568"
            />
            <p
              className="text-3xl md:text-5xl font-semibold tracking-wide mb-8"
              style={{ color: "#1B6568" }}
            >
              в Одессе!
            </p>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed mt-8">
              Професійний ремонт будь-яких марок пральних машин. Швидко, якісно, з гарантією.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="flex-grow flex items-center justify-center w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center w-full">
              {/* Left Side - Empty space */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right lg:pr-8">
                <div></div>
              </div>

              {/* Center - Washing Machine */}
              <div className="flex justify-center relative">
                <div className="relative flex items-center justify-center">
                  {/* Master Behind Machine */}
                  <div className="absolute right-[-140px] sm:right-[-160px] top-[-20px] sm:top-[-30px] z-0">
                    <div 
                      className="w-[220px] h-[270px] sm:w-[200px] sm:h-[240px] bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center"
                      style={{
                        transform: "scaleX(-1)",
                      }}
                    >
                      <div className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">M</span>
                      </div>
                    </div>
                  </div>

                  {/* Washing Machine */}
                  <div className="relative z-10">
                    <WashingMachine />
                  </div>
                </div>
              </div>

              {/* Right Side - Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => setShowCallForm(true)}
                  className="px-6 py-3 text-white rounded-lg font-semibold text-lg flex items-center justify-center shadow-lg tracking-wide transition-all duration-200 hover:shadow-xl"
                  style={{ backgroundColor: "#1B6568" }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Вызвать Мастера
                </button>

                <button
                  onClick={scrollToPrices}
                  className="px-6 py-3 rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-500 hover:-translate-y-1 transform transition duration-200 hover:shadow-md flex items-center justify-center font-medium text-lg tracking-wide"
                  style={{ color: "#1B6568" }}
                >
                  <HryvniaIcon className="mr-2" size={20} />
                  Посмотреть Цены
                </button>
              </div>
            </div>
          </div>

          {/* Bottom spacer */}
          <div className="flex-shrink-0 h-4"></div>
        </div>
      </div>

      {/* Prices Section */}
      <section
        ref={pricesRef}
        className="py-8 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="container mx-auto px-4">
          <WashingMachineDiagnostic />
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Repair Rules Section */}
      <RepairRulesSection />

      {/* Service Advantages Section */}
      <ServiceAdvantagesSection />

      {/* Stepper Section */}
      <StepperSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contacts Section */}
      <WaterContactsSection onCallMaster={() => setShowCallForm(true)} />

      {/* Call Master Form */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${
          showCallForm ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden transition-all duration-400 ${
            showCallForm ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: "#1B6568" }}>
            <h3 className="text-xl font-semibold text-white tracking-wide">Вызов мастера</h3>
            <button onClick={() => setShowCallForm(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-6">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e6f7f5" }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: "#1B6568" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold mb-2 tracking-wide" style={{ color: "#1B6568" }}>
                  Заявка принята!
                </h4>
                <p className="text-lg text-gray-600 font-light">
                  Мы свяжемся с вами в ближайшее время для подтверждения.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-lg">
                    Номер телефона
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+38 (___) ___-__-__"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    required
                    className="w-full text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white text-lg font-medium tracking-wide py-6 hover:opacity-90"
                  style={{ backgroundColor: "#1B6568" }}
                  disabled={!phoneNumber}
                >
                  Отправить заявку
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}