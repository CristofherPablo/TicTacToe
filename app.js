/* This module create and render the board */
(function () {
  var player = {
    playerOne: {
      turn: 1,
      choices: [],
    },
    playerTwo: {
      turn: 1,
      choices: [],
    },
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
      this.render();
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
    },

    bindEvents: function () {
      this.$buttons.forEach((button) => {
        button.addEventListener('click', this.addPlayerSymbol.bind(this), {
          once: true,
        });
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
          }else if(playerOneScore.length + playerTwoScore.length === 9){
            return 'I\`s a draw'
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

      console.log(this.checkWinner(player));
    },
  };

  gameBoard.init();
  gamePlay.init();
})();
