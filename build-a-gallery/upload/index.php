<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Upload Images</title>
    <link rel="stylesheet" type="text/css" href="../../styles/upload.css">
    <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet">
  </head>
  <body>

    <?php

      if ($_GET['error'] === 'filetype') {
        print '<p>You can only upload image file types</p>';
      }
      else if ($_GET['error'] === 'nofile') {
        print '<p>No file selected</p>';
      }
      else if ($_GET['confirmation'] === 'success') {
        print '<p>File uploaded</p>';
      }

    ?>
    
      <h1>UPLOAD IMAGES</h1>
    <div id="upload">
      <form method="post" action="upload.php" enctype="multipart/form-data">
        please choose images you would like to use in the gallery simulator.<br><br><br>
        <input type="file" name="file" id="file">
        <input type="submit" value="Upload Image">
      </form>
      <div id="buttonBox">
        <a href="../index.php" class="right"><div id="rightButton">Proceed to image assignment</div></a>
        <a href="../../index.php" class="left"><div id="leftButton">Back</div></a>
      </div>
    </div>

  </body>
</html>
