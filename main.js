//  interactive Game

let playGame = confirm("Shall we play rock , paper, scissors.");

if (playGame) {
  let playerChoice = prompt("please enter rock , paper , scissors.");

  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();

    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      PlayerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
            ? "paper"
            : "scissors";

      let result =
        playerOne === computer
          ? "TieGame !"
          : playerOne === "rock" && computer === "paper"
            ? `playerOne : ${playerOne};\n computer : ${computer};\n Computer Wins !`
            : playerOne === " paper" && computer === "scissors"
              ? `playerOne : ${playerOne};\n commputer : ${computer};\n Computer Wins !`
              : playerOne === "scissors" && computer === "rock"
                ? `playerOne : ${playerOne};\n computer : ${computer};\n computer Wins !`
                : `playerOne : ${playerOne};\n computer : ${computer};\n Player Wins !`;
      alert(result);
      let playAgain = confirm("play Again?");
      playAgain ? location.reload() : alert("ok thanks for playing. ");
    } else {
      (alert("you dont enter rock , paper , scissors.") && location.reload()) ||
        playAgain;
    }
  } else {
    (alert(" i guess you changed your mind . Maybe next time") && location.reload()) || playAgain;
  }
} else {
  alert("ok , maybe next time.");
}
