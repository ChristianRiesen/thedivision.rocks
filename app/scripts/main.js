

  $( ".togglePerspective" ).click(function() {
    $( "main" ).toggleClass( "resetPerspective" );
  });

var lessText = "Hide the resources";
var moreText = "Show more resources";

  $( ".toggleMore" ).click(function() {
    $( ".extendedResources" ).slideToggle( "fast" );

    ($(".toggleMore").text() === lessText) ? $(".toggleMore").text(moreText) : $(".toggleMore").text(lessText);
  });
