function main(workbook: ExcelScript.Workbook) : VKDE02[]{
	//let arr = jsonData[0];
	let finalArray: VKDE02[] = [];	
  
	//const subjects: VKDE02[] = jsonData[0] as VKDE02[];

	// const finalSheet = workbook.getWorksheet("VK02DE");
	// const finalTable = finalSheet.getTables()[0];
	
	const currentSheet = workbook.getWorksheet("VK02DE");
	const table = currentSheet.getTables()[0];
	const range = table.getRange();
	let rows = range.getValues();

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
			Katedra] = row;

		finalArray.push({

			Eil:null,
			Dalykas:Dalykas,
			Grupe:Grupe,
			VF:VF,
			VNF:VNF,
			VISOSTUDENTU:null,
			Semestras:Semestras,
			DPaskaitos:DPaskaitos,
			DPraktikumaiValandos:DPraktikumaiValandos,
			DPraktikumaiPogrupiai:DPraktikumaiPogrupiai,
			NPaskaitos:NPaskaitos,
			NPraktikumai:NPraktikumai,
			Egzaminas:null,
			Kita:null,
			Konsultacijos:null,
			VisoKontaktas:null,
			TarpSkaicius:null,
			TarpValandos:null,
			SavarankiskasDarbas:null,
			PraktikosAtaskaitos:null,
			KursiniaiDarbai:null,
			NekontaktinisEgzaminas:null,
			NekontaktinisKita:null,
			NekontaktinisViso:null,
			Viso:null,
			Destytojas:Destytojas,
			Katedra:Katedra
			});
	}

//console.log(finalArray);

return finalArray;

	// let counter = 1;
	// for (let row of subjects) {

	// 	finalTable.addRow(-1,
	// 		[
	// 			counter,
	// 			row.Dalykas,
	// 			row.Grupe,
	// 			row.VF,
	// 			row.VNF,
	// 			null,
	// 			row.Semestras,
	// 			row.DPaskaitos,
	// 			row.DPraktikumaiValandos,
	// 			row.DPraktikumaiPogrupiai,
	// 			row.NPaskaitos,
	// 			row.NPraktikumai,
	// 			null,
	// 			row.Kita,
	// 			row.Konsultacijos,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			null,
	// 			row.Destytojas,
	// 			row.Katedra
	// 		]);
	// 	counter++;


	//arr.forEach((value, index) => {

	//	let temp: VKDE02[] = arr[index];
   // finalArray = finalArray.concat(temp);
		
//	});
  //console.log(finalArray);

	//}


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
	Katedra: (string | number | boolean)
}


