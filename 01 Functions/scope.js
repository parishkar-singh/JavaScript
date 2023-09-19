for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
// var has global scope and let has local scope it messes up the for loop
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}
