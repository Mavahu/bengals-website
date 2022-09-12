import React from 'react';
import Image from 'next/future/image';

export default function DetailedWurfDisplay({ wurfDaten }) {
  return (
    <div className="bg-sidecar rounded-xl p-4">
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-4">{wurfDaten.title}</div>
        <div className="mb-4">{wurfDaten.subtitle}</div>
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col items-center space-y-4">
            <Image
              className="w-64 rounded-full object-cover aspect-square border-2 border-irish_coffee mr-4"
              alt="Picture of the cats father"
              src={wurfDaten.fatherPicture}
            />
            <div className="text-lg">{wurfDaten.fatherName}</div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              className="w-64 rounded-full object-cover aspect-square border-2 border-irish_coffee mr-4"
              alt="Picture of the cats mother"
              src={wurfDaten.motherPicture}
            />
            <div className="text-lg">{wurfDaten.motherName}</div>
          </div>
        </div>
      </div>
      <div className="text-3xl mt-8 mb-4">Kitten</div>
      {wurfDaten.kitten.map((kitten) => {
        return (
          <div key={kitten.name} className="mb-4">
            <div className="flex flex-row items-center space-x-6">
              <Image
                className="w-[520px] rounded-3xl object-center aspect-video"
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
