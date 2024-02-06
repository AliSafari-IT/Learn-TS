import {City} from "../interfaces";

export const cities: City[] = [
    {
      name: 'Aalst',
      rowIndex: 47,
      columnIndex: 21,
      neighbors: [ 'Zottegem', 'Haaltert', 'Geraardsbergen' ]
    },
    {
      name: 'Haaltert',
      rowIndex: 52,
      columnIndex: 19,
      neighbors: [ 'Aalst', 'Geraardsbergen']
    },
    {
      name: 'Geraardsbergen',
      rowIndex: 56,
      columnIndex: 33,
      neighbors: [ 'Haaltert', 'Izegem' ]
    },
    {
      name: 'Lede',
      rowIndex: 89,
      columnIndex: 74,
      neighbors: [ 'Haaltert' ]
    },
    {
      name: 'Sint-Lievens-Houtem',
      rowIndex: 38,
      columnIndex: 58,
      neighbors: [ 'Haaltert' ]
    },
    {
      name: 'Wervik',
      rowIndex: 22,
      columnIndex: 57,
      neighbors: [ 'Aalst' ]
    },
    {
      name: 'Avelgem',
      rowIndex: 29,
      columnIndex: 80,
      neighbors: [ 'Sint-Lievens-Houtem' ]
    },
    {
      name: 'Waregem',
      rowIndex: 77,
      columnIndex: 54,
      neighbors: [ 'Lede', 'Sint-Lievens-Houtem' ]
    },
    {
      name: 'Izegem',
      rowIndex: 42,
      columnIndex: 1,
      neighbors: [ 'Geraardsbergen', 'Geraardsbergen' , 'Aalst' ]
    },
    {
      name: 'Poperinge',
      rowIndex: 71,
      columnIndex: 6,
      neighbors: [ 'Wervik', 'Sint-Lievens-Houtem' ]
    },
    {
      name: 'Dendermonde',
      rowIndex: 42,
      columnIndex: 56,
      neighbors: [ 'Haaltert', 'Lede', 'Wervik', 'Sint-Lievens-Houtem' ]
    },
    {
      name: 'Sint-Gillis-Waas',
      rowIndex: 65,
      columnIndex: 35,
      neighbors: [ 'Aalst', 'Tielrode' ]
    },
    {
      name: 'Stekene',
      rowIndex: 45,
      columnIndex: 48,
      neighbors: [ 'Geraardsbergen', 'Tielrode' ]
    },
    {
      name: 'Waasmunster',
      rowIndex: 27,
      columnIndex: 19,
      neighbors: [ 'Sint-Gillis-Waas', 'Stekene', 'Tielrode' ]
    },
    {
      name: 'Evergem',
      rowIndex: 75,
      columnIndex: 47,
      neighbors: [ 'Stekene', 'Haaltert' ]
    },
    {
      name: 'Eeklo',
      rowIndex: 89,
      columnIndex: 79,
      neighbors: [ 'Evergem' ]
    },
    {
      name: 'Assendelft',
      rowIndex: 95,
      columnIndex: 4,
      neighbors: [ 'Haaltert' ]
    },
    {
      name: 'Gent',
      rowIndex: 91,
      columnIndex: 9,
      neighbors: [ 'Dendermonde', 'Stekene' ]
    },
    {
      name: 'Sint-Kruis-Winkel',
      rowIndex: 43,
      columnIndex: 15,
      neighbors: [ 'Eeklo', 'Izegem', 'Evergem' ]
    },
    { name: 'Herentals', rowIndex: 10, columnIndex: 10, neighbors: [] },
    {
      name: 'Houthalen-Helchteren',
      rowIndex: 57,
      columnIndex: 93,
      neighbors: [ 'Dendermonde', 'Izegem' ]
    },
    {
      name: 'Hamont-Achel',
      rowIndex: 39,
      columnIndex: 7,
      neighbors: [ 'Sint-Kruis-Winkel', 'Geraardsbergen', 'Waasmunster' ]
    },
    {
      name: 'Turnhout',
      rowIndex: 53,
      columnIndex: 76,
      neighbors: [ 'Geraardsbergen' ]
    },
    {
      name: 'Mol',
      rowIndex: 26,
      columnIndex: 43,
      neighbors: [ 'Lede', 'Houthalen-Helchteren' ]
    },
    {
      name: 'Blankenberge',
      rowIndex: 70,
      columnIndex: 74,
      neighbors: [ 'Avelgem', 'Aalst', 'Waasmunster', 'Avelgem' ]
    },
    {
      name: 'Knokke-Heist',
      rowIndex: 37,
      columnIndex: 61,
      neighbors: [ 'Houthalen-Helchteren', 'Stekene' ]
    },
    {
      name: 'Oostende',
      rowIndex: 45,
      columnIndex: 3,
      neighbors: [ 'Sint-Kruis-Winkel', 'Lommel', 'Waasmunster' ]
    },
    {
      name: 'Torhout',
      rowIndex: 6,
      columnIndex: 76,
      neighbors: [ 'Sint-Lievens-Houtem', 'Waregem', 'Mol', 'Waasmunster' ]
    },
    {
      name: 'Middelkerke',
      rowIndex: 58,
      columnIndex: 68,
      neighbors: [ 'Houthalen-Helchteren', 'Evergem' ]
    },
    {
      name: 'Lint',
      rowIndex: 57,
      columnIndex: 37,
      neighbors: [ 'Gent', 'Lommel' ]
    },
    {
      name: 'Aarschot',
      rowIndex: 4,
      columnIndex: 20,
      neighbors: [ 'Tielrode', 'Middelkerke', 'Avelgem' ]
    },
    {
      name: 'Heist-op-den-Berg',
      rowIndex: 43,
      columnIndex: 88,
      neighbors: [ 'Middelkerke', 'Sint-Kruis-Winkel', 'Herentals' ]
    },
    {
      name: 'Lier',
      rowIndex: 35,
      columnIndex: 72,
      neighbors: [ 'Oostende', 'Eeklo', 'Avelgem', 'Stekene' ]
    },
    {
      name: 'Dilbeek',
      rowIndex: 9,
      columnIndex: 66,
      neighbors: [ 'Tielrode' ]
    },
    {
      name: 'Tielrode',
      rowIndex: 87,
      columnIndex: 89,
      neighbors: [ 'Mol', 'Middelkerke', 'Dilbeek' ]
    },
    {
      name: 'Belsele',
      rowIndex: 46,
      columnIndex: 50,
      neighbors: [ 'Blankenberge', 'Waregem', 'Lede', 'Poperinge' ]
    },
    {
      name: 'De Klinge',
      rowIndex: 70,
      columnIndex: 46,
      neighbors: [ 'Knokke-Heist' ]
    },
    {
      name: 'Zottegem',
      rowIndex: 6,
      columnIndex: 78,
      neighbors: [ 'Lint' ]
    },
    {
      name: 'Beringen',
      rowIndex: 38,
      columnIndex: 83,
      neighbors: [ 'Oostende' ]
    },
    {
      name: 'Lummen',
      rowIndex: 3,
      columnIndex: 62,
      neighbors: [ 'Lint', 'Poperinge' ]
    },
    {
      name: 'Maaseik',
      rowIndex: 75,
      columnIndex: 14,
      neighbors: [ 'Oostende', 'Lint' ]
    },
    {
      name: 'Lommel',
      rowIndex: 79,
      columnIndex: 3,
      neighbors: [ 'Assendelft', 'Sint-Gillis-Waas' ]
    },
    { name: 'Overpelt', rowIndex: 79, columnIndex: 59, neighbors: [] }
  ];

  