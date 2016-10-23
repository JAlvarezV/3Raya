window.onload = function () {
    table = document.getElementsByTagName('table')[0];
	cells = table.getElementsByTagName('td');
    info = document.getElementById('info');
    game = new Game(table,info);
    document.getElementById('reiniciar').addEventListener("click",restart);

    for(var i = 0;i<cells.length;i++){
        cells[i].addEventListener("click",function (event) {
            game.move(event.target.id-1);
        });
    }
};

function restart() {
    game.reset();
}
