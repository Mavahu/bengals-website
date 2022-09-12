import React from 'react';
import { wuerfA } from '../../data/catsData';
import EinzelWurfLayout from '../../components/EinzelWurfDarstellung';

export default function a_wurf() {
  return <EinzelWurfLayout wurfDaten={wuerfA} />;
}
