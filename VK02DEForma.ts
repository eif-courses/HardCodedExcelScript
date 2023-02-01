
function main(workbook: ExcelScript.Workbook) {
  let groups: GroupPlan[] = [];
  let vkdeFormData: VKDE01[] = [];
  let groupsSesijiniai: GroupPlan[] = [];
  let vkdeFormDataSesijiniai: VKDE01[] = [];
  let groupsDieniniai: GroupPlan[] = [];
  let vkdeFormDataDieniniai: VKDE01[] = [];


  const currentSheet = workbook.getWorksheet("VK01DE");
  const table = currentSheet.getTables()[0];
  const range = table.getRange();
  let rows = range.getValues();
  
  for (let row of rows) {


  let [Eil, Dalykas, Semestras, DPaskaitos, DPraktikumaiValandos, DPraktikumaiPogrupiai, NPaskaitos, NPraktikumai, Egzaminas, Kita, Konsultacijos, VisoKontaktas, TarpSkaicius, TarpValandos, SavarankiskasDarbas, PraktikosAtaskaitos, KursiniaiDarbai, NekontaktinisEgzaminas, NekontaktinisKita, NekontaktinisViso, Viso, AtsiskaitymoForma, Kreditai, Pastabos] = row;
    if (Pastabos.toString().toLowerCase().toString().includes('Engli'.toLowerCase())) {
  vkdeFormData.push({
    Eil:Eil, Dalykas:Dalykas, Semestras:Semestras, DPaskaitos:DPaskaitos,
    DPraktikumaiValandos:DPraktikumaiValandos, DPraktikumaiPogrupiai: DPraktikumaiPogrupiai, NPaskaitos: NPaskaitos, NPraktikumai:NPraktikumai, Egzaminas:Egzaminas, Kita:Kita, Konsultacijos:Konsultacijos, VisoKontaktas:VisoKontaktas, TarpSkaicius:TarpSkaicius, TarpValandos:TarpValandos,
    SavarankiskasDarbas: SavarankiskasDarbas, PraktikosAtaskaitos:PraktikosAtaskaitos,
    KursiniaiDarbai:KursiniaiDarbai, NekontaktinisEgzaminas:NekontaktinisEgzaminas, NekontaktinisKita:NekontaktinisKita, NekontaktinisViso:NekontaktinisKita, Viso:Viso, AtsiskaitymoForma:AtsiskaitymoForma, Kreditai:Kreditai, Pastabos:Pastabos
  });
  }
  else if (Pastabos.toString().toLowerCase().toString().includes('Dienin'.toLowerCase())) {
        vkdeFormDataDieniniai.push({
          Eil: Eil, Dalykas: Dalykas, Semestras: Semestras, DPaskaitos: DPaskaitos,
          DPraktikumaiValandos: DPraktikumaiValandos, DPraktikumaiPogrupiai: DPraktikumaiPogrupiai, NPaskaitos: NPaskaitos, NPraktikumai: NPraktikumai, Egzaminas: Egzaminas, Kita: Kita, Konsultacijos: Konsultacijos, VisoKontaktas: VisoKontaktas, TarpSkaicius: TarpSkaicius, TarpValandos: TarpValandos,
          SavarankiskasDarbas: SavarankiskasDarbas, PraktikosAtaskaitos: PraktikosAtaskaitos,
          KursiniaiDarbai: KursiniaiDarbai, NekontaktinisEgzaminas: NekontaktinisEgzaminas, NekontaktinisKita: NekontaktinisKita, NekontaktinisViso: NekontaktinisKita, Viso: Viso, AtsiskaitymoForma: AtsiskaitymoForma, Kreditai: Kreditai, Pastabos: Pastabos
        });
    }
    else if (Pastabos.toString().toLowerCase().toString().includes('Sesijin'.toLowerCase())) {
      vkdeFormDataSesijiniai.push({
        Eil: Eil, Dalykas: Dalykas, Semestras: Semestras, DPaskaitos: DPaskaitos,
        DPraktikumaiValandos: DPraktikumaiValandos, DPraktikumaiPogrupiai: DPraktikumaiPogrupiai, NPaskaitos: NPaskaitos, NPraktikumai: NPraktikumai, Egzaminas: Egzaminas, Kita: Kita, Konsultacijos: Konsultacijos, VisoKontaktas: VisoKontaktas, TarpSkaicius: TarpSkaicius, TarpValandos: TarpValandos,
        SavarankiskasDarbas: SavarankiskasDarbas, PraktikosAtaskaitos: PraktikosAtaskaitos,
        KursiniaiDarbai: KursiniaiDarbai, NekontaktinisEgzaminas: NekontaktinisEgzaminas, NekontaktinisKita: NekontaktinisKita, NekontaktinisViso: NekontaktinisKita, Viso: Viso, AtsiskaitymoForma: AtsiskaitymoForma, Kreditai: Kreditai, Pastabos: Pastabos
      });
    }

}

  const otherSheet = workbook.getWorksheet("Grupių planas");
  const otherTable = otherSheet.getTables()[0];
  const otherRange = otherTable.getRange();
  let otherRows = otherRange.getValues();

  let counter = 1;

  for (let row of otherRows) {

    let [Grupe, Semestras, VF, VNF, StudentuSk, ArStrautas, Fakultetas,
    StudijuPrograma, StudijuForma, KuruojantiKatedra, Laikotarpis] = row;

    if(StudijuForma.toString().toLowerCase().toString().includes('Engli'.toLowerCase())){
    groups.push({
     Grupe: Grupe, Semestras:Semestras, VF:VF, VNF:VNF, 
     StudentuSk:StudentuSk,ArStrautas:ArStrautas, Fakultetas:Fakultetas,StudijuPrograma: StudijuPrograma,StudijuForma: StudijuForma, 
     KuruojantiKatedra: KuruojantiKatedra, Laikotarpis: Laikotarpis
    });
    }
    else if (StudijuForma.toString().toLowerCase().toString().includes('Dienin'.toLowerCase())) {
      groupsDieniniai.push({
        Grupe: Grupe, Semestras: Semestras, VF: VF, VNF: VNF,
        StudentuSk: StudentuSk, ArStrautas: ArStrautas, Fakultetas: Fakultetas, StudijuPrograma: StudijuPrograma, StudijuForma: StudijuForma,
        KuruojantiKatedra: KuruojantiKatedra, Laikotarpis: Laikotarpis
      });
    }
    else if (StudijuForma.toString().toLowerCase().toString().includes('Sesijin'.toLowerCase())) {
      groupsSesijiniai.push({
        Grupe: Grupe, Semestras: Semestras, VF: VF, VNF: VNF,
        StudentuSk: StudentuSk, ArStrautas: ArStrautas, Fakultetas: Fakultetas, StudijuPrograma: StudijuPrograma, StudijuForma: StudijuForma,
        KuruojantiKatedra: KuruojantiKatedra, Laikotarpis: Laikotarpis
      });
    }
  }

  // const groupingSheet = workbook.getWorksheet("VK02DE");
  // const groupingTable = groupingSheet.getTables()[0];
  // const groupingRange = groupingTable.getRange();
  // let groupingRows = groupingRange.getValues();

  const finalSheet = workbook.getWorksheet("VK02DE");
  const finalTable = finalSheet.getTables()[0];

// && col.Grupe.toString().includes("22")

  for (let row of vkdeFormData) {
    for (let col of groups) {
      if (col.StudijuForma.toString().toLowerCase().includes('Engli'.toLowerCase())){
      if (+col.Semestras.toString() == +row.Semestras.toString()) {
      
        if(col.Grupe.toString().length > 10){
          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
              row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
            counter++;
        } 
        else if (col.StudijuForma.toString().toLowerCase().includes('Engli'.toLowerCase())){
          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
              row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
            counter++;
        }
        else{
          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
              null, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
        }
       
      } else if (+col.Semestras + 1 == +row.Semestras) {
        
          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, row.Semestras,
              row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
        counter++;
        // console.log(col.Grupe + ' ' + row.Semestras + ' ' + row.Dalykas);
      }
    }
    }
  }


  for (let row of vkdeFormDataDieniniai) {
    for (let col of groupsDieniniai) {
      if (col.StudijuForma.toString().toLowerCase().includes('Dienin'.toLowerCase())) {
        if (+col.Semestras.toString() == +row.Semestras.toString()) {

          if (col.Grupe.toString().length > 10) {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
            counter++;
          }
          else if (col.StudijuForma.toString().toLowerCase().includes('Dienin'.toLowerCase())) {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
            counter++;
          }
          else {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                null, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
          }

        } else if (+col.Semestras + 1 == +row.Semestras) {

          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, row.Semestras,
              row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
          counter++;
          // console.log(col.Grupe + ' ' + row.Semestras + ' ' + row.Dalykas);
        }
      }
    }
  }


  for (let row of vkdeFormDataSesijiniai) {
    for (let col of groupsSesijiniai) {
      if (col.StudijuForma.toString().toLowerCase().includes('Sesijin'.toLowerCase())) {
        if (+col.Semestras.toString() == +row.Semestras.toString()) {

          if (col.Grupe.toString().length > 10) {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
            counter++;
          }
          else if (col.StudijuForma.toString().toLowerCase().includes('Sesijin'.toLowerCase())) {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
            counter++;
          }
          else {
            finalTable.addRow(-1,
              [
                counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, col.Semestras,
                "", row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
                row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
                row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
                row.NekontaktinisKita, null, null, null, row.Pastabos
              ]);
          }

        } else if (+col.Semestras + 1 == +row.Semestras) {

          finalTable.addRow(-1,
            [
              counter, row.Dalykas, col.Grupe, col.VF, col.VNF, null, row.Semestras,
              row.DPaskaitos, row.DPraktikumaiValandos, row.DPraktikumaiPogrupiai,
              row.NPaskaitos, row.NPraktikumai, row.Egzaminas, row.Kita, row.Konsultacijos, null,
              row.TarpSkaicius, row.TarpValandos, row.SavarankiskasDarbas, row.PraktikosAtaskaitos, row.KursiniaiDarbai, row.NekontaktinisEgzaminas,
              row.NekontaktinisKita, null, null, null, row.Pastabos
            ]);
          counter++;
          // console.log(col.Grupe + ' ' + row.Semestras + ' ' + row.Dalykas);
        }
      }
    }
  }




//  console.log(JSON.stringify(groups));

  // console.log(JSON.stringify(records));
  // return JSON.stringify(records);  
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
  

