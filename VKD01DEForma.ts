let records: StudyPlan[] = [];
let vkdeFormData: VKDE01[] = [];
function main(workbook: ExcelScript.Workbook) {
  let sheets: Array<string> = ['Studijų planas (Dieninis)']
 
  for(let sheet of sheets){
    createStudyPlan(sheet, workbook);
  }
  const currentSheet = workbook.getWorksheet("VK01DE");
  const table = currentSheet.getTables()[0];
  const range = table.getRange();
  let rows = range.getValues();
  
  let counter = 1;

  for (let row of records) {
    switch (row.Semestras) {
      case 1:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 2:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 3:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 4:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 5:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 6:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
      case 7:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Tipas, row.Kreditai, row.DalykoKatedra]);
        break;
    }
    counter++;
    //console.log(row.Semestras);
  }
}

function createStudyPlan(name:string, workbook: ExcelScript.Workbook){
  // Get the first table on the current worksheet.
  const currentSheet = workbook.getWorksheet(name);
  const table = currentSheet.getTables()[0];
  const range = table.getRange();
  let rows = range.getValues();
  //const rowCount = range.getRowCount();
  //const columnCount = range.getColumnCount();
 
  for (let row of rows) {
    //for (let i = 0; i < rowCount; i++) {
    //let row = range.getRow(i);
    // let temp = range.getCell(i, 40).getValue();
    let [
      Eil,
      Pavadinimas,
      Tipas,
      P1,
      Pr1,
      S1,
      Kr1,
      V1,
      P2,
      Pr2,
      S2,
      Kr2,
      V2,
      P3,
      Pr3,
      S3,
      Kr3,
      V3,
      P4,
      Pr4,
      S4,
      Kr4,
      V4,
      P5,
      Pr5,
      S5,
      Kr5,
      V5,
      P6,
      Pr6,
      S6,
      Kr6,
      V6,
      P7,
      Pr7,
      S7,
      Kr7,
      V7,
      Valandos,
      Kreditai,
      Semestras,
      DalykoKatedra
    ] = row;

    if (Number.isInteger(Semestras)) {
      records.push({
        Eil: Eil,
        Pavadinimas: Pavadinimas,
        Tipas: Tipas,
        P1: P1,
        Pr1: Pr1,
        S1: S1,
        Kr1: Kr1,
        V1: V1,
        P2: P2,
        Pr2: Pr2,
        S2: S2,
        Kr2: Kr2,
        V2: V2,
        P3: P3,
        Pr3: Pr3,
        S3: S3,
        Kr3: Kr3,
        V3: V3,
        P4: P4,
        Pr4: Pr4,
        S4: S4,
        Kr4: Kr4,
        V4: V4,
        P5: P5,
        Pr5: Pr5,
        S5: S5,
        Kr5: Kr5,
        V5: V5,
        P6: P6,
        Pr6: Pr6,
        S6: S6,
        Kr6: Kr6,
        V6: V6,
        P7: P7,
        Pr7: Pr7,
        S7: S7,
        Kr7: Kr7,
        V7: V7,
        Valandos: Valandos,
        Kreditai: Kreditai,
        Semestras: Semestras,
        DalykoKatedra: DalykoKatedra,
      })
    }
  }
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
  

