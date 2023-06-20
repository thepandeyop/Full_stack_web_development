function normal(name){
    console.log(`name${name}`);
}
function higher_Order_function(callback){
    const name = "abhishek";
    callback(name);
}
higher_Order_function(normal);