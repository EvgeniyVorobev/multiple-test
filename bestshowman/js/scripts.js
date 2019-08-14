// Animation classes adding.
					$(".main-info, .interview, .two_colums-wrapper, .table, .carousel-wrap, .three_column-wrapper, .text-wrap, .product-item, .callback-wrapper, .img-gallery-wrapper, .note-wrap, .scheme-wrap, .bgimg-wrapper, .business-model-wrapper, .juxtapose-wrapper, #main-info-section, .profile-form, .form-wrap, .two_colums_text-wrap, .slider-wrap, .example-wrapper, .txt-slider-wrapper ,.coffee_two-blocks-wrapper").addClass("wow fadeInDown"); // add Classes to Animation
					new WOW().init(); // initialization of animation;

// Script to hide redmenu when clicking on zoom-image.

$(document).ready(function(){
	$('.image').click(function(){
		$('.red-menu-wrapper.cloneMenu').css({
			'z-index':'-1'
		})
	})
})

// Scrolling to the element with id. #anchor
function closeMobileMenu(){
	$('.toogle-button')[0].click()
}

$(document).ready(function(){
	$(".btn-begin").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$(".a1").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();
	});
});

$(document).ready(function(){
	$(".a2").click(function (event) {
		closeMobileMenu();
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$(".a3").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();
	});
});

$(document).ready(function(){
	$(".a4").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();
	});
});

$(document).ready(function(){
	$(".a5").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();
	});
});

$(document).ready(function(){
	$(".a6").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();
	});
});

$(document).ready(function(){
	$(".anchor4").click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100 - $('.links.mobile').height();
		$('body,html').animate({scrollTop: top}, 1000);
		closeMobileMenu();	
	});
});


// <div style="display: none;">
// <div class="box-modal" id="reg-popup">
// <div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
// <div class="popup">
// <div class="popup-wrapper main-registration">
// <div class="logo">
// <img src="img/school-gust-txt.png" alt="">
// </div>
// <img src="img/free1020.png">
// <p class="autorization-txt ext-bold">АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ОДНУ ИЗ СОЦСЕТЕЙ</p>
// <div class="socialnet-reg" id="uLogin" data-ulogin="display=buttons;fields=first_name,last_name,photo;mobilebuttons=0;
// redirect_uri=http%3A%2F%2Fcourse.locallocal.ru;">
// <a class="facebook" data-uloginbutton = "facebook"><img src="img/fb-modal.png" alt="">Войти через Facebook</a>
// <a class="vk" data-uloginbutton = "vkontakte"><img src="img/vk-modal.png" alt="">Войти через Вконтакте</a>
// <a class="google" data-uloginbutton = "google"><img src="img/googleplus-modal.png" alt="">Войти через Google +</a>
// <a class="twitter" data-uloginbutton = "twitter"><img src="img/twitterlogosilhouette-modal.png" alt="">Войти через Twitter</a>
// </div>
// </div>
// <p class="termsofuse" style="padding-left: 5px;
// padding-top: 5px;
// font-size: 14px;
// text-align: center;
// opacity: 0.8;">Оставляя свои контактные данные, вы даете 
// 							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
// 							</div>
// 							</div>
// 							</div>
// 							</div>


// 							<div style="display: none;">
// 							<div class="box-modal free1020" id="reg-popup">
// 							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
// 							<div class="popup">
// 							<div class="popup-wrapper main-registration free1020">
// 							<img src="img/free1020v2.png" class="hide500" style="max-width:565px; width:100%;">
// 							<img src="img/free1020v21.png" class="visible500" style="max-width:100%; width:100%;">
// 							<h2 style="max-width:565px; text-align:center; padding-top:20px" class="ac-color autorization-txt ext-bold">ХОЧЕШЬ КУРС БЕСПЛАТНО? ПРОЙДИ ОПРОС</h2>
// 							<p style="max-width:565px; text-align:center;" class="autorization-txt ext-bold">ЧТОБЫ ПОЛУЧИТЬ ДОСТУП, АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ОДНУ ИЗ СОЦСЕТЕЙ И ОТВЕТЬТЕ НА НЕСКОЛЬКО ВОПРОСОВ:</p>
// 							<div class="socialnet-reg" id="uLogin" data-ulogin="display=buttons;fields=first_name,last_name,photo;mobilebuttons=0;
// 							redirect_uri=http%3A%2F%2Fcourse.locallocal.ru">
// 							<a class="facebook" data-uloginbutton = "facebook"><img src="img/fb-modal.png" alt="">Войти через Facebook</a>
// 							<a class="vk" data-uloginbutton = "vkontakte"><img src="img/vk-modal.png" alt="">Войти через Вконтакте</a>
// 							<a class="google" data-uloginbutton = "google"><img src="img/googleplus-modal.png" alt="">Войти через Google +</a>
// 							<a class="twitter" data-uloginbutton = "twitter"><img src="img/twitterlogosilhouette-modal.png" alt="">Войти через Twitter</a>
// 							</div>
// 							</div>
// 							<p class="termsofuse" style="padding-left: 5px;
// 							padding-top: 5px;
// 							font-size: 14px;
// 							text-align: center;
// 							opacity: 0.8;">Оставляя свои контактные данные, вы даете 
// 							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
// 							</div>
// 							</div>
// 							</div>
// 							</div>
// redirect_uri=http%3A%2F%2Fcourse.locallocal.ru
// redirect_uri=http%3A%2F%2Fheinz%2Fapp%2Findex.php
// ;mobilebuttons=0;">
// Modal Windows creation. ХОЧЕШЬ КУРС БЕСПЛАТНО? ПРОЙДИ ОПРОС
					$(document).ready(function(){ // Add Modal Windows.
						$('footer').before(`
							<div style="display: none;">
							<div class="box-modal" id="reg-popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper main-registration">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<div class="socialnet-reg" id="uLogin" data-ulogin="display=buttons;fields=first_name,last_name,photo;mobilebuttons=0;
							redirect_uri=http%3A%2F%2Fcourse.locallocal.ru;">
							<a class="facebook" data-uloginbutton = "facebook"><img src="img/fb-modal.png" alt="">Войти через Facebook</a>
							<a class="vk" data-uloginbutton = "vkontakte"><img src="img/vk-modal.png" alt="">Войти через Вконтакте</a>
							<a class="google" data-uloginbutton = "google"><img src="img/googleplus-modal.png" alt="">Войти через Google +</a>
							<a class="twitter" data-uloginbutton = "twitter"><img src="img/twitterlogosilhouette-modal.png" alt="">Войти через Twitter</a>
							</div>
							</div>
							<p class="termsofuse" style="padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;">Оставляя свои контактные данные, вы даете 
							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>
							<div style="display: none;">
							<div class="box-modal free1020" id="greetings">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper main-registration free1020">
							<img src="img/free1020v2.png" class="hide500" style="max-width:565px; width:100%;">
							<img src="img/free1020v21.png" class="visible500" style="max-width:100%; width:100%;">
							<p style="max-width:565px; text-align:center;" class="autorization-txt ext-bold">ЧТОБЫ ПОЛУЧИТЬ ДОСТУП, АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ОДНУ ИЗ СОЦСЕТЕЙ И ОТВЕТЬТЕ НА НЕСКОЛЬКО ВОПРОСОВ:</p>
							<button class="btn_autorization" onclick="regPopup()">ПЕРЕЙТИ К АВТОРИЗАЦИИ</button>
							<p class="termsofuse" style="padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;">Оставляя свои контактные данные, вы даете 
							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal free1020" id="greetings2">
							<div class="popup">
							<div class="popup-wrapper main-registration free1020">
							<h2 style="max-width:565px; text-align:center; padding-top:20px" class="ac-color autorization-txt ext-bold">ХОЧЕШЬ КУРС БЕСПЛАТНО? ПРОЙДИ ОПРОС</h2>
							<p style="max-width:565px; text-align:center;" class="autorization-txt ext-bold">НАМ ОЧЕНЬ ВАЖНО УЗНАТЬ ВАС ПОБЛИЖЕ, ТОГДА МЫ БУДЕМ ДЕЛАТЬ ТО, ЧТО ДЕЙСТВИТЕЛЬНО ПОМОЖЕТ ВАМ РЕАЛИЗОВАТЬ ВАШУ МЕЧТУ. ОПРОС ЗАЙМЕТ КАКООООООЕ-ТО ВРЕМЯ (МИНУТ 20-30), НО ЭТО СТОИТ ТОГО — СУПЕР ПОЛЕЗНЫЕ КУРСЫ В ПОДАРОК</p>
							<a style="text-decoration:none; margin-top:0px;" href="opros"><button class="btn_autorization" onclick="regPopup()">ПРОЙТИ ОПРОС</button></a>
							<button class="btn_autorization" onclick="$(this).arcticmodal('close')">ОТКАЗАТЬСЯ</button>
							<p class="termsofuse" style="padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;">Оставляя свои контактные данные, вы даете 
							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg-popupfi">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup fi_mod">
							<div class="popup-wrapper main-registration">
							<div class="logo">
							<img src="img/fi2.png" alt="">
							</div>
							
							<p class="autorization-txt ext-bold">АВТОРИЗУЙТЕСЬ ЧЕРЕЗ ОДНУ ИЗ СОЦСЕТЕЙ, ЧТОБЫ ПЕРЕЙТИ К ОПЛАТЕ</p>
							<div class="socialnet-reg" id="uLogin" data-ulogin="display=buttons;fields=first_name,last_name,photo;mobilebuttons=0;
							redirect_uri=http%3A%2F%2Fcourse.locallocal.ru%2Ffi%2F;">
							<a class="facebook" data-uloginbutton = "facebook"><img src="img/fb-modal.png" alt="">Войти через Facebook</a>
							<a class="vk" data-uloginbutton = "vkontakte"><img src="img/vk-modal.png" alt=""  data-uloginbutton = "vkontakte">Войти через Вконтакте</a>
							<a class="google" data-uloginbutton = "google"><img src="img/googleplus-modal.png" alt="">Войти через Google +</a>
							<a class="twitter" data-uloginbutton = "twitter"><img src="img/twitterlogosilhouette-modal.png" alt="">Войти через Twitter</a>
							</div>
							</div>
							<p class="termsofuse" style="padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;">Оставляя свои контактные данные, вы даете 
							<a target="_blank" style="color: black;" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>
							
							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «КАК НАЧАТЬ СВОЁ ДЕЛО» <strong id="txtHint" class="ext-bold">2 000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="EISbFXQAcC7jz79ZgiuGPaYvMbUmyXs7QscG1V8kuHc=" />
							<input type="hidden" name="cost" id="cost" value="2000" />
							<input type="hidden" name="name" value="Курс «Как начать свое дело»"/>
							<input type="hidden" name="comment" id="comment" value="http://vk.com/id51954514" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_2">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ ИНСТРУКЦИИ ПО ЗАПОЛНЕНИЮ БИЗНЕС-МОДЕЛИ <strong id="txtHint_2" class="ext-bold"> 500 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="noPoxJlQf6xVzFv73NeY2mZhLYjnfoKvDLKCpwakr/E=" />
							<input type="hidden" name="cost" id="cost_2" value="500" />
							<input type="hidden" name="name" value="Инструкция по заполнению бизнес модели"/>
							<input type="hidden" name="comment" id="comment_2" value="http://vk.com/id51954514" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_2(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>


							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_3">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «КАК ОТКРЫТЬ КОФЕЙНЮ» <strong id="txtHint_3" class="ext-bold"> 4990 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="37AbUMXIZ7MVXGCd7kdLJpaDehdXKLR4LTb6x9rdh5Q=" />
							<input type="hidden" name="cost" id="cost_3" value="4990" />
							<input type="hidden" name="name" value="Онлайн-курс «Как открыть кофейню»"/>
							<input type="hidden" name="comment" id="comment_3" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_3(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>


							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_4">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «КАК СОЗДАТЬ ВОСТРЕБОВАННЫЙ ПРОДУКТ» <strong id="txtHint_4" class="ext-bold"> 2495 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="whKl7F4EN/Ggl15DXK+KVhpHPC3OSHdOXJP4UpcR/YM=" />
							<input type="hidden" name="cost" id="cost_4" value="2495" />
							<input type="hidden" name="name" value="Онлайн-курс «Как создать востребованный продукт»"/>
							<input type="hidden" name="comment" id="comment_4" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_4(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_5">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10" style="text-transform: uppercase;">СТОИМОСТЬ КУРСА «Как создать эффективную систему маркетинга» <strong id="txtHint_5" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="Fz87uBTgUpKC1rqodIygbdf4w5ffDr8EjrANn0eAGJg=" />
							<input type="hidden" name="cost" id="cost_5" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «Как создать эффективную систему маркетинга»"/>
							<input type="hidden" name="comment" id="comment_5" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_5(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>


							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_6">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10" style="text-transform: uppercase;">СТОИМОСТЬ КУРСА «Как работать с инвесторами» <strong id="txtHint_6" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="0+XBKNdQi0jf8tMtgJ0pgIl2YTGEy5xhEVl85B2Y2y0=" />
							<input type="hidden" name="cost" id="cost_6" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «Как работать с инвесторами»"/>
							<input type="hidden" name="comment" id="comment_6" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_6(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_7">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «ФИНАНСОВАЯ ГРАМОТНОСТЬ ДЛЯ ПРЕДПРИНИМАТЕЛЕЙ» <strong id="txtHint_7" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="lBzUoojWFsIN/Slo9U4dultlopHMCnedwE7fG7z6bhk=" />
							<input type="hidden" name="cost" id="cost_7" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «ФИНАНСОВАЯ ГРАМОТНОСТЬ ДЛЯ ПРЕДПРИНИМАТЕЛЕЙ»"/>
							<input type="hidden" name="comment" id="comment_7" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_7(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_8">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «ОБОРУДОВАНИЕ КУХНИ И ЗАЛА» <strong id="txtHint_8" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-8" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="pkmdwF6fYCM3XswTsm7inztbsCazD1rBlkAFzBpKn+Y=" />
							<input type="hidden" name="cost" id="cost_8" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «ОБОРУДОВАНИЕ КУХНИ И ЗАЛА»"/>
							<input type="hidden" name="comment" id="comment_8" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_8(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_9">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10">СТОИМОСТЬ КУРСА «ВСЁ О ФУДТЕХЕ» <strong id="txtHint_9" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-9" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="LW1+42J4ShlwADSNvuUgXI4hKXU0Ee8sjfuG62LQtKA=" />
							<input type="hidden" name="cost" id="cost_9" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «ВСЁ О ФУДТЕХЕ»"/>
							<input type="hidden" name="comment" id="comment_9" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_9(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal" id="reg_discont_popup_10">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="logo">
							<img src="img/school-gust-txt.png" alt="">
							</div>
							<p class="pt10" style="text-transform: uppercase;">СТОИМОСТЬ КУРСА «Как найти идеальный персонал: быстро, качественно и навсегда» <strong id="txtHint_10" class="ext-bold"> 5000 </strong> <strong class="ext-bold">Р</strong></span></p>
							<div class="form-wrap pt15">
							<form method="post" class="application"  accept-charset="UTF-10" action="https://partner.rficb.ru/alba/input/">	
							<input type="hidden" name="key" value="XYoLPWLN1psyE6ia5pB/5wLInxvKW5g3SLtwVyuhJJ0=" />
							<input type="hidden" name="cost" id="cost_10" value="5000" />
							<input type="hidden" name="name" value="Онлайн-курс «Как найти идеальный персонал: быстро, качественно и навсегда»"/>
							<input type="hidden" name="comment" id="comment_10" value="comment" />
							<input type="hidden" name="order_id" value="0" />
							<input type="text" id="promo" onkeyup="showHint_10(this.value)" name="promo" placeholder="ЕСТЬ ПРОМОКОД?">	
							<button type="submit">КУПИТЬ</button>
							</form>
							<div class="auth-wrapper">
							<p class="ext-bold">ВЫ АВТОРИЗОВАНЫ</p>
							<div class="login-form">	
							<div class="user_img"></div>
							<a href="#"><a href="/logout.php"><img id="logout" class="logout_img" src="img/log-out.png" alt=""></a></a>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="burger_popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper large">
							<div class="header-text">
							<p class="ext-bold main fz-large">Получите бизнес-модель бургерной</p>
							<p class="pt15">Ответьте на наши вопросы, это поможет нам стать лучше для вас</p>
							</div>
							<div class="subscribe-form pt15">

							<form id="form_burger_popup">
							<input type="email" id="Email_burger_popup" name="form_email" placeholder="Введите ваш email">
							<input type="text" id="Name_burger_popup" name="form_name" placeholder="Как вас зовут?">
							<input type="text" id="city_burger_popup" name="form_text" placeholder="В каком городе вы живёте?">
							<input type="text" id="contact_burger_popup" name="form_about" placeholder="Как вы связаны с ресторанной индустрией?">
							<textarea name="description" id="text_burger_popup" rows="10" placeholder="Какую информацию о ресторанном бизнесе вы ищете?"></textarea>
							<button type="submit">ПОДПИСАТЬСЯ</button>
							</form>
							</div>
							<p class="termsofuse">Оставляя свои контактные данные, вы даете <a target="_blank" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="subscribe_popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper large">
							<div class="header-text">
							<p class="ext-bold main fz-large">Подпишитесь на рассылку полезных материалов</p>
							<p style="display:none" class="pt15">Ответьте на наши вопросы, это поможет нам стать лучше для вас</p>
							</div>
							<div class="subscribe-form pt15">
							<form id="form_subscribe_popup">
							<input type="email" id="email" name="form_email" placeholder="Введите ваш email">
							<input type="text" id="name" name="form_name" placeholder="Как вас зовут?">
							<button type="submit">ПОДПИСАТЬСЯ</button>
							</form>
							</div>
							<p class="termsofuse">Оставляя свои контактные данные, вы даете <a target="_blank" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="opencofee_popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<div class="header-text">
							<p class="ext-bold main fz-large fz">Хочу узнать о курсе «Как открыть свою кофеню»</p>
							<p style="font-family: 'Playfair-Bold-Italic'" class="pt15 f-size">Заполните форму ниже:</p>
							</div>
							<div class="subscribe-form pt20">
							<form id="form_opencofee_popup" >
							<input type="text" id="email_opencofee_popup" name="form_email" placeholder="Ваш email">
							<input type="text" id="name_opencofee_popup" name="form_name" placeholder="Ваше имя">
							<input type="phone" id="phone_opencofee_popup" placeholder="Ваш телефон (по желанию)">
							<button type="submit">ОТПРАВИТЬ</button>
							</form>
							</div>
							<p style="    padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;" class="pt5 text-center">Оставляя свои контактные данные, вы даете <a style="border-bottom: none;    text-decoration: underline;" class="underscoring_url" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="contacts_popup">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<p>ИП Колесникова А.А.</p>
							<p>Адрес: ул. Бабакина, 4, г. Химки</p>
							<p>ИНН 561107440449</p>
							<p>ОГРН 313504703600010</p>
							<p>Расчётный счёт: АО "АЛЬФА-БАНК", МОСКВА</p>
							<p>р/c 40802810702620000104</p>
							<p>БИК 044525593</p>
							<p class="simplesize">к/c 30101810200000000593</p>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="coffeePromo">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper mod_w560">
							<div class="header-text">
							<p class="ext-bold main fz-large fz" style="line-height: 1.15;">Успейте получить промокод!<br>Он будет действовать до<br> 21:00, 23 июля</p>
							<p style="" class="pt15 f-size">Оставьте свой email и подпишитесь на получение полезных материалов от Школы гастрономического бизнеса:</p>
							</div>
							<div class="subscribe-form pt20">
							<form id="coffee_promo" >
							<input type="text" id="email_coffee_promo" name="form_email" placeholder="Ваш email">
							<button type="submit">ПОДПИСАТЬСЯ И ПОЛУЧИТЬ СКИДКУ</button>
							</form>
							</div>
							<p style="   
							font-family: 'Playfair-Bold-Italic'; 
							padding-left: 5px;
							padding-top: 5px;
							font-size: 14px;
							text-align: center;
							opacity: 0.8;
							" class="pt5 text-center">Оставляя свои контактные данные, вы даете <a target="_blank" style="font-family: 'Playfair-Bold-Italic'; " class="underscoring_url" href="http://school.locallocal.ru/terms">согласие</a> на обработку персональных данных</p>
							</div>
							</div>
							</div>
							</div>



							<div style="display: none;">
							<div class="box-modal pad-size" id="speciality">
							<div class="box-modal_close arcticmodal-close"><img src="img/cancel.svg" alt=""></div>
							<div class="popup">
							<div class="popup-wrapper">
							<p style="font-size:16px; text-align:center; padding-to"><span class="ext-bold">Спешалти кофе</span> — это не маркетинговый термин (в отличие от премиум кофе, например), а точное определение класса кофейного зерна. Согласно определению Американской Ассоциации Спешалти кофе, «термином „спешалти“ может называться кофе, который оценивается на 80 баллов и выше по 100-балльной шкале. Такой кофе отличается выдающимся вкусом и ароматом, у зерен полностью или практически полностью отсутствуют дефекты». Обратите внимание: термин «спешалти» используется по отношению именно к зерну, а не к напитку.</p>
							</div>
							</div>
							</div>
							</div>
							</div>

							<div style="display: none;">
							<div class="box-modal pad-size" id="text_popup">
							<div class="popup">
							<div class="popup-wrapper">
							<p style="font-size:16px; text-align:center; padding-to">Допустим, ваша кофейня будет работать с 8.00 до 21.00. Вы планируете проливать около 150 чашек кофе в день, то есть 11-12 чашек в час при равномерном потоке клиентов в течение дня (что встречается крайне редко), и около 30 чашек в час в пики, кроме кофе у вас в меню только бутилированные напитки и простые десерты, не требующие подогрева и специальной сервировки Следовательно, вам хватит одной двух-трехгруппной машины и одной кассы, на которых одновременно будут работать два бариста.</p>
							</div>
							</div>
							</div>
							</div>
							</div>`);
});
// oprosredirect()



						function regPopup(){ $('#reg-popup').arcticmodal();}; // Modal for registration
						function regPopupFi(){ $('#reg-popupfi').arcticmodal();}; // Modal for registration
						function regDiscontPopup(){$('#reg_discont_popup').arcticmodal();}; // Modal for auth users - discont
						function regDiscontPopup2(){$('#reg_discont_popup_2').arcticmodal();}; // Modal for auth users - discont						function regDiscontPopup2(){$('#reg_discont_popup_2').arcticmodal();}; // Modal for auth users - discont
						function regDiscontPopup3(){$('#reg_discont_popup_3').arcticmodal();}; // Modal for auth users - discont
						function regDiscontPopup4(){$('#reg_discont_popup_4').arcticmodal();}; // Modal for auth users - discont
						// reg-discount auth courses
function regDiscontPopup5(){$('#reg_discont_popup_5').arcticmodal();}; // Modal for auth users - discont
function regDiscontPopup6(){$('#reg_discont_popup_6').arcticmodal();}; // Modal for auth users - discont
function regDiscontPopup7(){$('#reg_discont_popup_7').arcticmodal();}; // Modal for auth users - discont
function regDiscontPopup8(){$('#reg_discont_popup_8').arcticmodal();}; // Modal for auth users - discont
function regDiscontPopup9(){$('#reg_discont_popup_9').arcticmodal();}; // Modal for auth users - discont
function regDiscontPopup10(){$('#reg_discont_popup_10').arcticmodal();}; // Modal for auth users - discont
						// 
						function burgerPopup(){$('#burger_popup').arcticmodal();}; // Modal for Burger (2module)
						function subscribePopup(){$('#subscribe_popup').arcticmodal();}; // Modal for subscribe footer-popup
						function subscribeCofePopup(){$('#opencofee_popup').arcticmodal();}; // Modal for cofee Subscribe
						function contacts(){$('#contacts_popup').arcticmodal();}; // Modal for cofee Subscribe
						function coffeePromo(){$('#coffeePromo').arcticmodal();}; // Modal for cofee Subscribe
						function specialityPopup(){$('#speciality').arcticmodal();}; // Modal for speciality (coffee modul1).
						function coffe6Popup(){$('#text_popup').arcticmodal();}; // Modal for speciality (coffee modul6).
						function oprosredirect(){$('#opros_redirect').arcticmodal();}; // Modal for opros
						function greetingsPopup(){$('#greetings').arcticmodal();}; // Modal for index opros
						function greetingsPopup2(){$('#greetings2').arcticmodal();}; // Modal for index opros
						// ** End Modal Windows.

						// Resize-click-image script
						$(document).ready(function() { // Ждём загрузки страницы
							$(".image").click(function(){	// Событие клика на маленькое изображение
								var img = $(this);	// Получаем изображение, на которое кликнули
								var src = img.attr('src'); // Достаем из этого изображения путь до картинки
								$("body").append("<div class='popup-img-wrapper'>"+ //Добавляем в тело документа разметку всплывающего окна
								"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
								"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
								"</div>"); 
								$(".popup-img-wrapper").fadeIn(800); // Медленно выводим изображение
								$(".popup-img-wrapper").click(function(){	// Событие клика на затемненный фон	   
									$(".popup-img-wrapper").fadeOut(800);	// Медленно убираем всплывающее окно
									setTimeout(function() {	// Выставляем таймер
										$(".popup-img-wrapper").remove(); // Удаляем разметку всплывающего окна
										$('.red-menu-wrapper.cloneMenu').css({
											'z-index':'1000'
										})
									}, 800);
								});
							});
						});
						// End Resize script

				// Resize-click-image from BACKGROUND img script
						// $(document).ready(function() { // Ждём загрузки страницы
						// 	$(".image-bg").click(function(){	// Событие клика на маленькое изображение
						// 		var img = $(this);	// Получаем изображение, на которое кликнули
						// 		// console.log(img[0].style.backgroundImage);
						// 		var src = img[0].style.backgroundImage; // Достаем из этого изображения путь до картинки
						// 		console.log(src);
						// 		$("body").append("<div class='popup-img-wrapper'>"+ //Добавляем в тело документа разметку всплывающего окна
						// 		"<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						// 		"<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						// 		"</div>"); 
						// 		$(".popup-img-wrapper").fadeIn(800); // Медленно выводим изображение
						// 		$(".popup-img-wrapper").click(function(){	// Событие клика на затемненный фон	   
						// 			$(".popup-img-wrapper").fadeOut(800);	// Медленно убираем всплывающее окно
						// 			setTimeout(function() {	// Выставляем таймер
						// 				$(".popup-img-wrapper").remove(); // Удаляем разметку всплывающего окна
						// 				$('.red-menu-wrapper.cloneMenu').css({
						// 					'z-index':'1000'
						// 				})
						// 			}, 800);
						// 		});
						// 	});
						// });
						// End Resize script
						

						jQuery(document).ready(function() {
							validation(form_subscribe_popup);
							jQuery('#form_subscribe_popup').submit(function(e) {
								var validation = $("#form_subscribe_popup").valid();
								e.preventDefault();
								        var Name = $("#name").val();
								        var Phone = $("#email").val();
								        var http = new XMLHttpRequest();
								        var url = "https://script.google.com/macros/s/AKfycbwlypXRaDJKoeW5nM3hCPZUli1oFrwsnxHz-1ThBz7g3naIoEg/exec";
								        var params = "p1="+Name+"&p2="+Phone;

								 if (validation) {    
									http.open("GET", url+"?"+params, true);
									http.send(null);
									for (var i = 0; i < e.target.length; i++) {      // Проверка на наличие кнопки submit и добавление класса с анимацией
										if (e.target[i].type === 'submit') {
											e.target[i].classList.add('succes-submit');
											e.target[i].innerHTML = 'ГОТОВО !';
											e.target[i].setAttribute('disabled','disabled')										
											setTimeout('closepopup()', 2500)
										}
									}	
								 }  
							 });
						});


						jQuery(document).ready(function(e) {
							validation(form_burger_popup);
							jQuery('#form_burger_popup').submit(function(e) {
								var validation = $("#form_burger_popup").valid();
								e.preventDefault();
								var Email = jQuery("#Email_burger_popup").val();
								var Name = jQuery("#Name_burger_popup").val();
								var City = jQuery("#city_burger_popup").val();
								var contact = jQuery("#contact_burger_popup").val();
								var Text = jQuery("#text_burger_popup").val();
								var http = new XMLHttpRequest();
								var url = "https://script.google.com/macros/s/AKfycbyUe_LxaYIppn7wfV9d7nM2AyxfoQv-ywaZPnaXLRW7YKJfeP0O/exec";
								var params = "p1="+Name+"&p2="+Email+"&p3="+City+"&p4="+contact+"&p5="+Text;
								if (validation) {   
									http.open("GET", url+"?"+params, true);
									http.send(null);  
									for (var i = 0; i < e.target.length; i++) {
										if (e.target[i].type === 'submit') {
											e.target[i].classList.add('succes-submit');
											e.target[i].innerHTML = 'ГОТОВО !';
											e.target[i].setAttribute('disabled','disabled');
											setTimeout('closepopup()', 2500)
										}
									}
								}
							 });
						});


						jQuery(document).ready(function() {
							validation(form_opencofee_popup);
							  jQuery('#form_opencofee_popup').submit(function(e) {
								e.preventDefault();
								var validation = $("#form_opencofee_popup").valid();
								var Name = jQuery("#name_opencofee_popup").val();
								var Phone = jQuery("#phone_opencofee_popup").val();
								var Email = jQuery("#email_opencofee_popup").val();
								var http = new XMLHttpRequest();
								var url = "https://script.google.com/macros/s/AKfycbzQS76GmgM35TbxMEjxA9GVrvE8Ote36zcyyLwcZR0ejX5ojbM/exec";
								var params = "p1="+Name+"&p2="+Phone+"&p3="+Email;
								if (validation) {
									http.open("GET", url+"?"+params, true);
									http.send(null);
									for (var i = 0; i < e.target.length; i++) {
										if (e.target[i].type === 'submit') {
											e.target[i].classList.add('succes-submit');
											e.target[i].innerHTML = 'ГОТОВО !';
											e.target[i].setAttribute('disabled','disabled')
											setTimeout('closepopup()', 2500)
										}
									}  
								}
							 });
						});

						jQuery(document).ready(function(e) {
							validation(coffee_promo);
							jQuery('#coffee_promo').submit(function(e) {
								var validation = $("#coffee_promo").valid();
								e.preventDefault();
								var Email = jQuery("#email_coffee_promo").val();
								var http = new XMLHttpRequest();
								var url = "https://script.google.com/macros/s/AKfycbzEiA-datV_gKTCPb_FzbYHCcGvPvzQ6V0d5eJOjuMfM_uFlVjn/exec";
								var params = "p1="+Email;
								if (validation) {   
									http.open("GET", url+"?"+params, true);
									http.send(null);  
									for (var i = 0; i < e.target.length; i++) {
										if (e.target[i].type === 'submit') {
											e.target[i].classList.add('succes-submit');
											e.target[i].innerHTML = 'ГОТОВО !';
											e.target[i].setAttribute('disabled','disabled');
											setTimeout('closepopup()', 2500)
										}
									}
								}
							 });
						});

						

						//https://script.google.com/macros/s/AKfycbwlypXRaDJKoeW5nM3hCPZUli1oFrwsnxHz-1ThBz7g3naIoEg/exec



// Validation settings
// This is rules , where form_name e.t.c = name of form input field.
function validation(id) {
	$(id).validate({
		rules: {
			form_name: {
				required:true
			},
			form_email: {
				required:true,
				email: true
			},
			form_text: {
				required:true
			},
			form_about: {
				required: true
			},
			form_number: {
				required: true,
				number: true
			},
			comment: {
				required: true
			},
			// for opros
			familyname: {
				required: true
			},
			name: {
				required:true
			},
			age: {
				required:true
			},
			gender: {
				required:true
			},
			email: {
				email: true,
				required:true
			},
			city: {
				required:true
			},
			worktype: {
				required:true
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
			q7: {
				required:true
			},
			q8: {
				required:true
			},
			q9: {
				required:true
			},
			socnetwork: {
				required:true
			},
			messanger: {
				required:true
			},
			marriedchildrens: {
				required:true
			},
			whereknow: {
				required: true
			},
			knowaboutus: {
				required:true
			},
			subscribe: {
				required:true
			}
		}
	});
}

// Close popup menu
function closepopup(){
	var close = $('.box-modal_close');
	for (var i = 0; i < close.length; i++) {
		close[i].click();
	}
}

// Added Photo to form regDiscontPopup()
jQuery(document).ready(function() {
	var photo = $('.user_img')[0].style.backgroundImage;
	$('.user_img').css('background-image', photo);
});

$(document).ready(function() {
	$('#promo_cart3').tooltipster({
		interactive: true,
		contentCloning: true
	});
});

// Checkbox Form Visualisation profile page.


// For testing scripts when page load 
// jQuery(document).ready(function() {
// 	$('#checbox-block').click(function (){
// 		$('#radio-input').click();
// 		$('#radio-input').prop("checked") ? $('#checbox-block').attr('src','img/checkbox_sellected.png') : $('#checbox-block').attr('src','img/checkbox_notsellected.png');
// 		;})	
// });

$(document).ready(function() {
	$('.dropdown-text').click (function(e){
		var hiddenTarget = this.lastElementChild;
		$(hiddenTarget).toggle(function(){});
	})
})

// Redirection Buttons buy course. 

// $(document).ready(function(){
// 	$('.product-btns a').click(function(e){
// 		var target = e.target ;
// 		var course = target.getAttribute('course') ; // получаем Url кнопки куда перенаправлять надо.
// 		var dataUlogin = $('.socialnet-reg').attr('data-ulogin'); // Считываем значение атрибута data-ulogin.
// 		dataUloginNum = dataUlogin.indexOf("redirect_uri"); 
// 		dataUlogin = $('.socialnet-reg').attr('data-ulogin',dataUlogin.substring(0,dataUloginNum) + course + ';'); // Заменяем 
// 		console.log('Отработало', dataUlogin);
// 	})
// });

$(document).ready(function(){
	$('.login-form a').click(function() {
		$('.socialnet-reg').attr('data-ulogin',`display=buttons;fields=first_name,last_name,photo;mobilebuttons=0; redirect_uri=http%3A%2F%2Fcourse.locallocal.ru;`);
	}) 
})

$(document).ready(function() {
	var redirectUrl = window.location.href;
	if (redirectUrl == 'http://course.locallocal.ru/index?course1' && $('.info-logged_user').text() == '') {
		regDiscontPopup();
	};
	if (redirectUrl == 'http://course.locallocal.ru/index?course2' && $('.info-logged_user').text() == '') {
		regDiscontPopup2();
	}
	if (redirectUrl == 'http://course.locallocal.ru/index?course3' && $('.info-logged_user').text() == '') {
		regDiscontPopup3();
	}
}); 

// Gallery by Evgeniy ;)

// инициалиация галереи по id
galleryInit('gallery_evg');
function galleryInit(id) {
	var galleryId = id;
	console.log(galleryId);
	activeImage()
	changeImage();
}

// Функция смены картинки на ту у которой атрибут active.
function activeImage() {
	activeTarget = $('.additional-img .item img');
	for (var i = 0; i < activeTarget.length; i++) {
		if (activeTarget[i].hasAttribute('activated')) {
			$('.main-img .item .img').css({
				'background-image' : 'url('+activeTarget[i].src+')',
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-position': 'center'
			})
			activeTarget[i].setAttribute('style','border:2px solid black; box-sizing:border-box;')
		}
	}
}
// функция смены изображения по src.
function changeImage() {
	$('.additional-img .item img').click(function(e){
		clickTarget = e.target;
		targetSrc = e.target.src;
		$('.additional-img .item img').attr('style','');
		$(clickTarget).css({
			'box-sizing':'border-box',
			'border':'2px solid black',
			'opacity':'1',
			'transition':'.1s'
		});
		$('.main-img .item img').css({
			'opacity' : '1',
			'transition' : '.5s'
		})
		$('.main-img .item .img').css({
			'background-image' : 'url('+targetSrc+')',
		})
	})
}

// // Copy Gallery by Evgeniy ;)

// // инициалиация галереи по id
// galleryInit('gallery_evg');
// function galleryInit(id) {
// 	var galleryId = id;
// 	console.log(galleryId);
// 	activeImage()
// 	changeImage();
// }

// // Функция смены картинки на ту у которой атрибут active.
// function activeImage() {
// 	activeTarget = $('.additional-img .item img');
// 	for (var i = 0; i < activeTarget.length; i++) {
// 		if (activeTarget[i].hasAttribute('activated')) {
// 			$('.main-img .item img')[0].src = activeTarget[i].src;
// 			activeTarget[i].setAttribute('style','border:2px solid black; box-sizing:border-box;')
// 		}
// 	}
// }
// // функция смены изображения по src.
// function changeImage() {
// 	$('.additional-img .item img').click(function(e){
// 		clickTarget = e.target;
// 		targetSrc = e.target.src;
// 		$('.additional-img .item img').attr('style','');
// 		// for (var i = 0; i < $('.additional-img .item img').length; i++) {
// 		// }
// 		$(clickTarget).css({
// 			'box-sizing':'border-box',
// 			'border':'2px solid black',
// 			'opacity':'1',
// 			'transition':'.1s'
// 		});
// 		$('.main-img .item img')[0].src = targetSrc;
// 		$('.main-img .item img').css({
// 			'opacity' : '1',
// 			'transition' : '.5s'
// 		})
// 	})
// }

