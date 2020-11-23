$(document).ready(function () {
    let width = $('.carrousel-main').width();
    let items = $('.carousel-item');
    let position = 0;
    left = 0;
    for (let item of items){
        left
        $(item).css({left: left});
        left = (-width);
    }
    $(".next").click(function(){
        if(position<(items.length-1)){
            $(items[(position+1)]).animate({
                left: 0
              });
            $(items[(position)]).animate({
            left: width
            });
              position++
        }
        
      });
    $(".back").click(function(){
        if(position>0){
            $(items[(position-1)]).animate({
                left: 0
            });
            $(items[(position)]).animate({
                left: -width
            });
            position--
        }
        
    });

});

