import Image from 'next/future/image';
import AuroraPicture from '../images/aurora/aurora-1.JPG';
import BarsaPicture from '../images/barsa/barsa-1.JPG';

const catsData = [
  {
    name: 'Aurora',
    picture: AuroraPicture,
    birthdate: '07.04.2017',
    color: 'braun (black) spotted tabby',
    father: 'Ch Exotiquebengals Beast Mode',
    mother: 'CACJ Amazongold Lubava of BenCo´s',
    text: 'Amalja – ist unsere eigene Nachzucht.\nSie ist unsere Sternchen. Sie hat sehr schönen Show-Temperament. Sie ist liebevoll, freundlich und neugierig. Amalja hat warme Tonfarbe, schönes Kopf, kleine Ohren und gerades Profil. Sie trägt jetzt den Titel Gr. International Champion in erwachsene Klasse.',
  },
  {
    name: 'Barsa',
    picture: BarsaPicture,
    birthdate: '07.04.2017',
    color: 'braun (black) spotted tabby',
    father: 'Ch Exotiquebengals Beast Mode',
    mother: 'CACJ Amazongold Lubava of BenCo´s',
    text: 'Amalja – ist unsere eigene Nachzucht.\nSie ist unsere Sternchen. Sie hat sehr schönen Show-Temperament. Sie ist liebevoll, freundlich und neugierig. Amalja hat warme Tonfarbe, schönes Kopf, kleine Ohren und gerades Profil. Sie trägt jetzt den Titel Gr. International Champion in erwachsene Klasse.',
  },
];

export default function Katzen() {
  return (
    <div className="space-y-4">
      {catsData.map((cat) => {
        return (
          <div
            key={cat.name}
            className="flex flex-col items-center bg-orange-200 rounded-xl p-4"
          >
            <div className="text-4xl">{cat.name}</div>
            <div className="mt-6 flex flex-row items-center">
              <Image
                className="w-64 rounded-full object-cover aspect-square border-4 border-orange-300 mr-4"
                src={cat.picture}
              />
              <div className="space-y-1.5">
                <div>Geb.: {cat.birthdate}</div>
                <div>Farbe: {cat.color}</div>
                <div>Vater: {cat.father}</div>
                <div>Mutter: {cat.mother}</div>
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
