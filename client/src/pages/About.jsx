import React from "react";

export default function About() {
  return (
    <div className="min-h-screen p-3 sm:p-20 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">School Anthem</h1>
        <pre className=" text-sm sm:text-lg">
          <p className="mb-5">
            Hebron Group of Schools <br />
            Citadel of learning <br />
            A place of birth of king and queen <br />
            We learn to reign, to rule.
          </p>
          <p>
            God bless Hebron Schools <br />
            Where king and queen are groomed <br />
            We learn to attain <br />
            Our God's given throne. <br />
            Hebron, forever reign.
          </p>
        </pre>
      </div>

      <div className="flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOC_Fjp6vmumbcrEMK0PoFABc4mpqAcU9lw&usqp=CAU"
          alt="school building"
          className="w-full"
        />
        <p className="text-xs text-slate-700">
          Front View of Hebron Group of Schools Main Campus, Ibadan
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="text-2xl font-bold">
            Brief History of Hebron Group of Schools
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi perspiciatis et dolorem officiis esse ullam debitis,
            aperiam temporibus maiores quam labore placeat voluptate impedit?
            Fuga quidem possimus eveniet aperiam fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi perspiciatis et dolorem officiis esse ullam debitis,
            aperiam temporibus maiores quam labore placeat voluptate impedit?
            Fuga quidem possimus eveniet aperiam fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi perspiciatis et dolorem officiis esse ullam debitis,
            aperiam temporibus maiores quam labore placeat voluptate impedit?
            Fuga quidem possimus eveniet aperiam fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            ipsam sit natus numquam iure, minima dolor minus vero nostrum fuga
            eius incidunt, veritatis quod quidem et doloribus, vitae magnam
            amet? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi perspiciatis et dolorem officiis esse ullam debitis,
            aperiam temporibus maiores quam labore placeat voluptate impedit?
            Fuga quidem possimus eveniet aperiam fugiat.
          </p>
        </div>
      </div>
    </div>
  );
}
