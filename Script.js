$(function(){
    var $root =$('html, body');
    $('a').click(function(){
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    $(document).on('scroll', function(){
        if($(this).scrollTop() > 185){
            $('nav').addClass('nav-sticky');
        }else{
            $('nav').removeClass('nav-sticky');
        }
    });

    $('nav li a').click(function(){
        $('nav li a').removeClass('active');
        $(this).addClass('active');
    });
    $('nav li a').scroll(function(){
        $('nav li a').removeClass('active');
        $(this).addClass('active');
    });
});