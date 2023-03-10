let records: StudyPlan[] = [];
let groups: GroupPlan[] = [];
let vkdeFormData: VKDE01[] = [];
function main(workbook: ExcelScript.Workbook) : string {
  let sheets: Array<string> = ['Studijų planas (Dieninis)', 'Studijų planas (English)']
 
  for(let sheet of sheets){
    createStudyPlan(sheet, workbook);
  }
  const currentSheet = workbook.getWorksheet("VK01DE");
  const table = currentSheet.getTables()[0];
  const range = table.getRange();
  let rows = range.getValues();

  for (let row of records) {
    // table.addRow(-1, 
    // [
    //   row.Eil, 
    //   row.Pavadinimas,
    //   row.Semestras,
    //   row.P1,
    //   row.Pr1,
    //   1,
    //   0,
    //   0,
    //   "E",
    //   0,
    //   0,
    //   99,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   0,
    //   77,
    //   88,
    //   "E",
    //   row.Kreditai,
    //   row.DalykoKatedra
    // ]);
    //console.log(row.Semestras);
  }



  for (let row of rows) {

  let [Eil, Dalykas, Semestras, DPaskaitos, DPraktikumaiValandos, DPraktikumaiPogrupiai, NPaskaitos, NPraktikumai, Egzaminas, Kita, Konsultacijos, VisoKontaktas, TarpSkaicius, TarpValandos, SavarankiskasDarbas, PraktikosAtaskaitos, KursiniaiDarbai, NekontaktinisEgzaminas, NekontaktinisKita, NekontaktinisViso, Viso, AtsiskaitymoForma, Kreditai, Pastabos] = row;

  vkdeFormData.push({
    Eil:Eil, Dalykas:Dalykas, Semestras:Semestras, DPaskaitos:DPaskaitos,
    DPraktikumaiValandos:DPraktikumaiValandos, DPraktikumaiPogrupiai: DPraktikumaiPogrupiai, NPaskaitos: NPaskaitos, NPraktikumai:NPraktikumai, Egzaminas:Egzaminas, Kita:Kita, Konsultacijos:Konsultacijos, VisoKontaktas:VisoKontaktas, TarpSkaicius:TarpSkaicius, TarpValandos:TarpValandos,
    SavarankiskasDarbas: SavarankiskasDarbas, PraktikosAtaskaitos:PraktikosAtaskaitos,
    KursiniaiDarbai:KursiniaiDarbai, NekontaktinisEgzaminas:NekontaktinisEgzaminas, NekontaktinisKita:NekontaktinisKita, NekontaktinisViso:NekontaktinisKita, Viso:Viso, AtsiskaitymoForma:AtsiskaitymoForma, Kreditai:Kreditai, Pastabos:Pastabos
  })
}

  
  //table.addRow(0, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]);
  //const range = table.getRange();
  //let rows = range.getValues();


  const otherSheet = workbook.getWorksheet("Grupių planas");
  const otherTable = otherSheet.getTables()[0];
  const otherRange = otherTable.getRange();
  let otherRows = otherRange.getValues();

  

  for (let row of otherRows) {

    let [Grupe, Semestras, VF, VNF, StudentuSk, ArStrautas, Fakultetas,
    StudijuPrograma, StudijuForma, KuruojantiKatedra, Laikotarpis] = row;

    groups.push({
     Grupe: Grupe, Semestras:Semestras, VF:VF, VNF:VNF, 
     StudentuSk:StudentuSk,ArStrautas:ArStrautas, Fakultetas:Fakultetas,StudijuPrograma: StudijuPrograma,StudijuForma: StudijuForma, 
     KuruojantiKatedra: KuruojantiKatedra, Laikotarpis: Laikotarpis
    })

  }

  const finalSheet = workbook.getWorksheet("VK02DE");
  const finalTable = finalSheet.getTables()[0];



for(let row of vkdeFormData){
  for (let col of groups) {
    if (+col.Semestras.toString() == 1 && +row.Semestras.toString() == 1 && col.Grupe.toString().includes("22")){

      let total_students = +col.VF.toString() + +col.VNF.toString();
    finalTable.addRow(-1, 
    [
      row.Eil, row.Dalykas, col.Grupe, col.VF, col.VNF,total_students, col.Semestras,
      row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
      row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, row.VisoKontaktas,
      row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
      row.NekontaktinisKita, row.NekontaktinisViso, row.Viso, ""
    ]);
    }
}
}
  console.log(JSON.stringify(groups));

  //console.log(JSON.stringify(records));
  return JSON.stringify(records);  
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
  

