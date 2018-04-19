
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var fMarker1, fMarker2, fMarker3, fMarker4;

// how long has each marker been visible?
var fCount1 = 0;
var fCount2 = 0;
var fCount3 = 0;
var fCount4 = 0;

// global flag to keep track of whether we should track new markers
// (we can pause this when the user wants to interact with the content)
var tracking = true;

// graphics we may need during 2D mode
var p1, p2, p3, p4, currentPainting;

// a new drawing canvas (to overlay on top of the regular canvas)
var overlayCanvas;

function preload() {
  p1 = loadImage('images/painting1.jpg');
  p2 = loadImage('images/painting2.jpg');
  p3 = loadImage('images/painting3.jpg');
  p4 = loadImage('images/painting4.jpg');
}

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  fMarker1 = world.getMarker("f1");
  fMarker2 = world.getMarker("f2");
  fMarker3 = world.getMarker("f3");
  fMarker4 = world.getMarker("f4");

  // put a painting on top of each marker
  var painting1 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting1'
  });
  fMarker1.addChild( painting1 );

  var painting2 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting2'
  });
  fMarker2.addChild( painting2 );

  var painting3 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting3'
  });
  fMarker3.addChild( painting3 );

  var painting4 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting4'
  });
  fMarker4.addChild( painting4 );

  // create our overlay canvas (double the size as the regular canvas, which is 800x600)
  // this is because the canvas has to be scaled up to accomodate the AR video stream
  overlayCanvas = createGraphics(1600, 1200);
}

function draw() {
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
    var desiredWidth = 400;
    var scalingFactor = desiredWidth/currentPainting.width;

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
    if (fMarker1.isVisible()) {
      tracking = false;
      currentPainting = p1;
    }
    else if (fMarker2.isVisible()) {
      tracking = false;
      currentPainting = p2;
    }
    else if (fMarker3.isVisible()) {
      tracking = false;
      currentPainting = p3;
    }
    else if (fMarker4.isVisible()) {
      tracking = false;
      currentPainting = p4;
    }
  }
}
