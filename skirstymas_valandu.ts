let viso = [{
    "Eil": 3,
    "Dalykas": "Matematika 1",
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
    "Katedra": "PS"
  }];

let sum = viso
  .filter(element => element.VISOSTUDENTU <= 720 || element.VISOSTUDENTU > 715)
  .reduce((acc, element) => acc + element.VISOSTUDENTU, 0);

console.log(sum);
In this example, the filter method is used to create a new array that only contains elements where the "VISOSTUDENTU" property is less than or equal to 720 or greater than 715. Then the reduce method is used to add up the "VISOSTUDENTU" property of all the elements in that new array. The final result will be the sum of "VISOSTUDENTU" elements that are less than or equal to 720 or greater than 715.




