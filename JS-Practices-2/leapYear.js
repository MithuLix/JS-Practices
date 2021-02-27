function LeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
       return false;
    }
}

const check2000 = LeapYear(2700);
    console.log(check2000)