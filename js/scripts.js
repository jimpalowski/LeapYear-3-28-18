//Business Logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return $(".True").text("This is a True Leap Year");;
  } else {
    $(".False").text("This is False Leap Year");
  }
};



// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

  //  $(".True").text("True");
    //if (!result) {                 // same as writing if (result === false)
    //  $(".False").text("False");
    //}
    $("#result").show();
    //$("#resultTrue").show();
  });
});
