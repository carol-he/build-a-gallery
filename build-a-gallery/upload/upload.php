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

        include('../config.php');

        move_uploaded_file($file['tmp_name'], $path.'/'.$t.'.'.$extension);
        header ('Location: index.php?confirmation=success');
      }
      else {
        header ('Location: index.php?error=filetype');
      }
    }


?>
