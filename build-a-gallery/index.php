<!DOCTYPE html>
<html lang="en-us">
	<head>
		<!-- A-Frame VR Library -->
		<script src="../libraries/aframe.min.js"></script>

		<!-- ARToolKit for A-Frame VR Library -->
		<script src='../libraries/aframe-ar.js'></script>

		<!-- P5 libraries -->
		<script language="javascript" type="text/javascript" src="../libraries/p5.js"></script>
		<script language="javascript" type="text/javascript" src="../libraries/p5.dom.min.js"></script>

		<!-- Craig's AFrameP5 AR library -->
		<script language="javascript" type="text/javascript" src="../libraries/aframep5_ar.js"></script>
    
    <script type="text/javascript">
      // define all of our currently uploaded images into an array called 'allImages';
      var allImages = [
        <?php

          // REPLACE THIS FILE PATH WITH THE ACTUAL FILE PATH ON YOUR MACHINE
          $everything = scandir('/Users/carolhe/nyu/junior/Interactive Computing/MAMP/build-a-gallery/build-a-gallery/images');
          for ($i = 0; $i < sizeof($everything); $i++) {
            if ($everything[$i] !== '.' && $everything[$i] !== '..') {
              print "'" . $everything[$i] . "'";
              if ($i < sizeof($everything)-1) {
                print ', ';
              }
            }
          }

        ?>

      ];
      var markers = [];

    </script>

		<!-- P5 Sketch -->
		<script language="javascript" type="text/javascript" src="sketch.js"></script>

		<!-- Custom Styles -->
		<style type="text/css">
			body {
				margin: 0px;
				overflow: hidden;
			}

      /* shows a warning message when the screen is rotated into portrait mode -- necessary to prevent issues on mobile devices */
			@media screen and (orientation:portrait) {
				#portrait_warning {
					position: fixed;
					top: 0px;
					left: 0px;
					width: 100%;
					height: 100%;
					text-align: center;
					background: white;
					z-index: 1000;
					display: block;
				}
			}

      /* hides the rotational warning when the screen is in landscape mode */
			@media screen and (orientation:landscape) {
				#portrait_warning {
					display: none;
				}
			}

			.content {
				background-color: white;
				position: absolute;
				top: 0px;
				left: 0px;
				z-index: 1000;
				display: none;
				padding: 25px;
				font-family: sans-serif;
				line-height: 150%;
			}
		</style>

	</head>

	<body>

		<!-- modal box to tell the user to rotate their device into landscape mode - the AR toolkit only reliably renders in landscape mode -->
		<div id="portrait_warning">
			<h1>Rotate your device into landscape mode!</h1>
		</div>

		<!-- Define A-Frame VR Scene and set it up so that it will be manipulated through AR.js -->
		<a-scene id="ARScene" embedded arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono;'>

			<!-- set up graphics we want to use as assets, same as in A-Frame VR-->
			<a-assets>
        

        <?php

          // REPLACE THIS FILE PATH WITH THE ACTUAL FILE PATH ON YOUR MACHINE
          $everything = scandir('/Users/carolhe/nyu/junior/Interactive Computing/MAMP/build-a-gallery/build-a-gallery/images');
          for ($i = 0; $i < sizeof($everything); $i++) {
            if ($everything[$i] !== '.' && $everything[$i] !== '..') {
              print '<img src="images/' . $everything[$i] . '" id="' . $everything[$i] . '">';
            }
          }

        ?>
        
        <!--
        <img src="images/gris.jpg" id="gris">
        <img src="images/braques.jpg" id="braques">
        <img src="images/delaunay.jpg" id="delaunay">
        <img src="images/picasso.jpg" id="picasso">
        -->
			</a-assets>

			<!-- set up all of the AR markers we will be working with along with links to their 'pattern' files -->
			<a-marker id="f1" preset="custom" url="../markers/fiducial1.pat"></a-marker>
			<a-marker id="f2" preset="custom" url="../markers/fiducial2.pat"></a-marker>
			<a-marker id="f3" preset="custom" url="../markers/fiducial3.pat"></a-marker>
			<a-marker id="f4" preset="custom" url="../markers/fiducial4.pat"></a-marker>			

			<a-entity camera></a-entity>
		</a-scene>

	</body>
</html>