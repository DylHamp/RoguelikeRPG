var prompt = require('prompt');//using until better understand how to get input from user
let input = "";


export function actionLoop()
{
    //
    // Start the prompt
    //
    prompt.start();

    //
    // Get two properties from the user: username and email
    //
    prompt.get(['input'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  input: ' + result.input);
    input = result.input;
    });
    if(input === "q")//Doesnt work. Dont know why. Pushing off till later.
    {
        console.log("Quit");
    }

}

