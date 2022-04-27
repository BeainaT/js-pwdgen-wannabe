//ask for user name and save it
const Name = prompt("Enter your name");
//ask for user surname and save it
const surName = prompt("Enter your surname. In case of several surname, please don't leave space between each other");
//ask for user favorite color
const color = prompt("Enter your favorite color");
//print namesurnamefavoritecolor21 on document
document.getElementById("pwd").innerHTML = (Name + surName + color + 21);
//print fake password in overlay container
document.getElementById("hidden_pwd").innerHTML = (Name + surName + color + 21);

