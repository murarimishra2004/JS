let userScore=0;
let CompScore=0;

const choices= document.querySelectorAll(".choices");
const msg= document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#Computer-score");
const genComputerChoice = ()=>{

    const options = ["rock" ,"paper" , "Scissors" ];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];


    //rock , paper , scissors
};

const drawGame= () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw play again";
};

const showWinner = (userWin , userchoice , compchoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win, your ${userchoice} beats ${compchoice}`;
        // console.log("You win");
        msg.style.backgroundColor = "green";
    }
    else {
        CompScore++;
        compscorepara.innerText= CompScore;
        msg.innerText = `You lose, ${compchoice} beats ${userchoice}`;
        // console.log("you loose");
        msg.style.backgroundColor = "red";
    }
};



const playGame= (userchoice)=>{
    console.log("user choice = " , userchoice);
    //Generate computer choice ->modular
    const compchoice = genComputerChoice();
    console.log("Comp choice" , compchoice);

    if(userchoice===compchoice){
        //draw game
        drawGame();
    } 
    else {
        let userWin= true;
        if(userchoice==="rock"){
            //scissors , paper
            userWin = compchoice === "paper" ?false : true;
        } else if (userchoice==="paper"){
            //rock , scissors 

            userWin = compchoice === "scissors" ? false : true;
        } else{
            //rock paper
            userWin = compchoice=== "rock" ? false : true;
        }

        showWinner(userWin , userchoice , compchoice);
    }

};

choices.forEach((choices)  => {
    
    choices.addEventListener("click" , () =>{
         const userchoice= choices.getAttribute("id")
        playGame(userchoice);

    });
} );
