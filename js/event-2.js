let btn = document.getElementsByTagName('button');
btn[0].onclick = function(){
	let box = document.getElementsByClassName('box');
	box[0].style.width = '300px';
	box[0].style.height = '300px';
	box[0].style.border = '1px solid red';
	box[0].style.backgroundColor = 'yellow';
	box[0].style.marginTop = '30px';

	// lay ra kich thuoc cua khung trinh duyet ma nguoi dung dang lam viec
	let wBrowser = window.innerWidth;
	let hBrowser = window.innerHeight;

	console.log(`width: ${wBrowser} and Height: ${hBrowser}`);

	// mo ra 1 trang web moi
	window.open('https://vnexpress.net/','vnexpress','width=100px,height=100px');
}


let reloadPage = document.getElementById('clk');

reloadPage.addEventListener('click', function(){
	window.location.reload(true);
	// true : load lai trang web tu server ve
});

let fb = document.getElementById('facebook');
fb.addEventListener('click', function(){
	window.location.href = 'https://facebook.com';
});

let size = document.getElementById('screen');
size.addEventListener('click', function(){
	let w = screen.width; // srceen : BOM
	let h = screen.height;
	console.log(w, h);
});

document.getElementById('history').addEventListener('click',function(){
	history.forward(); // history : BOM
});




