$(document).ready(function(){
    $('div.hbrel_limit').each(function(){
  $(this).append('<a href="'+$(this).find('.image a').attr('href')+'">BUY NOW</a>');
})
})