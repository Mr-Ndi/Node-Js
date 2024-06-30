import { promises } from 'dns';
import doc from 'fs'
import { resolve } from 'path';
import readline from 'readline';

const opera = readline.createInterface({
    Input:process.stdin,
    output: process.stdout
});

function reading() {
    return new Promise((resolve, reject) => {
        doc.readFile('./sample.txt', (err,buffered_datum) => {
            if (err) {
                reject('\n-----------------------------\nMwana harimo akabazo 2. Kuko\t:'+err+'\n-----------------------------');
            }
            else {
                resolve(buffered_datum);
            }
        });
    });
    
}
function writing(Inputs) {
    return new Promise((resolve, reject) => {
        doc.writeFile('./sample.txt',Inputs, (err,buffered_datum) => {
            if (err) {
                reject('\n-----------------------------\nMwana harimo akabazo 2. Kuko\t:'+err+'\n-----------------------------');
            }
            else {
                resolve(buffered_datum);
            }
        });
    });
    
}

async function igihimba_cyandika() {
    try{
        const real_datum = await reading();
        console.log(real_datum.toString())
    }catch(error){
        console.log(new Error()+error)
    }
}

async function igihimba_gisoma() {
    try{
        const real_datum = await reading();
        console.log(real_datum.toString())
    }catch(error){
        console.log(new Error()+error)
    }
}
console.log('\n---------------- Hello, umvax hano hari operation 2 zishoboka 2.------------------------\n');
console.log('I.Reading a file\nII.Writting in a file\n\nSo enter 1 to read or 2 to write pl');
opera.question('Enter your choice (1 or 2): ', (operation) => {
switch (operation) {
    case 1:
        igihimba_cyandika();
        break;
    case 2:
        igihimba_gisoma();
    default:
        console.log('Wowoh brother that operation doen\'t exist check the menu again pls');
        break;
}
})