import {Store} from './store';

export const Mediaexpert: Store = {
  currency: 'PLN',
  labels: {

    inStock: {
	
      container: '.spark-button.add-button.add-to-cart',
      text: ['Do koszyka'],
    },
    maxPrice: {
      container: 'span.whole',
      euroFormat: true,
    },
	outOfStock: [
      {
        container: 'span.unavailable',
        text: ['niedostępny'],
      },

    ],
  },
  links: [
  {
        brand: 'pny',
        model: 'epic x',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-pny-geforce-rtx-3060ti-8gb-xlr8-gaming-revel-epic-x-lhr'
  },
    {
        brand: 'asus',
        model: 'dual',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-rtx-3060ti-dual-8gb-gddr6-256bit-3dp-2hdmi'
  },
     {
        brand: 'asus',
        model: 'dual mini',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-asus-dual-geforce-rtx-3060ti-mini-8gb-gddr6'
  },
  {
        brand: 'asus',
        model: 'dual mini oc',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-asus-dual-geforce-rtx-3060ti-mini-oc-edition-8gb-gddr6'
  },
       {
        brand: 'msi',
        model: 'ventus 2x oc',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-msi-geforce-rtx-3060-ti-ventus-2x-8gb-ocv1-lhr'
  },
         {
        brand: 'msi',
        model: 'ventus 2x',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-msi-geforce-rtx-3060-ti-ventus-2x-oc-8gb-gddr6'
  },
           {
        brand: 'msi',
        model: 'gaming x trio',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-msi-geforce-rtx-3060-ti-gaming-x-trio-8gb-gddr6'
  },
           {
        brand: 'gigabyte',
        model: 'gaming pro',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-gigabyte-geforce-rtx-3060-ti-gaming-oc-pro-8gb-gddr6'
  },
             {
        brand: 'palit',
        model: 'gaming pro',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-palit-geforce-rtx-3060ti-gamingpro-8gb-gddr6'
  },
             {
        brand: 'msi',
        model: 'ventus 2x',
        series: '3060ti',
        url:'https://www.mediaexpert.pl/komputery-i-tablety/podzespoly-komputerowe/karty-graficzne/karta-graficzna-geforce-rtx-3060-ti-ventus-2x-ocv1-8gb-gddr6x-256bit-3dp-hdmi'
  }
 

  ],
  name: 'mediaexpert',
};
