$(document).ready(function(){
	// cho doi cac tai lieu HTML dc load xong - thi cac ma lenh JQ se duoc thuc thi
	// toan bo cac ma lenh viet theo thu vien JQ se duoc dat trong ham nay
	
	// bat su kien 
	// $('#btn') = document.getElementById('btn');
	// $ == jQuery
	jQuery('#btn').click(function(){

		let valId = $('h1.text').attr('id');
		let valClass = $('#text').prop('class');
		console.log(valId, valClass);

		//$('img').attr('src', 'images/demo.jpg');
		document.getElementsByTagName('img')[0].src = 'images/demo.jpg';
		$('img:first').removeAttr('src');


		$('div.my-box').addClass('box');

		if($('div.my-box').hasClass('border')){
			console.log('Yes');
		} else {
			console.log('No');
		}


	});

	$('.btn-primary').dblclick(function() {
		//$('div.my-box').removeClass('border')
		$('div.my-box').toggleClass('border');
	});

	$('input[class="input"]').keyup(function() {
		let value = $(this).val().trim();
		//$('input[class="input"]').val().trim();
		$('p.render-text').html(value);
	});

});












