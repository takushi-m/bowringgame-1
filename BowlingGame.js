function BowlingGame(){
    var rolls = [];

    var isSpare = function(frameIdx){
	return rolls[frameIdx] + rolls[frameIdx+1] === 10;
    };

    var isStrike = function(frameIdx){
	return rolls[frameIdx] === 10;
    };

    this.roll = function(pins){
	rolls.push(pins);
    };

    this.score = function(){
	var score = 0;
	var frameIdx = 0;
	for(var frame=0;frame<10;frame++){
	    if(isStrike(frameIdx)){
		score += 10 + rolls[frameIdx+1] + rolls[frameIdx+2];
		frameIdx += 1;
	    }else if(isSpare(frameIdx)){
		score += 10 + rolls[frameIdx+2];
		frameIdx += 2;
	    }else{
		score += rolls[frameIdx] + rolls[frameIdx+1];
		frameIdx += 2;
	    }
	}

	return score;
    };

}