var aiMoves = (function () {

  function pickMove(player) {
    if (player.round === 1) {
      if (player.playerOne.choices[0] === 4) {
        player.playerTwo.choices[0] = 2;
      } else {
        player.playerTwo.choices[0] = 4;
      }
    } else if (player.round === 2) {
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
              player.playerTwo.choices[1] = 8;
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
    } else if (player.round === 3) {
      if (player.playerOne.choices[0] === 4) {
        switch (player.playerOne.choices[2]) {
          case 5:
            player.playerTwo.choices[2] = 3;
            break;
          default:
            player.playerTwo.choices[2] = 5;
            break;
        }
      }
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
            (player.playerOne.choices[1] === 3 &&
              player.playerOne.choices[2] === 0) ||
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
            (player.playerOne.choices[1] === 3 &&
              player.playerOne.choices[2] === 0) ||
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
            (player.playerOne.choices[1] === 1 &&
              player.playerOne.choices[2] === 0) ||
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
            (player.playerOne.choices[1] === 1 &&
              player.playerOne.choices[2] === 0) ||
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
            (player.playerOne.choices[1] === 1 &&
              player.playerOne.choices[2] === 0) ||
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
              player.playerOne.choices[1] === 5)
          ) {
            player.playerTwo.choices[2] = 6;
          }
          break;
      }
    } else if (player.round === 4) {
      if (player.playerOne.choices[0] === 4) {
        switch (player.playerOne.choices[3]) {
          case 1:
            player.playerTwo.choices[3] = 7;
            break;
          default:
            player.playerTwo.choices[3] = 1;
            break;
        }
      } else {
        if (
          (player.playerTwo.choices.includes(1) &&
            player.playerTwo.choices.includes(2)) ||
          (player.playerTwo.choices.includes(3) &&
            player.playerTwo.choices.includes(6)) ||
          (player.playerTwo.choices.includes(4) &&
            player.playerTwo.choices.includes(8))
        ) {
          if (!player.playerOne.choices.includes(0)) {
            player.playerTwo.choices[3] = 0;
          } else {
            if (
              (player.playerOne.choices.includes(1) &&
                player.playerOne.choices.includes(2)) ||
              (player.playerOne.choices.includes(3) &&
                player.playerOne.choices.includes(6)) ||
              (player.playerOne.choices.includes(4) &&
                player.playerOne.choices.includes(8))
            ) {
              if (!player.playerTwo.choices.includes(0)) {
                player.playerTwo.choices[3] = 0;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(2) &&
            player.playerTwo.choices.includes(0)) ||
          (player.playerTwo.choices.includes(4) &&
            player.playerTwo.choices.includes(7))
        ) {
          if (!player.playerOne.choices.includes(1)) {
            player.playerTwo.choices[3] = 1;
          } else {
            if (
              (player.playerOne.choices.includes(2) &&
                player.playerOne.choices.includes(0)) ||
              (player.playerOne.choices.includes(4) &&
                player.playerOne.choices.includes(7))
            ) {
              if (!player.playerTwo.choices.includes(1)) {
                player.playerTwo.choices[3] = 1;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(1) &&
            player.playerTwo.choices.includes(0)) ||
          (player.playerTwo.choices.includes(5) &&
            player.playerTwo.choices.includes(8)) ||
          (player.playerTwo.choices.includes(4) &&
            player.playerTwo.choices.includes(6))
        ) {
          if (!player.playerOne.choices.includes(2)) {
            player.playerTwo.choices[3] = 2;
          } else {
            if (
              (player.playerOne.choices.includes(1) &&
                player.playerOne.choices.includes(0)) ||
              (player.playerOne.choices.includes(5) &&
                player.playerOne.choices.includes(8)) ||
              (player.playerOne.choices.includes(4) &&
                player.playerOne.choices.includes(6))
            ) {
              if (!player.playerTwo.choices.includes(2)) {
                player.playerTwo.choices[3] = 2;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(4) &&
            player.playerTwo.choices.includes(5)) ||
          (player.playerTwo.choices.includes(6) &&
            player.playerTwo.choices.includes(0))
        ) {
          if (!player.playerOne.choices.includes(3)) {
            player.playerTwo.choices[3] = 3;
          } else {
            if (
              (player.playerOne.choices.includes(4) &&
                player.playerOne.choices.includes(5)) ||
              (player.playerOne.choices.includes(6) &&
                player.playerOne.choices.includes(0))
            ) {
              if (!player.playerTwo.choices.includes(3)) {
                player.playerTwo.choices[3] = 3;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(3) &&
            player.playerTwo.choices.includes(5)) ||
          (player.playerTwo.choices.includes(1) &&
            player.playerTwo.choices.includes(7)) ||
          (player.playerTwo.choices.includes(0) &&
            player.playerTwo.choices.includes(8)) ||
          (player.playerTwo.choices.includes(2) &&
            player.playerTwo.choices.includes(6))
        ) {
          if (!player.playerOne.choices.includes(4)) {
            player.playerTwo.choices[3] = 4;
          } else {
            if (
              (player.playerOne.choices.includes(3) &&
                player.playerOne.choices.includes(5)) ||
              (player.playerOne.choices.includes(1) &&
                player.playerOne.choices.includes(7)) ||
              (player.playerOne.choices.includes(0) &&
                player.playerOne.choices.includes(8)) ||
              (player.playerOne.choices.includes(2) &&
                player.playerOne.choices.includes(6))
            ) {
              if (!player.playerTwo.choices.includes(4)) {
                player.playerTwo.choices[3] = 4;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(3) &&
            player.playerTwo.choices.includes(4)) ||
          (player.playerTwo.choices.includes(2) &&
            player.playerTwo.choices.includes(8))
        ) {
          if (!player.playerOne.choices.includes(5)) {
            player.playerTwo.choices[3] = 5;
          } else {
            if (
              (player.playerOne.choices.includes(3) &&
                player.playerOne.choices.includes(4)) ||
              (player.playerOne.choices.includes(2) &&
                player.playerOne.choices.includes(8))
            ) {
              if (!player.playerTwo.choices.includes(5)) {
                player.playerTwo.choices[3] = 5;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(7) &&
            player.playerTwo.choices.includes(8)) ||
          (player.playerTwo.choices.includes(0) &&
            player.playerTwo.choices.includes(3)) ||
          (player.playerTwo.choices.includes(4) &&
            player.playerTwo.choices.includes(2))
        ) {
          if (!player.playerOne.choices.includes(6)) {
            player.playerTwo.choices[3] = 6;
          } else {
            if (
              (player.playerOne.choices.includes(7) &&
                player.playerOne.choices.includes(8)) ||
              (player.playerOne.choices.includes(0) &&
                player.playerOne.choices.includes(3)) ||
              (player.playerOne.choices.includes(4) &&
                player.playerOne.choices.includes(2))
            ) {
              if (!player.playerTwo.choices.includes(6)) {
                player.playerTwo.choices[3] = 6;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(6) &&
            player.playerTwo.choices.includes(8)) ||
          (player.playerTwo.choices.includes(1) &&
            player.playerTwo.choices.includes(3))
        ) {
          if (!player.playerOne.choices.includes(7)) {
            player.playerTwo.choices[3] = 7;
          } else {
            if (
              (player.playerOne.choices.includes(6) &&
                player.playerOne.choices.includes(8)) ||
              (player.playerOne.choices.includes(1) &&
                player.playerOne.choices.includes(4))
            ) {
              if (!player.playerTwo.choices.includes(7)) {
                player.playerTwo.choices[3] = 7;
              }
            }
          }
        } else if (
          (player.playerTwo.choices.includes(6) &&
            player.playerTwo.choices.includes(7)) ||
          (player.playerTwo.choices.includes(2) &&
            player.playerTwo.choices.includes(5)) ||
          (player.playerTwo.choices.includes(0) &&
            player.playerTwo.choices.includes(4))
        ) {
          if (!player.playerOne.choices.includes(8)) {
            player.playerTwo.choices[3] = 8;
          } else {
            if (
              (player.playerOne.choices.includes(6) &&
                player.playerOne.choices.includes(7)) ||
              (player.playerOne.choices.includes(2) &&
                player.playerOne.choices.includes(5)) ||
              (player.playerOne.choices.includes(0) &&
                player.playerOne.choices.includes(4))
            ) {
              if (!player.playerTwo.choices.includes(8)) {
                player.playerTwo.choices[3] = 8;
              }
            }
          }
        }

        if (player.playerTwo.choices.length != 4) {
          const buttons = document.querySelectorAll('.cell button');
          let buttonsLeft = [];

          buttons.forEach((button) => {
            if (!button.querySelector('img')) {
              let index = parseInt(button.getAttribute('data-index'));
              buttonsLeft.push(index);
            }
          });

          player.playerTwo.choices[3] = buttonsLeft[0];
        }
      }
    }
  }
return {
  pickMove: pickMove
}
})();

export { aiMoves };
