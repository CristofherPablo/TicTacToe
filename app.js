/*importing the ai brain fom another file*/
import { aiMoves } from './aiBrain.js';

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
    round: 1,
    playerAi: true,
  };

  var gameBoard = {
    startCells: ['', '', '', '', '', '', '', '', ''],

    init: function () {
      this.cacheDom();
      this.render();
      this.bind();
    },

    cacheDom: function () {
      this.$board = document.querySelector('#board');
      this.$playerXplayer = document.querySelector('#playerXplayer');
      this.$playerXai = document.querySelector('#playerXai');
      this.$pickPlayerLayar = document.querySelector('.pickPlayer');
    },

    render: function () {
      var data = {
        startCells: this.startCells,
      };
      data.startCells.forEach((cell, index) => {
        let cellElement = document.createElement('button');
        cellElement.classList.add('cell');
        cellElement.setAttribute('data-index', index);
        this.$board.appendChild(cellElement);
      });
    },

    bind: function () {
      this.$playerXplayer.addEventListener('click', () => {
        this.gameMode(0);
      });

      this.$playerXai.addEventListener('click', () => {
        this.gameMode(1);
      });
    },

    gameMode: function (mode) {
      if (mode === 0) {
        player.playerAi = false;
      } else {
        player.playerAi = true;
      }
      this.$pickPlayerLayar.classList.remove('active');
    },

    reset: function () {
      this.$board.innerHTML = '';
      player.playerOne.turn = 1;
      player.playerOne.choices = [];
      player.playerTwo.turn = 0;
      player.playerTwo.choices = [];
      player.round = 1;
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

    pickAiChoice: function () {
      aiMoves.pickMove(player);
      let indexChoice =
        player.playerTwo.choices[player.playerTwo.choices.length - 1];

      const button = document.querySelector(
        `button[data-index="${indexChoice}"]`
      );

      let $img = document.createElement('img');
      $img.src = 'assets/circle.png';
      button.appendChild($img);
      player.round++;
    },

    addPlayerSymbol: function (event) {
      if (!event.target.matches('button')) return;

      let $img = document.createElement('img');
      let $index = parseInt(event.target.getAttribute('data-index'));

      if (player.playerOne.turn === 1) {
        $img.src = 'assets/cross.png';
        event.target.appendChild($img);
        player.playerOne.choices.push($index);
        if (player.playerAi && player.round != 5) {
          this.pickAiChoice();
        } else {
          this.switchPlayers(player);
        }
      } else {
        $img.src = 'assets/circle.png';
        event.target.appendChild($img);
        player.playerTwo.choices.push($index);
        this.switchPlayers(player);
      }

      this.displayOverlay(this.checkWinner(player));
    },
  };

  gameBoard.init();
  gamePlay.init();
})();
