document.getElementById("h1").style.fontFamily = "Open sans";

function displayDate() {
    document.getElementById("d").innerHTML = Date()
}

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);
        function frame() {
            if(pos == 350) {
                clearInterval(id);
            }else{
                pos++;
                elem.style.left = pos + "px";
                elem.style.right = pos + "px";
            }
        }
}



function mOver(obj) {
    obj.innerHTML = "thank you";
}
function mOut(obj) {
    obj.innerHTML = "Mouse over me";
}




function mDown(obj2) {
    obj2.style.backgroundColor = "yellow";
    obj2.innerHTML = "Please, relase me!";
}
function mUp(obj2) {
    obj2.style.backgroundColor = "gray";
    obj2.innerHTML = "Click me";
}

document.getElementById("myBtn").addEventListener("click", function() {
   document.write("Hello World");
})




//event listner
var x= document.getElementById("myBtn2");
x.addEventListener("mouseover", myFunc);
x.addEventListener("click", mOver);
x.addEventListener("mouseout", mOut);

function myFunc() {
    document.getElementById("d2").innerHTML += " mouse over! ";
}

function mOver() {
    document.getElementById("d2").innerHTML += " Clicked! ";
}

function mOut() {
    document.getElementById("d2").innerHTML += " mouse out! ";
}


window.addEventListener("resize", function(){
    document.getElementById("d3").innerHTML = Math.random();
  });




  var p = 4234, q = 3234;
  document.getElementById("myBtn4").addEventListener("click", function(){
      myFunc4(p, q);
  });

  function myFunc4(a, b) {
    var result = a * b;
    document.getElementById("d4").innerHTML = result;
  }


//   alert(document.body.innerHTML);
  alert(document.documentElement.innerHTML)


  //add remove
var para = document.createElement("p");
var node = document.createTextNode("this is new paragraph");
para.appendChild(node);
var element = document.getElementById("div3");
element.appendChild(para);

  