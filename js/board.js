class Board {
	constructor(){
		this.cells = [0,0,0,0,0,0,0,0,0];
        this.winCombinations = [
            [0,1,2],[3,4,5],[6,7,8], //Horizontal
            [0,3,6],[1,4,7],[2,5,8], //Vertical
            [0,4,8],[2,4,6] //Crossed
        ];
    }

    checkWinner(player){
        //Check if a player has a winner combination and returns the combination or false
        for(var i=0; i<this.winCombinations.length; i++){
            var coincidences=0;
            var combination = [];
            for(var j=0; j<this.winCombinations[i].length; j++){
                if(this.cells[this.winCombinations[i][j]]==player){
                    coincidences++;
                    combination.push(this.winCombinations[i][j]);
                }else{
                    break;
                }
            }
            if(coincidences==3){
                return combination;
            };
        }
        return false;
    }

	movement(pos,player){
	    /*Change a cell status from 0 to player,
	       returns true if movement is valid
	       false if not
	       -1 if there are no available empty cells
	    */
	    if(this.cells[pos]==0){
            this.cells[pos]=player;
            return true;
        }
        else{
            for(var i=0;i<this.cells.length;i++){
                if(this.cells[i]==0)
                    return false;
            }
            return -1;
        }
    }


}