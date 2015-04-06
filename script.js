$(document).ready(function(){

var generateGrid = function(size) {
  if ( size > 0 && size <= 64) {
    $("#wrapper > div").remove();
    $("#wrapper").append("<div id='tableWrapper'></div>");
    $("#tableWrapper").append("<table></table>");
    $("table").css({"width": '100%',
                   "height": '100%'});
    
  for ( i = 0; i < size; i++ ) {
    $("#tableWrapper").find("table").append("<tr></tr>");
  };

  for ( i = 0; i < size; i++ ) {
    $("tr").append("<td class='tile1'></td>");
  };
  } //end of if statement


  else {
    alert("Choose from 1 to 64 rows!");
    var gridSize = +prompt("How many rows? Choose from 1 to 64");
  generateGrid(gridSize);
  }

};

var classic = function(){
    $("td").on("mouseenter", function(){
    $(this).addClass("tile2");
    });
}; 


var random = function(){
  var randomColour = "rgb(" + (Math.floor(Math.random() * 256)) + ","
                        + (Math.floor(Math.random() * 256)) + ","
                        + (Math.floor(Math.random() * 256)) + ")";
  return randomColour;
};
  
var colour = function(){
    $("td").on("mouseenter", function(){
    $(this).css("background", random());
    });
};

//buttons
$("#button-create").on("click", function(){
  var gridSize = +prompt("How many rows? Choose from 1 to 64");
  generateGrid(gridSize);
  classic();
});

$("#button-create2").on("click", function(){
  var gridSize = +prompt("How many rows? Choose from 1 to 64");
  generateGrid(gridSize);
  colour();
});

$("#button-clear").on("click", function(){
  $("#wrapper > div").remove();
});

});

