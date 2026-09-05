import React from 'react'

const associates = [
  { name: 'Ambuja Cement', img: '/images/majorAssociates/AmbujaCement.png' },
  { name: 'Asian Paints', img: '/images/majorAssociates/AsianPaints.png' },
  { name: 'Astral Pipes', img: '/images/majorAssociates/AstralPipes.png' },
  { name: 'Birla Corporation', img: '/images/majorAssociates/BirlaCorporation.png' },
  { name: 'CenturyPly', img: '/images/majorAssociates/Centuryply.png' },
  { name: 'Finolex', img: '/images/majorAssociates/Finolex.png' },
  { name: 'Greenply', img: '/images/majorAssociates/Greenply.png' },
  { name: 'JSW', img: '/images/majorAssociates/JSW.png' },
  { name: 'Prism Cement', img: '/images/majorAssociates/PrismCement.png' },
  { name: 'Samsung', img: '/images/majorAssociates/Samsung.png' },
  { name: 'Tata Steel', img: '/images/majorAssociates/TataSteel.png' },
  { name: 'UltraTech Cement', img: '/images/majorAssociates/UltrateckCement.png' },
];

function Associates() {
  return (
    <div className="container mx-auto px-16 pt-28 pb-10 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Major Associates</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {associates.map((associate, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <img 
              src={associate.img} 
              alt={associate.name} 
              className="max-h-24 w-auto object-contain   transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Associates