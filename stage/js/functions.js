var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

var cursorPosW = 0,
	cursorPosH = 0;
$(document).bind('mousemove', function (e) {
	$('#cursor').css({
		left: e.pageX - 65,
		top: e.pageY - 10
	});
	cursorPosW = e.pageX / screenWidth;
	cursorPosH = e.pageY / screenHeight;
});


// Set up canvas width
var width = 600;
var height = 600;
var playground = document.getElementById('px-render');
var canvas;
// Timer for animation
var count = 0;
var raf;


var renderer = PIXI.autoDetectRenderer(width, height, {
	transparent: true
});
renderer.autoResize = true;
renderer.backgroundColor = 0x000000;

var innerCircle, outerCircle, bgCircle, preview;
var displacementSprite,
	displacementFilter,
	stage;

// Both blur filters
var blurFilter1 = new PIXI.filters.BlurFilter();
var blurFilter2 = new PIXI.filters.BlurFilter();

// Groups
var bgGroup = new PIXI.Container();
var mainGroup = new PIXI.Container();
var noiseFilter = new PIXI.filters.NoiseFilter(0.3, 6);





function setScene() {

	playground.appendChild(renderer.view);
	stage = new PIXI.Container();

	stage.filters = [new PIXI.filters.VoidFilter()];
	stage.filterArea = new PIXI.Rectangle(0, 0, width, width);


	// create displacement map
	displacementSprite = PIXI.Sprite.fromImage('images/fill.gif');
	displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

	displacementSprite.scale.y = 0.9;
	displacementSprite.scale.x = 0.9;



	bgCircle = new PIXI.Graphics();
	bgCircle.beginFill(0x0000000);
	bgCircle.drawCircle(width / 2, height / 2, (width / 2)); //(x,y,radius)
	bgCircle.endFill();


	outerCircle = new PIXI.Graphics();
	outerCircle.beginFill(0xffffff);
	outerCircle.drawCircle(width / 2, height / 2, 200); //(x,y,radius)
	outerCircle.endFill();
	blurFilter1.blur = 25;


	innerCircle = new PIXI.Graphics();
	innerCircle.beginFill(0x000000);
	innerCircle.drawCircle(width / 2, height / 2, 160); //(x,y,radius)
	innerCircle.endFill();
	blurFilter2.blur = 4;
	innerCircle.filters = [blurFilter2];

	// adding  to the container
	bgGroup.addChild(bgCircle);
	bgGroup.addChild(outerCircle);

	// Apply filters to background+white circle
	bgGroup.filters = [blurFilter1,displacementFilter];

	// adding  to the main group	
	mainGroup.addChild(bgGroup);

	// Adding noise square
	var noiseSquare = new PIXI.Graphics();
	noiseSquare.beginFill(0xFFFFFF);
	noiseSquare.drawRect(0, 0, width, height);

	var texture = PIXI.Texture.fromImage("images/noise.png");
	var tilingSprite = new PIXI.TilingSprite(texture, width, height);
	tilingSprite.mask = noiseSquare;



	// Add everything to the group
	mainGroup.addChild(innerCircle);

	stage.addChild(mainGroup);
	stage.addChild(tilingSprite);
	stage.addChild(noiseSquare);
	stage.addChild(displacementSprite);
	animate();
}

// function removeScene(){
// 	cancelAnimationFrame(raf);
// 	stage.removeChildren();
// 	stage.destroy(true);
// 	playground.removeChild(canvas);
// }


function animate() {
	raf = requestAnimationFrame(animate);
	
	displacementSprite.x = 2 * count;
	displacementSprite.y = 2 * count;

	count += 0.1;

	mousePullStrenght = 7;
	innerCircle.x = mousePullStrenght * cursorPosW - mousePullStrenght / 2;
	innerCircle.y = mousePullStrenght * cursorPosH - mousePullStrenght / 2;

	renderer.render(stage);

	canvas = playground.querySelector('canvas');
}

setScene();