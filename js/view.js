class View{

    constructor(table,info){
        this.rows = table.getElementsByTagName('td');
        this.info = info;
    }


    updateCell(pos,player){
        if(player==1){
            this.rows[pos].style.backgroundColor = "blue";
            this.rows[pos].innerHTML = "X";
        }else{
            this.rows[pos].style.backgroundColor = "red";
            this.rows[pos].innerHTML = "O";
        }
    }

    endGame(player,result){
        if(result != -1){
            for(var i=0;i<result.length;i++){
                this.rows[result[i]].style.backgroundColor = "green";
            }
            this.info.innerHTML = "Player "+player+" won!";
        }else{
            this.info.innerHTML = "Tie!";
        }
    }

    reset(){
        for(var i = 0; i < this.rows.length; i++){
            this.rows[i].style.backgroundColor = "white";
            this.rows[i].innerHTML = "";
        }
        this.info.innerHTML = "";
    }
}