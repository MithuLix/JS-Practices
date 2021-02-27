var a = 2;
switch (a) {
    case 1:
        console.log("roll 1");
        break;

    case 2: 
    console.log("roll 2");
        break;

    default:
        console.log("roll?");
}




//case date

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";

    console.log("today is" + day);
    break;
}





//grouping switch
const hakaw = 'rwerw';

switch (hakaw) {
    case 'rwerw':
    case 'w42ww':
    case '3w4tef':
    case '43rewr':
    console.log("faka buli");
        break;

    case '1212':
    case '13243':
    case '3545':
    case '2341':
    console.log("numbers  buli");
        break;

    default:
        console.log("kallo bador");
        break;
}



// single & grouped switch

const vd = 1;

switch (vd) {
  case 4:
    console.log('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}