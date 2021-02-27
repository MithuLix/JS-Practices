//Expressions - function expression
const getRectArea = function(width, height) {
    return width * height;
  };


//   const area = (function(){
//       return(area);
//   })()


//   callback js
const actorName = "tom hanks";

function welComeGuest(name, greetHandler) {
    greetHandler(name);
}

function greetMorning(name) {
    console.log("good morning", name);
}


function greetAfternoon(name) {
    console.log("good afternoon", name);
}


function greetEvening(name) {
    console.log("good evening", name);
}

welComeGuest(actorName, greetAfternoon);
welComeGuest("katy wills", greetEvening);