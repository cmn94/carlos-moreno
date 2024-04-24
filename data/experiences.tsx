import { StaticImageData } from 'next/image';

import geogramaLogo from '@/assets/img/geograma-logo.webp';
import vodafoneLogo from '@/assets/img/vodafone-logo.webp';
import guadaltechLogo from '@/assets/img/guadaltech-logo.webp';

interface IExperience {
  title: string;
  institution: string;
  initialDate: Date;
  finalDate?: Date;
  image: StaticImageData;
  description: string;
  mainItems: string[];
  secondaryItems?: string[];
}

export const experiences: IExperience[] = [
  {
    title: 'Frontend developer (React Native)',
    institution: 'Vodafone',
    initialDate: new Date(2024, 3, 1),
    image: vodafoneLogo,
    description: "Development of Vodafone's mobile apps",
    mainItems: [
      "Development of features for Vodafone's mobile app for companies (Mi Vodafone Business) using React Native.",
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'Vodafone',
    initialDate: new Date(2022, 7, 1),
    finalDate: new Date(2024, 3, 1),
    image: vodafoneLogo,
    description: "Maintenance and development of features for Vodafone's website, using Angular 15+ and React.js as main technologies",
    mainItems: [
      "Maintain and develop features for Vodafone's website,using Angular 15+ and TypeScript as main technologies",
      'Manage big sets of customers and products data using Redux (NgRx)',
      'Intensive use of Promises, Observables and RxJs to create reactive asynchronous architectures',
      'Optimize analytics delivery architecture using Custom Directives, RxJS, and NgRX',
      'Implement Angular good practices as: lazy loading, OnPush change detection, View Manipulation, etc. to make an application that handles big amounts of data properly',
    ],
    secondaryItems: [
      "Develop React componentes for specific pages like Vodafone's rate configurator",
      'Conduct Angular workshops for colleagues (f.ex. about Virtual DOM manipulation)',
      "Maintain and develop Vodafone's Configurator website using Stencil.js (until 10/2023, when it became legacy)",
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'Geograma',
    initialDate: new Date(2022, 0, 1),
    finalDate: new Date(2022, 6, 1),
    image: geogramaLogo,
    description: 'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework',
    mainItems: [
      'Main frontend developer of the Álava (province of Spain) public map visualizer (Angular).',
      'Develop the frontend side of GIS (Geographic Information Systems), mainly using Angular framework.',
      'Use OpenLayers to transform Geographic Information into maps.',
    ],
  },
  {
    title: 'Frontend developer (Angular)',
    institution: 'GuadalTech',
    initialDate: new Date(2021, 9, 1),
    finalDate: new Date(2022, 1, 1),
    image: guadaltechLogo,
    description: 'Develop features for cross-platform applications using Ionic and Angular',
    mainItems: [
      'Develop features for cross-platform applications using Ionic and Angular',
    ],
  },
];
