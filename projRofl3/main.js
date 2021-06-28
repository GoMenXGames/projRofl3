let nicknames = ["Kosmen21","LoneFoxy","GoMenXGames"];
let rotateSides = ["L","R","R"]
let nicknameslink = document.querySelector('.nicknames');
let tumbler = document.querySelector('.tumbler-circle');
let degees = 0;
let orderRotate = [];
let rightOrderRotate = [];
let randomNicknamesOrder = nicknames;
let numbers = [1,1,1];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function rotateLeft() {
  degees += -1 * (360/10);
  orderRotate += "L";
  updateRotate(degees);
}

function rotateRight() {
  degees += 1 * (360/10);
  orderRotate += "R";
  updateRotate(degees);
}


function updateRotate(deg) {
  tumbler.style.transform = "rotateZ("+ deg +"deg)";
}

function reset() {
checkOrders();
degees = 0;
updateRotate(degees);
orderRotate = [];
newGame();
}

function newGame() {
nicknameslink.innerHTML = "";
shuffle(randomNicknamesOrder);
//new nicknames
randomNicknamesOrder.forEach((nickname) => {
  nicknameslink.innerHTML += "<p>"+nickname+"</p>";
});
//shuffle numbers
randomNicknamesOrder.forEach((item, i) => {
  switch (item) {
    case "Kosmen21":
      numbers[i] = 21;
      rotateSides[i] = "L";
      break;
    case "GoMenXGames":
      numbers[i] = 8;
      rotateSides[i] = "R";
      break;
    case "LoneFoxy":
      numbers[i] = 24;
      rotateSides[i] = "R";
      break;
  }
  nicknameslink.children[i].style.animation = "rotateNicknames cubic-bezier(0, 4.93, 0,-2.98) "+ numbers[i] +"s infinite";
});

//generate new orderRotate
rightOrderRotate = [];
randomNicknamesOrder.forEach((nick, i) => {
  for (let j = 0; j<numbers[i]; j++) {
    rightOrderRotate += rotateSides[i];
  }
});
}

newGame();

function checkOrders() {
  if (rightOrderRotate == orderRotate) {
    alert("Ю ВИН");
  }
}
