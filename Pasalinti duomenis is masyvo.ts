function main(workbook: ExcelScript.Workbook) {

	const finalSheet = workbook.getWorksheet("VK02DE");
	const finalTable = finalSheet.getTables()[0];


	let rowCount = finalTable.getRangeBetweenHeaderAndTotal().getRowCount();
	try {
		finalTable.deleteRowsAt(0, rowCount);
	} catch (e) {
		if (rowCount === 1 && e.code === 'InvalidArgument') {
			console.log("This error means there's no row to delete.")
		}
	}
}
