// random color for each square
var colors = generateRandomColors(6)

var squares = document.querySelectorAll('.square');
var pickedColor = document.getElementById('pickedColor');
pickedColor.textContent = pickColor();
var msgDisplay = document.querySelector('.msgDisplay')
function changeColor(){
    for(var i=0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener('click',function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor.textContent){
                msgDisplay.textContent = "Correct!";
                changeAllColors(clickedColor);

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