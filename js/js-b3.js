let cars = {
	name: "BMW",
	model: "I8",
	color: "blue",
	money: 10000,
	start: function(hour){
		return hour
	},
	stop: function(hour){
		return hour
	}
};

let nameCar = cars.name;
console.log(nameCar);
let h = cars.start(6);
console.log(h);
let money = cars['money'];
console.log(money);

let students = {
	monhoc: [
		{name: "Toan", diem: 9},
		{name: "Ly", diem: 8},
		{name: "Hoa", diem: 10}
	],
	time: {t: "am", ten: "abc"},
	name: "Van A",
	age: 20
}
console.log(students);
let diem = students.monhoc[2].diem;
let diem2 = students['monhoc'][2]['diem'];
console.log(diem, diem2);

let cats = {
	name: "Tom",
	color: "black",
	age: 3,
	weight: 2
}

for(let i in cats) {
	console.log(cats[i]);
}

let doctors = [
	{name: "Van A", age: 35, add: "Ha Noi", gender: 1, money: 100},
	{name: "Van B", age: 40, add: "Nam Dinh", gender: 0, money: 200},
	{name: "Van C", age: 45, add: "Phu Tho", gender: 0, money: 300},
];

let totalMoney = 0;
let table = '';
table += "<table border='1' width='100%'>";
doctors.forEach(function(item, key) {
	let gender = item.gender == 1 ? "Nam" : "Nu";
	totalMoney += item.money;

	table += "<tr>";
		table += `<td>${item.name}</td>`;
		table += `<td>${item.age}</td>`;
		table += `<td>${item.add}</td>`;
		// table += `<td>${item.gender == 1 ? 'Nam' : 'Nu' }  </td>`;
		table += `<td>${gender}</td>`;
		table += `<td>${item.money}</td>`;
	table += "</tr>";
});
table += "<tr>";
	table +="<td colspan='4'>Tong tien luong</td>";
	table += `<td>${totalMoney}</td>`;
table += "</tr>";
table += "</table>";
document.write(table);


