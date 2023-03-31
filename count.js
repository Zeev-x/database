var count = setInterval(function(){
  var end = new Date(input).getTime();
  var now = new Date().getTime();
  var distance = end - now;
  
  var disday = distance / (1000*60*60*24);
  var dishour = (distance % (1000*60*60*24) / (1000*60*60));
  var disminute = (distance % (1000*60*60) / (1000*60));
  var dissecond = (distance % (1000*60) / (1000));
  
  var day = Math.floor(disday);
  var hour = Math.floor(dishour);
  var minute = Math.floor(disminute);
  var second = Math.floor(dissecond);
  
  document.getElementById("day").innerHTML = result;
  document.getElementById("hour").innerHTML = result;
  document.getElementById("minute").innerHTML = result;
  document.getElementById("second").innerHTML = result;
  
  if(distance < 0){
    clearInterval(count);
    document.getElementById("count").innerHTML = "Expired";
  }
},1000);