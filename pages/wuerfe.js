import React from 'react';
import Image from 'next/future/image';
import Link from 'next/dist/client/link';
import { wuerfeJSON } from '../data/catsData';
import SingleWurfDisplay from '../components/SingleWurfDisplay';

export default function wuerfe() {
  return (
    <div className="space-y-4">
      {wuerfeJSON.map((wurf) => {
        return <SingleWurfDisplay wurf={wurf} />;
      })}
    </div>
  );
}
