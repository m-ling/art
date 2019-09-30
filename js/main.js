$(window).scroll(function(){
    var scrollH=$(document).scrollTop();
    var viewH = $(window).height();  
    console.log(scrollH);//380
    if(scrollH>380){
         $('#nav').css('height','86px');
        //  $('.img_head').css('background-attachment','scroll')
        $('.menus').css('display','none');
    }else{
        $('#nav').css('height','0');
        $('.menus').css('display','block');
    }
    
})

