import React from 'react';
import { motion } from 'framer-motion';

const clientImages = [
  { name: 'Cidco', img: '/images/ourClients/Cidco.png' },
  { name: 'Hyundai', img: '/images/ourClients/Hyundai.png' },
  { name: 'L&T', img: '/images/ourClients/LarsenAndToubro.png' },
  { name: 'MIDC', img: '/images/ourClients/MIDC.png' },
  { name: 'MSRDC', img: '/images/ourClients/MaharashtraStateRoad.png' },
  { name: 'Mazagaon Dock', img: '/images/ourClients/MazagaonDock.png' },
  { name: 'National Highway', img: '/images/ourClients/NationalHighway.png' },
  { name: 'PMGSY', img: '/images/ourClients/PradhanMantriGramSadakYojna.png' },
  { name: 'PWD', img: '/images/ourClients/Pwd.png' },
  { name: 'Supreme', img: '/images/ourClients/Supreme.png' },
  { name: 'Tata Projects', img: '/images/ourClients/TataProjects.png' },
];

export default function Clients() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen bg-[#faf9f6] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f0eee9] rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[2px] w-16 bg-[#d2a34d]"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide uppercase text-[#0f172a]">
            Our Clients
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clientImages.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.03)] border border-[#f1f0ee] flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] group"
            >
              <img
                src={client.img}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
