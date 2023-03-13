
function main(workbook: ExcelScript.Workbook) {

 
 // SKAITOME MASYVA[0] IŠ JSON OBJEKTO NES GRĄŽINA MASYVO MASYVA [[ ]]
let kontaktas: Kontaktas[] = [];
let nekontaktas: NeKontaktas[] = [];


// Pagrindine kortele
  const currentSheet = workbook.getWorksheet("VK3 forma");


  const name = currentSheet.getCell(9, 2).getValue();

  console.log(name);

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
        Kita: rangeValues[i][11], Konsultacijos: rangeValues[i][12], VisoKontaktas: rangeValues[i][13], Destytojas:name,
        Katedra:""
      })
    }
  }

  const tableNeKontaktas = currentSheet.getTable("TarifikacijaNekontaktinis");
  let rangeNeKontaktas = tableNeKontaktas.getRange();
  let rangeValuesNeKontaktas = rangeNeKontaktas.getValues();
  let rowCountNeKontaktas = rangeNeKontaktas.getRowCount();

  for (let i = 1; i < rowCountNeKontaktas; i++) {
    // The column at index 3 is column "4" in the worksheet.

    if (rangeValuesNeKontaktas[i][1].toString().length > 3) {

      nekontaktas.push({
        Eil: rangeValuesNeKontaktas[i][0], Dalykas: rangeValuesNeKontaktas[i][1], Grupe: rangeValuesNeKontaktas[i][2],
        VISOSTUDENTU: rangeValuesNeKontaktas[i][3], Semestras: rangeValuesNeKontaktas[i][4], Tarpiniai_Sk: rangeValuesNeKontaktas[i][5],
        Tarpiniai_val: rangeValuesNeKontaktas[i][6], Savarankiski_darbai: rangeValuesNeKontaktas[i][7],
        PraktikosAtaskaitos: rangeValuesNeKontaktas[i][8], NuotolinisMokymasis: rangeValuesNeKontaktas[i][9], KursiniaiDarbai: rangeValuesNeKontaktas[i][10],
        Egzaminas: rangeValuesNeKontaktas[i][11], Kita: rangeValuesNeKontaktas[i][12], VisoNekontaktas: rangeValuesNeKontaktas[i][13], Destytojas: name,
        Katedra: ""
      })
    }
  }

  // Papildoma kortele
  const currentSheetPapildoma = workbook.getWorksheet("VK4 forma");
  const tablePapildomaKontaktas = currentSheetPapildoma.getTable("PapildomaKontaktas");
  let rangePapildomaKontaktas = tablePapildomaKontaktas.getRange();
  let rangeValuesPapildomaKontaktas = rangePapildomaKontaktas.getValues();
  let rowCountPapildomaKontaktas = rangePapildomaKontaktas.getRowCount();

  for (let i = 1; i < rowCountPapildomaKontaktas; i++) {
    // The column at index 3 is column "4" in the worksheet.

    if (rangeValuesPapildomaKontaktas[i][1].toString().length > 3) {

      kontaktas.push({
        Eil: rangeValuesPapildomaKontaktas[i][0], Dalykas: rangeValuesPapildomaKontaktas[i][1], Grupe: rangeValuesPapildomaKontaktas[i][2],
        VISOSTUDENTU: rangeValuesPapildomaKontaktas[i][3], Semestras: rangeValuesPapildomaKontaktas[i][4], DPaskaitos: rangeValuesPapildomaKontaktas[i][5],
        DPraktikumaiValandos: rangeValuesPapildomaKontaktas[i][6], DPraktikumaiPogrupiai: rangeValuesPapildomaKontaktas[i][7],
        NPaskaitos: rangeValuesPapildomaKontaktas[i][8], NPraktikumai: rangeValuesPapildomaKontaktas[i][9], Egzaminas: rangeValuesPapildomaKontaktas[i][10],
        Kita: rangeValuesPapildomaKontaktas[i][11], Konsultacijos: rangeValuesPapildomaKontaktas[i][12], VisoKontaktas: rangeValuesPapildomaKontaktas[i][13], Destytojas: name,
        Katedra: ""
      })
    }
  }

  const tablePapildomaNeKontaktas = currentSheetPapildoma.getTable("PapildomaNekontaktinis");
  let rangePapildomaNeKontaktas = tablePapildomaNeKontaktas.getRange();
  let rangeValuesPapildomaNeKontaktas = rangePapildomaNeKontaktas.getValues();
  let rowCountPapildomaNeKontaktas = rangePapildomaNeKontaktas.getRowCount();

  for (let i = 1; i < rowCountPapildomaNeKontaktas; i++) {
    // The column at index 3 is column "4" in the worksheet.

    if (rangeValuesPapildomaNeKontaktas[i][1].toString().length > 3) {

      nekontaktas.push({
        Eil: rangeValuesPapildomaNeKontaktas[i][0], Dalykas: rangeValuesPapildomaNeKontaktas[i][1], Grupe: rangeValuesPapildomaNeKontaktas[i][2],
        VISOSTUDENTU: rangeValuesPapildomaNeKontaktas[i][3], Semestras: rangeValuesPapildomaNeKontaktas[i][4], Tarpiniai_Sk: rangeValuesPapildomaNeKontaktas[i][5],
        Tarpiniai_val: rangeValuesPapildomaNeKontaktas[i][6], Savarankiski_darbai: rangeValuesPapildomaNeKontaktas[i][7],
        PraktikosAtaskaitos: rangeValuesPapildomaNeKontaktas[i][8], NuotolinisMokymasis: rangeValuesPapildomaNeKontaktas[i][9], KursiniaiDarbai: rangeValuesPapildomaNeKontaktas[i][10],
        Egzaminas: rangeValuesPapildomaNeKontaktas[i][11], Kita: rangeValuesPapildomaNeKontaktas[i][12], VisoNekontaktas: rangeValuesPapildomaNeKontaktas[i][13], Destytojas: name,
        Katedra: ""
      })
    }
  }
    console.log(nekontaktas)
    console.log(kontaktas)
  }


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

  

