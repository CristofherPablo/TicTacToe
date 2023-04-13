/* This module create and render the board */
(function () {
  var player = {
    playerOne: {
      turn: 1,
      choices: [],
    },
    playerTwo: {
      turn: 0,
      choices: [],
    },
    round: 0,
  };

  var gameBoard = {
    startCells: ['', '', '', '', '', '', '', '', ''],

    init: function () {
      this.cacheDom();
      this.render();
    },

    cacheDom: function () {
      this.$board = document.querySelector('#board');
    },

    render: function () {
      var data = {
        startCells: this.startCells,
      };
      data.startCells.forEach((cell, index) => {
        let cellElement = document.createElement('button');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-index', index);
        let img = document.createElement('img');
        cellElement.appendChild(img);
        this.$board.appendChild(cellElement);
      });
    },

    reset: function () {
      this.$board.innerHTML = '';
      player.playerOne.turn = 1;
      player.playerOne.choices = [];
      player.playerTwo.turn = 0;
      player.playerTwo.choices = [];
      player.round = 0;
      this.render();
      gamePlay.init();
    },
  };

  var gamePlay = {
    possibleVictories: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],

    init: function () {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function () {
      this.$buttons = document.querySelectorAll('#board button');
      this.$overlay = document.querySelector('.endGame');
      this.winnerMessage = document.querySelector('#winnerMessage');
      this.$restartButton = document.querySelector('#restart');
    },

    bindEvents: function () {
      this.$buttons.forEach((button) => {
        button.addEventListener('click', this.addPlayerSymbol.bind(this), {
          once: true,
        });
      });

      this.$restartButton.addEventListener('click', () => {
        this.winnerMessage.innerText = '';
        this.$overlay.classList.remove('active');
        gameBoard.reset();
      });
    },

    switchPlayers: function (player) {
      if (player.playerOne.turn === 0) {
        player.playerOne.turn = 1;
        player.playerTwo.turn = 0;
      } else {
        player.playerOne.turn = 0;
        player.playerTwo.turn = 1;
      }
    },

    displayOverlay: function (result) {
      if (result != undefined) {
        if (result === 'I`s a draw') {
          this.winnerMessage.innerText = `${result}`;
          this.$overlay.classList.add('active');
        } else {
          this.winnerMessage.innerText = `${result} Wins!!`;
          this.$overlay.classList.add('active');
        }
      }
    },

    checkWinner: function (player) {
      var playerOneScore = player.playerOne.choices;
      var playerTwoScore = player.playerTwo.choices;

      if (playerOneScore.length + playerTwoScore.length > 4) {
        for (let index = 0; index < this.possibleVictories.length; index++) {
          const victory = this.possibleVictories[index];
          if (victory.every((item) => playerOneScore.includes(item))) {
            return 'Player One';
          } else if (victory.every((item) => playerTwoScore.includes(item))) {
            return 'Player Two';
          } else if (
            playerOneScore.length + playerTwoScore.length === 9 &&
            !victory.every((item) => playerOneScore.includes(item)) &&
            !victory.every((item) => playerTwoScore.includes(item))
          ) {
            return 'I`s a draw';
          }
        }
      }
    },

    addPlayerSymbol: function (event) {
      if (!event.target.matches('button')) return;

      let $img = event.target.querySelector('img');
      let $index = parseInt(event.target.getAttribute('data-index'));


      if (player.playerOne.turn === 1) {
        $img.src = 'assets/cross.png';
        player.playerOne.choices.push($index);
        this.switchPlayers(player);
      } else {
        $img.src = 'assets/circle.png';
        player.playerTwo.choices.push($index);
        this.switchPlayers(player);
      }

      this.displayOverlay(this.checkWinner(player));
    },
  };

  var aiMoves = {

    pickMove: function(){

      if( player.round === 1 ){
        if(player.playerOne.choices[0] === 5){
          player.playerTwo.choices[0] === 3;
        }else {
          player.playerTwo.choices[0] === 5;
        }
      }else if(player.round === 2){

        if(player.playerOne.choices[0] === 5){

          switch (player.playerOne.choices[0]) {
            case 1:
              player.playerTwo.choices[0] = 9;
              break;
            case 2:
              player.playerTwo.choices[0] = 8;
              break;
            case 3:
              player.playerTwo.choices[0] = 7;
              break;
            case 4:
              player.playerTwo.choices[0] = 6;
              break;
            case 6:
              player.playerTwo.choices[0] = 3;
              break;
            case 7:
              player.playerTwo.choices[0] = 3;
              break;
            case 8:
              player.playerTwo.choices[0] = 2;
              break;
            case 9:
              player.playerTwo.choices[0] = 1;
              break;
            default:
                break;
          };
        }
      }else if (player.round === 3){

      }else if(player.round === 4){

      };
    }
    
  };

  gameBoard.init();
  gamePlay.init();
  aiMoves.pickMove();
})();
