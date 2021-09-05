import "./home.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart,
  Area } from 'recharts';

export default function Home() {

  const data = [
    {
      "Year": "2001-02",
      "Food Grains (Cereals) - Rice": 93340,
      "Food Grains (Cereals) - Jowar": 7557,
      "Food Grains (Cereals) - Bajra": 8284,
      "Food Grains (Cereals) - Maize": 13160,
      "Food Grains (Cereals) - Ragi": 2375,
      "Food Grains (Cereals) - Small Millets": 577,
      "Food Grains (Cereals) - Wheat": 72766,
      "Food Grains (Cereals) - Barley": 1425,
      "Food Grains (Cereals) - Total": 199483,
      "Food Grains (Pulses) - Gram": 5473,
      "Food Grains (Pulses) - Tur": 2260,
      "Food Grains (Pulses) - Other Pulses": 5635,
      "Food Grains (Pulses) - Total": 13368,
      "Food Grains - Total": 212851,
      "Oilseeds - Ground-nuts": 7028,
      "Oilseeds - Sesamum": 698,
      "Oilseeds - Rapeseed and Mustard": 5083,
      "Oilseeds - Linseed": 209,
      "Oilseeds - Castor seed": 653,
      "Total Nine Oilseeds": 20662,
      "Cotton": 9997,
      "Jute": 10584,
      "Mesta": 1094,
      "Tea (Million kgs)": 854,
      "Coffee": 301,
      "Natural Rubber": 631,
      "Banana": 13160,
      "Sugarcane": 297208,
      "Tobacco": 546,
      "Potatoes": 23924,
      "Black Pepper": 62,
      "Chillies": 1069,
      "Ginger": 322,
      "Coconut": 12963,
      "Turmeric": 563
    },
    {
      "Year": "2002-03",
      "Food Grains (Cereals) - Rice": 71820,
      "Food Grains (Cereals) - Jowar": 7012,
      "Food Grains (Cereals) - Bajra": 4719,
      "Food Grains (Cereals) - Maize": 11152,
      "Food Grains (Cereals) - Ragi": 1316,
      "Food Grains (Cereals) - Small Millets": 459,
      "Food Grains (Cereals) - Wheat": 65761,
      "Food Grains (Cereals) - Barley": 1407,
      "Food Grains (Cereals) - Total": 163646,
      "Food Grains (Pulses) - Gram": 4237,
      "Food Grains (Pulses) - Tur": 2186,
      "Food Grains (Pulses) - Other Pulses": 4702,
      "Food Grains (Pulses) - Total": 11125,
      "Food Grains - Total": 174771,
      "Oilseeds - Ground-nuts": 4121,
      "Oilseeds - Sesamum": 441,
      "Oilseeds - Rapeseed and Mustard": 3880,
      "Oilseeds - Linseed": 177,
      "Oilseeds - Castor seed": 428,
      "Total Nine Oilseeds": 14838,
      "Cotton": 8624,
      "Jute": 10274,
      "Mesta": 1002,
      "Tea (Million kgs)": 846,
      "Coffee": 275,
      "Natural Rubber": 649,
      "Banana": 11975,
      "Sugarcane": 287383,
      "Tobacco": 500,
      "Potatoes": 23269,
      "Black Pepper": 72,
      "Chillies": 895,
      "Ginger": 280,
      "Coconut": 12535,
      "Turmeric": 522
    },
    {
      "Year": "2003-04",
      "Food Grains (Cereals) - Rice": 88526,
      "Food Grains (Cereals) - Jowar": 6681,
      "Food Grains (Cereals) - Bajra": 12109,
      "Food Grains (Cereals) - Maize": 14984,
      "Food Grains (Cereals) - Ragi": 1966,
      "Food Grains (Cereals) - Small Millets": 564,
      "Food Grains (Cereals) - Wheat": 72156,
      "Food Grains (Cereals) - Barley": 1298,
      "Food Grains (Cereals) - Total": 198284,
      "Food Grains (Pulses) - Gram": 5718,
      "Food Grains (Pulses) - Tur": 2356,
      "Food Grains (Pulses) - Other Pulses": 6831,
      "Food Grains (Pulses) - Total": 14905,
      "Food Grains - Total": 213189,
      "Oilseeds - Ground-nuts": 8127,
      "Oilseeds - Sesamum": 782,
      "Oilseeds - Rapeseed and Mustard": 6291,
      "Oilseeds - Linseed": 197,
      "Oilseeds - Castor seed": 797,
      "Total Nine Oilseeds": 25186,
      "Cotton": 13729,
      "Jute": 10252,
      "Mesta": 921,
      "Tea (Million kgs)": 879,
      "Coffee": 271,
      "Natural Rubber": 712,
      "Banana": 11388,
      "Sugarcane": 233862,
      "Tobacco": 550,
      "Potatoes": 23060,
      "Black Pepper": 73,
      "Chillies": 1236,
      "Ginger": 302,
      "Coconut": 12178,
      "Turmeric": 565
    },
    {
      "Year": "2004-05",
      "Food Grains (Cereals) - Rice": 83132,
      "Food Grains (Cereals) - Jowar": 7244,
      "Food Grains (Cereals) - Bajra": 7931,
      "Food Grains (Cereals) - Maize": 14172,
      "Food Grains (Cereals) - Ragi": 2432,
      "Food Grains (Cereals) - Small Millets": 478,
      "Food Grains (Cereals) - Wheat": 68637,
      "Food Grains (Cereals) - Barley": 1207,
      "Food Grains (Cereals) - Total": 185233,
      "Food Grains (Pulses) - Gram": 5469,
      "Food Grains (Pulses) - Tur": 2347,
      "Food Grains (Pulses) - Other Pulses": 5314,
      "Food Grains (Pulses) - Total": 13130,
      "Food Grains - Total": 198363,
      "Oilseeds - Ground-nuts": 6774,
      "Oilseeds - Sesamum": 674,
      "Oilseeds - Rapeseed and Mustard": 7593,
      "Oilseeds - Linseed": 170,
      "Oilseeds - Castor seed": 793,
      "Total Nine Oilseeds": 24354,
      "Cotton": 16429,
      "Jute": 9399,
      "Mesta": 873,
      "Tea (Million kgs)": 907,
      "Coffee": 276,
      "Natural Rubber": 750,
      "Banana": 11710,
      "Sugarcane": 237088,
      "Tobacco": 549,
      "Potatoes": 23631,
      "Black Pepper": 73,
      "Chillies": 1186,
      "Ginger": 359,
      "Coconut": 12833,
      "Turmeric": 718
    },
    {
      "Year": "2005-06",
      "Food Grains (Cereals) - Rice": 91793,
      "Food Grains (Cereals) - Jowar": 7630,
      "Food Grains (Cereals) - Bajra": 7684,
      "Food Grains (Cereals) - Maize": 14710,
      "Food Grains (Cereals) - Ragi": 2354,
      "Food Grains (Cereals) - Small Millets": 472,
      "Food Grains (Cereals) - Wheat": 69355,
      "Food Grains (Cereals) - Barley": 1221,
      "Food Grains (Cereals) - Total": 195217,
      "Food Grains (Pulses) - Gram": 5600,
      "Food Grains (Pulses) - Tur": 2738,
      "Food Grains (Pulses) - Other Pulses": 5046,
      "Food Grains (Pulses) - Total": 13384,
      "Food Grains - Total": 208602,
      "Oilseeds - Ground-nuts": 7993,
      "Oilseeds - Sesamum": 641,
      "Oilseeds - Rapeseed and Mustard": 8131,
      "Oilseeds - Linseed": 173,
      "Oilseeds - Castor seed": 991,
      "Total Nine Oilseeds": 27978,
      "Cotton": 18499,
      "Jute": 9970,
      "Mesta": 870,
      "Tea (Million kgs)": 949,
      "Coffee": 274,
      "Natural Rubber": 803,
      "Banana": 12105,
      "Sugarcane": 281172,
      "Tobacco": 552,
      "Potatoes": 23905,
      "Black Pepper": 93,
      "Chillies": 1015,
      "Ginger": 391,
      "Coconut": 14811,
      "Turmeric": 852
    },
    {
      "Year": "2006-07",
      "Food Grains (Cereals) - Rice": 93355,
      "Food Grains (Cereals) - Jowar": 7151,
      "Food Grains (Cereals) - Bajra": 8424,
      "Food Grains (Cereals) - Maize": 15097,
      "Food Grains (Cereals) - Ragi": 1444,
      "Food Grains (Cereals) - Small Millets": 480,
      "Food Grains (Cereals) - Wheat": 75807,
      "Food Grains (Cereals) - Barley": 1328,
      "Food Grains (Cereals) - Total": 203085,
      "Food Grains (Pulses) - Gram": 6334,
      "Food Grains (Pulses) - Tur": 2314,
      "Food Grains (Pulses) - Other Pulses": 5550,
      "Food Grains (Pulses) - Total": 14198,
      "Food Grains - Total": 217282,
      "Oilseeds - Ground-nuts": 4864,
      "Oilseeds - Sesamum": 618,
      "Oilseeds - Rapeseed and Mustard": 7438,
      "Oilseeds - Linseed": 168,
      "Oilseeds - Castor seed": 762,
      "Total Nine Oilseeds": 24289,
      "Cotton": 22632,
      "Jute": 10317,
      "Mesta": 956,
      "Tea (Million kgs)": 973,
      "Coffee": 288,
      "Natural Rubber": 853,
      "Banana": 16609,
      "Sugarcane": 355520,
      "Tobacco": 469,
      "Potatoes": 22181,
      "Black Pepper": 69,
      "Chillies": 1242,
      "Ginger": 393,
      "Coconut": 15840,
      "Turmeric": 787
    },
    {
      "Year": "2007-08",
      "Food Grains (Cereals) - Rice": 96693,
      "Food Grains (Cereals) - Jowar": 7926,
      "Food Grains (Cereals) - Bajra": 9970,
      "Food Grains (Cereals) - Maize": 18955,
      "Food Grains (Cereals) - Ragi": 2152,
      "Food Grains (Cereals) - Small Millets": 551,
      "Food Grains (Cereals) - Wheat": 78570,
      "Food Grains (Cereals) - Barley": 1196,
      "Food Grains (Cereals) - Total": 216014,
      "Food Grains (Pulses) - Gram": 5749,
      "Food Grains (Pulses) - Tur": 3076,
      "Food Grains (Pulses) - Other Pulses": 5937,
      "Food Grains (Pulses) - Total": 14762,
      "Food Grains - Total": 230775,
      "Oilseeds - Ground-nuts": 9183,
      "Oilseeds - Sesamum": 757,
      "Oilseeds - Rapeseed and Mustard": 5834,
      "Oilseeds - Linseed": 163,
      "Oilseeds - Castor seed": 1054,
      "Total Nine Oilseeds": 29755,
      "Cotton": 25884,
      "Jute": 10220,
      "Mesta": 990,
      "Tea (Million kgs)": 987,
      "Coffee": 262,
      "Natural Rubber": 825,
      "Banana": 23823,
      "Sugarcane": 348188,
      "Tobacco": 437,
      "Potatoes": 34658,
      "Black Pepper": 50,
      "Chillies": 1371,
      "Ginger": 775,
      "Coconut": 10148,
      "Turmeric": 884
    },
    {
      "Year": "2008-09",
      "Food Grains (Cereals) - Rice": 99172,
      "Food Grains (Cereals) - Jowar": 7246,
      "Food Grains (Cereals) - Bajra": 8887,
      "Food Grains (Cereals) - Maize": 19731,
      "Food Grains (Cereals) - Ragi": 2040,
      "Food Grains (Cereals) - Small Millets": 445,
      "Food Grains (Cereals) - Wheat": 80679,
      "Food Grains (Cereals) - Barley": 1689,
      "Food Grains (Cereals) - Total": 219889,
      "Food Grains (Pulses) - Gram": 7060,
      "Food Grains (Pulses) - Tur": 2266,
      "Food Grains (Pulses) - Other Pulses": 5240,
      "Food Grains (Pulses) - Total": 14566,
      "Food Grains - Total": 234456,
      "Oilseeds - Ground-nuts": 7168,
      "Oilseeds - Sesamum": 640,
      "Oilseeds - Rapeseed and Mustard": 7201,
      "Oilseeds - Linseed": 169,
      "Oilseeds - Castor seed": 1171,
      "Total Nine Oilseeds": 27719,
      "Cotton": 22276,
      "Jute": 9634,
      "Mesta": 731,
      "Tea (Million kgs)": 973,
      "Coffee": 262,
      "Natural Rubber": 865,
      "Banana": 26217,
      "Sugarcane": 285029,
      "Tobacco": 569,
      "Potatoes": 34391,
      "Black Pepper": 50,
      "Chillies": 1382,
      "Ginger": 832,
      "Coconut": 10148,
      "Turmeric": 895
    },
    {
      "Year": "2009-10",
      "Food Grains (Cereals) - Rice": 89083,
      "Food Grains (Cereals) - Jowar": 6698,
      "Food Grains (Cereals) - Bajra": 6506,
      "Food Grains (Cereals) - Maize": 16720,
      "Food Grains (Cereals) - Ragi": 1889,
      "Food Grains (Cereals) - Small Millets": 382,
      "Food Grains (Cereals) - Wheat": 80804,
      "Food Grains (Cereals) - Barley": 1355,
      "Food Grains (Cereals) - Total": 203435,
      "Food Grains (Pulses) - Gram": 7476,
      "Food Grains (Pulses) - Tur": 2465,
      "Food Grains (Pulses) - Other Pulses": 4720,
      "Food Grains (Pulses) - Total": 14662,
      "Food Grains - Total": 218098,
      "Oilseeds - Ground-nuts": 5428,
      "Oilseeds - Sesamum": 588,
      "Oilseeds - Rapeseed and Mustard": 6608,
      "Oilseeds - Linseed": 154,
      "Oilseeds - Castor seed": 1009,
      "Total Nine Oilseeds": 24882,
      "Cotton": 24022,
      "Jute": 11230,
      "Mesta": 587,
      "Tea (Million kgs)": 991,
      "Coffee": 290,
      "Natural Rubber": 831,
      "Banana": 26470,
      "Sugarcane": 292302,
      "Tobacco": 665,
      "Potatoes": 36577,
      "Black Pepper": 50,
      "Chillies": 1470,
      "Ginger": 708,
      "Coconut": 10824,
      "Turmeric": 928
    },
    {
      "Year": "2010-11",
      "Food Grains (Cereals) - Rice": 95970,
      "Food Grains (Cereals) - Jowar": 7003,
      "Food Grains (Cereals) - Bajra": 10370,
      "Food Grains (Cereals) - Maize": 21726,
      "Food Grains (Cereals) - Ragi": 2194,
      "Food Grains (Cereals) - Small Millets": 442,
      "Food Grains (Cereals) - Wheat": 86874,
      "Food Grains (Cereals) - Barley": 1663,
      "Food Grains (Cereals) - Total": 226241,
      "Food Grains (Pulses) - Gram": 8221,
      "Food Grains (Pulses) - Tur": 2861,
      "Food Grains (Pulses) - Other Pulses": 7159,
      "Food Grains (Pulses) - Total": 18241,
      "Food Grains - Total": 244482,
      "Oilseeds - Ground-nuts": 8266,
      "Oilseeds - Sesamum": 893,
      "Oilseeds - Rapeseed and Mustard": 8179,
      "Oilseeds - Linseed": 147,
      "Oilseeds - Castor seed": 1350,
      "Total Nine Oilseeds": 32477,
      "Cotton": 33000,
      "Jute": 10009,
      "Mesta": 611,
      "Tea (Million kgs)": 967,
      "Coffee": 302,
      "Natural Rubber": 862,
      "Banana": 29780,
      "Sugarcane": 342382,
      "Tobacco": 802,
      "Potatoes": 42339,
      "Black Pepper": 52,
      "Chillies": 1223,
      "Ginger": 702,
      "Coconut": 10840,
      "Turmeric": 993
    },
    {
      "Year": "2011-12",
      "Food Grains (Cereals) - Rice": 105301,
      "Food Grains (Cereals) - Jowar": 5979,
      "Food Grains (Cereals) - Bajra": 10276,
      "Food Grains (Cereals) - Maize": 21759,
      "Food Grains (Cereals) - Ragi": 1929,
      "Food Grains (Cereals) - Small Millets": 452,
      "Food Grains (Cereals) - Wheat": 94882,
      "Food Grains (Cereals) - Barley": 1619,
      "Food Grains (Cereals) - Total": 242197,
      "Food Grains (Pulses) - Gram": 7702,
      "Food Grains (Pulses) - Tur": 2654,
      "Food Grains (Pulses) - Other Pulses": 6733,
      "Food Grains (Pulses) - Total": 17089,
      "Food Grains - Total": 259286,
      "Oilseeds - Ground-nuts": 6964,
      "Oilseeds - Sesamum": 810,
      "Oilseeds - Rapeseed and Mustard": 6604,
      "Oilseeds - Linseed": 153,
      "Oilseeds - Castor seed": 2295,
      "Total Nine Oilseeds": 29799,
      "Cotton": 35200,
      "Jute": 10736,
      "Mesta": 663,
      "Tea (Million kgs)": 1095,
      "Coffee": 314,
      "Natural Rubber": 904,
      "Banana": 28455,
      "Sugarcane": 361037,
      "Tobacco": 752,
      "Potatoes": 41483,
      "Black Pepper": 41,
      "Chillies": 1276,
      "Ginger": 756,
      "Coconut": 14940,
      "Turmeric": 1167
    },
    {
      "Year": "2012-13",
      "Food Grains (Cereals) - Rice": 105241,
      "Food Grains (Cereals) - Jowar": 5282,
      "Food Grains (Cereals) - Bajra": 8742,
      "Food Grains (Cereals) - Maize": 22258,
      "Food Grains (Cereals) - Ragi": 1574,
      "Food Grains (Cereals) - Small Millets": 436,
      "Food Grains (Cereals) - Wheat": 93506,
      "Food Grains (Cereals) - Barley": 1752,
      "Food Grains (Cereals) - Total": 238792,
      "Food Grains (Pulses) - Gram": 8833,
      "Food Grains (Pulses) - Tur": 3023,
      "Food Grains (Pulses) - Other Pulses": 6486,
      "Food Grains (Pulses) - Total": 18342,
      "Food Grains - Total": 257135,
      "Oilseeds - Ground-nuts": 4694,
      "Oilseeds - Sesamum": 685,
      "Oilseeds - Rapeseed and Mustard": 8029,
      "Oilseeds - Linseed": 149,
      "Oilseeds - Castor seed": 1964,
      "Total Nine Oilseeds": 30940,
      "Cotton": 34220,
      "Jute": 10340,
      "Mesta": 590,
      "Tea (Million kgs)": 1135,
      "Coffee": 318,
      "Natural Rubber": 914,
      "Banana": 26509,
      "Sugarcane": 341200,
      "Tobacco": 657,
      "Potatoes": 45344,
      "Black Pepper": 53,
      "Chillies": 1304,
      "Ginger": 683,
      "Coconut": 15609,
      "Turmeric": 971
    },
    {
      "Year": "2013-14",
      "Food Grains (Cereals) - Rice": 106646,
      "Food Grains (Cereals) - Jowar": 5542,
      "Food Grains (Cereals) - Bajra": 9250,
      "Food Grains (Cereals) - Maize": 24259,
      "Food Grains (Cereals) - Ragi": 1983,
      "Food Grains (Cereals) - Small Millets": 430,
      "Food Grains (Cereals) - Wheat": 95850,
      "Food Grains (Cereals) - Barley": 1831,
      "Food Grains (Cereals) - Total": 245790,
      "Food Grains (Pulses) - Gram": 9526,
      "Food Grains (Pulses) - Tur": 3174,
      "Food Grains (Pulses) - Other Pulses": 6555,
      "Food Grains (Pulses) - Total": 19255,
      "Food Grains - Total": 265045,
      "Oilseeds - Ground-nuts": 9714,
      "Oilseeds - Sesamum": 715,
      "Oilseeds - Rapeseed and Mustard": 7877,
      "Oilseeds - Linseed": 142,
      "Oilseeds - Castor seed": 1727,
      "Total Nine Oilseeds": 32749,
      "Cotton": 35902,
      "Jute": 11083,
      "Mesta": 607,
      "Tea (Million kgs)": 1209,
      "Coffee": 305,
      "Natural Rubber": 774.03,
      "Banana": 29725,
      "Sugarcane": 352142,
      "Tobacco": 778,
      "Potatoes": 41555,
      "Black Pepper": 51,
      "Chillies": 1492,
      "Ginger": 655,
      "Coconut": 14911,
      "Turmeric": 1190
    },
    {
      "Year": "2014-15",
      "Food Grains (Cereals) - Rice": 105482,
      "Food Grains (Cereals) - Jowar": 5445,
      "Food Grains (Cereals) - Bajra": 9184,
      "Food Grains (Cereals) - Maize": 24173,
      "Food Grains (Cereals) - Ragi": 2061,
      "Food Grains (Cereals) - Small Millets": 386,
      "Food Grains (Cereals) - Wheat": 86527,
      "Food Grains (Cereals) - Barley": 1613,
      "Food Grains (Cereals) - Total": 234871,
      "Food Grains (Pulses) - Gram": 7332,
      "Food Grains (Pulses) - Tur": 2807,
      "Food Grains (Pulses) - Other Pulses": 7013,
      "Food Grains (Pulses) - Total": 17152,
      "Food Grains - Total": 252023,
      "Oilseeds - Ground-nuts": 7402,
      "Oilseeds - Sesamum": 828,
      "Oilseeds - Rapeseed and Mustard": 6282,
      "Oilseeds - Linseed": 155,
      "Oilseeds - Castor seed": 1870,
      "Total Nine Oilseeds": 27511,
      "Cotton": 34805,
      "Jute": 10618,
      "Mesta": 508,
      "Tea (Million kgs)": 1197,
      "Coffee": 327,
      "Natural Rubber": "NA",
      "Banana": 28137,
      "Sugarcane": 362333,
      "Tobacco": "NA",
      "Potatoes": 45951,
      "Black Pepper": 55,
      "Chillies": 1453,
      "Ginger": 704,
      "Coconut": 14154,
      "Turmeric": 852
    },
    {
      "Year": "2015-16",
      "Food Grains (Cereals) - Rice": 104320,
      "Food Grains (Cereals) - Jowar": 4410,
      "Food Grains (Cereals) - Bajra": 8060,
      "Food Grains (Cereals) - Maize": 21810,
      "Food Grains (Cereals) - Ragi": 1790,
      "Food Grains (Cereals) - Small Millets": 370,
      "Food Grains (Cereals) - Wheat": 93500,
      "Food Grains (Cereals) - Barley": 1510,
      "Food Grains (Cereals) - Total": 235760,
      "Food Grains (Pulses) - Gram": 7170,
      "Food Grains (Pulses) - Tur": 2460,
      "Food Grains (Pulses) - Other Pulses": 6840,
      "Food Grains (Pulses) - Total": 16470,
      "Food Grains - Total": 252220,
      "Oilseeds - Ground-nuts": 6771,
      "Oilseeds - Sesamum": 866,
      "Oilseeds - Rapeseed and Mustard": 6821,
      "Oilseeds - Linseed": 132,
      "Oilseeds - Castor seed": 1650,
      "Total Nine Oilseeds": 25304,
      "Cotton": 30147,
      "Jute": 9938,
      "Mesta": 528,
      "Tea (Million kgs)": 1233.14,
      "Coffee": 348,
      "Natural Rubber": "NA",
      "Banana": "NA",
      "Sugarcane": "NA",
      "Tobacco": "NA",
      "Potatoes": "NA",
      "Black Pepper": "NA",
      "Chillies": "NA",
      "Ginger": "NA",
      "Coconut": "NA",
      "Turmeric": "NA"
    },
    {
      "Year": "2016-17",
      "Food Grains (Cereals) - Rice": 93880,
      "Food Grains (Cereals) - Jowar": 2420,
      "Food Grains (Cereals) - Bajra": 8550,
      "Food Grains (Cereals) - Maize": 19300,
      "Food Grains (Cereals) - Ragi": 1850,
      "Food Grains (Cereals) - Small Millets": 340,
      "Food Grains (Cereals) - Wheat": 93550,
      "Food Grains (Cereals) - Barley": "NA",
      "Food Grains (Cereals) - Total": 126330,
      "Food Grains (Pulses) - Gram": 8695,
      "Food Grains (Pulses) - Tur": 4290,
      "Food Grains (Pulses) - Other Pulses": 4410,
      "Food Grains (Pulses) - Total": 8700,
      "Food Grains - Total": 135030,
      "Oilseeds - Ground-nuts": 6498,
      "Oilseeds - Sesamum": 675,
      "Oilseeds - Rapeseed and Mustard": "NA",
      "Oilseeds - Linseed": "NA",
      "Oilseeds - Castor seed": 1731,
      "Total Nine Oilseeds": 23363,
      "Cotton": 32123,
      "Jute": 9905,
      "Mesta": 501,
      "Tea (Million kgs)": "NA",
      "Coffee": 320,
      "Natural Rubber": "NA",
      "Banana": "NA",
      "Sugarcane": "NA",
      "Tobacco": "NA",
      "Potatoes": "NA",
      "Black Pepper": "NA",
      "Chillies": "NA",
      "Ginger": "NA",
      "Coconut": "NA",
      "Turmeric": "NA"
    }
  ];

  return (
    <div className="home">
      <div className="mainchartcontainer">
      <div className="mainchart">
        <h4 className="charttitle">Food Grains - Total Production From 2001-21</h4>
      <LineChart className="chartbox"
          width={380}
          height={180}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Food Grains - Total" stroke="#1866B4" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
    <div className="mainchart">
        <h4 className="charttitle">(Pulses) - Total Production From 2001-21</h4>
      <LineChart className="chartbox"
          width={380}
          height={180}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Food Grains (Pulses) - Total" stroke="#CC4300" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
    <div className="mainchart">
        <h4 className="charttitle">(Cereals) - Total Production From 2001-21</h4>
      <LineChart className="chartbox"
          width={380}
          height={180}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Food Grains (Cereals) - Total" stroke="#03734D" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
    <div className="mainchart">
        <h4 className="charttitle">Total Nine Oilseeds Production From 2001-21</h4>
      <LineChart className="chartbox"
          width={380}
          height={180}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 1" />
          <XAxis dataKey="Year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Total Nine Oilseeds" stroke="#D70F47" activeDot={{ r: 8 }} />
        </LineChart>
    </div>
    </div>
    <div className="mainchartcontainer">
    <div className="mainchart">
        <h4 className="charttitle">Food Grains Production From 2001-21</h4>
        <AreaChart className="chartbox"
            width={520}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 1" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Rice" stroke="#C7F9EE" fill="#C7F9EE" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Wheat" stroke="#1EE4BD" fill="#1EE4BD" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Jowar" stroke="#1CD4D4" fill="#1CD4D4" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Bajra" stroke="#19AADE" fill="#19AADE" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Maize" stroke="#166BA0" fill="#166BA0" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Ragi" stroke="#DB4CB3" fill="#DB4CB3" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Small Millets" stroke="#7D3AC1" fill="#7D3AC1" />
            <Area type="monotone" dataKey="Food Grains (Cereals) - Barley" stroke="#C02322" fill="#C02322" />
          </AreaChart>
    </div>
    <div className="mainchart">
        <h4 className="charttitle">Pulses and Oilseeds Production From 2001-21</h4>
        <AreaChart className="chartbox"
            width={520}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 1" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Food Grains (Pulses) - Tur" stroke="#C7F9EE" fill="#C7F9EE" />
            <Area type="monotone" dataKey="Food Grains (Pulses) - Other Pulses" stroke="#1EE4BD" fill="#1EE4BD" />
            <Area type="monotone" dataKey="Food Grains (Pulses) - Gram" stroke="#1CD4D4" fill="#1CD4D4" />
            <Area type="monotone" dataKey="Oilseeds - Ground-nuts" stroke="#19AADE" fill="#19AADE" />
            <Area type="monotone" dataKey="Oilseeds - Sesamum" stroke="#166BA0" fill="#166BA0" />
            <Area type="monotone" dataKey="Oilseeds - Rapeseed and Mustard" stroke="#DB4CB3" fill="#DB4CB3" />
            <Area type="monotone" dataKey="Oilseeds - Linseed" stroke="#7D3AC1" fill="#7D3AC1" />
            <Area type="monotone" dataKey="Oilseeds - Castor seed" stroke="#C02322" fill="#C02322" />
          </AreaChart>
    </div>
    <div className="mainchart">
        <h4 className="charttitle">Other Productions From 2001-21</h4>
        <AreaChart className="chartbox"
            width={520}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 1" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="Cotton" stroke="#C7F9EE" fill="#C7F9EE" />
            <Area type="monotone" dataKey="Jute" stroke="#1EE4BD" fill="#1EE4BD" />
            <Area type="monotone" dataKey="Mesta" stroke="#1CD4D4" fill="#1CD4D4" />
            <Area type="monotone" dataKey="Coffee" stroke="#19AADE" fill="#19AADE" />
            <Area type="monotone" dataKey="Tea (Million kgs)" stroke="#166BA0" fill="#166BA0" />
            <Area type="monotone" dataKey="Sugarcane" stroke="#DB4CB3" fill="#DB4CB3" />
            <Area type="monotone" dataKey="Coconut" stroke="#7D3AC1" fill="#7D3AC1" />
            <Area type="monotone" dataKey="Banana" stroke="#C02322" fill="#C02322" />
          </AreaChart>
    </div>
    </div>
    </div>
  )
}
