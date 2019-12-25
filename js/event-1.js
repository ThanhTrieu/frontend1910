function hello(name){
	alert('Hello word ' + name);
}
function demo(obj){
	//alert('day la hanh dong thu 2');
	console.log(obj);
}

function myFocus(){
	console.log('con tro chuot vua nhap nhay trong the input');
}

function myBlur(){
	console.log('con tro chuot ko nhap nhay trong the input');
}
function chooseGender(obj){
	let gender = obj.value;
	if(gender == 1){
		console.log('Ban vua chon gioi tinh Nam');
	} else if(gender == 2){
		console.log('Ban vua chon gioi tinh Nu');
	} else {
		console.log('Chua chon gioi tinh');
	}
}

function getText(obj) {
	let data = obj.value;
	console.log(data);
}
function myDblClick() {
	console.log('ban vua click dup chuot');
}

function myError() {
	console.log('trang web chua dc tai hoan tat');
}

function myKeydown(){
	//console.log('tay ban vua bam xuong ban phim')
}
function myKeypress(){
	//console.log('Tay ban vua giu ban phim');
}
function myKeyup(obj){
	//console.log('Tay ban vua buong ban phim');
	let data = obj.value;
	console.log(data);
}
function myOnload(obj){
	console.log('trang web vua tai hoan tat');
	//console.log(obj);
}

function myMousedown(){
	console.log('ban vua bam chuot');
}
function myMouseup(){
	console.log('ban vua buong chuot ra')
}

function myMousemove(){
	console.log('ban vua di chuyen chuot');
}
function myMouseover(){
	console.log('chuot vua di chuyen tren thanh phan');
}
function myMouseout(){
	console.log('chuot vua di ra ngoai thanh phan')
}
function zoomIn(obj){
	obj.width = 500;
	obj.height = 500;
}

function zoomOut(obj){
	obj.width = 10;
	obj.height = 10;
}
function myResize(){
	console.log('khung trinh duyet vua dc thay doi')
}

window.onbeforeunload = function(){
	return 'exits';
}


// truy cap vao the h1
// thong qua thuoc tinh id
let test = document.getElementById('title');
console.log(test);
// thong qua thuoc tinh class
let title2 = document.getElementsByClassName('title');
console.log(title2[1]);

// thong qua ten the
let title3 = document.getElementsByTagName('h1');
console.log(title3[1]);

// thong qua selector css
let title4 = document.querySelector('.title');
console.log(title4);
let title5 = document.querySelectorAll('h1');
console.log(title5[1]);


// gan su kien - ep lang nghe su kien cho button click me 3

let btn = document.getElementsByClassName('btn');
// btn[0];
// gan cho no 1 su kien click
btn[0].onclick = function(){
	// lay noi dung trong the h1 (phan text)
	let data = test.innerHTML = 'Dang hoc JS';
	// chuyen the input ve the button
	let myInput = document.getElementById('button');
	//myInput.type = 'button';
	myInput.setAttribute('type','button');
	let img = document.getElementsByTagName('img');
	img[0].src = '';
}

// lang nghe 1 su kien
// truyen ten su kien(ko co tien to "on")
btn[0].addEventListener('dblclick',function(){
	alert('vua click dup vao toi');
});


let input = document.getElementById('search');
input.onkeyup = function(){
	let data = this.value;
	console.log(`su kien keyup: ${data}`);
}

input.addEventListener('change', function(){
	let data = this.value;
	console.log(`su kien chage : ${data}`);
});



















