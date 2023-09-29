const playerScoreEl = document.getElementById("user-score");
        const computerScoreEl = document.getElementById("computer-score");
        const displayPlayerScoreEl = document.getElementById("display-user-score");
        const displayComputerScoreEl = document.getElementById("display-computer-score");
        const scoreDisplayEl = document.getElementById("score-display");
        let playerScore = 0;
        let computerScore = 0;

        function formatTimestamp(date) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function updateGameStats() {
            // Update user score
            displayPlayerScoreEl.textContent = playerScore;

            // Update computer score
            displayComputerScoreEl.textContent = computerScore;

            // Update score in h2
            scoreDisplayEl.innerHTML = `Your score: <span id="user-score">${playerScore}</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        Computer score: <span id="computer-score">${computerScore}</span>`;
        }

        function updateGameStats() {
        const crownIcon = '👑';  // Crown icon

        // Update user score with crown if they are the winner
        const displayPlayerScore = (playerScore > computerScore) ? `${playerScore} ${crownIcon}` : playerScore;
        displayPlayerScoreEl.textContent = displayPlayerScore;

        // Update computer score with crown if they are the winner
        const displayComputerScore = (computerScore > playerScore) ? `${computerScore} ${crownIcon}` : computerScore;
        displayComputerScoreEl.textContent = displayComputerScore;

        // Update score in h2
        scoreDisplayEl.innerHTML = `Your score: <span id="user-score">${playerScore}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    Computer score: <span id="computer-score">${computerScore}</span>`;
    }

        function playGame(userChoice) {
            const computerChoice = computerPlay();
            const result = playRound(userChoice, computerChoice);

            const timestamp = formatTimestamp(new Date());

            const resultsList = document.getElementById("results-list");
            const listItem = document.createElement("li");
            listItem.textContent = `⏱${timestamp}: ${result}`;
            resultsList.appendChild(listItem);

            updateGameStats();
        }

        function computerPlay() {
            const choices = ["rock", "paper", "scissors"];
            const randomChoice = Math.floor(Math.random() * choices.length);
            return choices[randomChoice];
        }

        function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "DRAW";
            } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                        (playerSelection === "paper" && computerSelection === "rock") ||
                        (playerSelection === "scissors" && computerSelection === "paper")) {
                playerScore++;
                return "You win! " + playerSelection + " beats " + computerSelection;
            } else {
                computerScore++;
                return "You lose! " + computerSelection + " beats " + playerSelection;
            }
        }

        const buttons = document.querySelectorAll("button");
        const resultEl = document.getElementById("results");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const result = playGame(button.id);
                resultEl.textContent = result;
            });
        });