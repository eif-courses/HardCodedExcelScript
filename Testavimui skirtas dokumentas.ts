function main(workbook: ExcelScript.Workbook, jsonData: object[]) {
	

	const subjects: VKDE02[] = jsonData[0] as VKDE02[];

	const finalSheet = workbook.getWorksheet("VK02DE");
	const finalTable = finalSheet.getTables()[0];

	let counter = 1;
	for (let row of subjects) {

		finalTable.addRow(-1,
			[
				counter,
				row.Dalykas,
				row.Grupe,
				row.VF,
				row.VNF,
				null,
				row.Semestras,
				row.DPaskaitos,
				row.DPraktikumaiValandos,
				row.DPraktikumaiPogrupiai,
				row.NPaskaitos,
				row.NPraktikumai,
				null,
				row.Kita,
				row.Konsultacijos,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				row.Destytojas,
				row.Katedra
			]);
		counter++;
	}
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


