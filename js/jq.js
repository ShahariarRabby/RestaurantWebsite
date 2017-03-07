$(document).ready(function () {
    $('#Food_delivery').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });



$('.more').click(function(){
    $('html,body').animate({scrollTop:$('#signup').offset().top},500)
})


$('.hungry').click(function(){
    $('html,body').animate({scrollTop:$('#Food_delivery').offset().top},500)
})



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        },1000);
        return false;
      }
    }
  });
});


$('.wp1').waypoint(function(direction){
    $('.wp1').addClass('animated fadeIn');
},{
    offset: '50%'}
                  );





$('.wp2').waypoint(function(direction){
    $('.wp2').addClass('animated fadeInUp');
},{
    offset: '50%'}
                  );



$('.wp3').waypoint(function(direction){
    $('.wp3').addClass('animated fadeIn');
},{
    offset: '50%'}
                  );

    
    
    $('.wp4').waypoint(function(direction){
    $('.wp4').addClass('animated pulse');
},{
    offset: '50%'}
                  );


    
    $('.navicn').click(function(){
      var nav = $('.mainnav');
        var icn = $('.navicn i')
          nav.slideToggle(200);
        
        if(icn.hasClass('ion-navicon-round')){
            icn.addClass('ion-close');
            icn.removeClass('ion-navicon-round');
        }else{
            icn.removeClass('ion-close');
            icn.addClass('ion-navicon-round');
        }
    })
        
 
    
  
    
    
    
});