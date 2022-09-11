import React from 'react';
import Image from 'next/future/image';
import Link from 'next/dist/client/link';
import AuroraPicture from '../images/aurora/aurora-1.JPG';

const wuerfeJSON = [
  {
    name: 'Wurf D von X:X:X:X',
    picture: AuroraPicture,
    father: 'Bengalias Morpheus',
    mother: 'GICh BenCo´s Amalja',
    text: 'Im Wurf  war nur 1 Kitten. Diese Katze bleibt bei uns.',
    link: 'wuerfe/a-wurf',
  },
];

export default function wuerfe() {
  return (
    <div className="space-y-4">
      {wuerfeJSON.map((wurf) => {
        return (
          <div
            key={wurf.name}
            className="flex flex-col items-center bg-orange-200 rounded-xl p-4"
          >
            <div className="text-4xl">{wurf.name}</div>
            <div className="mt-6 flex flex-row items-center">
              <Image
                className="w-64 rounded-[48px] object-cover aspect-square border-4 border-orange-300 mr-4"
                src={wurf.picture}
              />
              <div className="space-y-1.5">
                <div>Vater: {wurf.father}</div>
                <div>Mutter: {wurf.mother}</div>
                <div>{wurf.text}</div>
                <div className="p-4 bg-amber-800 rounded-3xl max-w-fit text-amber-600 hover:text-white">
                  <Link href="/wuerfe/a-wurf"> Mehr Informationen</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
