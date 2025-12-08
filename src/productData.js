import bu1 from './assets/icons/born/howtouse1.png'
import bu2 from './assets/icons/born/howtouse2.webp'
import bu3 from './assets/icons/born/howtouse3.webp'
import bu4 from './assets/icons/born/howtouse4.webp'
import bp1 from './assets/icons/born/p1.png'
import bp2 from './assets/icons/born/p2.png'
import bp3 from './assets/icons/born/p3.png'
import bp4 from './assets/icons/born/p4.png'

import hu1 from './assets/icons/he/step 1.png'
import hu2 from './assets/icons/he/STEP2.png'
import hu3 from './assets/icons/he/Step 3.png'
import hu4 from './assets/icons/he/Step 4.png'
import hp1 from './assets/icons/he/p1.png'
import hp2 from './assets/icons/he/p2.png'
import hp3 from './assets/icons/he/p3.png'
import hp4 from './assets/icons/he/p4.png'

import shu1 from './assets/icons/she/step 1.png'
import shu2 from './assets/icons/she/STEP2.png'
import shu3 from './assets/icons/she/step 3.png'
import shu4 from './assets/icons/she/STEP 4.png'
import shp1 from './assets/icons/she/p1.png'
import shp2 from './assets/icons/she/p2.png'
import shp3 from './assets/icons/she/p3.png'
import shp4 from './assets/icons/she/p4.png'

import gu1 from './assets/icons/granny/step1.png'
import gu2 from './assets/icons/granny/step 2.png'
import gu3 from './assets/icons/granny/step 3.png'
import gu4 from './assets/icons/granny/step 4.png'
import gp1 from './assets/icons/granny/p1.png'
import gp2 from './assets/icons/granny/p2.png'
import gp3 from './assets/icons/granny/p3.png'
import gp4 from './assets/icons/granny/p4.png'

import Born from './assets/images/product-desc2.png'
import He from './assets/images/carousel3.png'
import She from './assets/images/carousel2.png'
import Adult from './assets/images/slider1.png'

export const productData = {

    "born-care": {
    name: "Born Care",
    accent:{
        primary: "#5D90B9",
        secondray: "#CBD8E5",
    },
    images: Born,
    use: [
        {
            img: bu1,
            step:"Step 1",
            title: "Cleanse with Care",
            desc: "Use warm water and a soft cloth to freshen up your baby’s bottom"
          },
          {
            img:bu2,
            step:"Step 2",
            title: "Mist the Love",
            desc: "Spray a light mist of Mirakle Pre diaper oil"
          },
          {
            img: bu3,
            step:"Step 3",
            title: "Diaper Up with Confidence",
            desc: "Slip on the diaper knowing there’s a nourishing shield working underneath"
          },
          {
            img:bu4,
            step:"Step 4",
            title: "Repeat with Every Change",
            desc: "Spray before every change to keep rashes away and smiles intact!"
          }
    ],
    perks: [ bp1, bp2, bp3, bp4 ]

  },

 "he-care": {
    name: "He Care",
    accent:{
         primary: "#5E819D",
        secondray: "#CBD8E5",
    },
    images: He,
    use: [
        {
            img: hu1,
            step:"Step 1",
            title: "Cleanse Thoroughly",
            desc: "Gently clean and dry the area before applying the oil for better absorption"
          },
          {
            img: hu2,
            step:"Step 2",
            title: "Apply the Oil",
            desc: "Massage a few drops of oil into the skin, focusing on friction-prone areas"
          },
          {
            img: hu3,
            step:"Step 3",
            title: "Let the Oil Absorb",
            desc: "Allow the oil to absorb for a few seconds before dressing or diapering"
          },
          {
            img: hu4,
            step:"Step 4",
            title: "Use Regularly",
            desc: "Apply daily, once in the morning and once before bed, or before diaper changes"
          }
    ],
    perks: [ hp1, hp2, hp3, hp4 ]
  },

  "she-care": {
    name: "She Care",
    accent:{
        primary: "#DA7995",
        secondray: "#FAECF0",
    },
    images: She,
    use: [
        {
            img: shu1,
            step:"Step 1",
            title: "Cleanse Thoroughly",
            desc: "Gently clean and dry the area before applying the oil for better absorption"
          },
          {
            img: shu2,
            step:"Step 2",
            title: "Apply the Oil",
            desc: "Massage a few drops of oil into the skin, focusing on friction-prone areas"
          },
          {
            img: shu3,
            step:"Step 3",
            title: "Let the Oil Absorb",
            desc: "Allow the oil to absorb for a few seconds before dressing or diapering"
          },
          {
            img: shu4,
            step:"Step 4",
            title: "Use Regularly",
            desc: "Apply daily, once in the morning and once before bed, or before diaper changes"
          }
    ],
    perks: [ shp1, shp2, shp3, shp4 ]
  },

  "granny-care": {
    name: "Granny Care",
    accent:{
        primary: "#7C654A",
        secondray: "#F5EEE5",
    },
    images: Adult,
    use: [
        {
            img: gu1,
            step:"Step 1",
            title: "Cleanse Thoroughly",
            desc: "Gently clean and dry the area before applying the oil for better absorption"
          },
          {
            img: gu2,
            step:"Step 2",
            title: "Apply the Oil",
            desc: "Massage a few drops of oil into the skin, focusing on friction-prone areas"
          },
          {
            img: gu3,
            step:"Step 3",
            title: "Let the Oil Absorb",
            desc: "Allow the oil to absorb for a few seconds before dressing or diapering"
          },
          {
            img: gu4,
            step:"Step 4",
            title: "Use Regularly",
            desc: "Apply daily, once in the morning and once before bed, or before diaper changes"
          }
    ],
    perks: [ gp1, gp2, gp3, gp4 ]
  }

}