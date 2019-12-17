/*
document.write('<h1>Hello word</h1>');
alert('Hello You !');
console.log('Hi LPHP1910E');
var myName =  prompt('moi nhap ho ten');
document.write('Ten toi la ' + myName);
*/

// comment tren 1 dong
/*
coment
tren nhieu dong
 */
// cac kieu du lieu trong js
// 1- kieu number
var number = 3.14; 
// var tu khoa khai bao bien
// kiem tra xem kieu du lieu cua bien
console.log(typeof number);

// 2 - string
var myName = "nguyen van teo";
console.log(typeof(myName));

// 3 - boolean
var checking = true;
console.log(typeof checking);

// 4 - undefined
var myAge;
console.log(typeof myAge);

var myAddress = null; // myAddress = ''
console.log(typeof myAddress);

var a = 10;
var b = '10b';
var c = a - b;
console.log(c);

/////////////// khai bao bien ///////////////////////
// 1 - var
// var 123abc = 'test'; // sai ko dc phep bat dau bang so
// var while  : // sai trung tu khoa
var homNayTroiDep = 'sasdas';
// var HomNayTroiDep = 'sassasa';
// var hom_nay_troi_dep = 'sadasas';
// ko nen dung
var homnayTroiDep = 'saassa';
// bien trong js phan biet chu hoa - chu thuong
var myMoney = 10;
myMoney = 20;
console.log(myMoney);

let myCompany = 'Abc';
//let myCompany = 'Efg'; // ko dc phep override lai bien do
myCompany = 'Efg';
console.log(myCompany);
// luc nay let va var no ko nam trong ham nen pham vi hoat dong la nhu nhau


function testFunction(){
	let myNumber = 10;
	
	if(true){
		let myNumber = 20;
		console.log(myNumber);
	}

	console.log(myNumber);
}
testFunction();

// const
const PI = 3.14;
// PI = 3.35; sai
console.log(PI);

let numberCheck = 10;

if(numberCheck == 9){
	console.log('ok');
} else {
	console.log('Fail');
}

if(numberCheck == 9){
	// do something
} else if(numberCheck == 8){
	// do something
} else if (numberCheck == 10) {
	// do something
} else if (numberCheck == 11){
	// do something
} else {
	// do something
}

switch (numberCheck) {
	case 9:
		// statements_1
		break;
	case 8:
		// statements_1
		break;
	case 10:
		// statements_1
		break;
	case 11:
		// statements_1
		break;
	default:
		// statements_def
		break;
}
// next

// cac vong lap
for(let i = 0; i <= 100; i++) {
	// in ra tat ca cac so chan
	if(i % 2 == 0){
		console.log(i);
	}
}

let demo = 0;
while(demo <= 100) {
	if(demo % 2 == 0){
		console.log(demo);
	}
	demo++;
}

// do {
// 	console.log(demo);
// 	demo++;
// } while(demo < 1);

let myString = '';
// ve mat gia tri 0 == '' == false 
// ve mat gia tri 1 == true
if(myString === false){
	console.log('Yes');
} else {
	console.log('No');
}

let x = 10;
let y = 20;
//let m = (x-y > y-x) ? (x/y) : (y%x == 0 ? y*x : y/x);
//console.log(m);
if(x-y > y-x){
	let m = x/y;
} else {
	if(y%x == 0){
		let m = y*x;
	} else {
		let m = y/x;
	}
}

let i = 10;
let j = 9;
let k = (i++) - (j++) + (++i) + (++j) - (--i) - (--j);
//       10   -   9   +   12  +   11  -   11   -   10
console.log(k);
// 1
// 3
// 1
















