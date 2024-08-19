

const {readFile  ,writeFile} = require('fs');
const {readFile  ,writeFile} = require('fs').promises;  //no need for util.promisify
const util = require('util');

const readFilePromise = util.promisify(readFile )
const writeFilePromise = util.promisify(writeFile )



const startThroughUtil = async() => {
    try{
        console.log('start');
        const first = await readFilePromise('./content/first.txt' , 'utf-8');
        console.log('between');
        const second = await readFilePromise('./content/second.txt', 'utf-8');

        await writeFilePromise('./content/result-pormisify.txt' , `This is really awesome ${first}`)
        console.log(first);
        console.log(second);
        
    }catch(error){
 console.log(error);
    }
   
}

startThroughUtil()

const getText = (path) => {
    return new Promise((resolve , reject) => {
        readFile(path , 'utf-8' , (error , data) => {
            if(error){
                reject(error)
            }else{
                resolve(data)
            }
        })
    })
}


// getText('./content/first.txt').then((result) => {
//     console.log(result)
// })


// const start = async() => {
//     console.log('start');
//     const first = await getText('./content/first.txt');
//     console.log(first);
// }


const start = async() => {
    try{
        console.log('start');
        const first = await getText('./content/first.txt');
        console.log('between');
        const second = await getText('./content/second.txt');
        console.log(first);
        console.log(second);
        
    }catch(error){
 console.log(error);
    }
   
}


// start()