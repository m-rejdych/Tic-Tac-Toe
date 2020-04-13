let Gameboard = () => {
    let mark = `X`;
    let gameBoard = [];
    let startBtn = document.getElementById(`startButton`);
    let score = document.getElementById(`scoreOutput`);


    let fields = (() => {
        let field1 = document.getElementById(`field1`);
        let field2 = document.getElementById(`field2`);
        let field3 = document.getElementById(`field3`);
        let field4 = document.getElementById(`field4`);
        let field5 = document.getElementById(`field5`);
        let field6 = document.getElementById(`field6`);
        let field7 = document.getElementById(`field7`);
        let field8 = document.getElementById(`field8`);
        let field9 = document.getElementById(`field9`);

        return {field1, field2, field3, field4, field5, field6, field7, field8, field9};
    })()

    let markers = (() => {
        let marker1 = document.getElementById(`marker1`);
        let marker2 = document.getElementById(`marker2`);
        let marker3 = document.getElementById(`marker3`);
        let marker4 = document.getElementById(`marker4`);
        let marker5 = document.getElementById(`marker5`);
        let marker6 = document.getElementById(`marker6`);
        let marker7 = document.getElementById(`marker7`);
        let marker8 = document.getElementById(`marker8`);
        let marker9 = document.getElementById(`marker9`);

        return { marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9 };
    })()

    let inputs = (() => {
        let inputPlayer1 = document.getElementById(`inputPlayer1`);
        let inputPlayer2 = document.getElementById(`inputPlayer2`);

        return { inputPlayer1, inputPlayer2 }
    })()

    let playerDivs = (() => {
        let player1Div = document.getElementById(`player1`);
        let player2Div = document.getElementById(`player2`);

        return { player1Div, player2Div }
    })()
    

    
    
    let activateChosenNames = () => {
        if (playerDivs.player1Div.children.length == 2 && playerDivs.player2Div.children.length == 2) {
            inputs.inputPlayer1.style.display = `none`;
            inputs.inputPlayer2.style.display = `none`;
            
            let player1Name = document.createElement(`p`);
            let player2Name = document.createElement(`p`);
            player1Name.style.color = `blue`;
            player2Name.style.color = `red`;
            player1Name.textContent = createPlayers.call().player1;
            player2Name.textContent = createPlayers.call().player2;
            
            playerDivs.player1Div.appendChild(player1Name);
            playerDivs.player2Div.appendChild(player2Name);
        }
    }
    
    let activateMarkers = (marker) => {
        return () => {
            if (marker.textContent.length != 0) {} else {
                marker.textContent = mark;
                gameBoard.push(mark);
                (mark == `X`) ? mark = `0` : mark = `X`;
                if (gameBoard.length >= 5) {
                    checkEndGame();
                }
            }
        }
    }
    
    let activateFields = () => {
        fields.field1.addEventListener(`click`, activateMarkers(markers.marker1));
        fields.field2.addEventListener(`click`, activateMarkers(markers.marker2));
        fields.field3.addEventListener(`click`, activateMarkers(markers.marker3));
        fields.field4.addEventListener(`click`, activateMarkers(markers.marker4));
        fields.field5.addEventListener(`click`, activateMarkers(markers.marker5));
        fields.field6.addEventListener(`click`, activateMarkers(markers.marker6));
        fields.field7.addEventListener(`click`, activateMarkers(markers.marker7));
        fields.field8.addEventListener(`click`, activateMarkers(markers.marker8));
        fields.field9.addEventListener(`click`, activateMarkers(markers.marker9));
    }
    

    let createPlayers = () => {
        let player1 = inputs.inputPlayer1.value;
        let player2 = inputs.inputPlayer2.value;

        return { player1, player2 }
    }
    
    let clear = () => {
        markers.marker1.textContent = ``;
        markers.marker2.textContent = ``;
        markers.marker3.textContent = ``;
        markers.marker4.textContent = ``;
        markers.marker5.textContent = ``;
        markers.marker6.textContent = ``;
        markers.marker7.textContent = ``;
        markers.marker8.textContent = ``;
        markers.marker9.textContent = ``;

        score.textContent = ``;

        gameBoard = [];
    }


    let checkEndGame = () => {
        if (markers.marker1.textContent == markers.marker2.textContent && 
            markers.marker2.textContent == markers.marker3.textContent &&
            markers.marker1.textContent != ``
            ||
            markers.marker4.textContent == markers.marker5.textContent && 
            markers.marker5.textContent == markers.marker6.textContent &&
            markers.marker4.textContent != ``
            ||
            markers.marker7.textContent == markers.marker8.textContent &&
            markers.marker8.textContent == markers.marker9.textContent &&
            markers.marker7.textContent != ``
            ||
            markers.marker1.textContent == markers.marker4.textContent &&
            markers.marker4.textContent == markers.marker7.textContent &&
            markers.marker1.textContent != ``
            ||
            markers.marker2.textContent == markers.marker5.textContent &&
            markers.marker5.textContent == markers.marker8.textContent &&
            markers.marker2.textContent != ``
            ||
            markers.marker3.textContent == markers.marker6.textContent &&
            markers.marker6.textContent == markers.marker9.textContent &&
            markers.marker3.textContent != ``
            ||
            markers.marker1.textContent == markers.marker5.textContent &&
            markers.marker5.textContent == markers.marker9.textContent &&
            markers.marker1.textContent != ``
            ||
            markers.marker3.textContent == markers.marker5.textContent &&
            markers.marker5.textContent == markers.marker7.textContent &&
            markers.marker3.textContent != ``) {
                endGame();
            } else if (markers.marker1.textContent != `` && markers.marker2.textContent != `` && 
            markers.marker3.textContent != `` && markers.marker4.textContent != `` && 
            markers.marker5.textContent != `` && markers.marker6.textContent != `` && 
            markers.marker7.textContent != `` && markers.marker8.textContent != `` && 
            markers.marker9.textContent != ``) {
                score.textContent = `It's a tie!`;
            }
    }


    let endGame = () => {
        mark = ``;

        if (score.textContent == ``) {
            (gameBoard[gameBoard.length - 1] == `X`) ? score.textContent = `${createPlayers.call().player1} wins!` : score.textContent = `${createPlayers.call().player2} wins!`;
        }
    }
    
    let startGame = () => {
        startBtn.addEventListener(`click`, () => {
            clear();
            activateChosenNames();
            activateFields();
            startBtn.textContent = `Restart`;
        })
    }

    return { startGame };
}

Gameboard().startGame();