$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".header").addClass("scroll");
    }else{
        $(".header").removeClass("scroll");
    }
}); //missing );

function toggleMenu(type){
    if(type === 1){
        $('.mobile-menu').addClass('active')
    }else{
        $('.mobile-menu').removeClass('active')
    }
}
function inputFocus(e){
    console.log(e)
    let trigger = $(e.target).closest('.custom-form').find('.form-label')
    if(trigger.hasClass('active')){
        trigger.removeClass('active')
    }else{
        trigger.addClass('active')
    }
    $(".form-label").not($(trigger)).removeClass('active');
}