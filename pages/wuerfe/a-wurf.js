import React from 'react';
import { wuerfA } from '../../data/catsData';
import DetailedWurfDisplay from '../../components/DetailedWurfDisplay';

export default function a_wurf() {
  return <DetailedWurfDisplay wurfDaten={wuerfA} />;
}
