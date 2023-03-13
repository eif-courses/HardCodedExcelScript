
function main(workbook: ExcelScript.Workbook) {

 
 // SKAITOME MASYVA[0] IŠ JSON OBJEKTO NES GRĄŽINA MASYVO MASYVA [[ ]]
let kontaktas: Kontaktas[] = [];
let nekontaktas: NeKontaktas[] = [];


// Pagrindine kortele
  const currentSheet = workbook.getWorksheet("VK3 forma");
  const table = currentSheet.getTable("TarifikacijaKontaktas");
  let range = table.getRange();
  let rangeValues = range.getValues();
  let rowCount = range.getRowCount();

  for (let i = 1; i < rowCount; i++) {
    // The column at index 3 is column "4" in the worksheet.

    if(rangeValues[i][1].toString().length > 3){

      kontaktas.push({
        Eil: rangeValues[i][0], Dalykas: rangeValues[i][1], Grupe: rangeValues[i][2],
        VISOSTUDENTU: rangeValues[i][3], Semestras: rangeValues[i][4], DPaskaitos: rangeValues[i][5],
        DPraktikumaiValandos: rangeValues[i][6], DPraktikumaiPogrupiai: rangeValues[i][7],
        NPaskaitos: rangeValues[i][8], NPraktikumai: rangeValues[i][9], Egzaminas: rangeValues[i][10], 
        Kita: rangeValues[i][11], Konsultacijos: rangeValues[i][12], VisoKontaktas: rangeValues[i][13], Destytojas:"",
        Katedra:""
      })
    }
    }
    
  // Papildoma kortele
  const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
  const tablePapildoma = currentSheetPapildoma.getTable("PapildomaKontaktas");
  let rangePapildoma = tablePapildoma.getRange();
  let rangeValuesPapildoma = rangePapildoma.getValues();
  let rowCountPapildoma = rangePapildoma.getRowCount();

  for (let i = 1; i < rowCountPapildoma; i++) {
    // The column at index 3 is column "4" in the worksheet.

    if (rangeValuesPapildoma[i][1].toString().length > 3) {

      nekontaktas.push({
        Eil: rangeValuesPapildoma[i][0], Dalykas: rangeValuesPapildoma[i][1], Grupe: rangeValuesPapildoma[i][2],
        VISOSTUDENTU: rangeValuesPapildoma[i][3], Semestras: rangeValuesPapildoma[i][4], Tarpiniai_Sk: rangeValuesPapildoma[i][5],
        Tarpiniai_val: rangeValuesPapildoma[i][6], Savarankiski_darbai: rangeValuesPapildoma[i][7],
        PraktikosAtaskaitos: rangeValuesPapildoma[i][8], NuotolinisMokymasis: rangeValuesPapildoma[i][9], KursiniaiDarbai: rangeValuesPapildoma[i][10],
        Egzaminas: rangeValuesPapildoma[i][11], Kita: rangeValuesPapildoma[i][12], VisoNekontaktas: rangeValuesPapildoma[i][13], Destytojas: "",
        Katedra: ""
      })
    }


    
  }
  console.log(nekontaktas)
  }




  // const tableValues = rangeValues.map(row => [row.Eil, row.Dalykas, row.Grupe,
  // row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
  // row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);



  

  //for(let row of subjects){
  // const tableValues = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
  // row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
  // row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
  // table.addRows(-1, tableValues);



  // const finalSheet = workbook.getWorksheet("VK3 forma");
  // const finalTable = finalSheet.getTable("TarifikacijaNekontaktinis");

  // const tableValuesNekontaktas =  subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
  // row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
  // row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
  // finalTable.addRows(-1, tableValuesNekontaktas);


 


//   const sheet = workbook.getWorksheet("VK3 forma");
//   let range = sheet.getUsedRange();
//   let values = range.getValues();
//   let findCell = range.find("Su darbo krūviu susipažinau", {
//     completeMatch: true,
//   });
//   const lektorius = subjects[0]['Destytojas'];
//   sheet.getRange("C10").setValue(lektorius);
//   const result = "L"+(findCell.getRowIndex() + 1).toString();

//   sheet.getRange(result).setValue(lektorius);


//   console.log(lektorius);
  
//   const sumByValue = subjects.reduce((acc, cur) => acc + +cur.DPraktikumaiValandos * +cur.DPraktikumaiPogrupiai + +cur.DPaskaitos + +cur.NPaskaitos + +cur.NPraktikumai * +cur.DPraktikumaiPogrupiai, 0);
//   console.log(sumByValue); 

//   if(sumByValue <= 760){
//     //console.log('sudarome tarifikacija tik pagrindineje korteleje');
//     // Pagrindine kortele
//     const table = sheet.getTable("TarifikacijaKontaktas");
//     //for(let row of subjects){
//     const tableValues = subjects.map(row => [row.Eil, row.Dalykas, row.Grupe,
//     (+row.VF+ +row.VNF), row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
//     row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
//     table.addRows(-1, tableValues);

//     //const finalSheet = workbook.getWorksheet("VK3 forma");
//     const finalTable = sheet.getTable("TarifikacijaNekontaktinis");
//     const tableValuesNekontaktas = subjects.map(row => [row.Eil, row.Dalykas, row.Grupe,
//       (+row.VF + +row.VNF), row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
//     row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
//     finalTable.addRows(-1, tableValuesNekontaktas);

//   }

// let n = 760;
// const [subarray, remainingElements] = findSubarrays(n, subjects);



// if (subarray.length > 0) {
//  // console.log(subarray); // Pagrindinė kortelė
//   //console.log(remainingElements); // Papildoma kortelė

// // Pagrindine kortele
//   const currentSheet = workbook.getWorksheet("VK3 forma");
//   const table = currentSheet.getTable("TarifikacijaKontaktas");
//   //for(let row of subjects){
//   const tableValues = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
//   row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
//   row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
//   table.addRows(-1, tableValues);

//   const finalSheet = workbook.getWorksheet("VK3 forma");
//   const finalTable = finalSheet.getTable("TarifikacijaNekontaktinis");

//   const tableValuesNekontaktas =  subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
//   row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
//   row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
//   finalTable.addRows(-1, tableValuesNekontaktas);

//   // Papildoma kortele
//   const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
//   const tablePapildoma = currentSheet.getTable("PapildomaKontaktas");
//   //for(let row of subjects){
//   const tableValuesPapildoma = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
//   row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
//   row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
//   tablePapildoma.addRows(-1, tableValuesPapildoma);

// //console.log(tableValuesPapildoma);

//   const finalSheetPapildoma = workbook.getWorksheet("VK4 forma");
//   const finalTablePapildoma = finalSheet.getTable("PapildomaNekontaktinis");

//   const tableValuesPapildomaNekontaktas = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
//   row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
//   row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
//   finalTablePapildoma.addRows(-1, tableValuesPapildomaNekontaktas);

// //console.log(tableValuesPapildomaNekontaktas);


// }

//   while (subarray.length == 0 && n > 700) {
//     const [subarray, remainingElements] = findSubarrays(n--, subjects);
//     if (subarray.length != 0) {
//       //console.log(subarray);
//      // console.log(remainingElements);

//       // Pagrindine kortele
//       const currentSheet = workbook.getWorksheet("VK3 forma");
//       const table = currentSheet.getTable("TarifikacijaKontaktas");
//       //for(let row of subjects){
//       const tableValues = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
//       row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
//       row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
//       table.addRows(-1, tableValues);

//       const finalSheet = workbook.getWorksheet("VK3 forma");
//       const finalTable = finalSheet.getTable("TarifikacijaNekontaktinis");

//       const tableValuesNekontaktas = subarray.map(row => [row.Eil, row.Dalykas, row.Grupe,
//       row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
//       row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
//       finalTable.addRows(-1, tableValuesNekontaktas);

//       // Papildoma kortele
//       const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
//       const tablePapildoma = currentSheet.getTable("PapildomaKontaktas");
//       //for(let row of subjects){
//       const tableValuesPapildoma = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
//       row.VISOSTUDENTU, row.Semestras, row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
//       row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas, "", ""]);
//       tablePapildoma.addRows(-1, tableValuesPapildoma);

//       const finalSheetPapildoma = workbook.getWorksheet("VK4 forma");
//       const finalTablePapildoma = finalSheet.getTable("PapildomaNekontaktinis");

//       const tableValuesPapildomaNekontaktas = remainingElements.map(row => [row.Eil, row.Dalykas, row.Grupe,
//       row.VISOSTUDENTU, row.Semestras, row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas,
//       row.PraktikosAtaskaitos, "", row.KursiniaiDarbai, row.NekontaktinisEgzaminas, row.NekontaktinisKita, row.NekontaktinisViso, "", ""]);
//       finalTablePapildoma.addRows(-1, tableValuesPapildomaNekontaktas);
     
//       break;
//     }
//   }

interface Kontaktas{
  Eil: (string | number | boolean), Dalykas: (string | number | boolean), Grupe: (string | number | boolean),
  VISOSTUDENTU: (string | number | boolean), Semestras: (string | number | boolean), DPaskaitos: (string | number | boolean),
  DPraktikumaiValandos: (string | number | boolean), DPraktikumaiPogrupiai: (string | number | boolean),
  NPaskaitos: (string | number | boolean), NPraktikumai: (string | number | boolean), Egzaminas: (string | number | boolean),
  Kita: (string | number | boolean), Konsultacijos: (string | number | boolean), VisoKontaktas: (string | number | boolean), Destytojas: (string | number | boolean),
  Katedra: (string | number | boolean)
}

// Need to fix
interface NeKontaktas {
  Eil: (string | number | boolean), 
  Dalykas: (string | number | boolean), 
  Grupe: (string | number | boolean),
  VISOSTUDENTU: (string | number | boolean), 
  Semestras: (string | number | boolean),
  Tarpiniai_Sk: (string | number | boolean), 
  Tarpiniai_val: (string | number | boolean), 
  Savarankiski_darbai: (string | number | boolean),
  PraktikosAtaskaitos: (string | number | boolean), 
  NuotolinisMokymasis: (string | number | boolean), 
  KursiniaiDarbai: (string | number | boolean), 
  Egzaminas: (string | number | boolean), 
  Kita: (string | number | boolean), 
  VisoNekontaktas: (string | number | boolean), 
  Destytojas: (string | number | boolean), 
  Katedra: (string | number | boolean)
}

  

