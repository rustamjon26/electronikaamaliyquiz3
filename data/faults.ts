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
  },
  
    {
      id: 12,
      title: "RLC Circuit — induktivlik teskari",
      topic: "Analog",
      difficulty: "hard",
      image: "/faults/12.png",
      faultOptions: [
        "Induktor GND ga emas, seriyaga ulangan",
        "Kondensator seriyadan chiqarilgan",
        "Rezonans chastotasi noto‘g‘ri",
        "Induktor teskari ulangan (noto‘g‘ri orientatsiya)"
      ],
      correctIndex: 3,
      explanation: "Sxemadagi induktor markirovkasi teskari — coupling yo‘nalishi buzilgan."
    },
  
    {
      id: 13,
      title: "BJT Differential Pair — toki bo‘lish noto‘g‘ri",
      topic: "BJT",
      difficulty: "hard",
      image: "/faults/13.png",
      faultOptions: [
        "Tail-current rezistori noto‘g‘ri joylashgan",
        "Emitterlar bir-biriga ulanmagan",
        "Collector rezistorlar simmetrik emas",
        "Baza bias noto‘g‘ri"
      ],
      correctIndex: 1,
      explanation:
        "Differensial juftlikda emitterlar bir nuqtada birlashishi shart — aks holda u ishlamaydi."
    },
  
    {
      id: 14,
      title: "FET Source Follower — noto‘g‘ri chiqish nuqtasi",
      topic: "FET",
      difficulty: "medium",
      image: "/faults/14.png",
      faultOptions: [
        "Chiqish Drain dan olingan — follower emas",
        "Gate suzib qolgan",
        "Yuklama qarshiligi juda katta",
        "Quvvat teskari"
      ],
      correctIndex: 0,
      explanation:
        "Source followerda chiqish Source dan olinadi. Bu yerda Drain dan olingan — bu common-source bo‘lib ketgan."
    },
  
    {
      id: 15,
      title: "Schmitt Trigger — noto‘g‘ri feedback",
      topic: "Digital",
      difficulty: "hard",
      image: "/faults/15.png",
      faultOptions: [
        "Feedback rezistori manfiy kirishga ulangan",
        "Trigger histerezi hali yo‘q",
        "Input to‘g‘ri joyda emas",
        "Chiqish kondensator orqali olingan"
      ],
      correctIndex: 0,
      explanation:
        "Schmitt Trigger uchun Rf har doim + kirishga boradi. Bu joyda noto‘g‘ri."
    },
  
    {
      id: 16,
      title: "Transformer — noto‘g‘ri markaziy chiqish",
      topic: "Power",
      difficulty: "medium",
      image: "/faults/16.png",
      faultOptions: [
        "Markaziy chiqish noto‘g‘ri joylanib, balans yo‘q",
        "Chastota juda past",
        "Quvvat kuchlanishi noto‘g‘ri",
        "Induktivlik yetarli emas"
      ],
      correctIndex: 0,
      explanation:
        "Center-tap noto‘g‘ri joyga olingan — AC balans buziladi."
    },
  
    {
      id: 17,
      title: "Comparator — feedback yo‘q",
      topic: "OpAmp",
      difficulty: "easy",
      image: "/faults/17.png",
      faultOptions: [
        "Comparator uchun pozitv feedback yo‘q",
        "Non-inverting kirish ochiq",
        "Ground uzilgan",
        "Quvvat manbai yo‘q"
      ],
      correctIndex: 0,
      explanation:
        "Comparatorlarda tez switching uchun little hysteresis bo‘ladi — Rf yo‘q."
    },
  
    {
      id: 18,
      title: "Push-Pull Amplifier — dead-zone juda katta",
      topic: "Analog",
      difficulty: "hard",
      image: "/faults/18.png",
      faultOptions: [
        "Bias diodlar yo‘q",
        "Emitter rezistori teskari",
        "Collector sig‘im noto‘g‘ri",
        "Feedback noto‘g‘ri"
      ],
      correctIndex: 0,
      explanation:
        "A/B klass kuchaytirgichda ikki tranzistor o‘rtasida bias diod bo‘ladi — yo‘q bo‘lsa crossover distortsiya kuchli."
    },
  
    {
      id: 19,
      title: "Full-Wave Rectifier — noto‘g‘ri transformator ulanishi",
      topic: "Power",
      difficulty: "medium",
      image: "/faults/19.png",
      faultOptions: [
        "Center-tap noto‘g‘ri joyda",
        "Bir diod yo‘q",
        "Yuklama yerga ulanmagan",
        "Kondensator teskari"
      ],
      correctIndex: 0,
      explanation: "Markaziy chiqish noto‘g‘ri — 2 diodli full-wave ishlamaydi."
    },
  
    {
      id: 20,
      title: "TTL Gate — noto‘g‘ri pull-up",
      topic: "Digital",
      difficulty: "medium",
      image: "/faults/20.png",
      faultOptions: [
        "Pull-up juda katta",
        "Pull-up yo‘q",
        "Pull-down ishlatilgan",
        "Ground noto‘g‘ri joyda"
      ],
      correctIndex: 1,
      explanation:
        "TTL chiqishlari oqim tortadi — har doim pull-up kerak."
    },
  
    {
      id: 21,
      title: "BJT Darlington — noto‘g‘ri ulanish",
      topic: "BJT",
      difficulty: "medium",
      image: "/faults/21.png",
      faultOptions: [
        "Darlington tranzistorlari emitterlari birlashtirilmagan",
        "Collectorlar noto‘g‘ri joyda",
        "Bias kuchlanishi teskari",
        "Base rezistori yo‘q"
      ],
      correctIndex: 0,
      explanation:
        "Darlington uchun emitterlar birlashadi — bu joyda ular ajralgan."
    },
  
    {
      id: 22,
      title: "LM317 Regulator — ADJ noto‘g‘ri",
      topic: "Power",
      difficulty: "medium",
      image: "/faults/22.png",
      faultOptions: [
        "ADJ pin noto‘g‘ri joyga ulangan",
        "Input kuchlanishi past",
        "R1 va R2 o‘rin almashgan",
        "GND uzilgan"
      ],
      correctIndex: 0,
      explanation:
        "ADJ pin noto‘g‘ri nuqtaga ulangan — regulyatsiya ishlamaydi."
    },
  
    {
      id: 23,
      title: "Schottky Diode — noto‘g‘ri polaritet",
      topic: "Power",
      difficulty: "easy",
      image: "/faults/23.png",
      faultOptions: [
        "Diod teskari",
        "Yuklama qarshiligi juda kichik",
        "Kondensator yo‘q",
        "Transformator noto‘g‘ri"
      ],
      correctIndex: 0,
      explanation: "Schottky diod teskari — chiqish kuchlanishi nol bo‘ladi."
    },
  
    {
      id: 24,
      title: "555 Timer — trigger noto‘g‘ri",
      topic: "Digital",
      difficulty: "medium",
      image: "/faults/24.png",
      faultOptions: [
        "Trigger pin noto‘g‘ri",
        "Discharge noto‘g‘ri ulangan",
        "Threshold yerda",
        "Reset past holatda"
      ],
      correctIndex: 0,
      explanation:
        "Trigger pin noto‘g‘ri joyga ulangan — astable ishlamaydi."
    },
  
    {
      id: 25,
      title: "Op-Amp Integrator — rezistor o‘rniga kondensator qo‘yilgan",
      topic: "OpAmp",
      difficulty: "hard",
      image: "/faults/25.png",
      faultOptions: [
        "Rin faqat kondensator bilan almashtirilgan",
        "Chiqish saturatsiyada",
        "Kirish noto‘g‘ri joyda",
        "Quvvat manbai yo‘q"
      ],
      correctIndex: 0,
      explanation:
        "Integratorda kirishda R, feedbackda C bo‘ladi. Bu yerda ikkalasi teskari."
    },
  
    {
      id: 26,
      title: "Flyback Diode — yo‘q",
      topic: "Power",
      difficulty: "easy",
      image: "/faults/26.png",
      faultOptions: [
        "Diod yo‘q — releni o‘chirayotganda EMF kuchlanish kuchli",
        "Noto‘g‘ri bobina ulanishi",
        "Rele kontakti yopiq",
        "Kuchlanish past"
      ],
      correctIndex: 0,
      explanation:
        "Flyback diodsiz bobina o‘chishda 100V+ zarba beradi va tranzistor yonadi."
    },
  
    {
      id: 27,
      title: "Charge Pump — noto‘g‘ri diod joylashuvi",
      topic: "Analog",
      difficulty: "hard",
      image: "/faults/27.png",
      faultOptions: [
        "Bir diod teskari joylashgan",
        "Kondensator noto‘g‘ri joyda",
        "Chastota juda past",
        "GND ajralgan"
      ],
      correctIndex: 0,
      explanation:
        "Voltage doubler ishlashi uchun diodlarning yo‘nalishi juda muhim — biri teskari."
    },
  
    {
      id: 28,
      title: "CMOS Inverter — PMOS teskari",
      topic: "Digital",
      difficulty: "medium",
      image: "/faults/28.png",
      faultOptions: [
        "PMOS teskari ulangan — source pastda",
        "NMOS teskari",
        "Chiqish kondensator bilan to‘silgan",
        "Gate floating"
      ],
      correctIndex: 0,
      explanation:
        "PMOS har doim source yuqori kuchlanishda bo‘lishi kerak — bu yerda pastda."
    },
  
    {
      id: 29,
      title: "Comparator — non-inverting yerda",
      topic: "OpAmp",
      difficulty: "easy",
      image: "/faults/29.png",
      faultOptions: [
        "Non-inverting pin yerga ulangan — noto‘g‘ri",
        "Feedback noto‘g‘ri",
        "Chiqish polariteti teskari",
        "Inputlar almashtirilgan"
      ],
      correctIndex: 0,
      explanation:
        "Comparatorning + kirishi yerga ulanib qolgan — funksiyasi buziladi."
    },
  
    {
      id: 30,
      title: "3-Phase Rectifier — fazalar noto‘g‘ri joylashgan",
      topic: "Power",
      difficulty: "hard",
      image: "/faults/30.png",
      faultOptions: [
        "Uch faza noto‘g‘ri tartibda ulangan",
        "Bir diod o‘chgan",
        "Kondensator teskari",
        "Yuklama yerga noto‘g‘ri"
      ],
      correctIndex: 0,
      explanation:
        "Uch fazali to‘g‘rilagich faza tartibiga juda sezgir — noto‘g‘ri tartib AC pulsatsiyani oshiradi."
    }
  ];
  
