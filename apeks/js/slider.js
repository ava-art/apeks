$('.single-item').slick({
  infinite: true,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  dots:false,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});