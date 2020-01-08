$(document).ready(function() {
	$('button.btn').click(function() {
		// css voi jquery
		// single css
		/*
		$('div.box').css('width','300px');
		$('div.box').css('height','300px');
		$('div.box').css('border','1px solid red');
		$('div.box').css('background-color','yellow');
		*/
		// multi
		/*
		$('div.box').css({
			width: '300px',
			height: '300px',
			border: '1px solid red',
			backgroundColor: 'yellow'
		});
		*/
		let btn = document.getElementsByClassName('box');
		btn[0].style.width = '300px';
		btn[0].style.height = '300px';
		btn[0].style.border = '1px solid red';
		btn[0].style.backgroundColor = 'yellow';
		btn[0].style.padding = '30px';
	});

	$('button.my-btn').click(function() {
		let w = $('div.box').width();
		let h = $('div.box').height();
		alert(`width: ${w} - height : ${h}`);
		$('div.box').width(100);
		$('div.box').height(100);
		let w2 = $('div.box').width();
		let h2 = $('div.box').height();
		alert(`width: ${w2} - height : ${h2}`);
	});


	$('button.click-3').click(function() {
		let innerW = $('.box').innerWidth();
		let innerH = $('.box').innerHeight();
		console.log(`inner width: ${innerW} - inner heighr : ${innerH}`);


		$('ul.menu li').eq(2).css('color', 'blue');

		if($('input[class="agree"]').is(':checked')){
			console.log('ban da tich chon')
		} else {
			console.log('ban chua tich chon')
		}

		$('section').find('h1').css('color', 'red');

		if($('h1').length){
			// kiem tra su ton tai cua phan tu html
		}
		$('ul.menu li').eq(2).next().css('color', 'yellow');
		$('ul.menu li').eq(2).prev().css('color', 'violet');
		$('ul.menu li').eq(0).next().next().css('color', 'red');
		$('h1').parent().parent().css({
			width: '300px',
			height: '300px',
			border: '1px solid red',
			backgroundColor: 'yellow'
		});

		//$('h1').html('This jquery');
		//let valText = // $('h1').html('');
		let valText = $('h1').text();
		console.log(valText);
		$('h1').empty(); // xoa noi dung the
		// $('h1').html('');
		$('h1').remove();// xoa the html
	});

	$('#hide').click(function() {
		// an div class content
		//$('.content').fadeOut(3000);
		//$('.content').hide(3000);
		//$('.content').slideUp(3000);
		$('.content').toggle(3000);
	});

	$('#show').click(function() {
		//$('.content').slideDown(3000);
		$('.content').fadeIn(3000);
		//$('.content').show(3000);
	});

});





