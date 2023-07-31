console.log("Welcome Tic Tac Toe")
let turn = "x";
let isGameOver = false;
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3");
let congrats = document.getElementById("congratulation")
let count = 0;
let resetBtn = document.getElementById("reset");
const changeTurn =() => {

    return turn === "x" ? "o" : "x";
}
// music.play();

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText")
  let box = document.getElementsByClassName("box")
    
    wins.forEach(e  => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            box[e[0]].style.backgroundColor = "green";
            box[e[0]].style.boxShadow = "0 0 50px green";
            box[e[1]].style.backgroundColor = "green";
            box[e[1]].style.boxShadow = "0 0 50px green";
            box[e[2]].style.backgroundColor = "green";
            box[e[2]].style.boxShadow = "0 0 50px green";
            document.querySelector(".info").innerText = (boxText[e[0]].innerText).toUpperCase() + " won the match";
            turn = "";
            audioTurn.pause();
            gameover.play();
            
            var x = window.matchMedia("(max-width: 420px)")
            if (x.matches) { // If media query matches
                congrats.style.display = "block"
               congrats.style.width = "56vw"
               congrats.style.animation = "congrats 0.8s ease-in-out forwards";
               isGameOver = true
       }else{
           congrats.style.display = "block"
           congrats.style.width = "20vw"
           congrats.style.animation = "congrats 0.8s ease-in-out forwards";
           isGameOver = true
       }

            
        }
    })

}

const checkDraw = () => {
    console.log("draw")
            document.querySelector(".info").innerText = "Match draw play again";
            resetBtn.innerText = "Play again";
            turn = "";
            audioTurn.pause();
            gameover.play();  
}

// Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach( element=>{
    let boxText = element.querySelector(".boxText");

    element.addEventListener("click", () => {
        count++;
        if(boxText.innerText === "") {
         boxText.innerText = turn.toUpperCase()
        turn = changeTurn();
            if(turn === "x") {
            boxText.style.color = "yellow";
         } else {
            boxText.style.color = "orange";
         }
         audioTurn.play();
         checkWin();
         
         
         if(!isGameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn.toUpperCase()
            
            }
            if(count == 9 && isGameOver === false){ 
                checkDraw();
            }
        }
    })    
})


document.getElementById("reset").addEventListener("click", ()=> {
    resetBtn.innerText = "Reset";
    let boxText = document.querySelectorAll(".boxText")
    let box = document.getElementsByClassName("box")
    Array.from(box).forEach((e)=> {
    e.style.backgroundColor = "darkslategray"
    e.style.boxShadow = "none"
    })
    Array.from(boxText).forEach(element => {
        element.innerText = ""   
    })
    count = 0;
    congrats.style.display = "none"       
    turn = "x"
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn.toUpperCase();
            
            
})

    
  


// Attach listener function on state changes

// const cursorSmall = document.querySelector('.small');
// const cursorBig = document.querySelector('.big');


// const positionElement = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;

//   cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

//   cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

// }

// window.addEventListener('mousemove', positionElement)
