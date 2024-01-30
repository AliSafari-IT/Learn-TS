import City from "./City";

export const journeyPlan1: City[] = [
    {
      name: 'Aalst',
      rowIndex: 47,
      columnIndex: 21,
      neighbors: ['Zottegem', 'Haaltert', 'Geraardsbergen']
    },
    {
      name: 'Haaltert',
      rowIndex: 52,
      columnIndex: 19,
      neighbors: ['Aalst', 'Geraardsbergen']
    },
    {
      name: 'Geraardsbergen',
      rowIndex: 56,
      columnIndex: 33,
      neighbors: ['Haaltert', 'Izegem']
    },
    {
      name: 'Lede',
      rowIndex: 89,
      columnIndex: 74,
      neighbors: ['Haaltert']
    },
    {
      name: 'Sint-Lievens-Houtem',
      rowIndex: 38,
      columnIndex: 58,
      neighbors: ['Haaltert']
    }
  ];
  