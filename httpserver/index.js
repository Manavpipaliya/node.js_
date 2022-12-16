// // // const http = require('http');

// // //  const port = process.env.PORT || 6020;

// // //  const server = http.createServer((req, res) =>{
// // //      res.setHeader('content-type', 'text/html');
// // //      reswriteHead(200);

// // //      res.end('<h1>hello world</h1>');

// // //  });


// // //  server.listen(port , "127.0.0.1" , ()=>{
// // //     console.log(`server is running on port ${port}`)
// // //  })


 
// const http= require('http');
// port = process.env.PORT || 3000;

// const server = http.createServer((req, res)=>{
  
//      if(req.url == "/home"){

//         res.end("<h1>hello user welcome to xyz server<h1>");
//         res.statusCode = 200;
//         // res.setHeader('Content-Type', 'text/html');

//      }
//        else  if (req.url == "/contact"){
//         res.end("<h1> hello user this is contact page </h1>");
//         res.setHeader ('content-type', 'text/html');
//         res.statusCode = 200;
//        }

//          else{
//             res.end("<h1>error 404</h1>");
//             res.statusCode = 404;
//             res.setHeader('content-type', 'text/html');
//          }
         

// })

// server.listen ( port , "127.0.0.1" , ()=>{
//     console.log(`server is running on  port ${port}`);

// });



// //  // simple api 


// //   const http = require('http');

// //    const port = process.env.PORT || 6000;

// //    const server = http.createServer((req,res) => {

     

// //      const objdata = JSON.parse(readFile);

      
      


// //   if (req.url =='/api') {

// //     res.end( readFile)
// //     res.writeHead(200);
// //     res.setHeader('content-type', 'application/json');
    
// //  console.log(readFile)
// //   }
// // else {
// //     res.end("<h1>error 404</h1>");
// //     res.statusCode = 404;
// //     res.setHeader('content-type', 'text/html');
// // }
// //    });

// //  server.listen(port , "127.0.0.1" , () =>{
// //     console.log(`server is running on port ${port}`)
// //  });
