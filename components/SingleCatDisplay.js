import React from 'react';
import Image from 'next/future/image';

export default function SingleCatDisplay({ cat }) {
  return (
    <div
      key={cat.name}
      className="flex flex-col items-center bg-sidecar rounded-xl pt-4 pr-6 pl-6 pb-6"
    >
      <div className="text-4xl">{cat.name}</div>
      <div className="mt-4 flex flex-row items-center">
        <Image
          className="w-64 rounded-full object-cover aspect-square border-2 border-irish_coffee mr-6"
          src={cat.picture}
        />
        <div className="space-y-1.5">
          <div className="flex flex-row space-x-1">
            <div className="underline">Geb.:</div>
            <div>{cat.birthdate}</div>
          </div>
          <div className="flex flex-row space-x-1">
            <div className="underline">Farbe:</div>
            <div>{cat.color}</div>
          </div>
          <div className="flex flex-row space-x-1">
            <div className="underline">Vater:</div>
            <div>{cat.father}</div>
          </div>
          <div className="flex flex-row space-x-1">
            <div className="underline">Mutter:</div>
            <div>{cat.mother}</div>
          </div>
          <div>{cat.text}</div>
        </div>
      </div>
    </div>
  );
}
