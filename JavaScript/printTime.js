function printTime(){
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  document.body.innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(printTime, 1000); //每隔1000ms/1s，就执行一次printTime函数
