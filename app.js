/* This module create and render the board */
(function () {
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
        let div = document.createElement('div');
        cellElement.appendChild(div);
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

    render: function () {},

    addPlayerSymbol: function (event) {
      let $div = event.target.querySelector('div');
      $div.classList.add('circle');
    },
  };

  gameBoard.init();
  gamePlay.init();
})();
