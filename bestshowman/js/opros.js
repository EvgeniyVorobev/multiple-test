	var checked_img_url = 'https://evgeniyvorobev.github.io/multiple-test/provedenie/img/checkbox_sellected.png';
	var notchecked_img_url = 'https://evgeniyvorobev.github.io/multiple-test/provedenie/img/checkbox_notsellected.png';

$(document).ready(function function_name(argument) {
	$('.drop-down .arrowdown').click(function (e) {
	$(e.target.previousElementSibling).click();
	});
	console.log('asdas');
/* SCRIPT FOR MULTIPLE DROPDOWN CHOICE */

// открытие сворачивание списка
$('.spisok.multiple').click(function(e){
	var target = e.target;
	var ulElement = $(target).siblings("ul")[0];
	ulElement.style.display == 'none' ? ulElement.style.display = 'inherit' : ulElement.style.display = 'none';	
	for (var i = 0; i < $('.drop-down.multiple ul').length; i++) {
		$('.drop-down.multiple ul')[i] != ulElement ? $('.drop-down.multiple ul')[i].style.display = 'none' : '' ;
	}
	target.hasAttribute('active') ? target.removeAttribute('active') : target.setAttribute('active','');
});
// выделение полей в списке
$('.drop-down.multiple ul').click(function(e){
	var choice = e.target.innerHTML + ' ; ';
	var target = e.target; 
	var input = $(target).parent().siblings('input')[0];
	if (target.tagName != 'UL') {
		target.style.backgroundColor == '' ? target.style = "background-color: gainsboro;" : e.target.style = '';
		if (target.hasAttribute('active')) {
			var re = eval(`/${choice}/gi`); 
			var newstr = input.value.replace(re, '');
			input.value = newstr;
			target.removeAttribute('active');
			$(input).valid(); // Костыль, для корректной работы, jquery validation, повторная валидация конкретного инпута.
			return null;
		}
		target.setAttribute('active','');
		input.value+=choice;
			$(input).valid(); // Костыль, для корректной работы, jquery validation, повторная валидация конкретного инпута.
		}})
// closed all drop-down windows if clicked behind drop-down block.
$(document.body).click(function(e){
	for (var i = 0; i < $('.drop-down.multiple ul').length; i++) {
		if (e.target.closest('.drop-down.multiple') == null  ) {
			$('.drop-down.multiple ul')[i].style.display = 'none' ;
		}
	}
})

/* ~~~ END OF MULTIPLY DROPDOWN CHOICE ~~~ */





/* ~ SCRIPT FOR SINGLE DROPDOWN CHOICE ~*/
$('.spisok.single').click(function(e){
	var target = e.target;
	var ulElement = $(target).siblings("ul")[0];
	ulElement.style.display == 'none' ? ulElement.style.display = 'inherit' : ulElement.style.display = 'none';	
	for (var i = 0; i < $('.drop-down.single ul').length; i++) {
		$('.drop-down.single ul')[i] != ulElement ? $('.drop-down.single ul')[i].style.display = 'none' : '' ;
	}
	target.hasAttribute('active') ? target.removeAttribute('active') : target.setAttribute('active','');
});
// select single choice in dropdown.
$('.drop-down.single ul').click(function(e){
	var choice = e.target.innerHTML;
	var target = e.target;
	var input = $(target).parent().siblings('input')[0];
	// console.log($(target).parent().siblings('input')[0]);
	if (target.tagName != 'UL') {
		target.style.backgroundColor == ''  ? target.style = "background-color: gainsboro;" : '' ;
		target.closest('ul').style.display = 'none'; // close when clicked in single field.
		target.setAttribute('active','');
		input.value=choice;	
		for (var i = 0; i < target.parentElement.childNodes.length; i++) {
			if (target.parentElement.childNodes[i] != target && target.parentElement.childNodes[i].tagName == 'LI') {
				target.parentElement.childNodes[i].style.backgroundColor = '' ;
				target.parentElement.childNodes[i].removeAttribute('active');
			$(input).valid(); // Костыль, для корректной работы, jquery validation, повторная валидация конкретного инпута.
		}
	}
}
})

// closed all drop-down windows if clicked behind drop-down block.
$(document.body).click(function(e){
	for (var i = 0; i < $('.drop-down.single ul').length; i++) {
		if (e.target.closest('.drop-down.single') == null  ) {
			$('.drop-down.single ul')[i].style.display = 'none' ;
		}
	}
})
/* ~~~ END OF SINGLE DROPDOWN CHOICE ~~~ */
})

	/* ~~~~~~~~~~~~~~ CHECKBOX_SCRIPT ~~~~~~~~~~~ */

	jQuery(document).ready(function() {
		$('.radioinput').click(function (e){
			target = e.target;
			if ($(target).attr("checked")) { // Если на картинке есть атрибут checked			
			radioInputTarget = $(target).attr('radioinputtarget'); // Запишем значение поля radioinputtarget
			$('#'+radioInputTarget).removeAttr('checked'); // Убираем checked на скрытом radioinput
			$(target).removeAttr('checked'); // Убираем с img checked
			$(target).attr('src', notchecked_img_url); // Ставим картинку без галки на Img	
		} else { // Если на картинке нет атрибута checked
			$('#'+radioInputTarget)[0].checked = true; // Добавляем checked в объект.
			radioInputTarget = $(target).attr('radioinputtarget'); // переопределяем переменную.
			$('#'+radioInputTarget).attr('checked',''); // Добавляем checked на скрытом radioinput
			$(target).attr('checked',''); // Добавляем checked на картинку.
			$(target).attr('src',checked_img_url); // добавляем картинку с галкой.

			for (var i = 0; i < $('.radioInput-circle').length; i++) { // Если в момент клика input checked и имеет атрибут required то обнуляет style текста.
				if ($('.radioInput-circle')[i].hasAttribute('checked') && $('.radioInput-circle')[i].hasAttribute('required')) {
					var textTarget = $('.radioInput-circle')[i].getAttribute('textTarget');
					$(`.${textTarget}`).attr('style',''); 				
				}
			}	
		}
		;})	
	});

// Скрипт который считывает атрибут checkboximgtarget у скрытых radiobutton , если стоит атрибут checked то берёт адрес из checkboximgtarget и вставляет картинку с галкой вместо пустого кружка.
$(document).ready(function(){
	for (var i = 0; i < $('.radioInput-circle').length; i++) {
		if ($('.radioInput-circle')[i].hasAttribute('checked')) {
			if ($('.radioInput-circle')[i].getAttribute('checkboximgtarget') != null) {
				var radioImgTarget = $('.radioInput-circle')[i].getAttribute('checkboximgtarget');
				$('.'+radioImgTarget).attr('src',checked_img_url);
			}
		}
	}
})


/* ~~~~~~~~~~ JQUERY VALIDATION SCRIPT ~~~~~~~~~~~~~ */

// Validation settings
// This is rules , where form_name e.t.c = name of form input field.
function validation(id) {
	$(id).validate({
		rules: {
			familyname: {
				required: true
			},
			name: {
				required:true
			},
			email: {
				email: true,
				required:true
			},
			phone: {
				required:true,
				number:true,
				minlength: 5
			},
			q1: {
				required:true
			},
			q2: {
				required:true
			},
			q3: {
				required:true
			},
			q4: {
				required:true
			},
			q5: {
				required:true
			},
			q6: {
				required:true
			},
			// q7: {
			// 	required:true
			// },
			q8: {
				required:true
			}
		}
	});
}


jQuery(document).ready(function(e) {
	var finishResult = []; // Собираем массив результатов из теста.
	validation(interview);
	jQuery('#interview').submit(function(e) {
		var validation = $("#interview").valid();
		e.preventDefault();
		// var email = jQuery("#email_profile").val();
		// var dbName = jQuery("#db_name").val(); 
		var familyname = jQuery("#familyname").val();
		var name = jQuery("#name").val();
		var email = jQuery("#email").val();
		var phone = jQuery("#phone").val();
		var q1 = jQuery("#q1").val();
		var q2 = jQuery("#q2").val();
		var q3 = jQuery("#q3").val();
		var q4 = jQuery("#q4").val();
		var q5 = jQuery("#q5").val();
		var q6 = jQuery("#q6").val();
		var q7 = jQuery("#q7").val();
		var q8 = jQuery("#q8").val();
		var socnetwork = jQuery("#socnetwork").val();
		var messanger = jQuery("#messanger").val();
		var marriedchildrens = jQuery("#marriedchildrens").val();
		var knowaboutus = jQuery("#knowaboutus").val();
		var whereknow = jQuery("#whereknow").val();
		var subscribe = jQuery("#subscribe").val();
		if (validation == false) {
			for (var i = 0; i < $('.radioInput-circle').length; i++) {
				if ($('.radioInput-circle')[i].hasAttribute('checked') == false && $('.radioInput-circle')[i].hasAttribute('required')) {
					var textTarget = $('.radioInput-circle')[i].getAttribute('textTarget');
					$(`.${textTarget}`).css({
						color:'#e31d1a'
					}); 				
				}
			}
			for (var i = 0; i < $('.radioInput-circle').length; i++) {
				if ($('.radioInput-circle')[i].hasAttribute('checked')) {
					if ($('.radioInput-circle')[i].getAttribute('checkboximgtarget') != null) {
						var radioImgTarget = $('.radioInput-circle')[i].getAttribute('checkboximgtarget');
						$('.'+radioImgTarget).attr('src',checked_img_url);
					}
				}
			}
			$('.description_error') ? $('.description_error').remove() : '';
			$('#interview').append('<button type="button" disabled="" class="description_error" style="margin-top:5px;">ТЫ ОТВЕТИЛ НЕ НА ВСЕ ВОПРОСЫ!</button>');
		}

		if (validation ) {   
			$.ajax({
	// ТУТ ЗАПРОС ПРОПИСАТЬ
		}) 
			for (var i = 0; i < e.target.length; i++) {
				if (e.target[i].type == 'submit') {
					e.target[i].type == 'submit' ? e.target[i].classList.add('succes-submit') : ''
					e.target[i].type == 'submit' ? e.target[i].innerHTML = 'ГОТОВО !' : '';
					e.target[i].type == 'submit' ? e.target[i].setAttribute('disabled','disabled') : '';
				}
			}

			var result = '';		
			
			// Script for comprasion selected fields
			$('#q1').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q1').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val
				// console.log('эт result =',result);
				// console.log('это length',length);
				// console.log('это variable',selectedNum+1);				
				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' ) {
						// console.log('Начальный');
						finishResult.push('Начальный');
					} else if ( result == '2') {
						// console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					} else if ( result == '3') {
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					} else if ( result == '4') {
						// console.log('ВАШ УРОВЕНЬ Профессионал');
						finishResult.push('Профессионал')
					}
					result = [];
				}			
			})

			$('#q2').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q2').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val

				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' || result == '2' || result == '12') {
						// console.log('Начальный');
						finishResult.push('Начальный');
					} else if ( result == '14' || result == '15' || result == '16' 
						|| result == '24' || result == '25' || result == '26' 
						// NEXT
						|| result == '124' || result == '125' || result == '126' 
						// NEXT 
						|| result == '145' || result == '146' || result == '156'
						// NEXT
						|| result == '245' || result == '246' ||   result == '256' ||result == '2456' 
						//NEXT
						|| result == '1245' || result == '1245' || result == '1246'
						// NEXT
						|| result == '1256'
						// NEXT 
						|| result == '12456' || result == '1456') {
						// console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					} else if ( result == '1237') {
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					} else if ( result == '123457') {
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					}
					 else if ( result == '12345678') {
						// console.log('ВАШ УРОВЕНЬ Профессионал');
						finishResult.push('Профессионал')
					}
					result = [];
				}
			})

			$('#q3').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q3').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val
				// console.log('эт result =',result);
				// console.log('это length',length);
				// console.log('это variable',selectedNum+1);				
				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' ) {
						// console.log('Начальный');
						finishResult.push('Начальный');
					} else if ( result == '2') {
						// console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					} else if ( result == '3') {
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					} else if ( result == '4') {
						// console.log('ВАШ УРОВЕНЬ Профессионал');
						finishResult.push('Профессионал')
					}
					result = [];
				}			
			})
			
			$('#q4').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q4').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val
				// console.log('эт result =',result);
				// console.log('это length',length);
				// console.log('это variable',selectedNum+1);				
				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' ) {
						// console.log('Уверенный + Профессионал');
						finishResult.push('Уверенный','Профессионал');
					} else if ( result == '2') {
						// console.log('Уверенный + Профессионал');
						finishResult.push('Уверенный','Профессионал')
					} else if ( result == '3') {
						// console.log('ВАШ УРОВЕНЬ Начальный и Опытный');
						finishResult.push('Начальный','Опытный')
					} else if ( result == '4') {
						// console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					}
					result = [];
				}			
			})

			$('#q5').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q5').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val
				// console.log('эт result =',result);
				// console.log('это length',length);
				// console.log('это variable',selectedNum+1);				
				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' ) {
						// console.log('Уверенный + Профессионал');
						finishResult.push('Уверенный','Профессионал');
					} else if ( result == '2') {
						// console.log('Начальный + Опытный');
						finishResult.push('Начальный','Опытный')
					}
					result = [];
				}		
			})

			$('#q6').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
				var length = $('#q6').closest('.drop-down').find('li[active]').length;
				var val = $(key).attr('value');
				result = result + val
				// console.log('эт result =',result);
				// console.log('это length',length);
				// console.log('это variable',selectedNum+1);				
				if (selectedNum+1 == length) { // действие на последней итерации
					if ( result == '1' ) {
						// console.log('Начальный');
						finishResult.push('Начальный');
					} else if ( result == '2') {
						// console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					} else if ( result == '3') {
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					} else if ( result == '4') {
						// console.log('ВАШ УРОВЕНЬ Профессионал');
						finishResult.push('Профессионал')
					}
					result = [];
				}		
			})

			// If selected fields > or < of sum.
			if ($('#q7').closest('.drop-down').find('li[active]').length != 0) { // If something select
				$('#q7').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
					var length = $('#q7').closest('.drop-down').find('li[active]').length;
					if ($(key).attr('value') != undefined ) {
						var val = $(key).attr('value');
						result = result + val
					}
				if (selectedNum+1 == length) { // Run on last iteration 
					if (selectedNum+1 > 3 ) { // if selected > 3 fields.
						// console.log('Начальный');
						finishResult.push('Начальный');
					} 
					if ( val == '2') { // if selected only 2-st field.
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					} 
					if ( selectedNum+1 > 0 && selectedNum+1 <= 3 ) { // if selected between 1 and 3.
						console.log('ВАШ УРОВЕНЬ Опытный');
						finishResult.push('Опытный')
					}
					result = [];
				} 
			})
			} else { // If nothing is selected
				finishResult.push('Профессионал')
				result = [];
			}

		// Multiple select.
			if ($('#q8').closest('.drop-down').find('li[active]').length != 0) { // If something select
				$('#q8').closest('.drop-down').find('li[active]').each(function(selectedNum,key){
					var length = $('#q8').closest('.drop-down').find('li[active]').length;
					if ($(key).attr('value') != undefined ) {
						var val = $(key).attr('value'); // Selected input value
						result = result + val
					}
					// if (selectedNum+1 == length) { // Run on last iteration 
						if ( val == '1') { 
							// console.log('ВАШ УРОВЕНЬ Начальный');
							finishResult.push('Начальный');
						} 
						if ( val == '2' || val == '4' || val == '5' ) {
						// console.log('ВАШ УРОВЕНЬ Профессионал');
						finishResult.push('Профессионал')
					} 
					if ( val == '3' ) { 
						// console.log('ВАШ УРОВЕНЬ Уверенный');
						finishResult.push('Уверенный')
					}		
					result = [];			
				// } 
			})
			}

			console.log('Полученный результат массива: 1 этап',finishResult);

			/* Redirected function */ 
			var handlers = {
				Начальный: function() { setTimeout(function(){window.location = "http://provedenie.org/opros/junior"},3500)},
				Уверенный: function() { setTimeout(function(){window.location = "http://provedenie.org/opros/upper-middle"},3500)},	
				Опытный: function() { setTimeout(function(){window.location = "http://provedenie.org/opros/middle" },3500)},
				Профессионал: function() { setTimeout(function(){window.location = "http://provedenie.org/opros/senior" },3500)}
			}

			/* Sorting massive by priority by Hierarchy (1-st place Professional) */
			function reSorting(arr) {
				var art = arr.toString();
				var narr = [];
				if (art.match(/Профессионал/g) != null) {
					for (var i = 0; i < art.match(/Профессионал/g).length; i++)
						narr.push("Профессионал");
				}
				if (art.match(/Опытный/g) != null) {
					for (var i = 0; i < art.match(/Опытный/g).length; i++)
						narr.push("Опытный");
				}
				if (art.match(/Уверенный/g) != null) {
					for (var i = 0; i < art.match(/Уверенный/g).length; i++)
						narr.push("Уверенный");
				}
				if (art.match(/Начальный/g) != null) { 
					for (var i = 0; i < art.match(/Начальный/g).length; i++)
						narr.push("Начальный")
				}
				return narr;
			}
			finishResult = reSorting(finishResult);
			console.log('Отсортированный массив по уровню,вначале преоритетное', finishResult);
			
			/* count number of times each level is repeated */
				var levelCounts = {}; // 
				for (var i = 0; i < finishResult.length; i++) {
					if (!levelCounts[finishResult[i]])
						levelCounts[finishResult[i]] = 0;
					levelCounts[finishResult[i]]++;
				}			
				// find level repeated the most 
				var maxCount = 0;
				var maxLevel = null;
				for (var key in levelCounts) {
					if (levelCounts[key] > maxCount) {
						maxCount = levelCounts[key];
						maxLevel = key;
					}
				}
				console.log("[" + maxLevel + '] уровень больше:', maxCount);			
				handlers[maxLevel](); 	// execute code for level			
				evgCarrot.interviewForm(maxLevel,e.target) // send result width form object to interviewForm.
				/* End of repeated*/
		
				/* Result in popup.*/
				// $('.description_error').remove()
				// $('body').append(`<div style="display:none" class="test-result">
				// 	<h2>ПОЗДРАВЛЯЕМ ! ВЫ ПРОШЛИ ТЕСТ</h2>
				// 	<h1 class="pt15">Ваш уровень: `+maxLevel.toUpperCase()+`</h1>
				// 	<p class="pt10">Сейчас вы будете перенаправлены</p>
				// 	</div> `);
				// $('.test-result').toggle(function(){})

				/* Result Add text */
				// if (maxLevel == 'Начальный') {
				// 	$('.interview').append('<p class="result-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ab magnam maiores, consectetur ex reprehenderit amet recusandae placeat aliquid debitis repellendus aperiam esse. Qui illum ipsam, et natus suscipit, praesentium ex, vero ad enim possimus labore. Quisquam quaerat expedita temporibus voluptates voluptatum explicabo deleniti, cumque. Neque sapiente cupiditate nobis!</p>')
				// }
				// if (maxLevel == 'Уверенный') {
				// 	$('.interview').append('<p class="result-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ab magnam maiores, consectetur ex reprehenderit amet recusandae placeat aliquid debitis repellendus aperiam esse. Qui illum ipsam, et natus suscipit, praesentium ex, vero ad enim possimus labore. Quisquam quaerat expedita temporibus voluptates voluptatum explicabo deleniti, cumque. Neque sapiente cupiditate nobis!</p>')
				// }
				// if (maxLevel == 'Опытный') {
				// 	$('.interview').append('<p class="result-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ab magnam maiores, consectetur ex reprehenderit amet recusandae placeat aliquid debitis repellendus aperiam esse. Qui illum ipsam, et natus suscipit, praesentium ex, vero ad enim possimus labore. Quisquam quaerat expedita temporibus voluptates voluptatum explicabo deleniti, cumque. Neque sapiente cupiditate nobis!</p>')
				// }
				// if (maxLevel == 'Профессионал') {
				// 	$('.interview').append('<p class="result-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis ab magnam maiores, consectetur ex reprehenderit amet recusandae placeat aliquid debitis repellendus aperiam esse. Qui illum ipsam, et natus suscipit, praesentium ex, vero ad enim possimus labore. Quisquam quaerat expedita temporibus voluptates voluptatum explicabo deleniti, cumque. Neque sapiente cupiditate nobis!</p>')
				// }

			}	
		 });
});

	/* //JQUERY VALIDATION  */
