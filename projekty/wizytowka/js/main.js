var article = $('header');
var omnie = $('#omnie');
var oferta = $('#oferta');
var umiejetnosci = $('#umiejetnosci');
var kontakt = $('#kontakt');;




$(function(){
 
    $('#kratka').click(function(){
                     $('ul li').fadeToggle();
        
                     });
    $('#OMNIE').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#omnie').offset().top
        },1000)
        
    })
     $('#OFERTA').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#oferta').offset().top
        },1000)
        
    })
     $('#UMIEJETNOSCI').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#umiejetnosci').offset().top
        },1000)
        
    })
     $('#KONTAKT').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#kontakt').offset().top
        },1000)
        
    })
     $('#navigation').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#omnie').offset().top
        },1000)
        
    })
    $('#navigation1').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#oferta').offset().top
        },1000)
        
    })
    $('#navigation2').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#umiejetnosci').offset().top
        },1000)})
        $('#navigation3').on("click",function(){
        
        $("html").animate({
        scrollTop: $('#kontakt').offset().top
        },1000)
        
    })
     $('#navigation4').on("click",function(){
        
        $("html").animate({
        scrollTop: $('header').offset().top
        },3000)
        
    })
    	$(window).scroll(function()
	{
	
	
       if(($(window).scrollTop()>=omnie.offset().top/2) &&($(window).scrollTop()<=oferta.offset().top/1.5)){
          $("#omnieanimate").addClass("omnieshow");
           $('ul li').fadeOut();
          }
    else{
        $("#omnieanimate").removeClass("omnieshow");}
         if(($(window).scrollTop()>=oferta.offset().top/2) &&($(window).scrollTop()<=umiejetnosci.offset().top/1.2)){
          $("#ofertaanimate").addClass("ofertashow");
           $('ul li').fadeOut();
          }
    else{
        $("#ofertaanimate").removeClass("ofertashow");}
             if(($(window).scrollTop()>=umiejetnosci.offset().top/1.5) &&($(window).scrollTop()<=kontakt.offset().top/1.05)){
          $("#umiejetnoscianimate").addClass("umiejetnoscishow");
           $('ul li').fadeOut();
          }
    else{
        $("#umiejetnoscianimate").removeClass("umiejetnoscishow");
    
    }
                if($(window).scrollTop()>=kontakt.offset().top/1.25) {
          $("#kontaktanimate").addClass("kontaktshow");
           $('ul li').fadeOut();
          }
    else{
        $("#kontaktanimate").removeClass("kontaktshow");
    
    }
        })
    
    })
    
