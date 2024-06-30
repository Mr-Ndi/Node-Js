import { promises } from 'dns';
import doc from 'fs'
import { resolve } from 'path';
import readline from 'readline';

const prompt = readline.createInterface(process.stdin, process.stdout);

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

async function igihimba_cyandika(input) {
    try{
        const real_datum = await writing(input);
        console.log('---------------------------------\nFile sample.txt was Updated sucessfully, you can read it for checking\n---------------------------------')
    }catch(error){
        console.log(new Error()+error)
    }
    finally{
        prompt.close();
    }
}

async function igihimba_gisoma() {
    try{
        const real_datum = await reading();
        console.log('------------- The file Contains --------------------\n'+real_datum.toString()+'\n---------------------------------')
    }catch(error){
        console.log(new Error()+error)
    }
    finally{
        prompt.close();
    }
}

// --------------------------------------------------------------------------
console.log('\n---------------- Hello, umvax hano hari operation 2 zishoboka 2.------------------------\n');
console.log('I.Reading a file\nII.Writting in a file\n');
prompt.question('So enter your choice pls [1 to read or 2 to write ]: ', (operation) => {
    const choice = parseInt(operation);

    if (choice === 1) {
        igihimba_gisoma()
    } else if (choice === 2) {
        prompt.question('---------------------------------\nThen if u choosed to write, What is the content to be written on file\t:',(input) =>{
            console.log('---------------------------------\n');
                        igihimba_cyandika(input);
                    });
    }
    else {
        console.log('Wowoh brother that operation doen\'t exist check the menu again pls');
    }

});
