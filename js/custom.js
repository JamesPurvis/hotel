var buttonContainer = document.getElementById("optionmenu");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

var loginContainer = document.getElementById("signin");
var honorsContainer = document.getElementById("honors");

buttonContainer.addEventListener('click', function(e) {
  if (e.target.id === "button1") {
    button1.classList.add('active');
    button2.classList.remove('active');
    loginContainer.style.display = 'block';
    honorsContainer.style.display = 'none';
  } else if (e.target.id === "button2") {
    button2.classList.add('active');
    button1.classList.remove('active');
    honorsContainer.style.display = 'block';
    loginContainer.style.display = 'none';
  }
});

button1.classList.add("active");
loginContainer.style.display = 'block';
honorsContainer.style.display = 'none';
