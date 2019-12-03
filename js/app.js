// random color for each square
var colors = generateRandomColors(6)

var squares = document.querySelectorAll('.square');
var pickedColor = document.getElementById('pickedColor');
pickedColor.textContent = pickColor();
var msgDisplay = document.querySelector('.msgDisplay')
var h1 = document.querySelector('h1');
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var numSquares = 6;
// change squares colors based on random picked color
function changeColor(){
    for(var i=0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor.textContent){
                msgDisplay.textContent = "Correct!";
                changeAllColors(clickedColor);
                h1.style.background = clickedColor;
                //change the button text 
                reset.textContent = 'Play Again?';
            }else{
                this.style.backgroundColor =  "#232323";
                msgDisplay.textContent = "Wrong, try again!"
            }
        });
    }
}
changeColor();

//change the squares color to the guessed and picked color
function changeAllColors(color){
    for(let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

//pick a random color 
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

// generante random colors of rgb 
function generateRandomColors(num){
    //make an array
    var arr= [];
    //add num random colors to array
    for(let i = 0; i< num;i++){
        //get a random color to push to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

// make a random color
function randomColor(){
    // pick a random number between 0-255
    var r = Math.floor(Math.random() *  256);
    var g = Math.floor(Math.random() *  256);
    var b = Math.floor(Math.random() *  256);

    return "rgb("+ r + ", " + g + ", " + b +")"; 
}


//reset game
reset.addEventListener('click',function(){
    //generate new random colors
    colors = generateRandomColors(numSquares);
    //reset h1 background color
    h1.style.background = "#232323";
    ///pick a random color
    pickedColor.textContent = pickColor();
    //change colors of squares
    changeColor();
    //reset button text
    this.textContent = 'New Colors';
    msgDisplay.textContent = '';

})

//easy button clicked
easyBtn.addEventListener('click',function(){
    this.classList.add('selected');
    hardBtn.classList.remove('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor.textContent  = pickColor();
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }

})

//easy button clicked
hardBtn.addEventListener('click',function(){
    this.classList.add('selected');
    easyBtn.classList.remove('selected');
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor.textContent  = pickColor();
    for(let i=0;i<squares.length;i++){

    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
    }

})