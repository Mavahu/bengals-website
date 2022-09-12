import Image from 'next/future/image';
import { femaleCats } from '../data/catsData';

export default function Katzen() {
  return (
    <div className="space-y-4 max-w-5xl">
      {femaleCats.map((cat) => {
        return (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-sidecar rounded-xl pt-4 pr-6 pl-6 pb-6"
          >
            <div className="text-4xl">{cat.name}</div>
            <div className="mt-4 flex flex-row items-center">
              <Image
                className="w-64 rounded-full object-cover aspect-square border-4 border-irish_coffee mr-6"
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
      })}
    </div>

    // <div className="flex flex-col items-center">
    //   <div>title</div>
    //   <div className="flex flex-row items-center">
    //     <div>bild</div>
    //     <div>
    //       <div>
    //         Geburtsdatum: 07.04.2017 <br />
    //         Farbe: braun (black) spotted tabby
    //         <br />
    //         Vater:Ch Exotiquebengals Beast Mode
    //         <br />
    //         Mutter: CACJ Amazongold Lubava ofBenCo´s
    //         <br />
    //         bla bla bla
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
