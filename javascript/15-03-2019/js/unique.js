var a = [1,2,3,1,2,2,4,5];
var unique = a.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
// console.log(unique);