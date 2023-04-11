
function main(workbook: ExcelScript.Workbook, planData: object[], metaData: object) {
  let groups: GroupPlan[] = [];
  let vkdeFormData: VKDE01[] = [];
 
 // SKAITOME MASYVA[0] IŠ JSON OBJEKTO NES GRĄŽINA MASYVO MASYVA [[ ]]
let subjects: DatabaseData[] = planData[0] as DatabaseData[];

  let metaD: Metaduomenys = metaData as Metaduomenys;

  
    // const metaData = {
    //   "Pilnas_Vardas": "Marius",
    //   "Pareigos": "lektorius",
    //   "Koeficientas": "8.5",
    //   "PAB": "8.92",
    //   "Katedra": "PI",
    //   "Tipas": "",
    //   "Email": "m.gzegozevskis@ad.viko.lt"
    // } as Metaduomenys;

    const finalSheet = workbook.getWorksheet("Duomenys");
    const finalTable = finalSheet.getTable("metaduomenys");
    const sheetProtection = finalSheet.getProtection();

    if (!sheetProtection.getProtected()) {
      finalTable.addRow(-1,
        [metaD.Email,
          metaD.Pareigos,
          metaD.Koeficientas,
          metaD.Tipas,
          metaD.PAB,
          metaD.Pilnas_Vardas,
          metaD.Katedra]);

      let protectionOptions: ExcelScript.WorksheetProtectionOptions = {
        selectionMode: ExcelScript.ProtectionSelectionMode.none
      }
      sheetProtection.protect(protectionOptions, "labas");
    }



  





  // const subjects = [
  //     {
  //       "Eil": null,
  //       "Dalykas": "Informacijos sistemos ir jų sauga",
  //       "Grupe": "IS22B",
  //       "VF": 14,
  //       "VNF": 16,
  //       "VISOSTUDENTU": null,
  //       "Semestras": 2,
  //       "DPaskaitos": 32,
  //       "DPraktikumaiValandos": 32,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": "",
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "ISDieninis"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Informacijos sistemos ir jų sauga",
  //       "Grupe": "IS22C",
  //       "VF": 14,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 2,
  //       "DPaskaitos": 32,
  //       "DPraktikumaiValandos": 32,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": "",
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "ISDieninis"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Introduction to Informatics",
  //       "Grupe": "PI22E",
  //       "VF": 22,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 1,
  //       "DPaskaitos": 36,
  //       "DPraktikumaiValandos": 36,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": "",
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "PSEnglish"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Algorithms and Data Structures",
  //       "Grupe": "PI22E",
  //       "VF": 22,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 2,
  //       "DPaskaitos": 48,
  //       "DPraktikumaiValandos": 48,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": "",
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "PSEnglish"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Probability Theory and Mathematical Statistics",
  //       "Grupe": "PI22E",
  //       "VF": 22,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 2,
  //       "DPaskaitos": 32,
  //       "DPraktikumaiValandos": 16,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": "",
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "PSEnglish"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Informatikos įvadas",
  //       "Grupe": "PI22S",
  //       "VF": 14,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 1,
  //       "DPaskaitos": 10,
  //       "DPraktikumaiValandos": 10,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": 26,
  //       "NPraktikumai": 26,
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "PSSesijiniai"
  //     },
  //     {
  //       "Eil": null,
  //       "Dalykas": "Pirmoji programavimo praktika",
  //       "Grupe": "PI22S",
  //       "VF": 14,
  //       "VNF": "",
  //       "VISOSTUDENTU": null,
  //       "Semestras": 2,
  //       "DPaskaitos": "",
  //       "DPraktikumaiValandos": 20,
  //       "DPraktikumaiPogrupiai": 1,
  //       "NPaskaitos": "",
  //       "NPraktikumai": 28,
  //       "Egzaminas": null,
  //       "Kita": null,
  //       "Konsultacijos": null,
  //       "VisoKontaktas": null,
  //       "TarpSkaicius": null,
  //       "TarpValandos": null,
  //       "SavarankiskasDarbas": null,
  //       "PraktikosAtaskaitos": null,
  //       "KursiniaiDarbai": null,
  //       "NekontaktinisEgzaminas": null,
  //       "NekontaktinisKita": null,
  //       "NekontaktinisViso": null,
  //       "Viso": null,
  //       "Destytojas": "Marius Gžegoževskis",
  //       "Katedra": "PSSesijiniai"
  //     },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Informacijos sistemos ir jų sauga",
  //     "Grupe": "IS22B",
  //     "VF": 14,
  //     "VNF": 16,
  //     "VISOSTUDENTU": null,
  //     "Semestras": 2,
  //     "DPaskaitos": 32,
  //     "DPraktikumaiValandos": 32,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": "",
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "ISDieninis"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Informacijos sistemos ir jų sauga",
  //     "Grupe": "IS22C",
  //     "VF": 14,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 2,
  //     "DPaskaitos": 32,
  //     "DPraktikumaiValandos": 32,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": "",
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "ISDieninis"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Introduction to Informatics",
  //     "Grupe": "PI22E",
  //     "VF": 22,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 1,
  //     "DPaskaitos": 36,
  //     "DPraktikumaiValandos": 36,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": "",
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "PSEnglish"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Algorithms and Data Structures",
  //     "Grupe": "PI22E",
  //     "VF": 22,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 2,
  //     "DPaskaitos": 48,
  //     "DPraktikumaiValandos": 48,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": "",
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "PSEnglish"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Probability Theory and Mathematical Statistics",
  //     "Grupe": "PI22E",
  //     "VF": 22,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 2,
  //     "DPaskaitos": 32,
  //     "DPraktikumaiValandos": 16,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": "",
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "PSEnglish"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Informatikos įvadas",
  //     "Grupe": "PI22S",
  //     "VF": 14,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 1,
  //     "DPaskaitos": 10,
  //     "DPraktikumaiValandos": 10,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": 26,
  //     "NPraktikumai": 26,
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "PSSesijiniai"
  //   },
  //   {
  //     "Eil": null,
  //     "Dalykas": "Pirmoji programavimo praktika",
  //     "Grupe": "PI22S",
  //     "VF": 14,
  //     "VNF": "",
  //     "VISOSTUDENTU": null,
  //     "Semestras": 2,
  //     "DPaskaitos": "",
  //     "DPraktikumaiValandos": 20,
  //     "DPraktikumaiPogrupiai": 1,
  //     "NPaskaitos": "",
  //     "NPraktikumai": 28,
  //     "Egzaminas": null,
  //     "Kita": null,
  //     "Konsultacijos": null,
  //     "VisoKontaktas": null,
  //     "TarpSkaicius": null,
  //     "TarpValandos": null,
  //     "SavarankiskasDarbas": null,
  //     "PraktikosAtaskaitos": null,
  //     "KursiniaiDarbai": null,
  //     "NekontaktinisEgzaminas": null,
  //     "NekontaktinisKita": null,
  //     "NekontaktinisViso": null,
  //     "Viso": null,
  //     "Destytojas": "Marius Gžegoževskis",
  //     "Katedra": "PSSesijiniai"
  //   }
  //   ];

 
 


  const sheet = workbook.getWorksheet("VK3 forma");
  let range = sheet.getUsedRange();
  let values = range.getValues();
  let findCell = range.find("Su darbo krūviu susipažinau", {
    completeMatch: true,
  });
  const lektorius = subjects[0]['Destytojas'];
  sheet.getRange("C10").setValue(lektorius);
  const result = "L"+(findCell.getRowIndex() + 1).toString();

  sheet.getRange(result).setValue(lektorius);


  console.log(lektorius);
  
  const sumByValue = subjects.reduce((acc, cur) => acc + +cur.DPraktikumaiValandos * +cur.DPraktikumaiPogrupiai + +cur.DPaskaitos + +cur.NPaskaitos + +cur.NPraktikumai * +cur.DPraktikumaiPogrupiai, 0);
  console.log(sumByValue); 

  if(sumByValue <= 760){
    //console.log('sudarome tarifikacija tik pagrindineje korteleje');
    // Pagrindine kortele
    const table = sheet.getTable("TarifikacijaKontaktas");
    //for(let row of subjects){
    const tableValues = subjects.map(row => [row.Eil, row.Dalykas, row.Grupe,
    (+row.VF+ +row.VNF), row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
    row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
    table.addRows(-1, tableValues);

    //const finalSheet = workbook.getWorksheet("VK3 forma");
    const finalTable = sheet.getTable("TarifikacijaNekontaktinis");
    const tableValuesNekontaktas = subjects.map(row => [row.Eil, row.Dalykas, row.Grupe,
      (+row.VF + +row.VNF), row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
    row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
    finalTable.addRows(-1, tableValuesNekontaktas);

  }

let n = 760;
const [subarray, remainingElements] = findSubarrays(n, subjects);



if (subarray.length > 0) {
 // console.log(subarray); // Pagrindinė kortelė
  //console.log(remainingElements); // Papildoma kortelė

// Pagrindine kortele
  const currentSheet = workbook.getWorksheet("VK3 forma");
  const table = currentSheet.getTable("TarifikacijaKontaktas");
  //for(let row of subjects){
  const tableValues = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
  row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
  row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
  table.addRows(-1, tableValues);

  const finalSheet = workbook.getWorksheet("VK3 forma");
  const finalTable = finalSheet.getTable("TarifikacijaNekontaktinis");

  const tableValuesNekontaktas =  subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
  row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
  row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
  finalTable.addRows(-1, tableValuesNekontaktas);

  // Papildoma kortele
  const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
  const tablePapildoma = currentSheet.getTable("PapildomaKontaktas");
  //for(let row of subjects){
  const tableValuesPapildoma = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
  row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
  row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
  tablePapildoma.addRows(-1, tableValuesPapildoma);

//console.log(tableValuesPapildoma);

  const finalSheetPapildoma = workbook.getWorksheet("VK4 forma");
  const finalTablePapildoma = finalSheet.getTable("PapildomaNekontaktinis");

  const tableValuesPapildomaNekontaktas = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
  row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
  row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
  finalTablePapildoma.addRows(-1, tableValuesPapildomaNekontaktas);

//console.log(tableValuesPapildomaNekontaktas);


}

  while (subarray.length == 0 && n > 700) {
    const [subarray, remainingElements] = findSubarrays(n--, subjects);
    if (subarray.length != 0) {
      //console.log(subarray);
     // console.log(remainingElements);

      // Pagrindine kortele
      const currentSheet = workbook.getWorksheet("VK3 forma");
      const table = currentSheet.getTable("TarifikacijaKontaktas");
      //for(let row of subjects){
      const tableValues = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
      row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
      row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
      table.addRows(-1, tableValues);

      const finalSheet = workbook.getWorksheet("VK3 forma");
      const finalTable = finalSheet.getTable("TarifikacijaNekontaktinis");

      const tableValuesNekontaktas = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
      row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
      row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
      finalTable.addRows(-1, tableValuesNekontaktas);

      // Papildoma kortele
      const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
      const tablePapildoma = currentSheet.getTable("PapildomaKontaktas");
      //for(let row of subjects){
      const tableValuesPapildoma = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
      row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
      row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
      tablePapildoma.addRows(-1, tableValuesPapildoma);

      const finalSheetPapildoma = workbook.getWorksheet("VK4 forma");
      const finalTablePapildoma = finalSheet.getTable("PapildomaNekontaktinis");

      const tableValuesPapildomaNekontaktas = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
      row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
      row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
      finalTablePapildoma.addRows(-1, tableValuesPapildomaNekontaktas);
     
      break;
    }
  }
}
function findSubarrays(n: number, arr: DatabaseData[]): [DatabaseData[], DatabaseData[]]{
  if (n < 700 || n > 760) {
    console.log("n must be between 715 and 720")
    return [[], []];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {

    

      if (arr.slice(i, j + 1).reduce((acc, cur) => acc + (+cur.DPraktikumaiValandos * +cur.DPraktikumaiPogrupiai + +cur.DPaskaitos + +cur.NPaskaitos + +cur.NPraktikumai * +cur.DPraktikumaiPogrupiai), 0) === n) {
        let subArray = arr.slice(i, j + 1);
        let remainingElements = arr.filter(x => !subArray.includes(x));
        return [subArray, remainingElements];
      }
    }
  }
  return [[], []];
}



interface DatabaseData{
  Eil: (string | number | boolean),
  Dalykas: (string | number | boolean),
  Grupe: (string | number | boolean),
  VF: (string | number | boolean),
  VNF: (string | number | boolean),
  VISOSTUDENTU: (string | number | boolean),
  Semestras: (string | number | boolean),
  DPaskaitos: (string | number | boolean),
  DPraktikumaiValandos: (string | number | boolean),
  DPraktikumaiPogrupiai: (string | number | boolean),
  NPaskaitos: (string | number | boolean),
  NPraktikumai: (string | number | boolean),
  Egzaminas: (string | number | boolean),
  Kita: (string | number | boolean),
  Konsultacijos: (string | number | boolean),
  VisoKontaktas: (string | number | boolean),
  TarpSkaicius: (string | number | boolean),
  TarpValandos: (string | number | boolean),
  SavarankiskasDarbas: (string | number | boolean),
  PraktikosAtaskaitos: (string | number | boolean),
  KursiniaiDarbai: (string | number | boolean),
  NekontaktinisEgzaminas: (string | number | boolean),
  NekontaktinisKita: (string | number | boolean),
  NekontaktinisViso: (string | number | boolean),
  Viso: (string | number | boolean),
  Destytojas: (string | number | boolean),
  Katedra: (string | number | boolean)
}


interface VKDE01 {
  Eil: (string | number | boolean),
  Dalykas: (string | number | boolean),
  Semestras: (string | number | boolean),
  DPaskaitos: (string | number | boolean),
  DPraktikumaiValandos: (string | number | boolean),
  DPraktikumaiPogrupiai: (string | number | boolean),
  NPaskaitos: (string | number | boolean),
  NPraktikumai: (string | number | boolean),
  Egzaminas: (string | number | boolean),
  Kita: (string | number | boolean),
  Konsultacijos: (string | number | boolean),
  VisoKontaktas: (string | number | boolean),
  TarpSkaicius: (string | number | boolean),
  TarpValandos: (string | number | boolean),
  SavarankiskasDarbas: (string | number | boolean),
  PraktikosAtaskaitos: (string | number | boolean),
  KursiniaiDarbai: (string | number | boolean),
  NekontaktinisEgzaminas: (string | number | boolean),
  NekontaktinisKita: (string | number | boolean),
  NekontaktinisViso: (string | number | boolean),
  Viso: (string | number | boolean),
  AtsiskaitymoForma: (string | number | boolean),
  Kreditai: (string | number | boolean),
  Pastabos: (string | number | boolean)
}


interface Metaduomenys {
  Pilnas_Vardas: (string | number | boolean),
  Pareigos: (string | number | boolean),
  Koeficientas: (string | number | boolean),
  PAB: (string | number | boolean),
  Katedra: (string | number | boolean),
  Tipas: (string | number | boolean),
  Email: (string | number | boolean)
}



interface GroupPlan {
  Grupe: (string | number | boolean),
  Semestras: (string | number | boolean),
  VF: (string | number | boolean),
  VNF: (string | number | boolean),
  StudentuSk: (string | number | boolean),
  ArStrautas: (string | number | boolean),
  Fakultetas: (string | number | boolean),
  StudijuPrograma: (string | number | boolean),
  StudijuForma: (string | number | boolean),
  KuruojantiKatedra: (string | number | boolean),
  Laikotarpis: (string | number | boolean)
}


interface StudyPlan{
  Eil: (string | number | boolean),
  Pavadinimas: (string | number | boolean),
  Tipas: (string | number | boolean),
  P1: (string | number | boolean),
  Pr1: (string | number | boolean),
  S1: (string | number | boolean),
  Kr1: (string | number | boolean),
  V1: (string | number | boolean),
  P2: (string | number | boolean),
  Pr2: (string | number | boolean),
  S2: (string | number | boolean),
  Kr2: (string | number | boolean),
  V2: (string | number | boolean),
  P3: (string | number | boolean),
  Pr3: (string | number | boolean),
  S3: (string | number | boolean),
  Kr3: (string | number | boolean),
  V3: (string | number | boolean),
  P4: (string | number | boolean),
  Pr4: (string | number | boolean),
  S4: (string | number | boolean),
  Kr4: (string | number | boolean),
  V4: (string | number | boolean),
  P5: (string | number | boolean),
  Pr5: (string | number | boolean),
  S5: (string | number | boolean),
  Kr5: (string | number | boolean),
  V5: (string | number | boolean),
  P6: (string | number | boolean),
  Pr6: (string | number | boolean),
  S6: (string | number | boolean),
  Kr6: (string | number | boolean),
  V6: (string | number | boolean),
  P7: (string | number | boolean),
  Pr7: (string | number | boolean),
  S7: (string | number | boolean),
  Kr7: (string | number | boolean),
  V7: (string | number | boolean),
  Valandos: (string | number | boolean),
  Kreditai: (string | number | boolean),
  Semestras: (string | number | boolean),
  DalykoKatedra: (string | number | boolean)
}
  

