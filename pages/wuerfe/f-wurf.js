import React from 'react';
import { wuerfC } from '../../data/catsData';
import DetailedWurfDisplay from '../../components/DetailedWurfDisplay';

export default function c_wurf() {
  return <DetailedWurfDisplay wurfDaten={wuerfC} />;
}
