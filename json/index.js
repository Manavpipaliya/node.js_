 const obj = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    
    }
}
//


 const json = JSON.stringify(obj);

//  console.log(json);

//  console.log(JSON.parse(json));


const fs = require('fs');

 const  file1 = fs.writeFile("1.json", json , (err)=>{
    if(err) throw err;
    console.log("file created");
 })


  console.log(file1);

 

    