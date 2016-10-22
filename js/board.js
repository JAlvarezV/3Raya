class Game {
	constructor(){
		this.cells = [0,0,0,0,0,0,0,0,0];
    }

    checkWinner(player){
        //Check if a player has a winner combination and returns the combination or false

        var winCombis = [
            [0,1,2],[3,4,5],[6,7,8], //Horizontal
            [0,3,6],[1,4,7],[2,5,8], //Vertical
            [0,4,8],[2,4,6] //Crossed
        ];

        for(var i=0;i<winCombis.length;i++){
            var coincidences=0;
            var combination = [];
            for(var j=0;j<winCombis[i].length;j++){
                if(this.cells[winCombis[i][j]]==player){
                    coincidences++;
                    combination[combination.length] = winCombis[i][j];
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
	    //Change a cell status from 0 to 1, returns true if cell is empty.
	    if(this.cells[pos]==0){
            this.cells[pos]=player;
            return true;
        }
        return false;
    }


}