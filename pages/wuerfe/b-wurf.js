import React from 'react';
import { wuerfB } from '../../data/catsData';
import DetailedWurfDisplay from '../../components/DetailedWurfDisplay';

export default function b_wurf() {
  return <DetailedWurfDisplay wurfDaten={wuerfB} />;
}
