//todo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[----loader----]
$(function () {
  $(".loader").fadeOut(3000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});
//?=====
//todo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[----windowScroll----]
let homeOffset = $("#section1").offset().top;
$(".scroll-up").click(function (e) {
  $("body,html").animate({ scrollTop: homeOffset - 120 }, 2000);
});

$(window).scroll(function () {
  let offsetDuration = $("#section1").offset().top;
  let windowScrollTop = $(window).scrollTop();
  if (windowScrollTop > offsetDuration) {
    $(".scroll-up").fadeIn(1000);
  } else {
    $(".scroll-up").fadeOut(1000);
  }
  let sectionOffset2 = $("#section2").offset().top;
  if (windowScrollTop > sectionOffset2) {
    $(".navbar").addClass("fixed-top",1000);
  } else {
    $(".navbar").removeClass("fixed-top",1000);
  }
});

//todo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[----scrollSmoth----]
$(".navbar li a ,.footer-menue li a").click(function ({ target }) {
  // $(target).addClass("actives");
  let targetHref = $(target).attr("href");
  let sectionOffset = $(targetHref).offset().top;
  $("body,html").animate({ scrollTop: sectionOffset - 150 }, 1000);
});
//todo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[----scrollSmoth----]

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

// $(".nonloop").owlCarousel({
//   center: true,
//   items: 2,
//   loop: false,
//   margin: 10,
//   responsive: {
//     600: {
//       items: 4,
//     },
//   },
// });
