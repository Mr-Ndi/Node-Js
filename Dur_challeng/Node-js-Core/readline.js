// this is the sample file that was used to learn how to use and manages user inputs

//importing readline module.
import readline from 'readline'
//creating a prompt, its a must.
const prompt = readline.createInterface(process.stdin,process.stdout);
prompt.question("Hey enter the number \t:", (ans) => {
    // console.log(answer)
    const answer = parseInt(ans);
    if (answer < 3) {
        console.log('yes');
    }
    else{
        console.log('no');
    }
    process.exit();
});


