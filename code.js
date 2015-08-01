var colors = ["red","lightblue","lightgreen","yellow","purple","orange"];
var color = ""
var score = 0

function makeCircle() {
  for (i = 0; i < 50; i++) {

    color = colors[Math.floor(Math.random()*colors.length)];
    var top = Math.random() * 410;
    var left = Math.random() * 1100;

    $newdiv = $('<div/>').css({
      'width':'30px',
      'height':'30px',
      'border-radius':'15px',
      'background-color': color,
      'position':'absolute',
      'margin-left':left+'px',
      'margin-top':top+'px',
      'display':'block'
    });

    $newdiv.addClass('circle');
    $newdiv.appendTo('#game-space');
  };
};

$('.container').on('click', '.circle', function() {
  var clickedColor = $(this).css("background-color");
  var answer = "";
  console.log(clickedColor);

  if (clickedColor == "rgb(255, 0, 0)") {
    score++;
    $('#score').html("Your Score: " + score);
  }
  else {
    clearInterval(game);

    answer = prompt("You Lose!! Would you like to play again? (Y/N)");

    while (answer != "Y" || answer != "N") {
      if (answer == "Y") {
        location.reload();
        break;
      }
      else if (answer == "N") {
        alert("Thanks for playing!");
        $('#stop').fadeOut();
        $('#reset').fadeIn();
        break;
      }
      else {
        answer = prompt("Please enter Y or N");
      }
    }
  }

  if (score == 5) {
    winningTime = Date.now()
    reactionTime = (winningTime - createdTime) / 1000;
    $('#winning-time').html("Your time: " + reactionTime);
    clearInterval(game);
    answer = prompt("You Win!! Would you like to play again? (Y/N)");

    while (answer != "Y" || answer != "N") {
      if (answer == "Y") {
        location.reload();
        break;
      }
      else if (answer == "N") {
        alert("Thanks for playing!");
        $('#stop').fadeOut();
        $('#reset').fadeIn();
        break;
      }
      else {
        answer = prompt("Please enter Y or N");
      }
    }
  }

  $(this).hide();
});

$('#start').click( function() {
  createdTime = Date.now();
  game = setInterval(function() {
    makeCircle();
  }, 800);
  $(this).hide();
  $('#stop').fadeIn();
});

$('#stop').click( function() {
  clearInterval(game);
  $(this).hide();
  $('#restart').fadeIn();
  $('#reset').fadeIn();
});

$('#restart').click( function() {
  game = setInterval(function() {
    makeCircle();
  }, 800);
  $(this).hide();
  $('#reset').hide();
  $('#stop').fadeIn();
});

$('#reset').click( function() {
  location.reload()
});
