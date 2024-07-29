let userScore = 0;
let compScore = 0;
const drawSound = new Audio('./sound/draw.mp3');
const winSound = new Audio('./sound/win.mp3');
const loseSound = new Audio('./sound/loss.mp3');

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let computerChoice = Math.floor(Math.random() * 3);
    return options[computerChoice];
}

const gameDraw = () => {
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#001d3d";
    drawSound.play();
}


const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        gameDraw();
    } else {
        let userWins = false;

        if (userChoice === "rock") {
            userWins = computerChoice === "scissor";
        } else if (userChoice === "paper") {
            userWins = computerChoice === "rock";
        } else if (userChoice === "scissor") {
            userWins = computerChoice === "paper";
        }

        if (userWins) {
            userWin(userChoice, computerChoice);
        } else {
            computerWin(userChoice, computerChoice);
        }
    }
}
    const userWin = (userChoice, computerChoice) => {
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor = "green";
            winSound.play();
    }

    const computerWin = (userChoice, computerChoice) => {
        compScore++;
        computerScorePara.innerText = compScore;
        msg.innerText = `You loss! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        loseSound.play();
}

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    });