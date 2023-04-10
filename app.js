/* This module create and render the board */
(function () {
  var player = {
    playerOne: 1,
    playerTwo: 0,
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
    init: function () {
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom: function () {
      this.$buttons = document.querySelectorAll('#board button');
    },

    bindEvents: function () {
      this.$buttons.forEach((button) => {
        button.addEventListener('click', this.addPlayerSymbol.bind(this));
      });
    },

    switchPlayers: function (player) {
      if (player.playerOne === 0) {
        player.playerOne = 1;
        player.playerTwo = 0;
      } else {
        player.playerOne = 0;
        player.playerTwo = 1;
      }
    },

    addPlayerSymbol: function (event) {
      let $img = event.target.querySelector('img');
      if (player.playerOne === 0) {
        $img.src = 'assets/cross.png';
        this.switchPlayers(player);
      } else {
        $img.src = 'assets/circle.png';
        this.switchPlayers(player);
      }
    },
  };

  gameBoard.init();
  gamePlay.init();
})();
