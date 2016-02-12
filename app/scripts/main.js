

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

$( ".officalBox .description, .officalBox h2" ).click(function() {
  $( "#extendOffical" ).slideToggle( "fast" );
});
$( ".generalBox .description, .generalBox h2" ).click(function() {
  $( "#extendGeneral" ).slideToggle( "fast" );
});
$( ".redditBox .description, .redditBox h2" ).click(function() {
  $( "#extendReddit" ).slideToggle( "fast" );
});
$( ".sheetsBox .description, .sheetsBox h2" ).click(function() {
  $( "#extendSheets" ).slideToggle( "fast" );
});
$( ".toolsBox .description, .toolsBox h2" ).click(function() {
  $( "#extendTools" ).slideToggle( "fast" );
});
$( ".lfgBox .description, .lfgBox h2" ).click(function() {
  $( "#extendLFG" ).slideToggle( "fast" );
});
$( ".betaBox .description, .betaBox h2" ).click(function() {
  $( "#extendBeta" ).slideToggle( "fast" );
});
