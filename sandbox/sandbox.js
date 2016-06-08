  sandboxOne = function() {
    $("li").hide();

       if ($("#showHot").on("click", function(){
            $(".hot").show();
       }));


      else if ($("#showCold").on("click", function(){
          $(".cold").show();
     }));

   };
sandboxOne();
