import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-2 sm:p-20">
      <section className="flex w-full h-[400px] bg-slate-300 rounded-xl mb-20 items-center justify-center border-2 border-slate-500">
        <h1>Image Carousel</h1>
      </section>

      <section className="w-full max-w-4xl mx-auto flex flex-col items-center sm:items-start gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLKcbjWaX2RL8_ZJWTf276BAKWIe_TDoKLg&usqp=CAU"
            alt="proprietor photo"
            className="object-cover w-64 h-64 rounded-full"
          />
          <div className="w-full text-center">
            <p className="text-lg font-bold border-b pb-1">
              Name of Proprietor
            </p>
            <span className="text-xs pt-1">
              B.Ed (Chem), PGDE (Chem), MNSC, PhD (in view)
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold mb-3">
            From the Proprietor's Desk
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            ducimus. Corrupti perspiciatis laboriosam soluta reprehenderit
            sequi. Tempora repellat et, obcaecati delectus maxime, voluptatum
            illo, quasi architecto sapiente aliquid ea magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            ducimus. Corrupti perspiciatis laboriosam soluta reprehenderit
            sequi. Tempora repellat et, obcaecati delectus maxime, voluptatum
            illo, quasi architecto sapiente aliquid ea magni.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            ducimus. Corrupti perspiciatis laboriosam soluta reprehenderit
            sequi. Tempora repellat et, obcaecati delectus maxime, voluptatum
            illo, quasi architecto sapiente aliquid ea magni.
          </p>
        </div>
      </section>
    </div>
  );
}
