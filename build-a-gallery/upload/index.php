<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Upload Images</title>
    <link rel="stylesheet" type="text/css" href="../../styles/upload.css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
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
    <div id="upload">
      <h1>Upload A New Image</h1>

      <form method="post" action="upload.php" enctype="multipart/form-data">
        <input type="file" name="file" id="file">
        <input type="submit" value="Upload Image">
      </form>


      <hr>

        <a href="../index.php">Proceed to image assignment</a>
      </br>
      </br>
        <a href="../../index.php">Back</a>

    </div>

  </body>
</html>
