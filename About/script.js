$(document).ready(function () {
 
  // $(".menu ul li ").on("mouseover", function () {
  //   $(this).find(".custom-nav-dropdown").fadeIn(300);
  // });

  // $(".menu ul li ").on("mouseleave", function () {
  //   $(this).find(".custom-nav-dropdown").fadeOut(300);
  // });

  // $(".menu ul li a ").click(function(){
  //     $(".btn-search").fadeIn(300)
  //     $(".btn-search").fadeOut(300)
  // })
  // $(".menu ul li ").on("mouseover", function () {
  //   $(this).find(".custom-dropDown").fadeIn(300);
  // });

  // $(".menu ul li ").on("mouseleave", function () {
  //   $(this).find(".custom-dropDown").fadeOut(300);
  // });


  $(".menu-items .menu").on("click", function (e) {
    e.preventDefault()
    $(".linksResponsive").slideToggle();
    if ($(this).find("i").hasClass("fa-bars")) {
      $(this).find("i").removeClass("fa-bars")
      $(this).find("i").addClass("fa-times")
    }
    else {
      $(this).find("i").removeClass(" fa-times")
      $(this).find("i").addClass("fa-bars")
    }

  });


  $(".drop-downlUl .dropI").on("click", function (e) {
    e.preventDefault()
    $(".dropdown").slideToggle();
    if ($(this).find("i").hasClass("fa-plus")) {
      $(this).find("i").removeClass("fa-plus")
      $(this).find("i").addClass("fa-minus")
    }
    else {
      $(this).find("i").removeClass(" fa-minus")
      $(this).find("i").addClass("fa-plus")
    }

  });
  $(".drop-downlUl .plus   ").on("click", function (e) {
    e.preventDefault()
    $(".dropdownB").slideToggle();
    if ($(this).find("i").hasClass("fa-plus")) {
      $(this).find("i").removeClass("fa-plus")
      $(this).find("i").addClass("fa-minus")
    }
    else {
      $(this).find("i").removeClass(" fa-minus")
      $(this).find("i").addClass("fa-plus")
    }

  });

  // $(".drop-downlUl .dropI i ").on("click", function (e) {
  //   e.preventDefault();
  //   $(".dropdown").slideToggle();

  // });
  // $(".drop-downlUl .plus i ").on("click", function (e) {
  //   e.preventDefault();
  //   $(".dropdownB").slideToggle();

  // });

  // $(".search-btn").on("click", function () {
  //   $(".search").fadeToggle(300);
  //   // $(".start").css("display", "flex");
  //   // console.log("b")
  // });


  $(".search-btn").on("click", function () {
    $(".seacrh").fadeToggle(300);
    // $(".start").css("display", "flex");
    // console.log("b")
  });


  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  })

  $("#video .icon ").on("click", function () {
    $(".getVideo").fadeToggle(300).css("display", "flex");
    // $(".getVideo").addClass("d-flex");
    // console.log("b")
  });
  $(".getVideo ").on("click", function () {
    // $(".getVideo").removeClass("d-flex");
    $(".getVideo").fadeToggle(300);
    // console.log("b")
  });



})
let mybutton = document.getElementById("myBtnScrol");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}