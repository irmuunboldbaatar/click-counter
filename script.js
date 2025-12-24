document.getElementById("button").addEventListener("click", function() {
  console.log("button clicked");
  document.getElementById("count").textContent = 
    Number(document.getElementById("count").textContent) + 1;
});

//reset methods
document.addEventListener("keypress", (e) => {
  if (e.key = "Space") {
    console.log("count reset");
    document.getElementById("count").textContent = 0
  }
});

document.getElementById("reset").addEventListener("click", function() {
  console.log("count reset");
  document.getElementById("count").textContent = 0
});

window.addEventListener('click', (e) => {
  const circle = document.createElement('div');
  circle.className = 'click-circle';
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600);
});