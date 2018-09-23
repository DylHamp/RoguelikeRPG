let stdin = process.openStdin();
let input = "";

export function actionLoop()
{
    while(input !== "Q")
    {
        console.log("You have entered the choice making loop. BE CAREFUL!!!");

        stdin.addListener("data", function(d) {
            // note:  d is an object, and when converted to a string it will
            // end with a linefeed.  so we (rather crudely) account for that  
            // with toString() and then substring()
            input = d.toString().trim();
            console.log("you entered: [" + input + "]");
        });
    }
}

