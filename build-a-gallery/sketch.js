
// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var markers = [];

// global object to hold all p5 images that were loaded in preload
var p5Images = {};


// preload all images
function preload() {
  // reference the global 'allImages' array to load in all of our Images
  for (var i = 0; i < allImages.length; i++) {
    p5Images[ allImages[i] ] = loadImage('images/' + allImages[i]);
  }
}

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  markers.push(world.getMarker("f1"));
  markers.push(world.getMarker("f2"));
  markers.push(world.getMarker("f3"));
  markers.push(world.getMarker("f4"));

  // set up a function so that when the user clicks on one of the images in the 'imagecontainer'
  // interface it is assigned to the currently visible marker
  var allClickableImages = document.querySelectorAll("#imagecontainer img");
  for (var i = 0; i < allClickableImages.length; i++) {
    allClickableImages[i].onclick = function(event) {

      // see which marker is visible
      var markerReference = false;
      for (var j = 0; j < markers.length; j++) {
        if (markers[j].isVisible()) {
          markerReference = markers[j];
        }
      }

      // if a marker is visible then it should be assigned this image
      if (markerReference) {
        console.log("assigning: " + event.currentTarget.dataset.id + " to marker");
        // remove any existing artwork from this marker
        while (markerReference.children.length > 0) {
          markerReference.removeChild( markerReference.children[0] );
        }

        // build a new plane with this image on it and add it to this marker
        var newImage = new Plane({
          asset: event.currentTarget.dataset.id,
          width: getMeasurements(p5Images[event.currentTarget.dataset.id]).width,
          height: getMeasurements(p5Images[event.currentTarget.dataset.id]).height,
          rotationX: -90
        });
        markerReference.addChild( newImage );
      }
    }
  }
}


function draw() {

  // see which markers are visible right now
  var visCount = 0;
  for (var i = 0; i < markers.length; i++) {
    // if a marker is visible we need to make the 'imagecontainer' div visible
    if (markers[i].isVisible()) {
      visCount++;
    }
  }

  // if one is visible then we should make the 'imagecontainer' interface visible
  if (visCount > 0) {
    document.getElementById('imagecontainer').style.display = 'block';
  }
  else {
    document.getElementById('imagecontainer').style.display = 'none';
  }

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
