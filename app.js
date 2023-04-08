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
        data.startCells.forEach((cell) => {
        let cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        this.$board.appendChild(cellElement);
      });
    },
  };

  gameBoard.init();
})();
