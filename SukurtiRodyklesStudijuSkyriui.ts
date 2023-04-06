function main(workbook: ExcelScript.Workbook) {


  const currentSheet = workbook.getWorksheet("VK02DE");
  const table = currentSheet.getTables()[0];
  const range = table.getRange();
  let rows = range.getValues();


  let groupedData = {};

  for (let row of rows) {

    let [
      Eil,
      Dalykas,
      Grupe,
      VF,
      VNF,
      VISOSTUDENTU,
      Semestras,
      DPaskaitos,
      DPraktikumaiValandos,
      DPraktikumaiPogrupiai,
      NPaskaitos,
      NPraktikumai,
      Egzaminas,
      Kita,
      Konsultacijos,
      VisoKontaktas,
      TarpSkaicius,
      TarpValandos,
      SavarankiskasDarbas,
      PraktikosAtaskaitos,
      KursiniaiDarbai,
      NekontaktinisEgzaminas,
      NekontaktinisKita,
      NekontaktinisViso,
      Viso,
      Destytojas,
      Katedra,
      KiekSavaitiniuPaskaitu] = row;

    const department = Katedra;
    const group = Grupe;
    const semester = Semestras;
    const year = getYear(+Semestras);

    if (!groupedData[+department]) {
      groupedData[+department] = {};
    }

    if (!groupedData[+department][group]) {
      groupedData[+department][group] = {};
    }

    if (!groupedData[+department][group][year]) {
      groupedData[+department][group][year] = [];
    }
    groupedData[+department][group][year].push(row);
  };
  for (const department in groupedData) {
   // console.log(`Department: ${department}`);
    for (const group in groupedData[department]) {
      //console.log(`\tGroup: ${group}`);
      for (const year in groupedData[department][group]) {
        //console.log(`\t\tYear: ${year}`);

        //console.log(groupedData[department][group][year]);
        if(group.length > 2){
      
          workbook.getWorksheet(group)?.delete();
          const newSheet = workbook.addWorksheet(group);
          newSheet.setTabColor("blue");
          
         
          let headers = [["Eil",
            "Dalykas",
            "Grupe",
            "VF",
            "VNF",
            "VISOSTUDENTU",
            "Semestras",
            "DPaskaitos",
            "DPraktikumaiValandos",
            "DPraktikumaiPogrupiai",
            "NPaskaitos",
            "NPraktikumai",
            "Egzaminas",
            "Kita",
            "Konsultacijos",
            "VisoKontaktas",
            "TarpSkaicius",
            "TarpValandos",
            "SavarankiskasDarbas",
            "PraktikosAtaskaitos",
            "KursiniaiDarbai",
            "NekontaktinisEgzaminas",
            "NekontaktinisKita",
            "NekontaktinisViso",
            "Viso",
            "Destytojas",
            "Katedra",
            "KiekSavaitiniuPaskaitu"]];

          // Convert the data to a Range object
          let dataRange: ExcelScript.Range = newSheet.getRange("B1:AC1");
          dataRange.setValues(headers);
          
          
          //for (const it in groupedData[department][group][year]){
          //console.log(groupedData[department][group][year]);
          //}


          // Add the table to the new sheet
          let table: ExcelScript.Table = newSheet.addTable(dataRange, true);

          for (let i = 0; i < groupedData[department][group][year].length; i++) {
  
            table.addRow(i, groupedData[department][group][year][i]);
            // for (let j = 0; j < groupedData[department][group][year][i].length; j++) {
            //   //console.log(groupedData[department][group][year][i][j]);
            //   //dataRange.getCell(0, j);
            //   //dataRange.setValue(groupedData[department][group][year][i][j]);
            //   //console.log(groupedData[department][group][year][i][j])
             
            //   //table.addRow(i, groupedData[department][group][year][i][j]);
            // }
          }
    
        }
      }
    }
  
  }
    // Your code here
}

function getYear(semester: number): number {
  return Math.ceil(semester / 2);
}

interface VKDE02 {
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
  Katedra: (string | number | boolean),
  KiekSavaitiniuPaskaitu: (string | number | boolean)
}
