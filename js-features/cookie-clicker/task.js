const cookieImg = document.getElementById("cookie");
let counter = 1;

function changeSizes() {
  clicker__counter.innerHTML = counter;

  if (counter % 2 == 0) {
    cookieImg.width = 200;
  } else {
    cookieImg.width = 185;
  }
  
  counter++;
}

cookieImg.onclick = changeSizes;