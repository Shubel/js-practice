var name = [2, 11, 90, 67, 2, 57, 11, 43, 78, 9];
var UniqueName = [];

for(var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = UniqueName.indexOf(element);
    if(index == -1) {
        UniqueName.push(element);
    }
}
console.log(UniqueName);