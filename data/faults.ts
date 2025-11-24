import { CircuitPuzzle } from "../types/puzzle";

export const puzzles: CircuitPuzzle[] = [
  {
    id: 1,
    title: "Common Emitter — noto‘g‘ri tranzistor ulanishi",
    topic: "BJT",
    difficulty: "medium",
    image: "/faults/01.png",
    faultOptions: [
      "Emitter rezistori yo‘q",
      "Tranzistor kollektor va emitteri almashtirilgan",
      "Baza rezistori qiymati juda katta",
      "Kirish bog‘lovchi kondensator yo‘q"
    ],
    correctIndex: 1,
    explanation: "Kollektor va emitter almashgan bo‘lsa, tranzistor teskari ishlaydi va kuchaytirish sodir bo‘lmaydi."
  },

  {
    id: 2,
    title: "Inverting Op-Amp — noto‘g‘ri teskari aloqa",
    topic: "OpAmp",
    difficulty: "medium",
    image: "/faults/02.png",
    faultOptions: [
      "Kirish rezistori uzilgan",
      "Musbat aloqa ulangan",
      "Op-Amp quvvatlanmayapti",
      "GND noto‘g‘ri joyda"
    ],
    correctIndex: 1,
    explanation: "Musbat aloqa (positive feedback) liniar kuchaytirgichni latch holatiga o‘tkazadi."
  },

  {
    id: 3,
    title: "Zener stabilizator — noto‘g‘ri yo‘nalish",
    topic: "Power",
    difficulty: "medium",
    image: "/faults/03.png",
    faultOptions: [
      "Seriya rezistori juda kichik",
      "Zener diod teskari emas, to‘g‘ri ulanib qolgan",
      "Filtr kondensatori yo‘q",
      "Yuklama juda kichik"
    ],
    correctIndex: 1,
    explanation: "Zener diodning to‘g‘ri ulanishi 0.7V dan ortiq stabilizatsiya qila olmaydi."
  },

  {
    id: 4,
    title: "MOSFET Low-Side Switch — Gate floating",
    topic: "FET",
    difficulty: "medium",
    image: "/faults/04.png",
    faultOptions: [
      "MOSFET turi noto‘g‘ri (P-kanal)",
      "Gate pull-down rezistori yo‘q",
      "Drain–source qisqa tutashgan",
      "Yuklama noto‘g‘ri joyga ulangan"
    ],
    correctIndex: 1,
    explanation: "Gate rezistorsiz bo‘lsa, tranzistor tasodifiy ochilib-yopilib kuyishga sabab bo‘ladi."
  },

  {
    id: 5,
    title: "AND gate — B kirish uzilgan",
    topic: "Digital",
    difficulty: "easy",
    image: "/faults/05.png",
    faultOptions: [
      "Chiqarish LED teskari",
      "Uch kirishli AND deb noto‘g‘ri ishlatilgan",
      "B kirish o‘zgaruvchisi havoda (floating)",
      "Quvvatlanish yetarli emas"
    ],
    correctIndex: 2,
    explanation: "Floating kirish CMOS mantiq tizimida beqaror chiqishga olib keladi."
  },

  {
    id: 6,
    title: "NPN switch — baza oqimi yetarli emas",
    topic: "BJT",
    difficulty: "easy",
    image: "/faults/06.png",
    faultOptions: [
      "Baza rezistori juda katta",
      "Emitter GNDga ulanmagan",
      "Kollektor yuklamaga ulanmagan",
      "Diod noto‘g‘ri yo‘nalgan"
    ],
    correctIndex: 0,
    explanation: "Baza rezistori juda katta bo‘lsa, tranzistor to‘liq ochilmaydi."
  },

  {
    id: 7,
    title: "Half-Wave rectifier — diod yo‘nalishi noto‘g‘ri",
    topic: "AC/DC",
    difficulty: "easy",
    image: "/faults/07.png",
    faultOptions: [
      "Transformator noto‘g‘ri ulangan",
      "Diod teskari ulanishda",
      "Kondensator sig‘imi juda kichik",
      "Yuklama qisqa tutashgan"
    ],
    correctIndex: 1,
    explanation: "Diod teskari yo‘nalishda bo‘lsa, AC → DC o‘tishi sodir bo‘lmaydi."
  },

  {
    id: 8,
    title: "Full-Bridge rectifier — bir diod noto‘g‘ri bog‘langan",
    topic: "AC/DC",
    difficulty: "medium",
    image: "/faults/08.png",
    faultOptions: [
      "Bitta diod noto‘g‘ri yo‘nalgan",
      "Kondensator noto‘g‘ri joyga qo‘yilgan",
      "Transformator kuchlanishi noto‘g‘ri",
      "Yuklama uzilgan"
    ],
    correctIndex: 0,
    explanation: "Kirishdagi diodlardan biri teskari bo‘lsa, ko‘prik ishlamaydi."
  },

  {
    id: 9,
    title: "Op-Amp buffer — chiqish uzilgan",
    topic: "OpAmp",
    difficulty: "easy",
    image: "/faults/09.png",
    faultOptions: [
      "Chiqish liniyasi uzilgan",
      "Teskari aloqa noto‘g‘ri joyga ketgan",
      "Quvvatlanish yo‘q",
      "Kirish rezistori noto‘g‘ri"
    ],
    correctIndex: 0,
    explanation: "Chiqish bilan kirish bog‘lanmasa, bu buffer emas, oddiy ochiq op-amp bo‘lib qoladi."
  },

  {
    id: 10,
    title: "Darlington juftligi — o‘rtadagi bog‘lanish yo‘q",
    topic: "BJT",
    difficulty: "medium",
    image: "/faults/10.png",
    faultOptions: [
      "Birinchi tranzistor emitteri ikkinchiga ulangan emas",
      "Baza rezistori noto‘g‘ri",
      "Yuklama kollektor emas, emitterga ulangan",
      "Quvvat GNDga ketmagan"
    ],
    correctIndex: 0,
    explanation: "Darlington juftlik kuchaytirishi ikki bosqichli bo‘ladi — bog‘lanish yo‘q bo‘lsa, kuchaytirish yo‘q."
  }
];
