$(function() {
  var images = {
    vessels: [{
      src: "https://static1.squarespace.com/static/576a755eff7c50615f1f29e3/576bfa02be6594fbb3a573f3/59b69d2ea803bb7536ffd76c/1508134572516/_07A7332.jpg",
      desc: "Vessel, 24 x 28cm, Stoneware",
      caption: "Vessel, 24 x 28cm, Stoneware"
    },{
      src: "https://static1.squarespace.com/static/576a755eff7c50615f1f29e3/576bfa02be6594fbb3a573f3/59b8e85cc534a5f8143f3cdf/1508134567227/_07A7354.jpg",
      desc: "Vessel, 32 x 36cm, Stoneware",
      caption: "Vessel, 32 x 36cm, Stoneware"
    },{
      src: "https://static1.squarespace.com/static/576a755eff7c50615f1f29e3/576bfa02be6594fbb3a573f3/59b69d3e03596ecddf08048e/1508134561762/_07A7345.jpg",
      desc: "Vessel, 24 x 28cm, Stoneware",
      caption: "Vessel, 24 x 28cm, Stoneware"
    }],
    reliefs: [{}],
    words: [{}]
  };

  $(".nav-link, .index__link").click(function(event) {
    var view = $(event.target).attr("href").substring(1);

    $('.nav-item').removeClass('active');
    $(event.target).parent().addClass("active");
    $(".content" ).children().hide();

    if (images[view]) {
      $(".content__carousel").show();
      addCarouselItems(images[view]);
    } else {
      $(".content__" + view).show();
    }
  });

  function addCarouselItems(items) {
    var carouselInner = $(".carousel-inner");
    carouselInner.html("");

    for (var item in items) {
      var carouselItem = $('<div class="carousel-item"></div>').html(
        $('<img class="d-block w-100" />').attr("src", item.src).attr('alt', item.desc).html()
      );

      if (item.caption) {
        carouselItem.append(
          $('<div class="carousel-caption"></div>').text('<span>' + item.caption + '</span>').html()
        );
      }

      carouselInner.append(carouselItem);
    }

    $(".carousel-item:first").addClass("active");
  }
});
