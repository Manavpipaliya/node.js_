//hellow world

const os  = require('os');


const os1 =os.arch();  // return arvhitecture of cpu 

console.log(os1);

// give  cpu info 

const cpu =  os.cpus();
console.log(cpu);


const  nn = os.devNull;

console.log(nn);

const end = os.endianness();
console.log(end);

const  memeory=os.totalmem();
console.log(`${memeory/1024/1024/1024}`);


console.log(os.hostname());


console.log(os.release());

console.log(os.type());