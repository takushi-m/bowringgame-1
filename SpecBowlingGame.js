describe("BowlingGame", function(){
    var g;
    
    var rollMany = function(n,pins){
	for(var i=0;i<n;i++){
	    g.roll(pins);
	}
    };

    var rollSpare = function(){
	g.roll(5);
	g.roll(5);
    };

    var rollStrke = function(){
	g.roll(10);
    };

    beforeEach(function(){
	g = new BowlingGame();
    });

    it("constructer exists", function(){
	expect(BowlingGame).toBeDefined();
    });

    it("roll method", function(){
	expect(g.roll).toBeDefined();
    });

    it("score method", function(){
	expect(g.score).toBeDefined();
    });

    it("score 0", function(){
	rollMany(20, 0);
	expect(g.score()).toEqual(0);
    });

    it("all ones", function(){
	rollMany(20,1);
	expect(g.score()).toEqual(20);
    });

    it("one spare", function(){
	rollSpare();
    	g.roll(3);
    	rollMany(17,0);
    	expect(g.score()).toEqual(16);
    });

    it("strike", function(){
	g.roll(10);
	g.roll(3);
	g.roll(4);
	rollMany(16,0);
	expect(g.score()).toEqual(24);
    });

    it("perfect", function(){
	rollMany(12,10);
	expect(g.score()).toEqual(300);
    });
});