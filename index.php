<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet">
  <style>
    body{margin-top:5%;}
    h1{font-size:60px;text-align: center;font-family:helvetica;}
    p{text-align:center;
      margin:auto;
      padding-right:10%;
      padding-left:10%;
      font-family:helvetica;
    }
    #rightButton {
      margin-right:20%;
      margin-left:5%;
      display:inline;
    }
    #leftButton {
      margin-left:14%;
      margin-right:10%;
      display:inline;

    }
    #buttonBox{
      margin:auto;
      padding-right:20%;
      padding-left:20%;
      padding-top:10%;
      padding-bottom:10%;
    }
    a:link.left, a:visited.left{
      background-color: white;
      color: black;
      border: 2px solid black;
      padding:5%;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      width:20%;
      font-family:helvetica;
    }
    a:hover.left, a:active.left {
      background-color:#cce6ff;
      color: white;
      font-family:helvetica;
    }
    a:link.right, a:visited.right{
      background-color: white;
      color: black;
      border: 2px solid black;
      padding:5%;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      width:20%;
      font-family:helvetica;
    }
    a:hover.right, a:active.right {
      background-color:#ffe6ff;
      color: white;
      font-family:helvetica;
    }
    #footer{
      position:fixed;
      bottom:2%;
      left:10%;
      right:10%;
    }

  </style>
</head>
<body>

<h1>BUILD-A-GALLERY</h1>
<p> Click the buttons below to upload new painting images or view your paintings in augmented reality.</p>
</br>
<p>Click <a href="documentation.html" class="tiny"> here </a> to view the documentation of this project.</p>
<div id="buttonBox">
<div id="leftButton">
<a href="build-a-gallery/upload/index.php" class="left">Upload New Image</a>
</div>
<div id="rightButton">
<a href="build-a-gallery/index.php" class="right">View Painting in AR</a>
</div>
</div>
</br>
</br>
<div id="footer">
<p> Created by Carol He, Kat Vlasova, and Shiyang Wang for Interactive Computing Spring 2018. </p>
</div>
</body>
</html>
