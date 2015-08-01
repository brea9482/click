var colors = ["red","lightblue","lightgreen","yellow","purple","orange","darkblue","gray"];
var color = ""
var score = 0

function makeCircle() {
  for (i = 0; i < 45; i++) {

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
    $('#score').html(score);
  }
  else {
    clearInterval(game);

    $('#loss-result').html('You lose!! Click reset to play again!');
    $('.loss-message').fadeIn();
    $('#stop').hide();
    $('#reset').fadeIn();
  }

  if (score == 5) {
    winningTime = Date.now()
    reactionTime = (winningTime - createdTime) / 1000;
    $('#winning-time').html("Your time: " + reactionTime + 's');
    clearInterval(game);

    $('#win-result').html('You win! Click reset to play again!');
    $('.win-message').fadeIn();
    $('#stop').hide();
    $('#reset').fadeIn();
  }

  $(this).hide();
});

$('#start').click( function() {
  createdTime = Date.now();
  game = setInterval(function() {
    makeCircle();
  }, 300);
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
  }, 300);
  $(this).hide();
  $('#reset').hide();
  $('#stop').fadeIn();
});

$('#reset').click( function() {
  location.reload()
});
