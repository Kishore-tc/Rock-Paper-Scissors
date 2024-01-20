let userScore=0;
let compScore=0;
const msg=document.querySelector('#msg');
let userDisp=document.querySelector("#user-score");
let compDisp=document.querySelector('#comp-score');

const UpdateScore = () => {
    userDisp.innerText= userScore;
    compDisp.innerText= compScore;
};
const drawGame = () => {
    console.log("Game is draw. Play Again!");
    msg.innerText="Game is draw. Play Again!";
    msg.style.backgroundColor="blue";

}
const genCompChoice = () => {
    const options=["rock","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}
const showWinner= (userWin, userChoice, compChoice) => {
    if (userWin){
        console.log("you won");
        msg.innerText=`you won, Your ${userChoice} beats Computer's ${compChoice} .Play Again! `;
        msg.style.backgroundColor="green";
        userScore++;
        UpdateScore();
    }else{
        console.log("computer won");
        msg.innerText=`Computer won, Computer's ${compChoice} beats Your ${userChoice}. Play Again!`;
        msg.style.backgroundColor="red";
        compScore++;
        UpdateScore();
    }
};
const playgame = (userChoice) => {
    console.log("User choice was ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice was ",compChoice);
    if (userChoice===compChoice){
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else  if(userChoice==="paper"){
            userWin = compChoice === "scissor" ? false : true ;
        }else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
const choices=document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', ()=>{
        const userChoice=choice.getAttribute('id');
        playgame(userChoice);
    })
});