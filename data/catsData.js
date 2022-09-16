import AuroraPicture from '../images/aurora/aurora-1.JPG';
import BarsaPicture from '../images/barsa/barsa-1.JPG';

const catsColor = 'brown (black) spotted tabby (BENn24)';
const caesarName = 'Caesar Malinmurr*BY (Gold Ch.)';
const barsaName = "BenCo's Barsa";
const auroraName = 'Aurora of the Unisphere';
const mangoName = 'Mango Zolota Mriya';
const lubavaName = "Amazongold Lubava of BenCo's";
const benalexName = 'Benalex Stierlitz';
const wurfATitel = 'Wurf A von 23.05.2020';
const wurfBTitel = 'Wurf B von 12.09.2021';
const wurfCTitel = 'Wurf C von 11.11.2021';
const wurfDTitel = 'Wurf D von 14.02.2022';
const wurfETitel = 'Wurf E von 14.02.2022';
const wurfFTitel = 'Wurf F von 12.07.2022';
const ofTheUnisphere = ' of the Unisphere';

export const maleCats = [
  {
    name: benalexName,
    picture: BarsaPicture,
    birthdate: '20.02.2021',
    color: 'seal-sepia-tabby-spotted',
    father: 'Benalex Geroy of Exoticbengals',
    mother: 'Benalex Scully',
    text: 'Text für Benalex',
  },
];

export const femaleCats = [
  {
    name: barsaName,
    picture: BarsaPicture,
    birthdate: '06.03.2019',
    color: catsColor,
    father: 'Oasisbengals Batrudinov of Benberry',
    mother: "BenCo's Amalja (Gr. Int. Ch.)",
    text: 'Text für Barsa',
  },
  {
    name: 'Aurora of the Unisphere',
    picture: AuroraPicture,
    birthdate: '23.05.2020',
    color: catsColor,
    father: caesarName,
    mother: barsaName,
    text: 'Text für Aurora',
  },
];

export const wuerfeJSON = [
  {
    name: wurfATitel,
    picture: AuroraPicture,
    father: caesarName,
    mother: barsaName,
    text: 'Im Wurf waren 5 Kitten. 3 Weiblich 2 Männlich',
    link: 'wuerfe/a-wurf',
  },
  {
    name: wurfBTitel,
    picture: AuroraPicture,
    father: mangoName,
    mother: auroraName,
    text: 'Im Wurf waren 8 Kitten. 4 Weibchen 4 Männchen',
    link: 'wuerfe/b-wurf',
  },
  {
    name: wurfCTitel,
    picture: AuroraPicture,
    father: caesarName,
    mother: lubavaName,
    text: 'Im Wurf war 1 Kitten. 1 Männchen',
    link: 'wuerfe/c-wurf',
  },
  {
    name: wurfDTitel,
    picture: AuroraPicture,
    father: benalexName,
    mother: auroraName,
    text: 'Im Wurf waren 8 Kitten. 6 Männchen und 2 Weibchen',
    link: 'wuerfe/d-wurf',
  },
  {
    name: wurfETitel,
    picture: AuroraPicture,
    father: benalexName,
    mother: barsaName,
    text: 'Im Wurf waren 5 Kitten. 1 Männchen und 4 Weibchen',
    link: 'wuerfe/e-wurf',
  },
  {
    name: wurfFTitel,
    picture: AuroraPicture,
    father: benalexName,
    mother: auroraName,
    text: 'Im Wurf waren 6 Kitten. 3 Männchen und 3 Weibchen',
    link: 'wuerfe/f-wurf',
  },
].reverse();

export const wuerfA = {
  title: wurfATitel,
  subtitle: '3 Weibchen & 2 Männchen',
  fatherPicture: AuroraPicture,
  fatherName: caesarName,
  motherPicture: BarsaPicture,
  motherName: barsaName,
  kitten: [
    {
      picture: AuroraPicture,
      name: 'Afina' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Aramis' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Ares' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Asol' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Aurora' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [AuroraPicture, AuroraPicture, AuroraPicture, AuroraPicture],
};

export const wuerfB = {
  title: wurfBTitel,
  subtitle: '4 Weibchen & 4 Männchen',
  fatherPicture: AuroraPicture,
  fatherName: mangoName,
  motherPicture: BarsaPicture,
  motherName: auroraName,
  kitten: [
    {
      picture: AuroraPicture,
      name: 'Bagira' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Bars' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Batista' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Beery' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Benjo' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Bonita' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Brissa' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Bruce' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [],
};

export const wuerfC = {
  title: wurfCTitel,
  subtitle: '1 Männchen',
  fatherPicture: AuroraPicture,
  fatherName: caesarName,
  motherPicture: BarsaPicture,
  motherName: lubavaName,
  kitten: [
    {
      picture: AuroraPicture,
      name: 'Charlie' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [],
};

export const wuerfD = {
  title: wurfDTitel,
  subtitle: '6 Männchen & 2 Weibchen',
  fatherPicture: AuroraPicture,
  fatherName: benalexName,
  motherPicture: BarsaPicture,
  motherName: auroraName,
  kitten: [
    {
      picture: AuroraPicture,
      name: 'Dallas' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Darcy' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Darina' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Darius' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Darwin' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Dexter' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Diva Dolores' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Dobby' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [],
};

export const wuerfE = {
  title: wurfETitel,
  subtitle: '1 Männchen & 4 Weibchen',
  fatherPicture: AuroraPicture,
  fatherName: benalexName,
  motherPicture: BarsaPicture,
  motherName: barsaName,
  kitten: [
    {
      picture: AuroraPicture,
      name: 'Elina' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Elis' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Elvis' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Estella' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Ester' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [],
};

export const wuerfF = {
  title: wurfFTitel,
  subtitle: '3 Männchen & 3 Weibchen',
  fatherPicture: AuroraPicture,
  fatherName: benalexName,
  motherPicture: BarsaPicture,
  motherName: auroraName,
  kitten: [
    /*
    Fabio
    Felina
    Finn
    Fiona
    Florentine
    Freddie
    */
    {
      picture: AuroraPicture,
      name: 'Fabio' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Felina' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Finn' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Fiona' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Florentine' + ofTheUnisphere,
      sex: 'weiblich',
      color: catsColor,
      text: 'aha',
    },
    {
      picture: AuroraPicture,
      name: 'Freddie' + ofTheUnisphere,
      sex: 'männlich',
      color: catsColor,
      text: 'aha',
    },
  ],
  pictures: [],
};
