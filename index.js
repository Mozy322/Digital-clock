const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

function updateClock()
{
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if(h < 10)
  {
    h = "0" + h;
  }

  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
}

updateClock();
setInterval(updateClock, 1000)