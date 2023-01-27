Group elements from object array and read it 

function main(workbook: ExcelScript.Workbook) {

	const lectures: Lecture[] = [
		{ name: "Užsienio kalba (anglų k.)", group: "A" },
		{ name: "Užsienio kalba (anglų k.)", group: "B" },
		{ name: "Užsienio kalba (anglų k.)", group: "C" },
		{ name: "Informatikos įvadas", group: "AA" },
		{ name: "Informatikos įvadas", group: "BB" },
		{ name: "Informatikos įvadas", group: "S" },
	];

	// @ts-ignore
	const groupedLectures = lectures.filter(lecture => !lecture.group.includes("S"))
		.reduce((acc: { [key: string]: Lecture[] }, curr) => {
			const group = curr.name;
			if (!acc[group]) {
				acc[group] = [curr];
			} else {
				acc[group].push(curr);
			}
			return acc;
		}, {});

	const keys = Object.keys(groupedLectures);
	keys.forEach(key => {
		console.log(key); // prints the key of the property
		let group: string ="";
		groupedLectures[key].forEach(lecture => {
			group += lecture.group + ", ";
			 // prints each lecture in the array
		});
		console.log(group);
		group = "";
	});
	
}
interface Lecture {
	name: string;
	group: string;
}
