<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  margin: 0;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}

.header h2 {
  text-align: center;
}

.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: #638374;
  width: 0%;
}

.content {
  padding: 100px 0;
  margin: 50px auto 0 auto;
  width: 80%;
}



body {font-family: Arial, Helvetica, sans-serif;}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */



  
}
/* Modal Content */
.modal-content {
  /* background-color: white; */
  margin: auto;
  padding: 0px;
  border: 1px solid #888;
  width: 48%;

}
/* The Close Button */
.close {
  color: #aaaaaa; 
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

/*.myBtn{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}*/

.myBtn {
  display: inline-block;
  border-radius: 4px;
  background-color: #638374;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.myBtn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.myBtn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.myBtn:hover span {
  padding-right: 25px;
}

.myBtn:hover span:after {
  opacity: 1;
  right: 0;
}



.myBtn2 {
  display: inline-block;
  border-radius: 4px;
  background-color: #638374;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.myBtn2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.myBtn2 span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.myBtn2:hover span {
  padding-right: 25px;
}

.myBtn2:hover span:after {
  opacity: 1;
  right: 0;
}


/*.myBtn2{
  color: white;
  font-size: 28px;
}*/















</style>
</head>
<body style="background-color:#93C2AC;">




  





  <div class="header">
  <h2>Youtube Clone</h2>
  <div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
  </div>  
</div>

<div class="content">



  <h2 >Video 1</h2>

  <!-- Trigger/Open The Modal -->
  <button id="1" class="myBtn" style="vertical-align:middle"><span>Video 1 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[0]%></button>
  
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1PYXFjwdJKazEq8r_WSoHywIHDuw-_qnp/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>


  
  
  <h2>Video 2</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 2 </span> </button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[1]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1hpQexZqCH0-F9TouPruCvwYj3cYvnPWS/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 3</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 3 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[2]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1p5lfUrEhAV0gI5G7ebgXIj3ilukx1oAL/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 4</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 4 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[3]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1i5BmgDq_E2B9d5qHyU4NcWsSTCFP6yeJ/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 5</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 5 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[4]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1RC9YRDvxZaPjiwLSw_HQfSMuKXdecOGV/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 6</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 6 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[5]%></button>
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1tmh9Z4i8N5x4ZzgwYx_Lu_jFGb5xxngU/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 7</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 7 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[6]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1Pi_MWBc8zjctBsLfdE85ALHo4T4cX_fN/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 8</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 8 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[7]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1nMPX8VyrVsOQDDP0zvYxD0oaMOhPBZoC/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 9</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 9 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[8]%></button>
  
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1LOnx_2H47O-XFgEAooEh3KXFERKuLCgx/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>

  <h2>Video 10</h2>
  
  <!-- Trigger/Open The Modal -->
  <button id="2" class="myBtn" style="vertical-align:middle"><span>Video 10 </span></button>
  <button class="myBtn2" style="vertical-align:middle"><span>Views </span><%=a[9]%></button>
  <!-- The Modal -->
  <div id="myModal2" class="modal">
  
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">×</span>
      <p><iframe src="https://drive.google.com/file/d/1VrdZ_CRU5hcXphbtgS23sFxLjm976jYL/preview" width="640" height="480"></iframe></p>
    </div>
  
  </div>





<script>
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
</script>























<script>
// Get the modal
var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
    
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/1", true);
  xhttp.send();
  //console.log('sent');
  
}
btn[1].onclick = function() {
    modal[1].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/2", true);
  xhttp.send();
}

btn[2].onclick = function() {
    modal[2].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/3", true);
  xhttp.send();
}

btn[3].onclick = function() {
    modal[3].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/4", true);
  xhttp.send();
}

btn[4].onclick = function() {
    modal[4].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/5", true);
  xhttp.send();
}

btn[5].onclick = function() {
    modal[5].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/6", true);
  xhttp.send();
}

btn[6].onclick = function() {
    modal[6].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/7", true);
  xhttp.send();
}

btn[7].onclick = function() {
    modal[7].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/8", true);
  xhttp.send();
}

btn[8].onclick = function() {
    modal[8].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/9", true);
  xhttp.send();
}

btn[9].onclick = function() {
    modal[9].style.display = "block";
    var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/upload/10", true);
  xhttp.send();
}









// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}
span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

span[5].onclick = function() {
    modal[5].style.display = "none";
}

span[6].onclick = function() {
    modal[6].style.display = "none";
}

span[7].onclick = function() {
    modal[7].style.display = "none";
}

span[8].onclick = function() {
    modal[8].style.display = "none";
}

span[9].onclick = function() {
    modal[9].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>





</body>
</html>
