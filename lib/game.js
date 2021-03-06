import Board from "./board";

const GRID_SIZE = 15;
const WINNING_SEQUENCE = 5;
const PLAYER1 = "PLAYER1";
const PLAYER2 = "PLAYER2";

export default class Game {
  constructor(player1, player2, board = new Board(GRID_SIZE, WINNING_SEQUENCE)){
    this.player1 = player1;
    this.player2 = player2;
    this.board = board;
    this.currentPlayer = PLAYER1;
  }

  isOver(){
    return this.board.checkForWinner();
  }

  playTurn(){
    if (this.currentPlayer === PLAYER1) {
      this.player1.getMove(this.board);
    } else {
      this.player2.getMove(this.board);
    }
  }

  switchPlayer() {
    this.board.switchColor();
    this.currentPlayer = this.currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1;
  }
}
