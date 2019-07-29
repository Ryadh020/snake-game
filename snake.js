// drawing the snake:
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1 ;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "black";

        for(let i=0; i<this.tail.lenght; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }
    
    this.update =function() {
        for(let i=0; i<this.tail.lenght-1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = {x:this.x, y:this.y}; 

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x> canvas.width-10) {
            this.x = 0;
        }
        if(this.y> canvas.height-10) {
            this.y = 0;
        }
        if(this.x<0) {
            this.x = canvas.width-10;
        }
        if(this.y<0) {
            this.y = canvas.height-10;
        }
       
    }
    this.changeDirection = (direction)=> {
        if(direction==="Up") {
            this.xSpeed = 0 ;
            this.ySpeed = -1* scale;
        } else if(direction==="Down") {
            this.xSpeed = 0 ;
            this.ySpeed = scale * 1 ;
        } else if(direction==="Right") {
            this.xSpeed = scale * 1 ;
            this.ySpeed = 0 ;
        } else if(direction==="Left") {
            this.xSpeed = scale * -1 ;
            this.ySpeed = 0 ;
        }
    }
    this.eat = function(fruit) {
        if(this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            fruit.pickLocation();
        } 
    }
}
