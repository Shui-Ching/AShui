// JavaScript Document
$(document).ready(function(){
	 new WOW().init();
	
	
  $('.flexslider').flexslider({
    animation: "fade",
	 slideshowSpeed: 4000, // 自动播放速度毫秒
     animationSpeed: 900, //滚动效果播放时长
	 startAt: 0,	
  });

	
	$("#header #nav>ul").clone(). insertAfter($('.slidebar-1 h2'));
	$(".left_menu div").clone().prependTo($('.slidebar-2'));
	$('.sb-left>div>div>ul , .sb-left>div>ul').addClass('sb-menu');
	$('.sb-left>div>div>ul ,.sb-left>div>ul').addClass('vmenu');
	$('.sb-left ul ul').addClass("sb-submenu");
	$('.sb-left li:has("ul")>a').addClass('sb-toggle-submenu');
	
	$('.sb-left li:has("ul")>a').removeAttr("href");
	$(".in_pro_zone .pro3 .info").clone().insertAfter($('.in_pro_zone .pro3 .pic'));
	$(".pro_name_all").clone().prependTo($('.mob_tit'));

    $('.head_tit').addClass('wow');
   
	
	var options = {
		offset: 100,
		offsetSide: 'top',
		classes: {
			clone:   'header--clone',
			stick:   'header--stick',
			unstick: 'header--unstick'
		}
	};
	
	var header = new Headhesive('#header', options);
	$("#header.header--clone").attr('id', 'header2');
	
	//$('#sb-btn1').on('click', function() {
	$('.sb-btn1').bind("click touchstart", function(){
		
		$(".sb-slidebar").removeClass('side-1').removeClass('side-2');
		$(".sb-slidebar").addClass('side-1');
      });
	
	//$('#sb-btn2').on('click', function() {
	$('.sb-btn2').bind("click touchstart", function(){
		
		$(".sb-slidebar").removeClass('side-1').removeClass('side-2');
		$(".sb-slidebar").addClass('side-2');
		
      });
		
	
	$.slidebars();

	
			
//預設開啟的節點
		/*var b = $(".vmenu>ul>li:nth-child(3)>a");
		b.attr("data-option", "on");
		b.next().css("display", "block");*/

		var obj, item;
		var autohide = 1;
		obj = $('.vmenu');

		item = obj.find("ul").parent("li").children("a");
		//搜索vmenu下的ul的上一層父層li的單一下一層a   //找出有下一層的A連結
		//.find()和.children()方法是相似的，但后者只是针对向下一个级别的DOM树
		item.attr("data-option", "off"); //為 找出的A加屬性 data-option:off

		item.on("click", function () { //A點擊
			var a = $(this);
			if (autohide = 1) {
				a.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(200 / 1.2,
					function () {
						$(this).parent("li").children("a").attr("data-option", "off");
					})
			}
			if (a.attr("data-option") == "off") {
				a.parent("li").children("ul").slideDown(200,
					function () {
						a.attr("data-option", "on");
					});
			}
			if (a.attr("data-option") == "on") {
				a.attr("data-option", "off");
				a.parent("li").children("ul").slideUp(200)
			}
		});
		
$('.responsive').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 651,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		dots: true,
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.single-item').slick({
 infinite: true,
  arrows: false,
  dots: true
});

$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});	
		
	 $("#gotop").click(function(){
                 jQuery("html,body").animate({
                     scrollTop:0
                 },1000);
             });
             $(window).scroll(function() {
                 if ( $(this).scrollTop() > 150){
                     $('#gotop').fadeIn("fast");
                 } else {
                     $('#gotop').stop().fadeOut("fast");
                 }
             });
			 
			

	
	 
	
		
		});