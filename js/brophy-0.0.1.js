$(function() {
  var images = {
    vessels: [{
        src: "/vessels/vessel_23x28_stoneware",
        desc: "Vessel, 23 x 28cm, Stoneware",
        caption: true
      },{
        src: "/vessels/vessel_24x23_stoneware",
        desc: "Vessel, 24 x 28cm, Stoneware",
        caption: true
      },{
        src: "/vessels/vessel_24x28_stoneware",
        desc: "Vessel, 24 x 28cm, Stoneware",
        caption: true
      },{
        src: "/vessels/vessel_24x29_stoneware",
        desc: "Vessel, 24 x 29cm, Stoneware",
        caption: true
      },{
        src: "/vessels/vessel_27x28_stoneware",
        desc: "Vessel, 27 x 28cm, Stoneware",
        caption: true
      },{
        src: "/vessels/vessel_32x36_stoneware",
        desc: "Vessel, 32 x 36cm, Stoneware",
        caption: true
      },{
        src: "/vessels/amphora_40x10_stoneware",
        desc: "Amphora, 40 x 10cm, Stoneware",
        caption: true
      },{
        src: "/vessels/amphora_59x20_stoneware",
        desc: "Amphora, 59 x 20cm, Stoneware",
        caption: true
      },{
        src: "/vessels/amphora_71x16_stoneware",
        desc: "Amphora, 71 x 16cm, Stoneware",
        caption: true
      },{
        src: "/vessels/amphora_no_neck",
        desc: "Amphora, 54 x 8cm, Stoneware",
        caption: true
      },{
        src: "/vessels/amphora_offset_neck",
        desc: "Amphora, 60 x 7cm, Stoneware",
        caption: true
      },{
        src: "/vessels/boat_25x28_stoneware",
        desc: "Boat, 25 x 28cm, Stoneware",
        caption: true
      },{
        src: "/vessels/large_bowl_small_bowls_30x50_stoneware",
        desc: "Large bowl of small bowls, 30 x 50cm, Stoneware",
        caption: true
      },{
        src: "/vessels/3_small_smoke_fires_pots_on_wood_14x16_stoneware",
        desc: "3 small smoke fired pots on wood, 14cm x 16cm, stoneware",
        caption: true
      },{
        src: "/vessels/small_pot_on_wood_17x14_stoneware",
        desc: "Small pot on wood, 17 x 14cm, Stoneware",
        caption: true
      },{
        src: "/vessels/tilted_vessel_15x24_stoneware",
        desc: "Tilted vessel, 15 x 24cm, Stoneware",
        caption: true
      }
    ],
    reliefs: [{
        src: "/reliefs/heart_vessel_relief_mixed_media",
        desc: "Heart vessel relief, mixed media"
      },{
        src: "/reliefs/blue_egg_shape",
        desc: "Blue box, 84 x 64cms, mixed media",
        caption: true
      },{
        src: "/reliefs/mother_relief",
        desc: "Mother, 98 x 60cms, mixed media",
        caption: true
      },{
        src: "/reliefs/heart_relief",
        desc: "Heart box, 50 x 40cms, mixed media",
        caption: true
      },{
        src: "/reliefs/straw_relief",
        desc: "Red straw box, 58 x 40cms, mixed media",
        caption: true
      }
    ],
    words: [{
        src: "/words/words",
        desc: "words"
      },{
        src: "/words/signs_of_life",
        desc: "Signs of Life, 105 x 34cms, mixed media",
        caption: true
      },{
        src: "/words/danger_of_death",
        desc: "Danger of Death, 84 x 60cms, mixed media",
        caption: true
      },{
        src: "/words/am_i_a_good_person",
        desc: "Am I a good enough person, 23 x 23cms, mixed media",
        caption: true
      },{
        src: "/words/good_enough_person",
        desc: "I am a good enough person, 66 x 56cms, mixed media",
        caption: true
      },{
        src: "/words/how_will_i_die",
        desc: "How will I die, 64 x 60cms, mixed media",
        caption: true
      },{
        src: "/words/intamacy_isolation",
        desc: "Intamacy isolation, 80 x 60cms, mixed media",
        caption: true
      },{
        src: "/words/love_hate_reparation",
        desc: "Love hate reparation, 93 x 64cms, mixed media",
        caption: true
      },{
        src: "/words/reparation_slate",
        desc: "Reparation, 55 x 23cms, slate",
        caption: true
      },{
        src: "/words/trust_mistrust",
        desc: "Trust mistrust, 36 x 36cms, mixed media",
        caption: true
      }
    ]
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
        '<img class="d-block w-100" src="/images' + item.src + '.sm.jpg" alt="' + item.desc + '" />'
      );

      if (item.caption) {
        var caption = $('<div class="carousel-caption"></div>');
        caption.html('<p>' + item.desc + '</p><a class="carousel-caption__view-full" href="/images' + item.src + '.jpg" >Full Size Image</a>');
        carouselItem.append(caption);
      }

      carouselInner.append(carouselItem);
    });

    $(".carousel-caption__view-full").click(function(event) {
      event.preventDefault();
      $("#overlayImage").attr("src", $(this).attr('href'));
      $("#overlay").show();
      $("#overlayContent").show();
    });

    $(".carousel-item:first").addClass("active");
  }

  $("#overlayImage").click(function(){
    $("#overlayImage").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
  });
});
