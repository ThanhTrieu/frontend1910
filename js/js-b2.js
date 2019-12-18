// dinh ham trong js
// cac ham do LTV tu dinh nghia
// cu phap : funtion + nameFunction(params..) {}
function kiemTraChanLe(number = 12) {
	// than ham - xu ly cac logic
	if(number % 2 == 0) {
		return true;
	}
	return false;
}

//su dung ham da dc dinh nghia
let check = kiemTraChanLe(11);
console.log(check, typeof check);
// cho biet tu 1 - 100 co bao nhieu so la boi so chung cua 2 va 3
// viet ham xu ly yeu cau
function timBoiSoChung(n, m){
	let count = 0;
	for(let i = n; i <= m; i++){
		if(i % 2 == 0 && i % 3 == 0){
			count++;
		}
	}
	return count;
}

let result = timBoiSoChung(1,100);
console.log('boi so chung cua 2 va 3 tu 1 toi 100 la ' + result);

/**************  function literals *****************/

let sumNumber = function(a, b){
	return a+b;
}
console.log(typeof sumNumber);
// in ra tat ca cac so nguyen to tu 1 - 100;
// viet ham  function literals xu ly
// viet ham kiem tra so nguyen to (ham bo tro cho ham chinh)
let kiemTraSoNguyenTo = function(number){
	if(number <= 1){
		return false;
	}

	if (number == 2) {
		return true;
	}

	let limit = Math.sqrt(number);
	for(let i = 2; i <= limit; i++){
		if(number % i == 0){
			return false;
		}
	}
	return true;
}

let hienThiCacSoNguyenTo = function(n, m){
	let result = '';
	for(let i = n; i <= m; i++){
		if(kiemTraSoNguyenTo(i)){
			result += (result == '') ? i : ',' + i;
		} 
	}
	return result;
}

let kiemTraSoChinhPhuong = function(number){
	let result = Math.sqrt(number);
	if(result % 1 == 0){
		return true;
	}
	return false;
}
// viet ham giai phuong trinh bac hai

let giaiPTBH = function(a,b,c){
	let delta = (b*b) - (4*a*c);
	if(delta < 0){
		return false;
	} else if(delta == 0){
		let x = (-b)/(2*a);
		return "PT co nghiem kep = " + x;
	} else {
		let x1 = ((-b) + Math.sqrt(delta))/(2*a);
		let x2 = ((-b) - Math.sqrt(delta))/(2*a);
		return "PT co 2 nghiem phan biet x1 = " + x1 + " va x2 = " + x2;
	}
}

let nghiem = giaiPTBH(2,4,2);
if(nghiem === false) {
	console.log('Vo nghiem');
} else {
	console.log(nghiem);
}
/*********************** Number trong js ************************/

/*
let n1 = prompt('nhap so thu nhat');
n1 = Number.parseInt(n1); // ep n1 ve so nguyen

let n2 = prompt('nhap so thu hai');
n2 = Number.parseInt(n2);

let total = n1 + n2;
alert('Tong 2 so la ' + total);

// kiem tra 1 so co phai la so nguye ko?
if(Number.isInteger(total)){
	console.log('Yes');
} else {
	console.log('No');
}

let n3 = prompt('nhap so thu 3');

if(isNaN(n3)){
	console.log('OK');
} else {
	console.log('ERR');
}

let n4 = prompt('hay chu cai vao');
n4 = Number.parseInt(n4);
console.log(n4, typeof(n4));
if(Number.isNaN(n4)){
	console.log('AAAAAA');
} else {
	console.log('BBBBBB');
}
let test = 4/0;
console.log(test, typeof(test));
*/

/**************** Array JS ***********************/
let numbers = new Array(1,2,3,4,5,6,7,8,9);
let fruits = ['cam','quyt','mit','dua','le','tao','oi'];
let mangDaChieu = [
	[1,2,3],
	'cam',
	'quyt',
	['le','oi',[100,300,400]]
];
let mangDaChieu2 = new Array(
	Array(1,2,3),
	'cam',
	'quyt',
	Array('le','oi')
);
// dem so luong phan tu nam trong mang
let countElements = numbers.length;
console.log(countElements);
// truy cap vao 1 phan tu trong mang
// cu phap : nameArray[index];
console.log(fruits[4]);
console.log(mangDaChieu[3][2][2]);


