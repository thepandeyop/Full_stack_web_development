class Superhero{
    
    constructor(name){
        this.name = name;
    }
 
    getname(){
return this.name;
    }

    setname(name){
this.name = name;
    }
}

module.exports = new Superhero("batman");

const math = require("./exporting_patterns");
const {add, sub} = math