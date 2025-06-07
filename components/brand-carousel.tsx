"use client"

const brands = [
  "Bosch", "Whirlpool", "Indesit", "LG", "Electrolux", "Zanussi", 
  "Samsung", "Candy", "Ariston", "Beko", "Gorenje", "Ardo"
]

export function BrandCarousel() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-wide text-center" style={{ color: "#1B6568" }}>
          Ремонтируем все марки
        </h2>
        <p className="text-lg text-gray-600 text-center font-light">
          Профессиональный ремонт стиральных машин любых брендов
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div className="flex gap-6 min-w-max animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-4 border border-gray-200 flex items-center justify-center min-w-[160px] h-20 group hover:border-transparent hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50"
              >
                <span className="text-lg font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}