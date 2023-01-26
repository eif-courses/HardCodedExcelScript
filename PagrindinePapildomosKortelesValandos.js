// Algoritmo sudėtingumas O (n^2), tik su mažais rinkiniais 


function findSubarrays(n, arr) {
    if(n < 715 || n > 720) {
      console.log("n must be between 715 and 720")
      return [[],[]];
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr.slice(i, j + 1).reduce((acc, cur) => acc + cur.VISOSTUDENTU, 0) === n) {
                let subArray = arr.slice(i, j + 1);
                let remainingElements = arr.filter(x => !subArray.includes(x));
                return [subArray, remainingElements];
            }
        }
    }
    return [[],[]];
}
let n = 720;
const arr = [
  {
    "Eil": 3,
    "Dalykas": "Matematika 1",
    "Grupe": "IS22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 720,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 3,
    "Dalykas": "Matematika 1",
    "Grupe": "IS22B",
    "VF": 14,
    "VNF": 16,
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 3,
    "Dalykas": "Matematika 1",
    "Grupe": "IS22C",
    "VF": 14,
    "VNF": "",
    "VISOSTUDENTU": 14,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 3,
    "Dalykas": "Matematika 1",
    "Grupe": "IS22S",
    "VF": 22,
    "VNF": "",
    "VISOSTUDENTU": 22,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 4,
    "Dalykas": "Vadyba",
    "Grupe": "IS22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 18,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 1,
    "Dalykas": "Profesinė anglų kalba ",
    "Grupe": "PI22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 300,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 1,
    "Dalykas": "Profesinė anglų kalba ",
    "Grupe": "PI22B",
    "VF": 14,
    "VNF": 16,
    "VISOSTUDENTU": 420,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 1,
    "Dalykas": "Profesinė anglų kalba ",
    "Grupe": "PI22C",
    "VF": 14,
    "VNF": "",
    "VISOSTUDENTU": 14,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 1,
    "Dalykas": "Profesinė anglų kalba ",
    "Grupe": "PI22S",
    "VF": 14,
    "VNF": "",
    "VISOSTUDENTU": 14,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 1,
    "Dalykas": "Profesinė anglų kalba ",
    "Grupe": "PI22D",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 2,
    "Dalykas": "Specialybės kalba",
    "Grupe": "PI22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 18,
    "DPraktikumaiValandos": 18,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "PS"
  },
  {
    "Eil": 4,
    "Dalykas": "Vadyba",
    "Grupe": "IS22C",
    "VF": 14,
    "VNF": "",
    "VISOSTUDENTU": 14,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 18,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 4,
    "Dalykas": "Vadyba",
    "Grupe": "IS22S",
    "VF": 22,
    "VNF": "",
    "VISOSTUDENTU": 22,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 18,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 1,
    "Dalykas": "Informatikos įvadas",
    "Grupe": "IS22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 1,
    "Dalykas": "Informatikos įvadas",
    "Grupe": "IS22B",
    "VF": 14,
    "VNF": 16,
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 1,
    "Dalykas": "Informatikos įvadas",
    "Grupe": "IS22C",
    "VF": 14,
    "VNF": "",
    "VISOSTUDENTU": 14,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 1,
    "Dalykas": "Informatikos įvadas",
    "Grupe": "IS22S",
    "VF": 22,
    "VNF": "",
    "VISOSTUDENTU": 22,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 54,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 2,
    "Dalykas": "Operacinės sistemos",
    "Grupe": "IS22A",
    "VF": 30,
    "VNF": "",
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  },
  {
    "Eil": 2,
    "Dalykas": "Operacinės sistemos",
    "Grupe": "IS22B",
    "VF": 14,
    "VNF": 16,
    "VISOSTUDENTU": 30,
    "Semestras": 1,
    "DPaskaitos": 36,
    "DPraktikumaiValandos": 36,
    "DPraktikumaiPogrupiai": 1,
    "NPaskaitos": 0,
    "NPraktikumai": 0,
    "Egzaminas": "E",
    "Kita": 0,
    "Konsultacijos": 0,
    "VisoKontaktas": 99,
    "TarpSkaicius": 0,
    "TarpValandos": 0,
    "SavarankiskasDarbas": 0,
    "PraktikosAtaskaitos": 0,
    "KursiniaiDarbai": 0,
    "NekontaktinisEgzaminas": 0,
    "NekontaktinisKita": 0,
    "NekontaktinisViso": 0,
    "Viso": 88,
    "Destytojas": "Marius Gžegoževskis",
    "Katedra": "IS"
  }
];

const [subarray, remainingElements] = findSubarrays(n, arr);

if(subarray.length > 0){
    console.log(subarray); // Pagrindinė kortelė
    console.log(remainingElements); // Papildoma kortelė
}

while(subarray.length == 0 && n > 715){
    const [subarray, remainingElements] = findSubarrays(n--, arr);
    if(subarray.length != 0){
        console.log(subarray); 
        console.log(remainingElements);
        break;
    }
}

// Typescript version 
function findSubarrays(n: number, arr: number[]): [number[], number[]] {
    if(n < 715 || n > 720) {
      console.log("n must be between 715 and 720")
      return [[],[]];
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr.slice(i, j + 1).reduce((acc, cur) => acc + cur) === n) {
                let subArray = arr.slice(i, j + 1);
                let remainingElements = arr.filter(x => !subArray.includes(x));
                return [subArray, remainingElements];
            }
        }
    }
    return [[],[]];
}
