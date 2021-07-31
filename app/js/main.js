$(document).ready(function () {
  $(".slider").slick({
    prevArrow:
      '<button class="slider-btn slider-prev"><img src="images/right-arrow.svg"></button>',
    nextArrow:
      '<button  class="slider-btn slider-next"><img src="images/right-arrow.svg"></button>',
  });

  const link1 = $(".catalog__link1");
  const link2 = $(".catalog__link2");
  const items1 = $(".catalog__items-robe1");
  const items2 = $(".catalog__items-robe2");
  

  link2.click(function () {
    if (items2.hasClass("catalog__active")) {
      items2.removeClass("catalog__active");
      items1.addClass("catalog__active");
      link2.css({ "text-decoration": "underline", color: "#005bc1" });
      link1.css({ "text-decoration": "none", color: "#343434" });
    }
  });
  link1.click(function () {
    if (items1.hasClass("catalog__active")) {
      items1.removeClass("catalog__active");
      items2.addClass("catalog__active");
      link1.css({ "text-decoration": "underline", color: "#005bc1" });
      link2.css({ "text-decoration": "none", color: "#343434" });
    }
  });
});
