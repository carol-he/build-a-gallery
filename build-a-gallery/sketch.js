
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var markers = [];

// how long has each marker been visible?
var fCount1 = 0;
var fCount2 = 0;
var fCount3 = 0;
var fCount4 = 0;

var p5Images = [];
var artworks = [];

// global flag to keep track of whether we should track new markers
// (we can pause this when the user wants to interact with the content)
var tracking = true;

// graphics we may need during 2D mode
var grisImg, braquesImg, delaunayImg, picassoImg, currentPainting;

// artwork objects
var gris, braques, delaunay, picasso;

// a new drawing canvas (to overlay on top of the regular canvas)
var overlayCanvas;

function preload() {
  
  // reference the global 'allImages' array to load in all of our Images
  for (var i = 0; i < allImages.length; i++) {
    p5Images.push( loadImage('images/' + allImages[i]) );
  }

  console.log(p5Images);
  
  grisImg = loadImage('images/gris.jpg');
  braquesImg = loadImage('images/braques.jpg');
  delaunayImg = loadImage('images/delaunay.jpg');
  picassoImg = loadImage('images/picasso.jpg');
}

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  markers.push(world.getMarker("f1"));
  markers.push(world.getMarker("f2"));
  markers.push(world.getMarker("f3"));
  markers.push(world.getMarker("f4"));
  
  class Artwork {
    constructor(name, asset, img, marker){
      this.img = name.img;
      this.name = new Plane({
        asset: name.asset,
        width: getMeasurements(this.img).width,
        height: getMeasurements(this.img).height,
        rotationX: -90
      });
      this.marker = name.marker;
      this.marker.addChild(this.name);
    }
  }
  
  for (var i = 0; i < 4; i++) {
    artworks.push(new Artwork({name: allImages[i], asset: allImages[i], img: p5Images[i], marker: markers[i]}));
  }
  
//  artwork1 = new Artwork({name: gris, asset: 'gris', img: grisImg, marker: marker1});
//  artwork2 = new Artwork({name: braques, asset: 'braques', img: braquesImg, marker: marker2});
//  artwork3 = new Artwork({name: delaunay, asset: 'delaunay', img: delaunayImg, marker: marker3});
//  artwork4 = new Artwork({name: picasso, asset: 'picasso', img: picassoImg, marker: marker4});

  // create our overlay canvas (double the size as the regular canvas, which is 800x600)
  // this is because the canvas has to be scaled up to accomodate the AR video stream
  overlayCanvas = createGraphics(1600, 1200);
}

function getMeasurements(img){
  var width, height;
  //calculate width and height to be displayed
  if(img.width > img.height){
    height = 4;
    width = (img.width/img.height) * 4;
  } else {
    width = 4
    height = (img.height/img.width) * 4;
  }
  return {width: width, height: height};
}

function draw() {
  
  image(p5Images[0], width/2, height/2, 50, 50);
  for (var i = 0; i < p5Images.length; i++) {
    
  }
  
  // if we are in tracking mode we really don't need to do anything here
  if (tracking) {

  }

  // we are in 2D mode
  else {
    // erase the background of the world (hiding the video feed)
    world.clearDrawingCanvas();
    background(0, 200);

    // in my AR system the canvas is ALWAYS 800 x 600, but it's scaled up/down as needed


    // figure out how large the painting should be (50% of the window)
    var desiredMax = 400;
    var scalingFactor = 1;
    if(currentPainting.height > currentPainting.width){
      scalingFactor = desiredMax/currentPainting.height;
    } else {
      scalingFactor = desiredMax/currentPainting.width;
    }
    
    // draw our painting
    imageMode(CENTER);
    image(currentPainting, width/2, height/2, currentPainting.width*scalingFactor, currentPainting.height*scalingFactor);

    // draw a 'close' button
    fill(255);
    textSize(25);
    textAlign(CENTER);
    text("[ close ]", width/2, height/2 + currentPainting.height*scalingFactor/2 + 50);

    // if the user is clicking the mouse we should let them draw on the OVERLAY canvas
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
      overlayCanvas.noStroke();
      overlayCanvas.fill(255, 75);
      overlayCanvas.ellipse(mouseX, mouseY, 10, 10);

      // how far are they from the close button?  If so, close the window
      if (dist(mouseX, mouseY, width/2, height/2 + currentPainting.height*scalingFactor/2 + 50) < 50) {
        tracking = true;
        overlayCanvas.clear();
        world.clearDrawingCanvas();
      }
    }

    // draw the overlay canvas
    imageMode(CORNER);
    image(overlayCanvas, 0, 0, overlayCanvas.width/2, overlayCanvas.height/2);
  }

}

function mousePressed() {
  // are we currently in tracking mode?
  if (tracking) {
    // see which marker is currently visible
    if (markers[0].isVisible()) {
      tracking = false;
      currentPainting = p5Images[1];
    }
    else if (markers[1].isVisible()) {
      tracking = false;
      currentPainting = p5Images[2];
    }
    else if (markers[2].isVisible()) {
      tracking = false;
      currentPainting = p5Images[3];
    }
    else if (markers[3].isVisible()) {
      tracking = false;
      currentPainting = p5Images[4];
    }
  }
}
