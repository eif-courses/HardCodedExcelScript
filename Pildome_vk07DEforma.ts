
function main(workbook: ExcelScript.Workbook, pagrindineDuomenys: object[]) {
  
  const forma = workbook.getWorksheet("VK07DE forma");
 
  
  const duomenys: Duomenys[] = pagrindineDuomenys[0] as Duomenys[];
  

console.log(duomenys);

  // const duomenys: Duomenys[] = [
  //   {
  //     "PAB": 7.09,
  //     "PAB_VF": 0.36,
  //     "DVI_PAB_VF": 0.36,
  //     "PEN_PAB_VF": 0.28,
  //     "PAB_VNF": 0.2,
  //     "DVI_PAB_VNF": 0.1,
  //     "PEN_PAB_VNF": 0.2,
  //     "VardasPavarde": "Marius Gžegoževskis"
  //   },
  //   {
  //     "PAB": 7.09,
  //     "PAB_VF": 0.36,
  //     "DVI_PAB_VF": 0.36,
  //     "PEN_PAB_VF": 0.28,
  //     "PAB_VNF": 0.2,
  //     "DVI_PAB_VNF": 0.1,
  //     "PEN_PAB_VNF": 0.2,
  //     "VardasPavarde": "Pranas Pranaitis"
  //   }
  // ]

  let range = forma.getUsedRange();
  // let values = range.getValues();
  // let findCell = range.find("Su darbo krūviu susipažinau", {
  //   completeMatch: true,
  // });
 
  //const result = "L" + (findCell.getRowIndex() + 1).toString();

  const profesorius = forma.getRange("C13");
  const docentas = forma.getRange("C16");
  const docentas_menininkas = forma.getRange("C19");
  const lektorius_daktaras = forma.getRange("C22");
  const lektorius_padidintas = forma.getRange("C25");
  const lektorius = forma.getRange("C28");
  const asistentas_magistras = forma.getRange("C31");
  const asistentas = forma.getRange("C34");


  let matchValues = [
    profesorius.getValue(),
    docentas.getValue(),
    docentas_menininkas.getValue(),
    lektorius_daktaras.getValue(),
    lektorius_padidintas.getValue(),
    lektorius.getValue(),
    asistentas_magistras.getValue(),
    asistentas.getValue()
  ];
  let resultVF: number[] = [];
  let resultVFdvidesimt: number[] = [];
  let resultVFPenkesdesimt: number[] = [];
  let resultVNF: number[] = [];
  let resultVNFdvidesimt: number[] = [];
  let resultVNFPenkesdesimt: number[] = [];


  // Calculate the sum for each matched value
  matchValues.forEach((matchValue) => {
    let sum:number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.PAB_VF;
      }
      return accumulator;
    }, 0);

    resultVF.push(sum);
  });

  matchValues.forEach((matchValue) => {
    let sum: number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.DVI_PAB_VF;
      }
      return accumulator;
    }, 0);

    resultVFdvidesimt.push(sum);
  });
  matchValues.forEach((matchValue) => {
    let sum: number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.PEN_PAB_VF;
      }
      return accumulator;
    }, 0);

    resultVFPenkesdesimt.push(sum);
  });


  // Calculate the sum for each matched value
  matchValues.forEach((matchValue) => {
    let sum: number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.PAB_VNF;
      }
      return accumulator;
    }, 0);

    resultVNF.push(sum);
  });

  matchValues.forEach((matchValue) => {
    let sum: number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.DVI_PAB_VNF;
      }
      return accumulator;
    }, 0);

    resultVNFdvidesimt.push(sum);
  });

  matchValues.forEach((matchValue) => {
    let sum: number = duomenys.reduce((accumulator, currentValue) => {
      if (+currentValue.PAB === matchValue && currentValue.VardasPavarde.toString().length > 5) {
        accumulator += +currentValue.PEN_PAB_VNF;
      }
      return accumulator;
    }, 0);

    resultVNFPenkesdesimt.push(sum);
  });


  profesorius.getOffsetRange(0, 2).setValue(resultVF[0]);
  profesorius.getOffsetRange(0, 3).setValue(resultVNF[0]);
  profesorius.getOffsetRange(1, 2).setValue(resultVFdvidesimt[0]);
  profesorius.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[0]);
  profesorius.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[0]);
  profesorius.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[0]);



  docentas.getOffsetRange(0, 2).setValue(resultVF[1]);
  docentas.getOffsetRange(0, 3).setValue(resultVNF[1]);
  docentas.getOffsetRange(1, 2).setValue(resultVFdvidesimt[1]);
  docentas.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[1]);
  docentas.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[1]);
  docentas.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[1]);


  docentas_menininkas.getOffsetRange(0, 2).setValue(resultVF[2]);
  docentas_menininkas.getOffsetRange(0, 3).setValue(resultVNF[2]);
  docentas_menininkas.getOffsetRange(1, 2).setValue(resultVFdvidesimt[2]);
  docentas_menininkas.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[2]);
  docentas_menininkas.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[2]);
  docentas_menininkas.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[2]);

  lektorius_daktaras.getOffsetRange(0, 2).setValue(resultVF[3]);
  lektorius_daktaras.getOffsetRange(0, 3).setValue(resultVNF[3]);
  lektorius_daktaras.getOffsetRange(1, 2).setValue(resultVFdvidesimt[3]);
  lektorius_daktaras.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[3]);
  lektorius_daktaras.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[3]);
  lektorius_daktaras.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[3]);


  lektorius_padidintas.getOffsetRange(0, 2).setValue(resultVF[4]);
  lektorius_padidintas.getOffsetRange(0, 3).setValue(resultVNF[4]);
  lektorius_padidintas.getOffsetRange(1, 2).setValue(resultVFdvidesimt[4]);
  lektorius_padidintas.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[4]);
  lektorius_padidintas.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[4]);
  lektorius_padidintas.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[4]);

  lektorius.getOffsetRange(0, 2).setValue(resultVF[5]);
  lektorius.getOffsetRange(0, 3).setValue(resultVNF[5]);
  lektorius.getOffsetRange(1, 2).setValue(resultVFdvidesimt[5]);
  lektorius.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[5]);
  lektorius.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[5]);
  lektorius.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[5]);


  asistentas_magistras.getOffsetRange(0, 2).setValue(resultVF[6]);
  asistentas_magistras.getOffsetRange(0, 3).setValue(resultVNF[6]);
  asistentas_magistras.getOffsetRange(1, 2).setValue(resultVFdvidesimt[6]);
  asistentas_magistras.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[6]);
  asistentas_magistras.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[6]);
  asistentas_magistras.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[6]);



  asistentas.getOffsetRange(0, 2).setValue(resultVF[7]);
  asistentas.getOffsetRange(0, 3).setValue(resultVNF[7]);
  asistentas.getOffsetRange(1, 2).setValue(resultVFdvidesimt[7]);
  asistentas.getOffsetRange(1, 3).setValue(resultVNFdvidesimt[7]);
  asistentas.getOffsetRange(2, 2).setValue(resultVFPenkesdesimt[7]);
  asistentas.getOffsetRange(2, 3).setValue(resultVNFPenkesdesimt[7]);

}


interface Duomenys {
  PAB: (number | string),
  PAB_VF: (number | string),
  DVI_PAB_VF: (number | string),
  PEN_PAB_VF: (number | string),
  PAB_VNF: (number | string),
  DVI_PAB_VNF: (number | string),
  PEN_PAB_VNF: (number | string),
  VardasPavarde: (string | number | boolean)
}

  

