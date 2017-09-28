$(document).bind('mousemove', function(e){
    $('#cursor').css({
       left:  e.pageX - 65,
       top:   e.pageY - 10
    });
});

var width = 450;
var height = 450;
var playground = document.getElementById('px-render');

var canvas;

// var ratio = 150 / 830;

var count = 0;
var raf;


var renderer = PIXI.autoDetectRenderer(width, height, {transparent:true});
renderer.autoResize = true;
renderer.backgroundColor = 0x000000;

var tp, preview;
var displacementSprite,
	displacementFilter,
    stage;
    

    var blurFilter1 = new PIXI.filters.BlurFilter();
    blurFilter1.blur = 10;
function setScene() {
			playground.appendChild(renderer.view);

	        stage = new PIXI.Container();


            // create bg image
	        tp = PIXI.Texture.fromImage('images/circle.jpg');
	        preview = new PIXI.Sprite(tp);

	        preview.anchor.x = 0;
	        preview.anchor.y = 0;
        
            // create displacement map
	        displacementSprite = PIXI.Sprite.fromImage('images/fill.gif');
	        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
	       	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

	        displacementSprite.scale.y = 0.7;
	        displacementSprite.scale.x = 0.7;

//
stage.addChild(preview);

	        stage.addChild(displacementSprite);
			animate();
}

function removeScene(){
	cancelAnimationFrame(raf);
	stage.removeChildren();
	stage.destroy(true);
	playground.removeChild(canvas);
}


function animate() {
    raf = requestAnimationFrame(animate);
            
    displacementSprite.x = count*5;
	displacementSprite.y = count*5;

	count += 0.1;

    stage.filters = [blurFilter1,displacementFilter];

    renderer.render(stage);

    canvas = playground.querySelector('canvas');
}

setScene();