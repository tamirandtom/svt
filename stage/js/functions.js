isMobile = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	if (window.innerWidth < 800) {
		check = true;
	}
	return check;
  };
	
  



  // appending data
//   $.each(eventsData.haziraEvents, function( index, value ) {
	
// 	$( ".hazira-events" ).append( "<div class=''>"+value.date+","+value.Name+"</div>" );
	
//   });

showAniamtion= true;

if (showAniamtion) {

  // aniamtions
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
  var playground2 = document.getElementById('px-render-green');
  var canvas,canvas2;
  // Timer for animation
  var count = 0;
  var raf;
  
  
  var renderer = PIXI.autoDetectRenderer(width, height, {
	  transparent: true
  });
  var renderer2 = PIXI.autoDetectRenderer(width, height, {
	  transparent: true
  });
  renderer.autoResize = false;
  renderer2.autoResize = false;
  
  renderer.backgroundColor = 0x000000;
  renderer2.backgroundColor = 0x00AE7C;
  
  var innerCircle, outerCircle, bgCircle;
  var innerCircle2, outerCircle2, bgCircle2;
  var displacementSprite,
	  displacementFilter,
	  stage,stage2;
  
  // Both blur filters
  var blurFilter1 = new PIXI.filters.BlurFilter();
  var blurFilter2 = new PIXI.filters.BlurFilter();
  
  // Groups
  var bgGroup = new PIXI.Container();
  var mainGroup = new PIXI.Container();
  
  var bgGroup2 = new PIXI.Container();
  var mainGroup2 = new PIXI.Container();
  
  var noiseFilter = new PIXI.filters.NoiseFilter(0.3, 6);
  
  
  
  
  
  function setScene() {
  
	  playground.appendChild(renderer.view);
	  playground2.appendChild(renderer2.view);
	  stage = new PIXI.Container();
	  stage2 = new PIXI.Container();
  
	  stage.filters = stage2.filters = [new PIXI.filters.VoidFilter()];
	  stage.filterArea = stage2.filterArea = new PIXI.Rectangle(0, 0, width, width);
  
  
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
  
	  bgCircle2 = new PIXI.Graphics();
	  bgCircle2.beginFill(0xffffff);
	  bgCircle2.drawCircle(width / 2, height / 2, (width / 2)); //(x,y,radius)
	  bgCircle2.endFill();
  
  
	  outerCircle = new PIXI.Graphics();
	  outerCircle.beginFill(0xffffff);
	  outerCircle.drawCircle(width / 2, height / 2, 200); //(x,y,radius)
	  outerCircle.endFill();
  
	  outerCircle2 = new PIXI.Graphics();
	  outerCircle2.beginFill(0x00AE7C);
	  outerCircle2.drawCircle(width / 2, height / 2, 200); //(x,y,radius)
	  outerCircle2.endFill();
  
	  blurFilter1.blur = 25;
  
  
	  innerCircle = new PIXI.Graphics();
	  innerCircle.beginFill(0x000000);
	  innerCircle.drawCircle(width / 2, height / 2, 160); //(x,y,radius)
	  innerCircle.endFill();
  
	  innerCircle2 = new PIXI.Graphics();
	  innerCircle2.beginFill(0xffffff);
	  innerCircle2.drawCircle(width / 2, height / 2, 160); //(x,y,radius)
	  innerCircle2.endFill();
	  
	  blurFilter2.blur = 4;
	  innerCircle.filters = innerCircle2.filters = [blurFilter2];
  
	  // adding  to the container
	  bgGroup.addChild(bgCircle);
	  bgGroup.addChild(outerCircle);
  
	  bgGroup2.addChild(bgCircle2);
	  bgGroup2.addChild(outerCircle2);
  
	  // Apply filters to background+white circle
	  bgGroup.filters = bgGroup2.filters = [blurFilter1,displacementFilter];
  
	  // adding  to the main group	
	  mainGroup.addChild(bgGroup);
	  mainGroup2.addChild(bgGroup2);
  
	  // Adding noise square (black)
	  var noiseSquare = new PIXI.Graphics();
	  noiseSquare.beginFill(0xFFFFFF);
	  noiseSquare.drawRect(0, 0, width, height);
	  var texture = PIXI.Texture.fromImage("images/noise.png");
	  var tilingSprite = new PIXI.TilingSprite(texture, width, height);
	  tilingSprite.mask = noiseSquare;
  
		  // Adding noise square (white)
		  var noiseSquare2 = new PIXI.Graphics();
		  noiseSquare2.beginFill(0x000000);
		  noiseSquare2.drawRect(0, 0, width, height);
		  var texture2 = PIXI.Texture.fromImage("images/noisew.png");
		  var tilingSprite2 = new PIXI.TilingSprite(texture2, width, height);
		  tilingSprite2.mask = noiseSquare2;
  
  
	  // Add everything to the group
	  mainGroup.addChild(innerCircle);
	  mainGroup2.addChild(innerCircle2);
  
	  stage.addChild(mainGroup);
	  stage.addChild(tilingSprite);
	  stage.addChild(noiseSquare);
	  stage.addChild(displacementSprite);
  
	  stage2.addChild(mainGroup2);
	  stage2.addChild(tilingSprite2);
	  stage2.addChild(noiseSquare2);
	  stage2.addChild(displacementSprite);
  
  
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
	  
	  
  
	  // count += 0.1;
  
	  mousePullStrenght = 7;
	  innerCircle.x = mousePullStrenght * cursorPosW - mousePullStrenght / 2;
	  innerCircle.y = mousePullStrenght * cursorPosH - mousePullStrenght / 2;
	  innerCircle2.x = mousePullStrenght * cursorPosW - mousePullStrenght / 2;
	  innerCircle2.y = mousePullStrenght * cursorPosH - mousePullStrenght / 2;
  
	  displacementSprite.x =  mousePullStrenght * 2* cursorPosW - mousePullStrenght;
	  displacementSprite.y =  mousePullStrenght * 2* cursorPosH - mousePullStrenght;
  
  
	  renderer.render(stage);
	  renderer2.render(stage2);
  
	  canvas = playground.querySelector('canvas');
	  canvas2 = playground2.querySelector('canvas');
  }
  
  setScene();
	  
  

}

