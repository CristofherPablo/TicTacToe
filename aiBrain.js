var aiMoves = {
  pickMove: function () {
    if (player.round === 1) {
      if (player.playerOne.choices[0] === 5) {
        player.playerTwo.choices[0] = 3;
      } else {
        player.playerTwo.choices[0] = 5;
      }
    } else if (player.round === 2) {
      if (player.playerOne.choices[0] === 5) {
        switch (player.playerOne.choices[1]) {
          case 1:
            player.playerTwo.choices[1] = 9;
            break;
          case 2:
            player.playerTwo.choices[1] = 8;
            break;
          case 4:
            player.playerTwo.choices[1] = 6;
            break;
          case 6:
            player.playerTwo.choices[1] = 4;
            break;
          case 7:
            player.playerTwo.choices[1] = 6;
            break;
          case 8:
            player.playerTwo.choices[1] = 2;
            break;
          case 9:
            player.playerTwo.choices[1] = 1;
            break;
          default:
            break;
        }
      } else {
        switch (player.playerOne.choices[1]) {
          case 1:
            if (player.playerOne.choices[0] === 2) {
              player.playerTwo.choices[1] = 3;
            } else if (player.playerOne.choices[0] === 3) {
              player.playerTwo.choices[1] = 2;
            } else if (player.playerOne.choices[0] === 4) {
              player.playerTwo.choices[1] = 7;
            } else if (player.playerOne.choices[0] === 7) {
              player.playerTwo.choices[1] = 4;
            } else {
              player.playerTwo.choices[1] = 3;
            }
            break;
          case 2:
            if (player.playerOne.choices[0] === 1) {
              player.playerTwo.choices[1] = 3;
            } else if (player.playerOne.choices[0] === 3) {
              player.playerTwo.choices[1] = 1;
            } else {
              if (player.playerOne.choices[0] === 7) {
                player.playerTwo.choices[1] = 1;
              } else {
                player.playerTwo.choices[1] = 3;
              }
            }
            break;
          case 3:
            if (player.playerOne.choices[0] === 1) {
              player.playerTwo.choices[1] = 2;
            } else if (player.playerOne.choices[0] === 2) {
              player.playerTwo.choices[1] = 1;
            } else {
              if (player.playerOne.choices[0] === 6) {
                player.playerTwo.choices[1] = 9;
              } else if (player.playerOne.choices[0] === 9) {
                player.playerTwo.choices[1] = 6;
              } else {
                player.playerTwo.choices[1] = 1;
              }
            }
            break;
          case 4:
            if (player.playerOne.choices[0] === 1) {
              player.playerTwo.choices[1] = 7;
            } else if (player.playerOne.choices[0] === 7) {
              player.playerTwo.choices[1] = 1;
            } else {
              if (player.playerOne.choices[0] === 9) {
                player.playerTwo.choices[1] = 3;
              } else {
                player.playerTwo.choices[1] = 1;
              }
            }
            break;
          case 6:
            if (player.playerOne.choices[0] === 3) {
              player.playerTwo.choices[1] = 9;
            } else if (player.playerOne.choices[0] === 9) {
              player.playerTwo.choices[1] = 3;
            } else {
              if (player.playerOne.choices[0] === 1) {
                player.playerTwo.choices[1] = 3;
              } else {
                player.playerTwo.choices[1] = 1;
              }
            }
            break;
          case 7:
            if (player.playerOne.choices[0] === 1) {
              player.playerTwo.choices[1] = 4;
            } else if (player.playerOne.choices[0] === 4) {
              player.playerTwo.choices[1] = 1;
            } else if (player.playerOne.choices[0] === 8) {
              player.playerTwo.choices[1] = 9;
            } else if (player.playerOne.choices[0] === 9) {
              player.playerTwo.choices[1] = 8;
            } else {
              player.playerTwo.choices[1] = 1;
            }
            break;
          case 8:
            if (player.playerOne.choices[0] === 7) {
              player.playerTwo.choices[1] = 9;
            } else if (player.playerOne.choices[0] === 9) {
              player.playerTwo.choices[1] = 7;
            } else {
              if (player.playerOne.choices[0] === 3) {
                player.playerTwo.choices[1] = 9;
              } else {
                player.playerTwo.choices[1] = 1;
              }
            }
            break;
          case 9:
            if (player.playerOne.choices[0] === 3) {
              player.playerTwo.choices[1] = 6;
            } else if (player.playerOne.choices[0] === 6) {
              player.playerTwo.choices[1] = 3;
            } else if (player.playerOne.choices[0] === 7) {
              player.playerTwo.choices[1] = 8;
            } else if (player.playerOne.choices[0] === 8) {
              player.playerTwo.choices[1] = 7;
            } else {
              player.playerTwo.choices[1] = 3;
            }
            break;
          default:
            break;
        }
      }
    } else if (player.round === 3) {
      if (player.playerOne.choices[0] === 5) {
        switch (player.playerOne.choices[2]) {
          case 6:
            player.playerTwo.choices[2] = 4;
            break;
          default:
            player.playerTwo.choices[2] = 6;
            break;
        }
      }
      switch (player.playerOne.choices[2]) {
        case 1:
          if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[1] === 6 &&
              player.playerOne.choices[2] === 3) ||
            (player.playerOne.choices[1] === 3 &&
              player.playerOne.choices[2] === 9) ||
            (player.playerOne.choices[1] === 9 &&
              player.playerOne.choices[2] === 3) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 9)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 3;
          }
          break;

        case 2:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[1] === 4 &&
              player.playerOne.choices[2] === 1) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 9)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 4;
          } else if (
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 4)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 7;
          }
          break;

        case 3:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[1] === 4 &&
              player.playerOne.choices[2] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 2;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 6;
          }
          break;

        case 4:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[1] === 2 &&
              player.playerOne.choices[2] === 1) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 1;
          }
          break;

        case 6:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[1] === 2 &&
              player.playerOne.choices[2] === 1) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 4)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 4)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 8) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 8 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 8)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 2;
          }
          break;

        case 7:
          if (
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 4;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 4)
          ) {
            player.playerTwo.choices[2] = 1;
          }
          break;

        case 8:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[1] === 2 &&
              player.playerOne.choices[2] === 1) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 7;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 6) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 1;
          } else if (
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 9) ||
            (player.playerOne.choices[0] === 9 &&
              player.playerOne.choices[1] === 3)
          ) {
            player.playerTwo.choices[2] = 4;
          }
          break;

        case 9:
          if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[1] === 2 &&
              player.playerOne.choices[2] === 1)
          ) {
            player.playerTwo.choices[2] = 9;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 4)
          ) {
            player.playerTwo.choices[2] = 8;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 4) ||
            (player.playerOne.choices[0] === 4 &&
              player.playerOne.choices[1] === 1)
          ) {
            player.playerTwo.choices[2] = 3;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 7) ||
            (player.playerOne.choices[0] === 7 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2)
          ) {
            player.playerTwo.choices[2] = 6;
          } else if (
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 3 &&
              player.playerOne.choices[1] === 2) ||
            (player.playerOne.choices[0] === 2 &&
              player.playerOne.choices[1] === 3) ||
            (player.playerOne.choices[0] === 6 &&
              player.playerOne.choices[1] === 1) ||
            (player.playerOne.choices[0] === 1 &&
              player.playerOne.choices[1] === 6)
          ) {
            player.playerTwo.choices[2] = 7;
          }
          break;
      }
    } else if (player.round === 4) {
      if (player.playerOne.choices[0] === 5) {
        switch (player.playerOne.choices[3]) {
          case 2:
            player.playerTwo.choices[0] = 8;
            break;
          default:
            player.playerTwo.choices[0] = 2;
            break;
        }
      }
    }
  },

  winMove: function () {},
};
