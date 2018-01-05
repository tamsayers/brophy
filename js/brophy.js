$(function() {
  var images = {
    vessels: [{
      src: "/vessels/vessel_23x28_stoneware.jpg",
      desc: "Vessel, 23 x 28cm, Stoneware",
      caption: "Vessel, 23 x 28cm, Stoneware"
    },{
      src: "/vessels/vessel_24x23_stoneware.jpg",
      desc: "Vessel, 24 x 28cm, Stoneware",
      caption: "Vessel, 24 x 28cm, Stoneware"
    },{
      src: "/vessels/vessel_24x28_stoneware.jpg",
      desc: "Vessel, 24 x 28cm, Stoneware",
      caption: "Vessel, 24 x 28cm, Stoneware"
    },{
      src: "/vessels/vessel_24x29_stoneware.jpg",
      desc: "Vessel, 24 x 29cm, Stoneware",
      caption: "Vessel, 24 x 29cm, Stoneware"
    },{
      src: "/vessels/vessel_27x28_stoneware.jpg",
      desc: "Vessel, 27 x 28cm, Stoneware",
      caption: "Vessel, 27 x 28cm, Stoneware"
    },{
      src: "/vessels/vessel_32x36_stoneware.jpg",
      desc: "Vessel, 32 x 36cm, Stoneware",
      caption: "Vessel, 32 x 36cm, Stoneware"
    },{
      src: "/vessels/amphora_26x8_stoneware.jpg",
      desc: "Amphora, 26 x 8cm, Stoneware",
      caption: "Amphora, 26 x 8cm, Stoneware"
    },{
      src: "/vessels/amphora_40x10_stoneware.jpg",
      desc: "Amphora, 40 x 10cm, Stoneware",
      caption: "Amphora, 40 x 10cm, Stoneware"
    },{
      src: "/vessels/amphora_40x10_stoneware.jpg",
      desc: "Amphora, 40 x 10cm, Stoneware",
      caption: "Amphora, 40 x 10cm, Stoneware"
    },{
      src: "/vessels/amphora_59x20_stoneware.jpg",
      desc: "Amphora, 59 x 20cm, Stoneware",
      caption: "Amphora, 59 x 20cm, Stoneware"
    },{
      src: "/vessels/amphora_71x16_stoneware.jpg",
      desc: "Amphora, 71 x 16cm, Stoneware",
      caption: "Amphora, 71 x 16cm, Stoneware"
    },{
      src: "/vessels/boat_25x28_stoneware.jpg",
      desc: "Boat, 25 x 28cm, Stoneware",
      caption: "Boat, 25 x 28cm, Stoneware"
    },{
      src: "/vessels/large_bowl_small_bowls_30x50_stoneware.jpg",
      desc: "Large bowl of small bowls, 30 x 50cm, Stoneware",
      caption: "Large bowl of small bowls, 30 x 50cm, Stoneware"
    },{
      src: "/vessels/3_small_smoke_fires_pots_on_wood_14x16_stoneware.jpg",
      desc: "3 small smoke fired pots on wood, 14cm x 16cm, stoneware",
      caption: "3 small smoke fired pots on wood, 14cm x 16cm, stoneware"
    },{
      src: "/vessels/small_pot_on_wood_17x14_stoneware.jpg",
      desc: "Small pot on wood, 17 x 14cm, Stoneware",
      caption: "Small pot on wood, 17 x 14cm, Stoneware"
    },{
      src: "/vessels/tilted_vessel_15x24_stoneware.jpg",
      desc: "Tilted vessel, 15 x 24cm, Stoneware",
      caption: "Tilted vessel, 15 x 24cm, Stoneware"
    }],
    reliefs: [{
      src: "/reliefs/heart_vessel_relief_mixed_media.jpg",
      desc: "Heart vessel relief, mixed media"
    }],
    words: [{
      src: "/words/words.jpg",
      desc: "words"
    },{
      src: "/words/am_i_a_good_person.jpg",
      desc: "Am I a good person"
    },{
      src: "/words/good_enough_person.jpg",
      desc: "Am I a good enough person"
    },{
      src: "/words/how_will_i_die.jpg",
      desc: "How will I die"
    },{
      src: "/words/intamacy_isolation.jpg",
      desc: "Intamacy isolation"
    },{
      src: "/words/love_hate_reparation.jpg",
      desc: "Love hate reparation"
    },{
      src: "/words/reparation_slate.jpg",
      desc: "Reparation"
    },{
      src: "/words/trust_mistrust.jpg",
      desc: "Trust mistrust"
    }]
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

    $.each(items, function(i, item) {
      var carouselItem = $('<div class="carousel-item"></div>');
      carouselItem.html(
        '<img class="d-block w-100" src="/rogerbrophy/images' + item.src + '" alt="' + item.desc + '" />'
      );

      if (item.caption) {
        var caption = $('<div class="carousel-caption"></div>');
        caption.html('<span>' + item.caption + '</span>');
        carouselItem.append(caption);
      }

      carouselInner.append(carouselItem);
    });

    $(".carousel-item:first").addClass("active");
  }
});
