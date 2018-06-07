
var chesslocationplayer = [["chess0"], ["chess1"], ["chess2"], ["chess3"], ["chess4"], ["chess5"], ["chess6"], ["chess7"], ["chess8"], ["chess9"], 
					["chess10"], ["chess11"], ["chess12"], ["chess13"], ["chess14"], ["chess15"], ["chess16"], ["chess17"], ["chess18"], ["chess19"],
					["chess20"], ["chess21"], ["chess22"], ["chess23"], ["chess24"]];

var chesslocationcomputer = [["computer0"], ["computer1"], ["computer2"], ["computer3"], ["computer4"], ["computer5"], ["computer6"], ["computer7"], ["computer8"], ["computer9"], ["computer10"], 
					["computer11"], ["computer12"], ["computer13"], ["computer14"], ["computer15"], ["computer16"], ["computer17"], ["computer18"], ["computer19"], ["computer20"],
					["computer21"], ["computer22"], ["computer23"], ["computer24"]];

var chessboard = [[[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]], [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]], [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]], [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]], [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]];

var availableMoveX = [];
var availableMoveY = [];

var availableComputerMoveX = [];
var availableComputerMoveY = [];

var previousX;
var previousY;

var chessNumber;
var chessLocationX;
var chessLocationY;

var chessComputerNumber;
var chesscomputerLocationX;
var chessComputerLocationY;

var minutesLabel;
var secondsLabel;
var totalSeconds = 59;


var step = 0;

var uniqueRandoms = [];
var numRandoms = 25;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;
}

function init(){
	placeChess();
}

function placeChess(){
	document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    	
    	if(step == 0 && event.target.id == "chess24"){
	    	event.dataTransfer.setData("Text1", event.target.id);
	    	// Change the opacity of the draggable element
	    	event.target.style.opacity = "0.5";
	    }
	    else if(step == 0 && (event.target.id == "chess22" || event.target.id == "chess23")){
	    	event.dataTransfer.setData("Text2", event.target.id);
	    	// Change the opacity of the draggable element
	    	event.target.style.opacity = "0.5";
	    }
	    else if(step == 0 && (event.target.id == "chess19" || event.target.id == "chess20" || event.target.id == "chess21")){
	    	event.dataTransfer.setData("Text3", event.target.id);
	    	// Change the opacity of the draggable element
	    	event.target.style.opacity = "0.5";
	    }else if(step == 0 && (event.target.id == "chess0" || event.target.id == "chess1" || event.target.id == "chess2" || event.target.id == "chess3" || event.target.id == "chess4" || 
	    	event.target.id == "chess5" || event.target.id == "chess6" || event.target.id == "chess7" || event.target.id == "chess8" || event.target.id == "chess9" || 
	    	event.target.id == "chess10" || event.target.id == "chess11" || event.target.id == "chess12" || event.target.id == "chess13" || event.target.id == "chess14" || 
	    	event.target.id == "chess15" || event.target.id == "chess16" || event.target.id == "chess17" || event.target.id == "chess18")){
	    		event.dataTransfer.setData("Text4", event.target.id);
	    		// Change the opacity of the draggable element
	    		event.target.style.opacity = "0.5";
	    }
	});

	document.addEventListener("dragend", function(event) {
	    event.target.style.opacity = "1";
	});

	document.addEventListener("dragover", function(event) {
	    event.preventDefault();
	});

	document.addEventListener("dragleave", function(event) {
	    if ( event.target.className == "droptarget" ) {
	        event.target.style.border = "";
	    }
	});

	document.addEventListener("drop", function(event) {
	    event.preventDefault();
	    if ( event.target.className == "droptarget" ) {
	    	var data1 = event.dataTransfer.getData("Text1");
	    	var data2 = event.dataTransfer.getData("Text2");
	    	var data3 = event.dataTransfer.getData("Text3");
	    	var data4 = event.dataTransfer.getData("Text4");

	    	if(data1 == "chess24" && (event.target.id == "div112" || event.target.id == "div312")){
	        	for(i = 0; i < chesslocationplayer.length; i++){
						if(data1 == chesslocationplayer[i][0]){
							for( x = 0; x < 5; x++){
								for( y = 0; y < 13; y++){
									if(event.target.id == "div" + x + y){
										chesslocationplayer[i][1] = x;
										chesslocationplayer[i][2] = y;

										for(j = 0; j < 25; j++){
											if( "chess" + j == data1){
												chessboard[x][y][0] = "p";
												chessboard[x][y][1] = j;
											}
										}
									}
								}
							}
						}
					}
					event.target.appendChild(document.getElementById(data1));
	        }
	    	
	    	
	    	if((data2 == "chess22" || data2 == "chess23") &&
	    		(event.target.id == "div08" || event.target.id == "div09" || event.target.id == "div010" || event.target.id == "div011" || event.target.id == "div012" || 
	    		event.target.id == "div19" || event.target.id == "div111" || event.target.id == "div112" ||
	    		event.target.id == "div28" || event.target.id == "div210" || event.target.id == "div211" || event.target.id == "div212" || 
	    		event.target.id == "div39" || event.target.id == "div311" || event.target.id == "div312" || 
	    		event.target.id == "div48" || event.target.id == "div49" || event.target.id == "div410" || event.target.id == "div411" || event.target.id == "div412")
	    		){
					for(i = 0; i < chesslocationplayer.length; i++){
						if(data2 == chesslocationplayer[i][0]){
							for( x = 0; x < 5; x++){
								for( y = 0; y < 13; y++){
									if(event.target.id == "div" + x + y){
										chesslocationplayer[i][1] = x;
										chesslocationplayer[i][2] = y;

										for(j = 0; j < 25; j++){
											if( "chess" + j == data2){
												chessboard[x][y][0] = "p";
												chessboard[x][y][1] = j;
											}
										}
									}
								}
							}
						}
					}
					event.target.appendChild(document.getElementById(data2));
			}
			

			if((data3 == "chess19" || data3 == "chess20" || data3 == "chess21") &&
	    		(event.target.id == "div011" || event.target.id == "div012" || 
	    		event.target.id == "div111" || event.target.id == "div112" ||
	    		event.target.id == "div211" || event.target.id == "div212" || 
	    		event.target.id == "div311" || event.target.id == "div312" || 
	    		event.target.id == "div411" || event.target.id == "div412")
	    		){
					for(i = 0; i < chesslocationplayer.length; i++){
						if(data3 == chesslocationplayer[i][0]){
							for( x = 0; x < 5; x++){
								for( y = 0; y < 13; y++){
									if(event.target.id == "div" + x + y){
										chesslocationplayer[i][1] = x;
										chesslocationplayer[i][2] = y;

										for(j = 0; j < 25; j++){
											if( "chess" + j == data3){
												chessboard[x][y][0] = "p";
												chessboard[x][y][1] = j;
											}
										}
									}
								}
							}
						}
					}
					event.target.appendChild(document.getElementById(data3));
			}

			if((data4 == "chess0"|| data4 == "chess1"|| data4 == "chess2" || data4 == "chess3" || data4 == "chess4" || data4 == "chess5" || 
				data4 == "chess6"|| data4 == "chess7" || data4 == "chess8" || data4 == "chess9" || data4 == "chess10" || 
				data4 == "chess11"|| data4 == "chess12" || data4 == "chess13" || data4 == "chess14" || data4 == "chess15" || 
				data4 == "chess16"|| data4 == "chess17" || data4 == "chess18") &&
				(event.target.id == "div07" || event.target.id == "div08" || event.target.id == "div09" || event.target.id == "div010" || event.target.id == "div011" || event.target.id == "div012" || 
				event.target.id == "div17" || event.target.id == "div19" || event.target.id == "div111" || event.target.id == "div112" ||
				event.target.id == "div27" || event.target.id == "div28" || event.target.id == "div210" || event.target.id == "div211" || event.target.id == "div212" ||
				event.target.id == "div37" || event.target.id == "div39" || event.target.id == "div311" || event.target.id == "div312" || 
				event.target.id == "div47" || event.target.id == "div48" || event.target.id == "div49" || event.target.id == "div410" || event.target.id == "div411" || event.target.id == "div412")
				){	
					for(i = 0; i < chesslocationplayer.length; i++){
						if(data4 == chesslocationplayer[i][0]){
							for( x = 0; x < 5; x++){
								for( y = 0; y < 13; y++){
									if(event.target.id == "div" + x + y){
										chesslocationplayer[i][1] = x;
										chesslocationplayer[i][2] = y;
										
										for(j = 0; j < 25; j++){
											if( "chess" + j == data4){
												chessboard[x][y][0] = "p";
												chessboard[x][y][1] = j;
											}
										}
									}
								}
							}
						}
					}
					event.target.appendChild(document.getElementById(data4));
			}

			//alert(chessboard);
			//alert(chesslocationplayer);
	    }
	});
}

function checkAllChessPlace(){
	
	
	var check = true;
	for(i = 0; i < chesslocationplayer.length; i++){
		if(chesslocationplayer[i].length < 2){
			check = false;
		}
	}
	
	if(check == true){
		computerPlaceChess();
		document.getElementById("Start").disabled = 'true';
		timer = setInterval(setTime, 1000);
		step++;
	}else{
		alert("Please place all the chess.");
	}
	
	//alert(chesslocationcomputer);
}

function computerPlaceChess(){

	do{
		for(i = 0; i < 5; i++){
			for( j = 0; j < 6; j++){
				if( (i != 1 || j != 2) && ( i != 3 || j != 2) && ( i != 2 || j != 3) && ( i != 1 || j != 4) && ( i != 3 || j != 4)){
					var random = makeUniqueRandom();
					document.getElementById('div' + i + j).appendChild(document.getElementById('computer' + random));
					
					chesslocationcomputer[random][1] = i;
					chesslocationcomputer[random][2] = j;

					chessboard[i][j][0] = "c";
					chessboard[i][j][1] = random;
				}
			}
		}
	}while( checkComputerFlag() || checkComputerLandmine19() || checkComputerLandmine20() || checkComputerLandmine21() || checkComputerBomb22() || checkComputerBomb23() );
	
	//alert(chessboard);

	//set the landmine and flag cannot move after starting the game
	document.getElementById("chess24").setAttribute('draggable', false);
	document.getElementById("chess19").setAttribute('draggable', false);
	document.getElementById("chess20").setAttribute('draggable', false);
	document.getElementById("chess21").setAttribute('draggable', false);

	document.getElementById("computer24").setAttribute('draggable', false);
	document.getElementById("computer19").setAttribute('draggable', false);
	document.getElementById("computer20").setAttribute('draggable', false);
	document.getElementById("computer21").setAttribute('draggable', false);

	//removeHandler();

	startGame();

}


function checkComputerFlag(){
	var check = true;
	if(chesslocationcomputer[24][1] == 1 && chesslocationcomputer[24][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[24][1] == 3 && chesslocationcomputer[24][2] == 0){
		check = false;
	}
	return check;
}

function checkComputerLandmine19(){
	var check = true;
		if(chesslocationcomputer[19][1] == 0 && chesslocationcomputer[19][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 1 && chesslocationcomputer[19][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 2 && chesslocationcomputer[19][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 3 && chesslocationcomputer[19][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 4 && chesslocationcomputer[19][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 0 && chesslocationcomputer[19][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 1 && chesslocationcomputer[19][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 2 && chesslocationcomputer[19][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 3 && chesslocationcomputer[19][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[19][1] == 4 && chesslocationcomputer[19][2] == 1){
			check = false;
		}
	
	return check;
}

function checkComputerLandmine20(){
	var check = true;
		if(chesslocationcomputer[20][1] == 0 && chesslocationcomputer[20][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 1 && chesslocationcomputer[20][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 2 && chesslocationcomputer[20][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 3 && chesslocationcomputer[20][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 4 && chesslocationcomputer[20][2] == 0){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 0 && chesslocationcomputer[20][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 1 && chesslocationcomputer[20][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 2 && chesslocationcomputer[20][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 3 && chesslocationcomputer[20][2] == 1){
			check = false;
		}
		if(chesslocationcomputer[20][1] == 4 && chesslocationcomputer[20][2] == 1){
			check = false;
		}
	
	return check;
}

function checkComputerLandmine21(){
	var check = true;
	if(chesslocationcomputer[21][1] == 0 && chesslocationcomputer[21][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 1 && chesslocationcomputer[21][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 2 && chesslocationcomputer[21][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 3 && chesslocationcomputer[21][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 4 && chesslocationcomputer[21][2] == 0){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 0 && chesslocationcomputer[21][2] == 1){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 1 && chesslocationcomputer[21][2] == 1){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 2 && chesslocationcomputer[21][2] == 1){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 3 && chesslocationcomputer[21][2] == 1){
		check = false;
	}
	if(chesslocationcomputer[21][1] == 4 && chesslocationcomputer[21][2] == 1){
		check = false;
	}
	
	return check;
}

function checkComputerBomb22(){
	var check = true;
	if(chesslocationcomputer[22][1] != 0 && chesslocationcomputer[22][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[22][1] != 1 && chesslocationcomputer[22][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[22][1] != 2 && chesslocationcomputer[22][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[22][1] != 3 && chesslocationcomputer[22][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[22][1] != 4 && chesslocationcomputer[22][2] != 5){
		check = false;
	}

	return check;
}

function checkComputerBomb23(){
	var check = true;
	if(chesslocationcomputer[23][1] != 0 && chesslocationcomputer[23][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[23][1] != 1 && chesslocationcomputer[23][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[23][1] != 2 && chesslocationcomputer[23][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[23][1] != 3 && chesslocationcomputer[23][2] != 5){
		check = false;
	}
	if(chesslocationcomputer[23][1] != 4 && chesslocationcomputer[23][2] != 5){
		check = false;
	}
	
	return check;
}

function startGame(){
	playerMove();
}

function playerMove(){

	document.addEventListener("dragstart", function(event) {
	// The dataTransfer.setData() method sets the data type and the value of the dragged data
		//alert(event.target.id);

		if(step == 1 && event.target.id.indexOf("hess") > 0){
			event.dataTransfer.setData("Text5", event.target.id);
	    	// Change the opacity of the draggable element
	    	event.target.style.opacity = "0.5";
	    	checkAvailableMove(event.target.id);
	    	//alert(availableMoveX + "|" + availableMoveY);
	    	//alert(availableMoveY;
	    }
	});

	document.addEventListener("dragend", function(event) {
	    event.target.style.opacity = "1";
	});

	document.addEventListener("dragover", function(event) {
	    event.preventDefault();
	});

	document.addEventListener("dragleave", function(event) {
	    if ( event.target.className == "droptarget" ) {
	        event.target.style.border = "";
	    }
	});

	document.addEventListener("drop", function(event) {
	    event.preventDefault();
	    if ( event.target.className == "droptarget") {
	    	var data5 = event.dataTransfer.getData("Text5");
	    }

	   	//alert(availableMoveX + "|" + availableMoveY);

	   	for(k = 0; k < availableMoveX.length; k++){

	   		/*
	   		if(chessboard[availableMoveX[k]][availableMoveY[k]][0] == "c"){
					var div = document.getElementById('computer' + chessboard[availableMoveX[k]][availableMoveY[k]][1]);
					if (div) {
				    	div.parentNode.removeChild(div);
					}
					//alert("abc");
				}
			*/
			//alert(event.target.id + ", " + chessboard[availableMoveX[k]][availableMoveY[k]][1]);

			//there is not computer chess on the location
	   		if(event.target.id == "div" + availableMoveX[k] + availableMoveY[k]){

	   			//alert(event.target.id);
	   			//alert(chessboard[availableMoveX[k]][availableMoveY[k]][0]);

	   			//delete the div
	   			/*
	   			var div = document.getElementById('computer0');
				if (div) {
				    div.parentNode.removeChild(div);
				}
				*/
	   	
		    	for(i = 0; i < chesslocationplayer.length; i++){
					if(data5 == chesslocationplayer[i][0]){
						for( x = 0; x < 5; x++){
							for( y = 0; y < 13; y++){
								if(event.target.id == "div" + x + y){

									previousX = chesslocationplayer[i][1];
									previousY = chesslocationplayer[i][2];

									//alert(previousX + ", " + previousY);
								

									chesslocationplayer[i][1] = x;
									chesslocationplayer[i][2] = y;

									chessboard[previousX][previousY] = [0];

									/*
									for(j = 0; j < 25; j++){
										if( data5 == "chess" + j){
											chessboard[x][y][0] = "p";
											chessboard[x][y][1] = j;
										}
									}
									*/
									chessboard[x][y][0] = "p";
									chessboard[x][y][1] = chessNumber;

									//alert(x + ", " + y);
								}
							}
						}
					}
				}

			    event.target.appendChild(document.getElementById(data5));
			    
			    computerMove();
			}else if(event.target.id == "computer" + chessboard[availableMoveX[k]][availableMoveY[k]][1]){
				//there is a computer chess on the location
				
				if(checkChess(chessboard[availableMoveX[k]][availableMoveY[k]][1]) == 2){
					//player chess win the computer chess

					//place the computer chess on the menu after eating
					document.getElementById('computer').appendChild(document.getElementById('computer' + chessboard[availableMoveX[k]][availableMoveY[k]][1]));

					document.getElementById('div' + availableMoveX[k] + availableMoveY[k]).appendChild(document.getElementById('chess' + chessNumber));

					previousX = chesslocationplayer[chessNumber][1];
					previousY = chesslocationplayer[chessNumber][2];

					chesslocationplayer[chessNumber][1] = availableMoveX[k];
					chesslocationplayer[chessNumber][2] = availableMoveY[k];
					
					chesslocationcomputer[chessboard[availableMoveX[k]][availableMoveY[k]][1]] = 0;

					chessboard[previousX][previousY] = [0];

					chessboard[availableMoveX[k]][availableMoveY[k]][0] = "p";
					chessboard[availableMoveX[k]][availableMoveY[k]][1] = chessNumber;
				}else if (checkChess(chessboard[availableMoveX[k]][availableMoveY[k]][1]) == 1){
					//player chess draw the computer chess

					//place the computer chess on the menu after eating
					document.getElementById('computer').appendChild(document.getElementById('computer' + chessboard[availableMoveX[k]][availableMoveY[k]][1]));

					//place the player chess on the menu after eating
					document.getElementById('chess').appendChild(document.getElementById('chess' + chessNumber));

					previousX = chesslocationplayer[chessNumber][1];
					previousY = chesslocationplayer[chessNumber][2];

					chesslocationplayer[chessNumber] = 0;
					chesslocationcomputer[chessboard[availableMoveX[k]][availableMoveY[k]][1]] = 0;
					
					chessboard[previousX][previousY] = [0];
					chessboard[availableMoveX[k]][availableMoveY[k]] = 0;
				}else if (checkChess(chessboard[availableMoveX[k]][availableMoveY[k]][1]) == 0){
					//player chess loss the computer chess

					//place the player chess on the menu after eating
					document.getElementById('chess').appendChild(document.getElementById('chess' + chessNumber));

					previousX = chesslocationplayer[chessNumber][1];
					previousY = chesslocationplayer[chessNumber][2];

					chesslocationplayer[chessNumber] = 0;
					chessboard[previousX][previousY] = [0];
				}else if (checkChess(chessboard[availableMoveX[k]][availableMoveY[k]][1]) == 3){
					alert("You win the game!!!");
					window.location.href = "index.html";
				}
				
				computerMove();
			}
		}
	    availableMoveX = [];
		availableMoveY = [];
		//alert(chessboard);
		totalSeconds = 60;
	});


}

function checkAvailableMove(chess){
	for(x = 0; x < chesslocationplayer.length; x++){
		if(chesslocationplayer[x][0] == chess){
			chessNumber = x;
			chessLocationX = chesslocationplayer[x][1];
			chessLocationY = chesslocationplayer[x][2];
		}
	}

	
	//alert(chessNumber + ", " + chessLocationX + ", " + chessLocationY);

	//check the chess in the circle
	if( (chessLocationX == 1 && chessLocationY == 2) || (chessLocationX == 3 && chessLocationY == 2) || 
		(chessLocationX == 2 && chessLocationY == 3) || (chessLocationX == 1 && chessLocationY == 4) || 
		(chessLocationX == 3 && chessLocationY == 4) ||(chessLocationX == 1 && chessLocationY == 8) || 
		(chessLocationX == 3 && chessLocationY == 8) || (chessLocationX == 2 && chessLocationY == 9) || 
		(chessLocationX == 1 && chessLocationY == 10) || (chessLocationX == 3 && chessLocationY == 10)
		){
			//check up location
			if(chessboard[chessLocationX][chessLocationY-1] == 0 || chessboard[chessLocationX][chessLocationY-1][0] == "c"){
				availableMoveX.push(chessLocationX);
				availableMoveY.push(chessLocationY-1);
			}

			//check down location
			if(chessboard[chessLocationX][chessLocationY+1] == 0 || chessboard[chessLocationX][chessLocationY+1][0] == "c"){
				availableMoveX.push(chessLocationX);
				availableMoveY.push(chessLocationY+1);
			}

			//check left location
			if(chessboard[chessLocationX-1][chessLocationY] == 0 || chessboard[chessLocationX-1][chessLocationY][0] == "c"){
				availableMoveX.push(chessLocationX-1);
				availableMoveY.push(chessLocationY);
			}

			//check right location
			if(chessboard[chessLocationX+1][chessLocationY] == 0 || chessboard[chessLocationX+1][chessLocationY][0] == "c"){
				availableMoveX.push(chessLocationX+1);
				availableMoveY.push(chessLocationY);
			}

			//check right up location
			if(chessboard[chessLocationX+1][chessLocationY-1] == 0 || chessboard[chessLocationX+1][chessLocationY-1][0] == "c"){
				availableMoveX.push(chessLocationX+1);
				availableMoveY.push(chessLocationY-1);
			}

			//check left up location
			if(chessboard[chessLocationX-1][chessLocationY-1] == 0 || chessboard[chessLocationX-1][chessLocationY-1][0] == "c"){
				availableMoveX.push(chessLocationX-1);
				availableMoveY.push(chessLocationY-1);
			}

			//check right down location
			if(chessboard[chessLocationX+1][chessLocationY+1] == 0 || chessboard[chessLocationX+1][chessLocationY+1][0] == "c"){
				availableMoveX.push(chessLocationX+1);
				availableMoveY.push(chessLocationY+1);
			}

			//check left down location
			if(chessboard[chessLocationX-1][chessLocationY+1] == 0 || chessboard[chessLocationX-1][chessLocationY+1][0] == "c"){
				availableMoveX.push(chessLocationX-1);
				availableMoveY.push(chessLocationY+1);
			}
	}

	//check left
	if(chessLocationX-1 >= 0){
		if(chessboard[chessLocationX-1][chessLocationY] == 0 || chessboard[chessLocationX-1][chessLocationY][0] == "c"){
			availableMoveX.push(chessLocationX-1);
			availableMoveY.push(chessLocationY);
		}
	}

	//check right
	if(chessLocationX+1 < 5){
		if(chessboard[chessLocationX+1][chessLocationY] == 0 || chessboard[chessLocationX+1][chessLocationY][0] == "c"){
			availableMoveX.push(chessLocationX+1);
			availableMoveY.push(chessLocationY);
		}
	}

	//check up
	if(chessLocationY-1 >= 0){
		if(chessboard[chessLocationX][chessLocationY-1] == 0 || chessboard[chessLocationX][chessLocationY-1][0] == "c"){
			availableMoveX.push(chessLocationX);
			availableMoveY.push(chessLocationY-1);
		}
	}

	//check down
	if(chessLocationY+1 < 13){
		if(chessboard[chessLocationX][chessLocationY+1] == 0 || chessboard[chessLocationX][chessLocationY+1][0] == "c"){
			availableMoveX.push(chessLocationX);
			availableMoveY.push(chessLocationY+1);
		}
	}

	//check right down
	if(	(chessLocationX == 0 && chessLocationY == 1) || (chessLocationX == 2 && chessLocationY == 1) ||
		(chessLocationX == 0 && chessLocationY == 3) || (chessLocationX == 0 && chessLocationY == 7) ||
		(chessLocationX == 2 && chessLocationY == 7) || (chessLocationX == 0 && chessLocationY == 9)  
		){
			if(chessboard[chessLocationX+1][chessLocationY+1] == 0 || chessboard[chessLocationX+1][chessLocationY+1][0] == "c"){
				availableMoveX.push(chessLocationX+1);
				availableMoveY.push(chessLocationY+1);
			}
	}

	//check left down
	if(	(chessLocationX == 2 && chessLocationY == 1) || (chessLocationX == 4 && chessLocationY == 1) ||
		(chessLocationX == 4 && chessLocationY == 3) || (chessLocationX == 2 && chessLocationY == 7) ||
		(chessLocationX == 4 && chessLocationY == 7) || (chessLocationX == 4 && chessLocationY == 9)  
		){
			if(chessboard[chessLocationX-1][chessLocationY+1] == 0 || chessboard[chessLocationX-1][chessLocationY+1][0] == "c"){
				availableMoveX.push(chessLocationX-1);
				availableMoveY.push(chessLocationY+1);
			}
	}

	//check right up
	if(	(chessLocationX == 0 && chessLocationY == 3) || (chessLocationX == 0 && chessLocationY == 5) ||
		(chessLocationX == 2 && chessLocationY == 5) || (chessLocationX == 0 && chessLocationY == 9) ||
		(chessLocationX == 0 && chessLocationY == 11) || (chessLocationX == 2 && chessLocationY == 11)  
		){
			if(chessboard[chessLocationX+1][chessLocationY-1] == 0 || chessboard[chessLocationX+1][chessLocationY-1][0] == "c"){
				availableMoveX.push(chessLocationX+1);
				availableMoveY.push(chessLocationY-1);
			}
	}

	//check left up
	if(	(chessLocationX == 4 && chessLocationY == 3) || (chessLocationX == 2 && chessLocationY == 5) ||
		(chessLocationX == 4 && chessLocationY == 5) || (chessLocationX == 4 && chessLocationY == 9) ||
		(chessLocationX == 2 && chessLocationY == 11) || (chessLocationX == 4 && chessLocationY == 11)  
		){
			if(chessboard[chessLocationX-1][chessLocationY-1] == 0 || chessboard[chessLocationX-1][chessLocationY-1][0] == "c"){
				availableMoveX.push(chessLocationX-1);
				availableMoveY.push(chessLocationY-1);
			}
	}
}

function checkChess(computerChess){
	var result = 0;
	var player = checkRank(chessNumber);
	var computer = checkRank(computerChess);
	
	if(computer == 11){
		//the computer chess is flag
		result = 3;
	}

	if(computer == 10){
		//the computer chess is bomb
		result = 1;
	}

	if (computer == 9){
		//the computer chess is landmine
		if(player == 8){
			result = 2;
		}else{
			result = 1;
		}
	}

	if (computer == 0 || computer == 1 || computer == 2 || computer == 3 || computer == 4 || computer == 5 || computer == 6 || computer == 7 || computer == 8){
		
		//the computer is other
		if(player == 10){
			result = 1;
		}else{
			if(player < computer){
				result = 2;
			}else if (player == computer){
				result = 1;
			}else if (player > computer){
				result = 0;
			}
		}
	}

	return result;
}

function checkRank(chess){
	var rank;
	
	if(chess == 0){
		rank = 0;
	}else if (chess == 1){
		rank = 1;
	}else if (chess == 2 || chess == 3){
		rank = 2;
	}else if (chess == 4 || chess == 5){
		rank = 3;
	}else if (chess == 6 || chess == 7){
		rank = 4;
	}else if (chess == 8 || chess == 9){
		rank = 5;
	}else if (chess == 10 || chess == 11 || chess == 12){
		rank = 6;
	}else if (chess == 13 || chess == 14 || chess == 15){
		rank = 7;
	}else if (chess == 16 || chess == 17 || chess == 18){
		rank = 8;
	}else if (chess == 19 || chess == 20 || chess == 21){
		rank = 9;
	}else if (chess == 22 || chess == 23){
		rank = 10;
	}else if (chess == 24){
		rank = 11;
	}

	return rank;
}

function computerMove(){
	var moveChess;
	
	//alert(availableComputerMoveX + "|" + availableComputerMoveY);
	
	while(availableComputerMoveX.length == 0){
		availableComputerMoveX = [];
		availableComputerMoveY = [];
	    moveChess = computerChooseChessMove();
	    //alert(availableComputerMoveX.length);
		//alert(moveChess + ", " + availableComputerMoveX[0] + ", " + availableComputerMoveY[0]);
	}

	//alert(chessboard[0] + " | " + chessboard[1] + " | " + chessboard[2] + " | " + chessboard[3] + " | " + chessboard[4]);
	//place the player chess on the menu after eating
	//document.getElementById('div' + i + j).appendChild(document.getElementById('computer' + random));

	//alert(chesslocationcomputer[moveChess][1] + ", " + chesslocationcomputer[moveChess][2]);

	previousX = chesslocationcomputer[moveChess][1];
	previousY = chesslocationcomputer[moveChess][2];

	chesslocationcomputer[moveChess][1] = availableComputerMoveX[0];
	chesslocationcomputer[moveChess][2] = availableComputerMoveY[0];

	chessboard[previousX][previousY] = [0];

	chessboard[availableComputerMoveX[0]][availableComputerMoveY[0]][0] = 'c';
	chessboard[availableComputerMoveX[0]][availableComputerMoveY[0]][1] = moveChess;

	document.getElementById('div' + availableComputerMoveX[0] + availableComputerMoveY[0]).appendChild(document.getElementById('computer' + moveChess));

	availableComputerMoveX = [];
	availableComputerMoveY = [];
	previousX = null;
	previousY = null;

	
}

function computerChooseChessMove(){
	var randomChess;
	do{
		randomChess = makeUniqueRandom();
	}while(randomChess == 19 || randomChess == 20 || randomChess == 21 || randomChess == 24);
	checkComputerAvailableMove(randomChess);
	
	return randomChess;
}

function checkComputerAvailableMove(chess){

	for(x = 0; x < chesslocationcomputer.length; x++){
		if(chesslocationcomputer[x][0] == "computer" + chess){
			chessComputerNumber = x;
			chessComputerLocationX = chesslocationcomputer[x][1];
			chessComputerLocationY = chesslocationcomputer[x][2];
		}
	}

	//alert(chessNumber + ", " + chessComputerLocationX + ", " + chessComputerLocationY);

	//check the chess in the circle
	if( (chessComputerLocationX == 1 && chessComputerLocationY == 2) || (chessComputerLocationX == 3 && chessComputerLocationY == 2) || 
		(chessComputerLocationX == 2 && chessComputerLocationY == 3) || (chessComputerLocationX == 1 && chessComputerLocationY == 4) || 
		(chessComputerLocationX == 3 && chessComputerLocationY == 4) ||(chessComputerLocationX == 1 && chessComputerLocationY == 8) || 
		(chessComputerLocationX == 3 && chessComputerLocationY == 8) || (chessComputerLocationX == 2 && chessComputerLocationY == 9) || 
		(chessComputerLocationX == 1 && chessComputerLocationY == 10) || (chessComputerLocationX == 3 && chessComputerLocationY == 10)
		){
			//check up location
			if(chessboard[chessComputerLocationX][chessComputerLocationY-1] == 0){
				availableComputerMoveX.push(chessComputerLocationX);
				availableComputerMoveY.push(chessComputerLocationY-1);
			}

			//check down location
			if(chessboard[chessComputerLocationX][chessComputerLocationY+1] == 0){
				availableComputerMoveX.push(chessComputerLocationX);
				availableComputerMoveY.push(chessComputerLocationY+1);
			}

			//check left location
			if(chessboard[chessComputerLocationX-1][chessComputerLocationY] == 0){
				availableComputerMoveX.push(chessComputerLocationX-1);
				availableComputerMoveY.push(chessComputerLocationY);
			}

			//check right location
			if(chessboard[chessComputerLocationX+1][chessComputerLocationY] == 0){
				availableComputerMoveX.push(chessComputerLocationX+1);
				availableComputerMoveY.push(chessComputerLocationY);
			}

			//check right up location
			if(chessboard[chessComputerLocationX+1][chessComputerLocationY-1] == 0){
				availableComputerMoveX.push(chessComputerLocationX+1);
				availableComputerMoveY.push(chessComputerLocationY-1);
			}

			//check left up location
			if(chessboard[chessComputerLocationX-1][chessComputerLocationY-1] == 0){
				availableComputerMoveX.push(chessComputerLocationX-1);
				availableComputerMoveY.push(chessComputerLocationY-1);
			}

			//check right down location
			if(chessboard[chessComputerLocationX+1][chessComputerLocationY+1] == 0){
				availableComputerMoveX.push(chessComputerLocationX+1);
				availableComputerMoveY.push(chessComputerLocationY+1);
			}

			//check left down location
			if(chessboard[chessComputerLocationX-1][chessComputerLocationY+1] == 0){
				availableComputerMoveX.push(chessComputerLocationX-1);
				availableComputerMoveY.push(chessComputerLocationY+1);
			}
	}

	//check left
	if(chessComputerLocationX-1 >= 0){
		if(chessboard[chessComputerLocationX-1][chessComputerLocationY] == 0){
			availableComputerMoveX.push(chessComputerLocationX-1);
			availableComputerMoveY.push(chessComputerLocationY);
		}
	}

	//check right
	if(chessComputerLocationX+1 < 5){
		if(chessboard[chessComputerLocationX+1][chessComputerLocationY] == 0){
			availableComputerMoveX.push(chessComputerLocationX+1);
			availableComputerMoveY.push(chessComputerLocationY);
		}
	}

	//check up
	if(chessComputerLocationY-1 >= 0){
		if(chessboard[chessComputerLocationX][chessComputerLocationY-1] == 0){
			availableComputerMoveX.push(chessComputerLocationX);
			availableComputerMoveY.push(chessComputerLocationY-1);
		}
	}

	//check down
	if(chessComputerLocationY+1 < 13){
		if(chessboard[chessComputerLocationX][chessComputerLocationY+1] == 0){
			availableComputerMoveX.push(chessComputerLocationX);
			availableComputerMoveY.push(chessComputerLocationY+1);
		}
	}

	//check right down
	if(	(chessComputerLocationX == 0 && chessComputerLocationY == 1) || (chessComputerLocationX == 2 && chessComputerLocationY == 1) ||
		(chessComputerLocationX == 0 && chessComputerLocationY == 3) || (chessComputerLocationX == 0 && chessComputerLocationY == 7) ||
		(chessComputerLocationX == 2 && chessComputerLocationY == 7) || (chessComputerLocationX == 0 && chessComputerLocationY == 9)  
		){
			if(chessboard[chessComputerLocationX+1][chessComputerLocationY+1] == 0){
				availableComputerMoveX.push(chessComputerLocationX+1);
				availableComputerMoveY.push(chessComputerLocationY+1);
			}
	}

	//check left down
	if(	(chessComputerLocationX == 2 && chessComputerLocationY == 1) || (chessComputerLocationX == 4 && chessComputerLocationY == 1) ||
		(chessComputerLocationX == 4 && chessComputerLocationY == 3) || (chessComputerLocationX == 2 && chessComputerLocationY == 7) ||
		(chessComputerLocationX == 4 && chessComputerLocationY == 7) || (chessComputerLocationX == 4 && chessComputerLocationY == 9)  
		){
			if(chessboard[chessComputerLocationX-1][chessComputerLocationY+1] == 0){
				availableComputerMoveX.push(chessComputerLocationX-1);
				availableComputerMoveY.push(chessComputerLocationY+1);
			}
	}

	//check right up
	if(	(chessComputerLocationX == 0 && chessComputerLocationY == 3) || (chessComputerLocationX == 0 && chessComputerLocationY == 5) ||
		(chessComputerLocationX == 2 && chessComputerLocationY == 5) || (chessComputerLocationX == 0 && chessComputerLocationY == 9) ||
		(chessComputerLocationX == 0 && chessComputerLocationY == 11) || (chessComputerLocationX == 2 && chessComputerLocationY == 11)  
		){
			if(chessboard[chessComputerLocationX+1][chessComputerLocationY-1] == 0){
				availableComputerMoveX.push(chessComputerLocationX+1);
				availableComputerMoveY.push(chessComputerLocationY-1);
			}
	}

	//check left up
	if(	(chessComputerLocationX == 4 && chessComputerLocationY == 3) || (chessComputerLocationX == 2 && chessComputerLocationY == 5) ||
		(chessComputerLocationX == 4 && chessComputerLocationY == 5) || (chessComputerLocationX == 4 && chessComputerLocationY == 9) ||
		(chessComputerLocationX == 2 && chessComputerLocationY == 11) || (chessComputerLocationX == 4 && chessComputerLocationY == 11)  
		){
			if(chessboard[chessComputerLocationX-1][chessComputerLocationY-1] == 0){
				availableComputerMoveX.push(chessComputerLocationX-1);
				availableComputerMoveY.push(chessComputerLocationY-1);
			}
	}
}

function setTime()
{	
	--totalSeconds;
	secondsLabel = pad(totalSeconds%60);
	minutesLabel = pad(parseInt(totalSeconds/60));
	document.getElementById("timer").innerHTML = "Timer: " + minutesLabel + ":" + secondsLabel;
	if(totalSeconds == 0){
		alert("Time is over. Please restart again!!!!");
		window.location.href = "index.html";
	}
}

function pad(val)
{
	var valString = val + "";
	if(valString.length < 2){
		return "0" + valString;
	}else{
		return valString;
	}
}


window.addEventListener("load", init, false);



























