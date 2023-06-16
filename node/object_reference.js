const obj1 ={  // module export
    name: "bruce ",

};
// const obj2 = obj1;
// obj2.name = "lark kent";
// console.log(obj1);
let obj2 = obj1;
obj2 ={  // export
name: "clark kent",
};
console.log(obj1);