let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#your");
const compscorePara = document.querySelector("#comp");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() *3);
    console.log(randIdx);
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.style.backgroundColor = " rgb(14, 245, 168)"; 
    msg.innerText = " Game was Drawn! Play again";
   
};

const showWinner = (userwin , userchoice ,compchoice) => {
    if(userwin){
        console.log("you win");
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `you win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"; 
    }else{
        console.log("you lose");
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText =`you lose. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red"; 
    }
}

const playgame = (userchoice) => {
    console.log("user choice =" , userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice); 
    
    if(userchoice === compchoice) {
      drawgame();
    }
     
    else {
      let userwin = true;
      if(userchoice === "rock") {
          userwin = compchoice ==="paper" ? false : true;
      }
      else if(userchoice === "paper") {
          userwin = compchoice ==="scissor" ? false : true;
      }
      else{
          userwin = compchoice === "rock" ? false : true;
      }
      showWinner(userwin,userchoice,compchoice);
    }
  };
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});