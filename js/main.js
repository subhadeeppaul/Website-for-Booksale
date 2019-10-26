
$(document).ready(function(){

    $(".img_book").hover3d({
        selector: ".book",
        shine: true,
        sensitivity: 20,
    });
    $("ul.left>li.cat").hover(function()
    {
// $("ul.left.li>ul.item").toggleFade();
$("ul.item").fadeToggle("slow");
    });
    $(".img_author").hover3d({
        selector: ".author",
        shine: true,
        sensitivity: 20,
    });// ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    $('.search-button').click(function(){
        $(this).parent().toggleClass('open');
      });


      var $overlay = $('.overlay');
      var $mainPopUp = $('.main-popup')
      var $signIn = $('#sign-in');
      var $register = $('#register');
      var $formSignIn = $('form.sign-in');
      var $formRegister = $('form.register');
      
      var $firstChild = $('nav ul li:first-child');
      var $secondChild = $('nav ul li:nth-child(2)');
      var $thirdChild = $('nav ul li:nth-child(3)');
      
      //defining function to create underline initial state on document load
      function initialState() {
        $('.underline').css({
          "width": $firstChild.width(),
          "left": $firstChild.position().left,
          "top": $firstChild.position().top + $firstChild.outerHeight(true) + 'px'
        });
      }
      initialState(); //() used after calling function to call function immediately on doc load
      
      //defining function to change underline depending on which li is active
      function changeUnderline(el) {
        $('.underline').css({
          "width": el.width(),
          "left": el.position().left,
          "top": el.position().top + el.outerHeight(true) + 'px'
        });
      } //note: have not called the function...don't want it called immediately
      
      $firstChild.on('click', function(){
        var el = $firstChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $secondChild.removeClass('active');
        $thirdChild.removeClass('active');
        $(this).addClass('active');
      });
      
      $secondChild.on('click', function(){
        var el = $secondChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('active');
        $thirdChild.removeClass('active');
        $(this).addClass('active');
      });
      
      $thirdChild.on('click', function(){
        var el = $thirdChild;
        changeUnderline(el); //call the changeUnderline function with el as the perameter within the called function
        $firstChild.removeClass('active');
        $secondChild.removeClass('active');
        $(this).addClass('active');
      });
      
      
      $('.button').on('click', function(){
        $overlay.addClass('visible');
        $mainPopUp.addClass('visible');
        $signIn.addClass('active');
        $register.removeClass('active');
        $formRegister.removeClass('move-left');
        $formSignIn.removeClass('move-left');
      });
      $overlay.on('click', function(){
        $(this).removeClass('visible');
        $mainPopUp.removeClass('visible');
      });
      $('#popup-close-button a').on('click', function(e){
        e.preventDefault();
        $overlay.removeClass('visible');
        $mainPopUp.removeClass('visible');
      });
      
      $signIn.on('click', function(){
        $signIn.addClass('active');
        $register.removeClass('active');
        $formSignIn.removeClass('move-left');
        $formRegister.removeClass('move-left');
      });
      
      $register.on('click', function(){
        $signIn.removeClass('active');
        $register.addClass('active');
        $formSignIn.addClass('move-left');
        $formRegister.addClass('move-left');
      });
      
      $('input').on('submit', function(e){
        e.preventDefault(); //used to prevent submission of form...remove for real use
      });
 });
