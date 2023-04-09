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
        this.$board.appendChild(cellElement);
      });
    },

    reset: function(){
        this.$board.innerHTML = '';
        this.render();
    },
  };

  gameBoard.init();
  console.log(gameBoard.startCells);
})();
