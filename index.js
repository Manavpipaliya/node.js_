const fs = require('fs');

//  fs.writeFileSync("1.txt", "hello world");



// fs.appendFileSync("1.txt", "hello world , iam manav ");

//   const data =fs.readFileSync ("1.txt" , "utf-8");
//   console.log(data);

//  const rename = fs.renameSync("1.txt", "manav.txt");
//  console.log(rename);


//  const newfolder = fs.mkdirSync("fsAsync");
//  console.log(newfolder);

 // new file in fsAsync folder
 

 
 fs.writeFile( "fsAsync/index.js" , "hello user my name  manav " ,  (err) =>{
      if(err) throw err;
      console.log("file created ");
 })

