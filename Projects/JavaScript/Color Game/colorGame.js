var numSquares = 6;
//var colors = generateRandomColors(numSquares);
var colors = [];
//var pickedColor = colors[3];
//var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();	
	setupSquares();
	reset();
}


function setupModeButtons()
{
	for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy"? numSquares = 3 : numSquares = 6;
			/*if(this.textContent==="Easy")
			{
				numSquares = 3;
			}
			else
			{
				numSquares = 6;
			}*/
			reset();

			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
		})
	}
}

function setupSquares()
{
	for(var i=0;i<squares.length;i++)
	{
		//Add initial colors to squares
		//squares[i].style.backgroundColor = colors[i];

		//Add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grad color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor		
			if(clickedColor===pickedColor)
			{			
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again";
			}
			else
			{		
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){	
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the colors of the sqaures
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";				
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{			
			squares[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
}


/*easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	numSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{		
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
})*/

resetButton.addEventListener("click",function(){
	reset();
	/*
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change the colors of the sqaures
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";

	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for(var i=0;i<squares.length;i++)
{
	//Add initial colors to squares
	//squares[i].style.backgroundColor = colors[i];

	//Add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grad color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		console.log(clickedColor,pickedColor);
		if(clickedColor===pickedColor)
		{			
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again";
		}
		else
		{		
			this.style.backgroundColor = "steelblue";
			messageDisplay.textContent = "Try Again";
		}
	})*/
	
}
)


function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for(var i=0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr = []
	//repeat num times
	for(var i=0;i<num;i++){	
		//get random color and push into arr
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r +", "+ g + ", "+b+")";
}