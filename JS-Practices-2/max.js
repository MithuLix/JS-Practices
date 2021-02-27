var business = 145, minister = 231, shocib = 334;

if (business > minister && shocib) {
        console.log("business is bigger");
    }
    else {
        console.log("shocib or minister is bigger");
    }


console.log("---math method--");
var max = Math.max(business, minister, shocib);
console.log(max);

console.log("---math method2--");
console.log(Math.min(business, shocib, minister));