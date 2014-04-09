// Finding y-coordinates of objects
// console.log("'world' y:" + PSD.world.y);
// console.log("'left1' y:" + PSD.left1.y);
// console.log("'left2' y:" + PSD.left2.y);
// console.log("'right' y:" + PSD.right.y);
// console.log("'user' y:" + PSD.user.y);

header = new View({x:0, y:40, width:317, height:150});
header.html = "Start Talking"
header.style = {
	"color": "white",
	"font": "30px Helvetica neue",
	"font-weight": "bold",
	"text-align": "center"
};

subtitle = new View({x:0, y:85, width:317, height:40});
subtitle.html = "with those nearby."
subtitle.style = {
	"color": "white",
	"font": "18px Helvetica neue",
	"text-align": "center"
};

userText = new View({x:0, y:215, width:317, height:30});
userText.html = "hello"
userText.style = {
	"color" : "black",
	"font" : "18px helvetica neue",
	"text-align" : "center"
};

userText2 = new View({x:0, y:215, width:317, height:30});
userText2.html = "sup?"
userText2.style = {
	"color" : "black",
	"font" : "18px helvetica neue",
	"text-align" : "center"
};

leftText = new View({x:58, y:178, width:55, height:30});
leftText.html = "bonjour"
leftText.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "left"
};

leftText2 = new View({x:58, y:178, width:55, height:30});
leftText2.html = "sippin'"
leftText2.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "left"
};

rightText = new View({x:212, y:178, width:40, height:30});
rightText.html = "hola"
rightText.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "right"
};

rightText2 = new View({x:212, y:178, width:40, height:30});
rightText2.html = "chillin'"
rightText2.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "right"
};


userText.opacity = 0
userText2.opacity = 0

leftText.opacity = 0
leftText2.opacity = 0

rightText.opacity = 0
rightText2.opacity = 0


PSD.left1.y = -60
PSD.leftIcon.opacity = 0
PSD.left2.y = -60
PSD.right.y = -60
PSD.rightIcon.opacity = 0
PSD.world.y = 260
PSD.world.opacity = 0
PSD.ok.opacity = 1

PSD.user.y = -60
PSD.userIcon.opacity = 0

world = function () {
	props = {
		properties: {opacity:1, y:198},
		time: 700,
	}
	worldAnimation = PSD.world.animate(props);
	worldAnimation.on("end", people);
};

people = function () {
	
	utils.delay(0, function(){
		PSD.left1.animate({
			properties: {y:223},
			time: 700,
		})
	})
	
	utils.delay(20, function(){
		PSD.left2.animate({
			properties: {y:208},
			time: 700,
		})
	})

	utils.delay(40, function(){
		PSD.right.animate({
			properties: {y:223},
			time: 700,
		})
	})
	
	utils.delay(60, function(){
		peopleAnimation = PSD.user.animate({
			properties: {y:302},
			time: 700,
		})
		peopleAnimation.on("end", function(){
			utils.delay(500, userPopUp1);
		});
	})
};


userPopUp1 = function() {
	appear = PSD.userIcon.animate({
		properties: {opacity:1},
		time: 500,
	})
	userText.animate({
		properties: {opacity:1},
		time: 500,
	})
	appear.on("end", function(){
		utils.delay(1000, leftPopup1);
		
		utils.delay(500, function(){
			props = ({properties: {opacity:0}, time:100})
			// PSD.userIcon.animate(props);
			userText.animate(props);
		})
	})
};
	
	
leftPopup1 = function() {
	appear = PSD.leftIcon.animate({
		properties: {opacity:1},
		time: 500,
	})
	leftText.animate({
		properties: {opacity:1},
		time: 500,
	})
	appear.on("end", function(){
		utils.delay(500, rightPopup1);
		
		utils.delay(500, function(){
			props = ({properties: {opacity:0}, time:100})
			PSD.leftIcon.animate(props);
			leftText.animate(props);
		})
	})
};

rightPopup1 = function() {
	appear = PSD.rightIcon.animate({
		properties: {opacity:1},
		time: 500,
	})
	rightText.animate({
		properties: {opacity:1},
		time: 500,
	})
	
	appear.on("end", function(){
		utils.delay(1000, userPopUp2);
		
		utils.delay(500, function(){
			props = ({properties: {opacity:0}, time:100})
			PSD.rightIcon.animate(props);
			rightText.animate(props);
		})
	})
};
	
	
userPopUp2 = function () {
	appear = userText2.animate({
		properties: {opacity:1},
		time: 500,
	})
	
	appear.on("end", function(){
		utils.delay(1000, leftPopUp2);
		
		utils.delay(500, function(){
			userText2.animate({
				properties: {opacity:0},
				time: 500,
	
			})
		})
	})
};

leftPopUp2 = function(){
	appear = PSD.leftIcon.animate({
		properties: {opacity:1},
		time: 500,
	})
	leftText2.animate({
		properties: {opacity:1},
		time: 500,
	})
	appear.on("end", function(){
		utils.delay(500, rightPopup2);

		utils.delay(500, function(){
			props = ({properties: {opacity:0}, time:100})
			PSD.leftIcon.animate(props);
			leftText2.animate(props);
		})
	})
};

rightPopup2 = function() {
	appear = PSD.rightIcon.animate({
		properties: {opacity:1},
		time: 500,
	})
	rightText2.animate({
		properties: {opacity:1},
		time: 500,
	})

	appear.on("end", function(){
		utils.delay(1000);

		utils.delay(500, function(){
			props = ({properties: {opacity:0}, time:100})
			PSD.rightIcon.animate(props);
			rightText2.animate(props);
		})
	})
};


utils.delay(0, world);



