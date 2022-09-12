import React from 'react';
import Image from 'next/future/image';

export default function EinzelWurfLayout({ wurfDaten }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-4xl">{wurfDaten.title}</div>
        <div>{wurfDaten.subtitle}</div>
        <div className="flex flex-row">
          <div className=" flex flex-col items-center">
            <Image
              className="w-64 rounded-full object-cover aspect-square border-4 border-orange-300 mr-4"
              alt="Picture of the cats father"
              src={wurfDaten.fatherPicture}
            />
            <div>{wurfDaten.fatherName}</div>
          </div>
          <div className=" flex flex-col items-center">
            <Image
              className="w-64 rounded-full object-cover aspect-square border-4 border-orange-300 mr-4"
              alt="Picture of the cats mother"
              src={wurfDaten.motherPicture}
            />
            <div>{wurfDaten.motherName}</div>
          </div>
        </div>
      </div>
      <div className="text-3xl mt-8 mb-4">Kitten</div>
      {wurfDaten.kitten.map((kitten) => {
        return (
          <div className="mb-4">
            <div className="flex flex-row items-center">
              <Image
                className="w-[520px] rounded-3xl object-center aspect-video mr-4"
                src={kitten.picture}
              />
              <div className="flex flex-col space-y-2">
                <div>{kitten.name}</div>
                <div>{kitten.sex}</div>
                <div>{kitten.color}</div>
                <div>{kitten.text}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
