$(document).ready(function (){
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
      
  $(".search-btn").on("click", function () {
    $(".seacrh").fadeToggle(300);
    // $(".start").css("display", "flex");
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