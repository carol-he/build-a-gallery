<?php

    $file = $_FILES['file'];
    if (!$file) {
      header('Location: index.php?error=nofile');
    }

    else {
      // check filetype
      if ($file['type'] === 'image/jpeg') {
        $extension = 'jpg';
      }
      else if ($file['type'] === 'image/png') {
        $extension = 'png';
      }
      else if ($file['type'] === 'image/gif') {
        $extension = 'gif';
      }
      else {
        $extension = 'unknown';
      }

      if ($extension !== 'unknown') {
        $t = time();

        // YOU WILL NEED TO UPDATE THIS PATH TO REFLECT THE FULL FILE PATH OF YOUR IMAGES FOLDER
        $images_path = '/Users/carolhe/nyu/junior/Interactive Computing/MAMP/build-a-gallery/build-a-gallery/images';

        move_uploaded_file($file['tmp_name'], $images_path.'/'.$_SESSION['username'].'/'.$t.'.'.$extension);
        header ('Location: index.php?confirmation=success');
      }
      else {
        header ('Location: index.php?error=filetype');
      }
    }


?>
