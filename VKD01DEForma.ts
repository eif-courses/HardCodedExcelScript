let records: StudyPlan[] = [];
let sesijiniaiRecords: StudyPlanSesijiniai[] = [];
let vkdeFormData: VKDE01[] = [];
function main(workbook: ExcelScript.Workbook) {
  let sheets: Array<string> = []
  
  const allSheets = workbook.getWorksheets();

  allSheets.forEach(sheet => {
    if(sheet.getName().toLowerCase().includes('studij'.toLowerCase())){
      sheets.push(sheet.getName());
    }
  });

  for(let sheet of sheets){
     createStudyPlan(sheet, workbook);
  }
  const currentSheet = workbook.getWorksheet("VK01DE");
  const table = currentSheet.getTables()[0];
  //const range = table.getRange();
  //let rows = range.getValues();
  
  let counter = 1;

  for (let row of records) {
    switch (row.Semestras) {
      case 1:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P1, row.Pr1, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V1, row.Kreditai, row.DalykoKatedra]);
        break;
      case 2:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P2, row.Pr2, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V2, row.Kreditai, row.DalykoKatedra]);
        break;
      case 3:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P3, row.Pr3, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V3, row.Kreditai, row.DalykoKatedra]);
        break;
      case 4:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P4, row.Pr4, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V4, row.Kreditai, row.DalykoKatedra]);
        break;
      case 5:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P5, row.Pr5, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V5, row.Kreditai, row.DalykoKatedra]);
        break;
      case 6:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P6, row.Pr6, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V6, row.Kreditai, row.DalykoKatedra]);
        break;
      case 7:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.P7, row.Pr7, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, row.V7, row.Kreditai, row.DalykoKatedra]);
        break;
    }
    counter++;
    //console.log(row.Semestras);
  }

  for (let row of sesijiniaiRecords) {
    switch (row.Semestras) {
      case 1:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP1, row.KPr1, 1, row.NP1, row.NPr1, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra+'Sesijiniai']);
        break;
      case 2:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP2, row.KPr2, 1, row.NP2, row.NPr2, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
      case 3:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP3, row.KPr3, 1, row.NP3, row.NPr3, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
      case 4:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP4, row.KPr4, 1, row.NP4, row.NPr4, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
      case 5:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP5, row.KPr5, 1, row.NP5, row.NPr5, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
      case 6:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP6, row.KPr6, 1, row.NP6, row.NPr6, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
      case 7:
        table.addRow(-1, [counter, row.Pavadinimas, row.Semestras, row.KP7, row.KPr7, 1, row.NP7, row.NPr7, null, null, null, null, null, null, null, null, null, null, null, null, null, row.Vert, row.Kreditai, row.DalykoKatedra + 'Sesijiniai']);
        break;
    }
    counter++;
    //console.log(row.Semestras);
  }

}

function createStudyPlan(name:string, workbook: ExcelScript.Workbook){
  // Get the first table on the current worksheet.



  if(name.toLowerCase().includes('sesijin'.toLowerCase())){
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
        KP1,
        KPr1,
        NP1,
        NPr1,
        S1,
        Kr1,
        KP2,
        KPr2,
        NP2,
        NPr2,
        S2,
        Kr2,
        KP3,
        KPr3,
        NP3,
        NPr3,
        S3,
        Kr3,
        KP4,
        KPr4,
        NP4,
        NPr4,
        S4,
        Kr4,
        KP5,
        KPr5,
        NP5,
        NPr5,
        S5,
        Kr5,
        KP6,
        KPr6,
        NP6,
        NPr6,
        S6,
        Kr6,
        KP7,
        KPr7,
        NP7,
        NPr7,
        S7,
        Kr7,
        Vert,
        Valandos,
        Kreditai,
        Semestras,
        DalykoKatedra
      ] = row;

      if (Number.isInteger(Semestras)) {

        sesijiniaiRecords.push({
          Eil: Eil,
          Pavadinimas: Pavadinimas,
          Tipas: Tipas,
          KP1: KP1,
          KPr1:KPr1,
          NP1: NP1,
          NPr1: NPr1,
          S1: S1,
          Kr1: Kr1,
          KP2:KP2,
          KPr2:KPr2,
          NP2:NP2,
          NPr2:NPr2,
          S2:S2,
          Kr2:Kr2,
          KP3:KP3,
          KPr3:KPr3,
          NP3:NP3,
          NPr3:NPr3,
          S3:S3,
          Kr3:Kr3,
          KP4:KP4,
          KPr4:KPr4,
          NP4:NP4,
          NPr4:NPr4,
          S4:S4,
          Kr4:Kr4,
          KP5:KP5,
          KPr5:KPr5,
          NP5:NP5,
          NPr5:NPr5,
          S5:S5,
          Kr5:Kr5,
          KP6:KP6,
          KPr6:KPr6,
          NP6:NP6,
          NPr6:NPr6,
          S6:S6,
          Kr6:Kr6,
          KP7:KP7,
          KPr7:KPr7,
          NP7:NP7,
          NPr7: NPr7,
          S7:S7,
          Kr7:Kr7,
          Vert:Vert,
          Valandos: Valandos,
          Kreditai:Kreditai,
          Semestras:Semestras,
          DalykoKatedra:DalykoKatedra
        })
      }
    }
  }else{
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
          DalykoKatedra: DalykoKatedra += name.toLowerCase().includes('English'.toLowerCase()) ? 'English' : 'Dieninis',
        })
      }
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
  
interface StudyPlanSesijiniai {
  Eil: (string | number | boolean),
  Pavadinimas: (string | number | boolean),
  Tipas: (string | number | boolean),
  KP1: (string | number | boolean),
  KPr1: (string | number | boolean),
  NP1: (string | number | boolean),
  NPr1: (string | number | boolean),
  S1: (string | number | boolean),
  Kr1: (string | number | boolean),
  KP2: (string | number | boolean),
  KPr2: (string | number | boolean),
  NP2: (string | number | boolean),
  NPr2: (string | number | boolean),
  S2: (string | number | boolean),
  Kr2: (string | number | boolean),
  KP3: (string | number | boolean),
  KPr3: (string | number | boolean),
  NP3: (string | number | boolean),
  NPr3: (string | number | boolean),
  S3: (string | number | boolean),
  Kr3: (string | number | boolean),
  KP4: (string | number | boolean),
  KPr4: (string | number | boolean),
  NP4: (string | number | boolean),
  NPr4: (string | number | boolean),
  S4: (string | number | boolean),
  Kr4: (string | number | boolean),
  KP5: (string | number | boolean), 
  KPr5: (string | number | boolean),
  NP5: (string | number | boolean),
  NPr5: (string | number | boolean),
  S5: (string | number | boolean),
  Kr5: (string | number | boolean),
  KP6: (string | number | boolean),
  KPr6: (string | number | boolean),
  NP6: (string | number | boolean),
  NPr6: (string | number | boolean),
  S6: (string | number | boolean),
  Kr6: (string | number | boolean),
  KP7: (string | number | boolean),
  KPr7: (string | number | boolean),
  NP7: (string | number | boolean),
  NPr7: (string | number | boolean),
  S7: (string | number | boolean),
  Kr7: (string | number | boolean)
  Vert: (string | number | boolean),
  Valandos: (string | number | boolean),
  Kreditai: (string | number | boolean),
  Semestras: (string | number | boolean),
  DalykoKatedra: (string | number | boolean)
}
