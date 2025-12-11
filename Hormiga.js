class Hormiga{
    constructor( board ){
        this.x = 50;
        this.y = 50;
        this.board = board;

        this.direction = 0;
    }
    step(){

        if(this.board.cells[this.x][this.y]==0){
            this.turnLeft();
            this.board.cells[this.x][this.y]=1;
        }else{
            this.turnRight();
            this.board.cells[this.x][this.y]=0;
        }

        switch (this.direction){
            case 0:
                this.y--;
                break;
            case 1:
                this.x++;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.x--;
                break
        }
        if (this.x>=this.board.width) {
            this.x = 0;
        }
        if (this.x<0) {
            this.x = this.board.width -1;
        }
        if (this.y>=this.board.height) {
            this.y = 0;
        }
        if (this.y<0) {
            this.y = this.board.height -1;
        }
    
    }
    turnLeft(){
        this.direction--;
        if (this.direction==-1) {
            this.direction = 3;
            
        }
    }
    turnRight(){
        this.direction++;
        if (this.direction== 4) {
            this.direction = 0;
            
        }
    }
    display(){
        let size = 5;
        fill("blue ");
        square(this.x*size, this.y*size, size);
                
    }
}
