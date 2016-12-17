jQuery(function($){
$("#client-phone").mask("+38(999) 999-9999");
 });

function ValidPhone() {
     var re = /^\+[\d\(\)\ -]{4,15}\d$/;
     var myPhone = document.getElementById('client-phone').value;
     var valid = re.test(myPhone);
     if (valid) {
		 output = 'Номер телефона введен правильно!';
		 document.getElementById("message").style.color = "green";
	 }
     else {
		 output = 'Номер телефона введен неправильно!';
		 document.getElementById("message").style.color = "red";
	 }
     	document.getElementById('message').innerHTML = output + '<br/>';

     return valid;
}


$(document).ready(function() { // вся магия после загрузки страницы
	$('a#popup_toggle').click( function(event){ // ловим клик по ссылки с id="go"
		event.preventDefault(); // выключаем стандартную роль элемента
		$('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function(){ // после выполнения предъидущей анимации
				$('#modal_form')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		});
	});
	/* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
	$('#modal_close, #overlay').click( function(){ // ловим клик по крестику или подложке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function(){ // после анимации
					$(this).css('display', 'none'); // делаем ему display: none;
					$('#overlay').fadeOut(400); // скрываем подложку
				}
			);
	});
});
