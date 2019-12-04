var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll('.square');
var pickedColor = document.getElementById('pickedColor');
var msgDisplay = document.querySelector('.msgDisplay')
var h1 = document.querySelector('h1');
var resetBtn = document.querySelector("#reset");
var btnMode = document.querySelectorAll('.mode');


init();
function init(){
    //change h1 to random picked color
    pickedColor.textContent = pickColor();
    // fill random color for each square
    colors = generateRandomColors(numSquares);
    setupButtonsMode();
    changeColor();
    reset();
}
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
                resetBtn.textContent = 'Play Again?';
            }else{
                this.style.backgroundColor =  "#232323";
                msgDisplay.textContent = "Wrong, try again!"
            }
        });
    }
}


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

//setup event listener for the two modes
function setupButtonsMode(){
    for(let i=0; i < btnMode.length; i++){
        btnMode[i].addEventListener('click', function(){
            btnMode[0].classList.remove('selected');
            btnMode[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3: numSquares=6;
            reset();
        });
    }  
}

//reset game
function reset(){
        //generate new random colors
    colors = generateRandomColors(numSquares);
    //reset h1 background color
    h1.style.background = "steelblue";
    ///pick a random color
    pickedColor.textContent = pickColor();
    //change colors of squares
    changeColor();
    //reset button text
    resetBtn.textContent = 'New Colors';
    msgDisplay.textContent = '';

    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
    }
}
//reset game event listener
resetBtn.addEventListener('click',function(){
    reset();
})
