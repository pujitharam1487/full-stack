//GLOBAL
global.x = 42;
console.log(global.x);


//console
console.log("Hello World");
console.warn("This is a warning");
console.error("This is an error");


// process
console.log("node version:",process.version);
console.log("platform:",process.platform);
console.log("Process ID:",process.pid)
console.log("process.cwd()");



//Buffer
const buf = Buffer.from("pawan");
console.log(buf);
console.log(buf.toString());

//Directory and file
console.log(" Directory Name:", __dirname);
console.log(" File Name:", __filename);

// ⏱️setTimeout
setTimeout(() => {
  console.log("hello, pawan");
}, 10000);



// setInterval

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Interval message #${count}`);
  if (count === 3) {
    clearInterval(intervalId); 
    console.log("Stopped interval");
  }
}, 1000);

