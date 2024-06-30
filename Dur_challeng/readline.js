// this is the sample file that was used to learn how to use and manages user inputs

//importing readline module.
import readline from 'readline'
//creating a prompt, its a must.
const prompt = readline.createInterface(process.stdin,process.stdout);
prompt.question("Hey enter the number \t:", (answer) => {
    // console.log(answer)
    process.exit();
})