

  $( ".togglePerspective" ).click(function() {
    $( "main" ).toggleClass( "resetPerspective" );
  });

var lessText = "[click to show less resources]";
var moreText = "[click to show more resources]";

  $( "#standAloneNewcomers" ).click(function() {
    $( ".extendedResources" ).slideToggle( "fast" );

    ($("#standAloneNewcomers").text() === lessText) ? $("#standAloneNewcomers").text(moreText) : $("#standAloneNewcomers").text(lessText);
  });


var hideThe100 = "[click to hide groups]";
var showThe100 = "[click to show groups]";
$( "#inlineExperts" ).click(function() {
  $( ".toggleMoreThe100" ).slideToggle( "fast" );
  ($("#toggleGroups").text() === hideThe100) ? $("#toggleGroups").text(showThe100) : $("#toggleGroups").text(hideThe100);
});
