import React from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

export default function SingleWurfDisplay({ wurf }) {
  return (
    <div
      key={wurf.name}
      className="flex flex-col items-center bg-sidecar rounded-xl p-4"
    >
      <div className="text-4xl">{wurf.name}</div>
      <div className="mt-6 flex flex-row items-center">
        <Image
          className="w-64 rounded-[48px] object-cover aspect-square border-2 border-irish_coffee mr-4"
          src={wurf.picture}
        />
        <div className="space-y-1.5">
          <div>Vater: {wurf.father}</div>
          <div>Mutter: {wurf.mother}</div>
          <div>{wurf.text}</div>
          <div className="p-4 bg-irish_coffee rounded-3xl max-w-fit text-amber-100 hover:text-white">
            <Link href="/wuerfe/a-wurf"> Mehr Informationen</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
