
  $(document).ready(function(){
  	var app = {
  		cards:["E","E","A","A","I","I","O","O","U","U","VOWELS","VOWELS"],
  		init: function() {
        app.shuffle();
  			
  		},
  	    shuffle: function() {
  	    	var random = 0;
  	    	var temp = 0;
  	    	for(i = 1; i < app.cards.length; i++){
  	    		random = Math.round(Math.random() * i);
  	    		temp = app.cards[i];
  	    		app.cards[i] = app.cards[random];
  	    		app.cards[random] = temp;

  	    	}
          app.assignCards();
  	    	console.log('shuffled card array: '+app.cards);
  	    },
        assignCards: function() {
          $('.card').each(function(index) {
            $(this).attr('data-card-value', app.cards[index]);

          });
          app.clickHandlers();

        },
  	    clickHandlers: function() {

          $('.card').on('click', function() {
      
            $(this).html('<p>'+$(this).data('cardValue')+'</p>').addClass('selected');
            app.checkMatch();
          });

  	    },
        checkMatch: function() {
          if($('.selected').length === 2) {
          if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
              $('.selected').each(function(){
              $(this).animate({opacity: 0}).removeClass('unmatched');
              });

              $('.selected').each(function() {
              $(this).removeClass('selected');
              });
              app.checkWin();
           }else {
             setTimeout(function() {
                $('.selected').each(function() {
                 $(this).html('').removeClass('selected'); 
               });
                
              }, 1000);

             }

           }
        },
        checkWin: function() {
          if($('.unmatched').length === 0) {
             // $('.container').html('<h1>You Won!</h1>');

             $('.game-over').css('z-index',0);
          }
        }
  	};
  	app.init();

  });