$(function () {
    var cookie_town = getCookie('selected_town');
    var zeroblock = getCookie('show_zero');

    $('.drop-down .arrowdown').click(function (e) {
        $(e.target.previousElementSibling).click();
    });

    /* ~ SCRIPT FOR SINGLE DROPDOWN CHOICE ~*/
    $('.spisok.single').click(function (e) {
        var target = e.target;
        var ulElement = $(target).siblings("ul")[0];
        ulElement.style.display == 'none' ? ulElement.style.display = 'inherit' : ulElement.style.display = 'none';
        for (var i = 0; i < $('.drop-down.single ul').length; i++) {
            $('.drop-down.single ul')[i] != ulElement ? $('.drop-down.single ul')[i].style.display = 'none' : '';
        }
        target.hasAttribute('active') ? target.removeAttribute('active') : target.setAttribute('active', '');
    });

    // select single choice in dropdown.
    $('.drop-down.single ul').click(function (e) {
        var choice = e.target.innerHTML;
        var target = e.target;
        var input = $(target).parent().siblings('input')[0];
        if (target.tagName != 'UL') {
            // target.style.backgroundColor == ''  ? target.style = "background-color: gainsboro;" : '' ;
            target.closest('ul').style.display = 'none'; // close when clicked in single field.
            target.setAttribute('active', '');
            input.value = choice;
            document.cookie = 'selected_town =' + $(target).text();
            document.cookie = 'show_zero =' + $(target).data('zeroblock');
            if ($(target).data('text1') != '') {
                $('[href="#text1"]').html($(target).data('text1'));
            }
            if ($(target).data('text2') != '') {
                $('[href="#text2"]').html($(target).data('text2'));
            }
            if ($(target).data('text3') != '') {
                $('[href="#text3"]').html($(target).data('text3'));
            }
            if ($(target).data('text4') != '') {
                $('[href="#text4"]').html($(target).data('text4'));
            }
            if ($(target).data('text5') != '') {
                $('[href="#text5"]').html($(target).data('text5'));
            }

            // show zeroblock and hide others.
            if ($(target).data('zeroblock') != '') {
                let zeroblock = $(target).data('zeroblock');
                $(zeroblock).show();

                $('.drop-down.single ul li[data-zeroblock]').each(function (i, d) {
                    console.log($(d));
                    if ($(d).data('zeroblock') != zeroblock) {
                        $($(d).data('zeroblock')).hide();
                    }
                })
            }

            for (var i = 0; i < target.parentElement.childNodes.length; i++) {
                if (target.parentElement.childNodes[i] != target && target.parentElement.childNodes[i].tagName == 'LI') {
                    target.parentElement.childNodes[i].style.backgroundColor = '';
                    target.parentElement.childNodes[i].removeAttribute('active');
                    // $(input).valid(); // Костыль, для корректной работы, jquery validation, повторная валидация конкретного инпута.
                }
            }
        }
    })

    // closed all drop-down windows if clicked behind drop-down block.
    $(document.body).click(function (e) {
        for (var i = 0; i < $('.drop-down.single ul').length; i++) {
            if (e.target.closest('.drop-down.single') == null) {
                $('.drop-down.single ul')[i].style.display = 'none';
            }
        }
    })
    /* ~~~ END OF SINGLE DROPDOWN CHOICE ~~~ */

    // возвращает куки с указанным name,
    // или undefined, если ничего не найдено
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // show town
    if (cookie_town != '') {
        for (var i = 0; i < $('.drop-down.single ul li').length; i++) {
            // console.log($('.drop-down.single ul li')[i]);
            if ($('.drop-down.single ul li').eq(i).text() == cookie_town) {
                $('.drop-down.single ul li').eq(i).click();
            }
        }
    }
    // show zeroblock
    if (zeroblock != '' && zeroblock != undefined) {
        $(zeroblock).show();
        console.log(zeroblock);
    } else {
        $('.drop-down.single ul li[data-zeroblock]').each(function (i, d) {
            $($(d).data('zeroblock')).hide();
        })
    }

    /* Add Geolocation */
    // Api для получения результата региона,города и.т.д
    $.getJSON("http://ip-api.com/json/?lang=ru", function (data) {
        var data_body = "";
        $.each(data, function (k, v) {
            data_body += "<b>" + k + "</b> : <i>" + v + "</i><br />";
        });
        setTown(data.region);
        console.log('data !!!!!',data)
    });

    // Добавляем выбор конкретного города в меню исходя из геолокации, если геолокация области(региона) не соответствует городу и пользователь не выбирал уже город вручную, то выбираем вариант по дефолту с установленным параметром!
    function setTown(region) {
        $('.drop-down.single ul li:contains("Екатеринбург")').attr('data-default','default'); // Установим по умолчанию Екатеринбург

        // установка регионов и их городов по выбору.
        var regions = {
            "SVE" : "Екатеринбург",
            "YAN" : "Новый Уренгой",
            "CHE" : "Челябинск",
            "KHM" : "Сургут",
            "PER" : "Пермь",
            "TYU" : "Тюмень",
        }

        function regionIs() {
            for (key in regions) {
                if (region == key) {
                    return regions[key];
                } else {
                    return false
                }
            }
        }

        // если нет куки города и регион совпадает с городом
        if (cookie_town == undefined && regionIs()) {
            $('.drop-down.single ul li:contains('+ regionIs() +')').click();
            console.log('Город региона по ip:', regionIs());
        }
        // если куки города не установлено и регион не совпадает с городом, устанавливаем дефолтное значение.
        if (cookie_town == undefined && regionIs() == false) {
            console.log('дефолтный город установленный', $('.drop-down.single ul li[data-default="default"]').text())
            $('.drop-down.single ul li[data-default="default"]').click(); // Выберем значение по дефолту
        }
    }

})

/*выводим в верзхний слой меню, уменьшаем z-index у мешающих элементов*/
$(function () {
    $('[data-elem-type="image"').css({"z-index" : '10'})
    $('[data-elem-type="text"').css({"z-index" : '10'})
})

// Кастомная функция для удаление всех кукисов
function removeCookies() {
    var cookies = $.cookie();
    for(var cookie in cookies) {
        $.removeCookie(cookie);
    }
}
