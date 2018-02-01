$(document).ready(function() {
    $('.wrapper').fullpage({scrollingSpeed: 1500, loopBottom: true, controlArrows: false});
});

$('#moveToMain--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(1, 0);
});

$('#moveToAdv').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToAdv--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToGallery--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(3, 0);
});

$('#moveToMap--paginator').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(3, 0);
});

$('#moveToAdv--subHeader').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});

$('#moveToEquip--subHeader').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 1);
});

$('#moveToEquip--heroMenu').click(function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2, 0);
});