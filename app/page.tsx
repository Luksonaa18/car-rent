"use client";

import Image from "next/image";
import car from "@/public/WhatsApp Image 2025-07-09 at 09.38.30_346ec32f.jpg";
import car1 from "@/public/WhatsApp Image 2025-07-09 at 09.38.30_3494090a.jpg";
import car2 from "@/public/WhatsApp Image 2025-07-09 at 09.38.30_85235142.jpg";
import car3 from "@/public/WhatsApp Image 2025-07-09 at 09.38.31_d3cb194b.jpg";
import car4 from "@/public/WhatsApp Image 2025-07-09 at 09.38.31_1ab5d18b.jpg";
import car5 from "@/public/WhatsApp Image 2025-07-09 at 09.38.30_ea2d6fd9.jpg";


const cars = [car1, car2, car3, car4, car5, car];

export default function Home() {
  return (
    <main className="bg-red-500 min-h-screen p-4">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h1 className="text-3xl font-bold text-white">CAR RENT</h1>
        <div className="flex flex-row gap-3">
          <span className="text-xl text-white font-semibold">+995 577 522 599</span>
          <span className="text-xl text-white font-semibold">+995 706 121 412</span>
        </div>
        <h1 className="text-3xl text-white font-bold text-center">АРЕНДА АВТОМОБИЛЯ</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:flex flex-row">
        {cars.map((carImage, index) => (
          <div key={index} className="">
            <Image
              src={carImage}
              alt={`Car ${index + 1}`}
              width={300}

              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
