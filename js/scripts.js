$(document).ready(function(){
  $(".factoral").submit(function(event) {
  var factoralnumber = $("input#factoralnumber").val();
  event.preventDefault();
  // debugger;
  var product = 1;
  for (var index = 1; index <= factoralnumber; index += 1) {
    product *= index;
  }
  alert(product)
  });
});
