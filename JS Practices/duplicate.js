

var name = [23, 43, 43, 12, 75, 43, 34, 23];
var UniqueName = [];

for(var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = UniqueName.indexOf(element);
    if(index == -1) {
        UniqueName.push(element);
    }
}
console.log(UniqueName);