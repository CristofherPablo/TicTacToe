var aiMoves = (function () {
  function pickMove(player) {
    if (player.round === 1) {
      roundOne(player);
    } else if (player.round === 2) {
      roundTwo(player);
    } else if (player.round === 3) {
      roundThree(player);
    } else if (player.round === 4) {
      roundFour(player);
    }
  }

  function roundOne(player) {
    if (player.playerOne.choices[0] === 4) {
      player.playerTwo.choices[0] = 2;
    } else {
      player.playerTwo.choices[0] = 4;
    }
  }

  function roundTwo(player) {
    if (player.playerOne.choices[0] === 4) {
      switch (player.playerOne.choices[1]) {
        case 0:
          player.playerTwo.choices[1] = 8;
          break;
        case 1:
          player.playerTwo.choices[1] = 7;
          break;
        case 3:
          player.playerTwo.choices[1] = 5;
          break;
        case 5:
          player.playerTwo.choices[1] = 3;
          break;
        case 6:
          player.playerTwo.choices[1] = 8;
          break;
        case 7:
          player.playerTwo.choices[1] = 1;
          break;
        case 8:
          player.playerTwo.choices[1] = 0;
          break;
        default:
          break;
      }
    } else {
      switch (player.playerOne.choices[1]) {
        case 0:
          if (player.playerOne.choices[0] === 1) {
            player.playerTwo.choices[1] = 2;
          } else if (player.playerOne.choices[0] === 2) {
            player.playerTwo.choices[1] = 1;
          } else if (player.playerOne.choices[0] === 3) {
            player.playerTwo.choices[1] = 6;
          } else if (player.playerOne.choices[0] === 6) {
            player.playerTwo.choices[1] = 3;
          } else {
            player.playerTwo.choices[1] = 2;
          }
          break;
        case 1:
          if (player.playerOne.choices[0] === 0) {
            player.playerTwo.choices[1] = 2;
          } else if (player.playerOne.choices[0] === 2) {
            player.playerTwo.choices[1] = 0;
          } else {
            if (player.playerOne.choices[0] === 6) {
              player.playerTwo.choices[1] = 0;
            } else {
              player.playerTwo.choices[1] = 2;
            }
          }
          break;
        case 2:
          if (player.playerOne.choices[0] === 0) {
            player.playerTwo.choices[1] = 1;
          } else if (player.playerOne.choices[0] === 1) {
            player.playerTwo.choices[1] = 0;
          } else if (player.playerOne.choices[0] === 8) {
            player.playerTwo.choices[1] = 5;
          } else {
            if (player.playerOne.choices[0] === 5) {
              player.playerTwo.choices[1] = 8;
            } else if (player.playerOne.choices[0] === 8) {
              player.playerTwo.choices[1] = 7;
            } else {
              player.playerTwo.choices[1] = 0;
            }
          }
          break;
        case 3:
          if (player.playerOne.choices[0] === 0) {
            player.playerTwo.choices[1] = 6;
          } else if (player.playerOne.choices[0] === 6) {
            player.playerTwo.choices[1] = 0;
          } else {
            if (player.playerOne.choices[0] === 8) {
              player.playerTwo.choices[1] = 4;
            } else {
              player.playerTwo.choices[1] = 0;
            }
          }
          break;
        case 5:
          if (player.playerOne.choices[0] === 2) {
            player.playerTwo.choices[1] = 8;
          } else if (player.playerOne.choices[0] === 8) {
            player.playerTwo.choices[1] = 2;
          } else {
            if (player.playerOne.choices[0] === 0) {
              player.playerTwo.choices[1] = 2;
            } else {
              player.playerTwo.choices[1] = 0;
            }
          }
          break;
        case 6:
          if (player.playerOne.choices[0] === 0) {
            player.playerTwo.choices[1] = 3;
          } else if (player.playerOne.choices[0] === 3) {
            player.playerTwo.choices[1] = 0;
          } else if (player.playerOne.choices[0] === 7) {
            player.playerTwo.choices[1] = 8;
          } else if (player.playerOne.choices[0] === 8) {
            player.playerTwo.choices[1] = 7;
          } else {
            player.playerTwo.choices[1] = 0;
          }
          break;
        case 7:
          if (player.playerOne.choices[0] === 6) {
            player.playerTwo.choices[1] = 8;
          } else if (player.playerOne.choices[0] === 8) {
            player.playerTwo.choices[1] = 6;
          } else {
            if (player.playerOne.choices[0] === 2) {
              player.playerTwo.choices[1] = 8;
            } else {
              player.playerTwo.choices[1] = 0;
            }
          }
          break;
        case 8:
          if (player.playerOne.choices[0] === 2) {
            player.playerTwo.choices[1] = 5;
          } else if (player.playerOne.choices[0] === 5) {
            player.playerTwo.choices[1] = 2;
          } else if (player.playerOne.choices[0] === 6) {
            player.playerTwo.choices[1] = 7;
          } else if (player.playerOne.choices[0] === 7) {
            player.playerTwo.choices[1] = 6;
          } else {
            player.playerTwo.choices[1] = 2;
          }
          break;
        default:
          break;
      }
    }
  }

  function roundThree(player) {
    if (checkPossibleWin(player.playerTwo)[0]) {
      player.playerTwo.choices[3] = checkPossibleWin(player.playerTwo)[1];
    } else if (checkPossibleWin(player.playerOne)[0]) {
      player.playerTwo.choices[3] = checkPossibleWin(player.playerOne)[1];
    } else if (player.playerOne.choices[0] === 4) {
      switch (player.playerOne.choices[2]) {
        case 1:
          player.playerTwo.choices[2] = 7;
          break;
        case 5:
          player.playerTwo.choices[2] = 3;
          break;
        default:
          if (
            player.playerOne.choices.includes(5) ||
            player.playerTwo.choices.includes(5)
          ) {
            player.playerTwo.choices[2] = 7;
          } else {
            player.playerTwo.choices[2] = 5;
          }

          break;
      }
    } else {
      switch (player.playerOne.choices[2]) {
        case 0:
          if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[1] === 5 &&
              player.playerOne.choices[2] === 2) ||
            (player.playerOne.choices[1] === 2 &&
              player.playerOne.choices[2] === 8) ||
            (player.playerOne.choices[1] === 8 &&
              player.playerOne.choices[2] === 2) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 2;
          }
          break;

        case 1:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0)
          ) {
            player.playerTwo.choices[2] = 5;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 0;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 6;
          }
          break;

        case 2:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 0;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 5;
          }
          break;

        case 3:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 0)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 5;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 0;
          }
          break;

        case 5:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 0)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 0;
          } else if (
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 1;
          }
          break;

        case 6:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 0;
          }
          break;

        case 7:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 0)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 0;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 3;
          }
          break;

        case 8:
          if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[1] === 1 &&
              player.playerOne.choices[2] === 0)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 0)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 5;
          } else if (
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 5 &&
              player.playerOne.choices[1] === 0) ||
            (player.playerOne.choices[0] === 0 &&
              player.playerOne.choices[1] === 5) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 6;
          }
          break;
      }
    }
  }

  function roundFour(player) {
    if (checkPossibleWin(player.playerTwo)[0]) {
      player.playerTwo.choices[3] = checkPossibleWin(player.playerTwo)[1];
    } else if (checkPossibleWin(player.playerOne)[0]) {
      player.playerTwo.choices[3] = checkPossibleWin(player.playerOne)[1];
    } else {
      const buttons = document.querySelectorAll('.cell');
      let buttonsLeft = [];

      buttons.forEach((button) => {
        if (!button.querySelector('img')) {
          let index = parseInt(button.getAttribute('data-index'));
          console.log('Index ' + index);
          buttonsLeft.push(index);
        }
      });

      player.playerTwo.choices[3] = buttonsLeft[0];
    }
    console.log(player.playerTwo.choices[3]);
  }

  function checkPossibleWin(playerChoices) {
    if (
      (playerChoices.choices.includes(1) &&
        playerChoices.choices.includes(2)) ||
      (playerChoices.choices.includes(3) &&
        playerChoices.choices.includes(6)) ||
      (playerChoices.choices.includes(4) && playerChoices.choices.includes(8))
    ) {
      const button = document.querySelector('button[data-index="0"]');
      if (!button.querySelector('img')) {
        return [true, 0];
      }
    }

    if (
      (playerChoices.choices.includes(2) &&
        playerChoices.choices.includes(0)) ||
      (playerChoices.choices.includes(4) && playerChoices.choices.includes(7))
    ) {
      const button = document.querySelector('button[data-index="1"]');
      if (!button.querySelector('img')) {
        return [true, 1];
      }
    }

    if (
      (playerChoices.choices.includes(1) &&
        playerChoices.choices.includes(0)) ||
      (playerChoices.choices.includes(5) &&
        playerChoices.choices.includes(8)) ||
      (playerChoices.choices.includes(4) && playerChoices.choices.includes(6))
    ) {
      const button = document.querySelector('button[data-index="2"]');
      if (!button.querySelector('img')) {
        return [true, 2];
      }
    }

    if (
      (playerChoices.choices.includes(4) &&
        playerChoices.choices.includes(5)) ||
      (playerChoices.choices.includes(6) && playerChoices.choices.includes(0))
    ) {
      const button = document.querySelector('button[data-index="3"]');
      if (!button.querySelector('img')) {
        return [true, 3];
      }
    }

    if (
      (playerChoices.choices.includes(3) &&
        playerChoices.choices.includes(5)) ||
      (playerChoices.choices.includes(1) &&
        playerChoices.choices.includes(7)) ||
      (playerChoices.choices.includes(0) &&
        playerChoices.choices.includes(8)) ||
      (playerChoices.choices.includes(2) && playerChoices.choices.includes(6))
    ) {
      const button = document.querySelector('button[data-index="4"]');
      if (!button.querySelector('img')) {
        return [true, 4];
      }
    }

    if (
      (playerChoices.choices.includes(3) &&
        playerChoices.choices.includes(4)) ||
      (playerChoices.choices.includes(2) && playerChoices.choices.includes(8))
    ) {
      const button = document.querySelector('button[data-index="5"]');
      if (!button.querySelector('img')) {
        return [true, 5];
      }
    }

    if (
      (playerChoices.choices.includes(7) &&
        playerChoices.choices.includes(8)) ||
      (playerChoices.choices.includes(0) &&
        playerChoices.choices.includes(3)) ||
      (playerChoices.choices.includes(4) && playerChoices.choices.includes(2))
    ) {
      const button = document.querySelector('button[data-index="6"]');
      if (!button.querySelector('img')) {
        return [true, 6];
      }
    }

    if (
      (playerChoices.choices.includes(6) &&
        playerChoices.choices.includes(8)) ||
      (playerChoices.choices.includes(1) && playerChoices.choices.includes(4))
    ) {
      const button = document.querySelector('button[data-index="7"]');
      if (!button.querySelector('img')) {
        return [true, 7];
      }
    }

    if (
      (playerChoices.choices.includes(6) &&
        playerChoices.choices.includes(7)) ||
      (playerChoices.choices.includes(2) &&
        playerChoices.choices.includes(5)) ||
      (playerChoices.choices.includes(0) && playerChoices.choices.includes(4))
    ) {
      const button = document.querySelector('button[data-index="8"]');
      if (!button.querySelector('img')) {
        return [true, 8];
      }
    }

    return [false, -1];
  }
  return {
    pickMove: pickMove,
  };
})();

export { aiMoves };
