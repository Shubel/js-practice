var business = 450;
var minister = 340;
var cader = 250;

/*
var max=Math.max(business, minister, cader);
console.log(max);
*/

if(business > minister) {
    if(business > cader) {
        console.log("business is bigger");
    }
    else{
        console.log("cader is bigger");
    }
}
else{
    if(minister > cader) {
        console.log("minister is bigger");
    }
    else{
        console.log("cader is bigger");
    }
}