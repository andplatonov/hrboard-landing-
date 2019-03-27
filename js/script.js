$(document).ready(function () {
    var fixedSlide = 1;
     var title = {
            "welcome": "Главная",
            "quality": "Цели",
            "opportunities": "Возможности",
            "block": "Блоки",
            "journal": "HR Journal",
            "m-footer": "Контакты"
        }

    new fullpage('#fullpage', {
        anchors: ['welcome', 'quality', 'opportunities', 'block', 'journal', 'm-footer'],
        menu: "#menu",
        responsiveWidth: 768,
        afterLoad: function (origin, destination) {
            $(".nav__header").html(title[destination["anchor"]]);
        },
        });

       
    /*
    *   START
    *   For slider
    * */
    
    var slider = $(".slider__wrapper");
    var speedSlider = 1000;
    var countSlide = 1;
    var accessSlide = true;
    var activeSlide = true;

    function NextSlide() {
        console.log("start-" + countSlide);
           if ( activeSlide ) {
               accessSlide = false;
               $(".arrows__item_right").off("click", NextSlide);

               var margin = $(slider).css("margin-left");
               var result = parseFloat(margin) - parseFloat($(".slider__item").width());
               $(slider).animate( {"margin-left": result}, speedSlider, function () { accessSlide = true; $(".arrows__item_right").on("click", NextSlide); } );

               countSlide++;

               if ( countSlide >= 3) {
                   $(".arrows__item_right").animate({opacity: 0}, 300, function () { $(".arrows__item_right").css("display", "none"); } );
               }
               else {
                   $(".arrows__item_left").css("display", "block");
                   $(".arrows__item_left").animate({opacity: 1}, 300, function () { } );
               }
           }
        console.log("end-" + countSlide);
    }

    function PrevSlide() {
        console.log("start-" + countSlide);

        if ( activeSlide ) {
            accessSlide = false;
            $(".arrows__item_left").off("click", PrevSlide);

            var margin = $(slider).css("margin-left");
            var result = parseFloat(margin) + parseFloat($(".slider__item").width());
            $(slider).animate( {"margin-left": result}, speedSlider, function () { accessSlide = true; $(".arrows__item_left").on("click", PrevSlide); }  );

            countSlide--;

            if ( countSlide <= 1 ) {
                $(".arrows__item_left").animate({opacity: 0}, 300, function () { $(".arrows__item_left").css("display", "none"); } );
            }
            else {
                $(".arrows__item_right").css("display", "block");
                $(".arrows__item_right").animate({opacity: 1}, 300, function () { } );
            }
        }
        console.log("end-" + countSlide);
    }

    // init arrow
    $(".arrows__item_right").on("click", NextSlide);
    $(".arrows__item_left").on("click", PrevSlide);

    /*

    swipe

    */

    $(".slider__wrapper").swipe( {
        swipeLeft: function() {
            console.log(fixedSlide);
            if ( activeSlide && ( fixedSlide < 3 ) && ( fixedSlide > 0 ) ) {
               accessSlide = false;
               $(".arrows__item_right").off("click", NextSlide);

               var margin = $(slider).css("margin-left");
               var result = parseFloat(margin) - parseFloat($(".slider__item").width());
               $(slider).animate( {"margin-left": result}, speedSlider, function () { accessSlide = true; $(".arrows__item_right").on("click", NextSlide); } );

               fixedSlide++;
           } 
        },
        swipeRight: function() {
            console.log(fixedSlide);
            if ( activeSlide && ( fixedSlide <= 3 ) && ( fixedSlide > 1 ) ) {
                accessSlide = false;
                $(".arrows__item_left").off("click", PrevSlide);

                var margin = $(slider).css("margin-left");
                var result = parseFloat(margin) + parseFloat($(".slider__item").width());
                $(slider).animate( {"margin-left": result}, speedSlider, function () { accessSlide = true; $(".arrows__item_left").on("click", PrevSlide); }  );

                fixedSlide--;
            }
        },
        allowPageScroll: "vertical"
    });

    /*
    *   END
    *  For slider
    * */

    /*
    var title = {
        1: "Глявная",
        2: "Цели",
        3: "Возможности",
        4: "Блоки",
        5: "HR Journal",
        6: "Контакты"
    }

    $(".circle").on("click", SlideMove);
    var speed = 500;
    var mainIndex = 1;
    var activeSlide = true;
    //setTimeout(function () { activeSlide =  true; }, 500);

    function SlideMove() {
        $(".circle").removeClass("circle_active");
        $(this).addClass("circle_active");

        var index = $(this).attr("data-slide");
        mainIndex = index;

        var top = -( (100 * index) - 100 ) + "%";
        //$(".main__wrapper").animate({top: top}, speed, function () {});
        $(".main__wrapper").css("top", top);

        $(".nav__header").html(title[index]);
    }

    document.getElementById('q').onmousewheel = document.getElementById('q').onwheel = scrollSlide;
    function scrollSlide (event) {
            var circle = $(".circle");

            if (event.wheelDelta >= 5 && activeSlide) {
                activeSlide = false;

                if ( !(mainIndex >= 6)) {
                    $(".main__wrapper").css( "top",  -(mainIndex * 100 ) + "%" );
                    $(".nav__header").html(title[mainIndex + 1]);

                    mainIndex++;
                    $(circle).removeClass("circle_active");
                    $(circle[mainIndex - 1]).addClass("circle_active"); }

                setTimeout( function () { activeSlide = true; }, 1000 ); }
            else if (event.wheelDelta <= -5 && activeSlide) {
                activeSlide = false;

                if ( !(mainIndex <= 1)) {
                    var result = $(".main__wrapper").css("top");

                    result = parseFloat(result) + parseFloat($(".welcome").height());
                    console.log(result);
                    $(".main__wrapper").css( "top", result );
                    $(".nav__header").html(title[mainIndex + 1]);

                    mainIndex--;
                    $(circle).removeClass("circle_active");
                    $(circle[mainIndex - 1]).addClass("circle_active"); }

                setTimeout( function () { activeSlide = true; }, 1000 );}
        };*/
        

});