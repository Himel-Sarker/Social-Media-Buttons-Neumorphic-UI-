


//---------------------------JS Code-----------------------------

  $('.first_row li').click(function(){

      $(this).toggleClass("shadow-1").siblings();

      $(this).toggleClass("fill-color").siblings();

    });

    $('.second_row li').click(function(){

      $(this).toggleClass("shadow-2").siblings();

      $(this).toggleClass("fill-color").siblings();

    });

//---------------------------JS Code Ends--------------------