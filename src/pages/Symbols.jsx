import { useState } from 'react';
import SymbolCard from "../components/SymbolCard";
import Arcane_Symbol_1 from '../assets/images/symbol/Arcane_Symbol_1.png';
import Arcane_Symbol_2 from '../assets/images/symbol/Arcane_Symbol_2.png';
import Arcane_Symbol_3 from '../assets/images/symbol/Arcane_Symbol_3.png';
import Arcane_Symbol_4 from '../assets/images/symbol/Arcane_Symbol_4.png';
import Arcane_Symbol_5 from '../assets/images/symbol/Arcane_Symbol_5.png';
import Arcane_Symbol_6 from '../assets/images/symbol/Arcane_Symbol_6.png';
import Authentic_Symbol_1 from '../assets/images/symbol/Authentic_Symbol_1.png';
import Authentic_Symbol_2 from '../assets/images/symbol/Authentic_Symbol_2.png';
import Authentic_Symbol_3 from '../assets/images/symbol/Authentic_Symbol_3.png';
import Authentic_Symbol_4 from '../assets/images/symbol/Authentic_Symbol_4.png';
import Authentic_Symbol_5 from '../assets/images/symbol/Authentic_Symbol_5.png';
import Authentic_Symbol_6 from '../assets/images/symbol/Authentic_Symbol_6.png';
import Authentic_Symbol_7 from '../assets/images/symbol/Authentic_Symbol_7.png';
import Arcane_Symbol_Select_Coupon from '../assets/images/symbol/Arcane_Symbol_Select_Coupon.png';
import Authentic_Symbol_Select_Coupon from '../assets/images/symbol/Authentic_Symbol_Select_Coupon.png';

const arcaneSymbols = {
  vanishingJourney: {
    name: '消失的旅途',
    icon: Arcane_Symbol_1,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
  chewChewIsland: {
    name: '啾啾艾爾蘭',
    icon: Arcane_Symbol_2,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
  lacheln: {
    name: '拉契爾恩',
    icon: Arcane_Symbol_3,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
  arcana: {
    name: '阿爾卡娜',
    icon: Arcane_Symbol_4,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
  moras: {
    name: '魔菈斯',
    icon: Arcane_Symbol_5,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
  esfera: {
    name: '艾斯佩拉',
    icon: Arcane_Symbol_6,
    data: [
      { level: '1 > 2', upgradeCost: 970000, totalCost: 970000, upgradeCount: 12, totalCount: 12 },
      { level: '2 > 3', upgradeCost: 1230000, totalCost: 2200000, upgradeCount: 15, totalCount: 27 },
      { level: '3 > 4', upgradeCost: 1660000, totalCost: 3860000, upgradeCount: 20, totalCount: 47 },
      { level: '4 > 5', upgradeCost: 2260000, totalCost: 6120000, upgradeCount: 27, totalCount: 74 },
      { level: '5 > 6', upgradeCost: 3060000, totalCost: 9180000, upgradeCount: 36, totalCount: 110 },
      { level: '6 > 7', upgradeCost: 4040000, totalCost: 13220000, upgradeCount: 47, totalCount: 157 },
      { level: '7 > 8', upgradeCost: 5220000, totalCost: 18440000, upgradeCount: 60, totalCount: 217 },
      { level: '8 > 9', upgradeCost: 6600000, totalCost: 25040000, upgradeCount: 75, totalCount: 292 },
      { level: '9 > 10', upgradeCost: 8180000, totalCost: 33220000, upgradeCount: 92, totalCount: 384 },
      { level: '10 > 11', upgradeCost: 9990000, totalCost: 43210000, upgradeCount: 111, totalCount: 495 },
      { level: '11 > 12', upgradeCost: 12010000, totalCost: 55220000, upgradeCount: 132, totalCount: 627 },
      { level: '12 > 13', upgradeCost: 14260000, totalCost: 69480000, upgradeCount: 155, totalCount: 782 },
      { level: '13 > 14', upgradeCost: 16740000, totalCost: 86220000, upgradeCount: 180, totalCount: 962 },
      { level: '14 > 15', upgradeCost: 19450000, totalCost: 105670000, upgradeCount: 207, totalCount: 1169 },
      { level: '15 > 16', upgradeCost: 22420000, totalCost: 128090000, upgradeCount: 236, totalCount: 1405 },
      { level: '16 > 17', upgradeCost: 25630000, totalCost: 153720000, upgradeCount: 267, totalCount: 1672 },
      { level: '17 > 18', upgradeCost: 29100000, totalCost: 182820000, upgradeCount: 300, totalCount: 1972 },
      { level: '18 > 19', upgradeCost: 32830000, totalCost: 215650000, upgradeCount: 335, totalCount: 2307 },
      { level: '19 > 20', upgradeCost: 36820000, totalCost: 252470000, upgradeCount: 372, totalCount: 2679 },
    ]
  },
};

const authenticSymbols = {
  cernium: {
    name: '賽爾尼溫',
    icon: Authentic_Symbol_1,
    data: [
      { level: '1 > 2', upgradeCost: 36500000, totalCost: 36500000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 91200000, totalCost: 127700000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 160700000, totalCost: 288400000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 241900000, totalCost: 530300000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 331500000, totalCost: 861800000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 426200000, totalCost: 1288000000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 522900000, totalCost: 1810900000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 618200000, totalCost: 2429100000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 709000000, totalCost: 3138100000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 792000000, totalCost: 3930100000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  hotelArcus: {
    name: '飯店阿爾克斯',
    icon: Authentic_Symbol_2,
    data: [
      { level: '1 > 2', upgradeCost: 41700000, totalCost: 41700000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 104800000, totalCost: 146500000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 186100000, totalCost: 332600000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 282200000, totalCost: 614800000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 390000000, totalCost: 1004800000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 506100000, totalCost: 1510900000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 627400000, totalCost: 2138300000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 750700000, totalCost: 2889000000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 872600000, totalCost: 3761600000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 990000000, totalCost: 4751600000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  odium: {
    name: '奧迪溫',
    icon: Authentic_Symbol_3,
    data: [
      { level: '1 > 2', upgradeCost: 46900000, totalCost: 46900000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 118500000, totalCost: 165400000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 211500000, totalCost: 376900000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 322500000, totalCost: 699400000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 448500000, totalCost: 1147900000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 586000000, totalCost: 1733900000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 732000000, totalCost: 2465900000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 883200000, totalCost: 3349100000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 1036200000, totalCost: 4385300000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 1188000000, totalCost: 5573300000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  shangriLa: {
    name: '桃源境',
    icon: Authentic_Symbol_4,
    data: [
      { level: '1 > 2', upgradeCost: 52200000, totalCost: 52200000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 132200000, totalCost: 184400000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 236800000, totalCost: 421200000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 362800000, totalCost: 784000000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 507000000, totalCost: 1291000000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 666000000, totalCost: 1957000000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 836600000, totalCost: 2793600000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 1015600000, totalCost: 3809200000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 1199800000, totalCost: 5009000000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 1386000000, totalCost: 6395000000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  arteria: {
    name: '阿爾特利亞',
    icon: Authentic_Symbol_5,
    data: [
      { level: '1 > 2', upgradeCost: 57400000, totalCost: 57400000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 145900000, totalCost: 203300000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 262200000, totalCost: 465500000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 403200000, totalCost: 868700000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 565500000, totalCost: 1434200000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 745900000, totalCost: 2180100000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 941200000, totalCost: 3121300000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 1148100000, totalCost: 4269400000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 1363500000, totalCost: 5632900000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 1584000000, totalCost: 7216900000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  carcion: {
    name: '卡爾西溫',
    icon: Authentic_Symbol_6,
    data: [
      { level: '1 > 2', upgradeCost: 62600000, totalCost: 62600000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 159600000, totalCost: 222200000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 287600000, totalCost: 509800000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 443500000, totalCost: 953300000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 624000000, totalCost: 1577300000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 825800000, totalCost: 2403100000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 1045800000, totalCost: 3448900000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 1280600000, totalCost: 4729500000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 1527100000, totalCost: 6256600000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 1782000000, totalCost: 8038600000, upgradeCount: 1100, totalCount: 4565 }
    ]
  },
  tallahart: {
    name: '塔拉哈特',
    icon: Authentic_Symbol_7,
    data: [
      { level: '1 > 2', upgradeCost: 113600000, totalCost: 113600000, upgradeCount: 29, totalCount: 29 },
      { level: '2 > 3', upgradeCost: 293300000, totalCost: 406900000, upgradeCount: 76, totalCount: 105 },
      { level: '3 > 4', upgradeCost: 535800000, totalCost: 942700000, upgradeCount: 141, totalCount: 246 },
      { level: '4 > 5', upgradeCost: 837700000, totalCost: 1780400000, upgradeCount: 224, totalCount: 470 },
      { level: '5 > 6', upgradeCost: 1196000000, totalCost: 2976400000, upgradeCount: 325, totalCount: 795 },
      { level: '6 > 7', upgradeCost: 1607200000, totalCost: 4583600000, upgradeCount: 444, totalCount: 1239 },
      { level: '7 > 8', upgradeCost: 2068300000, totalCost: 6651900000, upgradeCount: 581, totalCount: 1820 },
      { level: '8 > 9', upgradeCost: 2576000000, totalCost: 9227900000, upgradeCount: 736, totalCount: 2556 },
      { level: '9 > 10', upgradeCost: 3126900000, totalCost: 12354800000, upgradeCount: 909, totalCount: 3465 },
      { level: '10 > 11', upgradeCost: 3718000000, totalCost: 16072800000, upgradeCount: 1100, totalCount: 4565 }
    ]
  }
};

export default function Symbols() {
  const [activeTab, setActiveTab] = useState('arcane');

  const formatNumber = (num) => {
    return num.toLocaleString('zh-TW');
  };

  return (
    <div className="container">
      {/* 標題 */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="page-title my-3 text-center">符文系統</h1>
        </div>
      </div>

      {/* 標籤切換 */}
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <div
              className="card border-0 shadow-sm mb-4"
              style={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            >
              <div className="card-body p-2">
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn px-4 py-2 fw-medium`}
                    onClick={() => setActiveTab('arcane')}
                    style={{
                      borderRadius: '6px',
                      backgroundColor: activeTab === 'arcane' ? '#2c3e50' : 'transparent',
                      color: activeTab === 'arcane' ? '#ffffff' : '#64748b',
                      border: 'none'
                    }}
                  >
                    秘法符文
                  </button>
                  <button
                    type="button"
                    className={`btn px-4 py-2 fw-medium`}
                    onClick={() => setActiveTab('authentic')}
                    style={{
                      borderRadius: '6px',
                      backgroundColor: activeTab === 'authentic' ? '#2c3e50' : 'transparent',
                      color: activeTab === 'authentic' ? '#ffffff' : '#64748b',
                      border: 'none'
                    }}
                  >
                    真實符文
                  </button>
                  <button
                    type="button"
                    className={`btn px-4 py-2 fw-medium`}
                    onClick={() => setActiveTab('count')}
                    style={{
                      borderRadius: '6px',
                      backgroundColor: activeTab === 'count' ? '#2c3e50' : 'transparent',
                      color: activeTab === 'count' ? '#ffffff' : '#64748b',
                      border: 'none'
                    }}
                  >
                    升級數量
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 卡片 */}
      <div className="tab-content">
        {activeTab === 'arcane' && (
          <div className="tab-pane fade show active">
            <div className="row">
              {Object.entries(arcaneSymbols).map(([key, symbol]) => (
                <div className="col-lg-4 mb-4" key={key}>
                  <SymbolCard title={symbol.name} icon={symbol.icon} data={symbol.data} viewMode="cost" formatNumber={formatNumber} />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'authentic' && (
          <div className="tab-pane fade show active">
            <div className="row">
              {Object.entries(authenticSymbols).map(([key, symbol]) => (
                <div className="col-lg-4 mb-4" key={key}>
                  <SymbolCard title={symbol.name} icon={symbol.icon} data={symbol.data} viewMode="cost" formatNumber={formatNumber} />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'count' && (
          <div className="tab-pane fade show active">
            <div className="row justify-content-center">
              <div className="col-lg-6 mb-4">
                <SymbolCard
                  title="秘法符文"
                  icon={Arcane_Symbol_Select_Coupon}
                  data={arcaneSymbols.vanishingJourney.data}
                  viewMode="count"
                  formatNumber={formatNumber}
                />
              </div>
              <div className="col-lg-6 mb-4">
                <SymbolCard
                  title="真實符文"
                  icon={Authentic_Symbol_Select_Coupon}
                  data={authenticSymbols.cernium.data}
                  viewMode="count"
                  formatNumber={formatNumber}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}