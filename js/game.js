class Game {
    constructor(table,info){
        this.board = new Board();
        this.view = new View(table,info);
        this.turn = 1;
    }

    move(pos){
        if(!this.gameOver()){
            var m = this.board.movement(pos,this.turn);
            //No more cells available so we end the game in tie
            //If the player clicks in an empty cell
            if(m!=false && m!=-1){
                //Update the view of the table
                this.view.updateCell(pos,this.turn);
            }
            if(this.board.movement(pos,this.turn)==-1) {
                this.view.endGame(this.turn,-1);
            }
            //Check if the player won and get the combination in that case
            var result = this.board.checkWinner(this.turn);
            //If the player won update the view
            if(result)
                this.view.endGame(this.turn,result);
            //Next player
            if(++this.turn>2) this.turn=1;
        }
    }



    gameOver(){
        //Checks if game is still playable
        if(!this.board.checkWinner(1) && !this.board.checkWinner(2))
            return false;
        return true;
    }

    reset(){
        this.view.reset();
        this.board = new Board();
        this.turn = 1;
    }
}