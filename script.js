
const middle = document.getElementById("middle");
const left = document.getElementById("left");
const right = document.getElementById("right");
const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");

let leftColor = "red";
let rightColor = "blue";

let playing = true;

const resetBtn = document.getElementById("resetBtn");

// Figures to display

const figures = [
  "●", "◉", "◎", "◌", "◍", "◯",
  "■", "▣", "▤", "▥", "▦", "▧", "▨", "▩", "▢",
  "▲", "△", "▼", "▽", "◀", "◁", "▶", "▷", 
  "◆", "◇", "◈", "⬨",
  "★", "☆", "✦", "✧", "✩", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "✱", "✲", "✳", "✴", "✵", "✶", "✷", "✸", "✹", "✺", "✻", "✼", "✽", "✾", "✿", "❀", "❁", "❂", "❃",
  "⇑", "⇒", "⇓", "⇔",
  "☀", "☁", "☂", "☃", "☄", "☘", "☾", "☽", "☼", "⚝", "⚛", "⚜", "☮", "☯", "☸", "✈", "♠", "♣", "♥", "♦", "♪", "♫", "☣", "☢",
  "✉", "✂", "✏", "✒", "✖", "✚", "✜", "✢", "✣",
  "☺", "☻", "☹", 
  "ಠ","益", "ಥ", "ツ", "⚐", "⚑"
];



function setUpGameBoard() {
 
  // code to swap colors of side ramdonly:
  if (Math.random() < 0.5) {
    [leftColor, rightColor] = [rightColor, leftColor];
  }
  //code to tell the dom what the new color of the side is after swaping: 
  left.style.backgroundColor = leftColor;
  right.style.backgroundColor = rightColor;

  //code to chose figure for middle
    const figure = figures[Math.floor(Math.random() * figures.length)];
    middle.textContent = figure;

  // code to choose color or store color of figure on middle
  middleColor = ["blue", "red"];
  middle.style.color = middleColor[Math.floor(Math.random() * middleColor.length)]

}


//code to get color side selected
document.getElementById("right_arrow").addEventListener("click", () => {
    playGame(right.style.backgroundColor);});


document.getElementById("left_arrow").addEventListener("click", () => {
    playGame(left.style.backgroundColor);});


// funtion to compare if figure of middle is same as color of side selected
function playGame(userSelectedColor){
    if (!playing) return;
    if (userSelectedColor == middle.style.color)
        {setUpGameBoard();}
    else {
        document.getElementById("row1").style.visibility = "visible";
        document.getElementById("reset").style.visibility = "visible";
        playing = false;
    }

}


resetBtn.addEventListener("click", () => {
    document.getElementById("reset").style.visibility= "hidden"; 
    playing = true; 
    document.getElementById("row1").style.visibility= "hidden"; 
    setUpGameBoard();});


setUpGameBoard();

