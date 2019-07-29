// get access to the canvas :
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// scale the canvas :
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;


// put the snake on the background:
var snake;



(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        fruit.draw();
        snake.draw(); 
        snake.update();   
        snake.eat(fruit);      
    },200);
}());

// add key presses to control the snake:
window.addEventListener("keydown", (e)=> {
    const direction = e.key.replace("Arrow", "")
    snake.changeDirection(direction);
})
