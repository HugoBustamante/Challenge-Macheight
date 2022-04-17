import fetch from "node-fetch"; import readline from 'readline'; import { stdin as input, stdout as output } from 'node:process';

//Function to create the list of pairs player
function printPlayers(){
fetch('https://mach-eight.uc.r.appspot.com')// Fetch
.then(response => response.json())
.then(({values}) => {// Values of the APi
    const read = readline.createInterface({input,output}); //readline is used to input and output data
    read.question("Inserte el numero deseado: ", (num) =>{ // Users add a number here
        const number = Number.parseInt(num);// capture us that number
        const pairs = [];//Array to add player pairs
        for (let i = 0; i < values.length; i++) {//here we going to tour since the first position of the players
            for (let j = i + 1; j < values.length; j++) {//with this for we going to tour the followings players to compare
               //the height of players is added:
                const h1 = Number.parseInt(values[i].h_in);
                const h2 = Number.parseInt(values[j].h_in)
                h1 + h2 == number? pairs.push([values[i], values[j]]): null;//Ternary conditional. check the addition of the heights and add to the array
            }
        }
        if(pairs.length === 0 ){ //if the array is empty
            console.log("No matches found")
            read.close()
        }else{ //if not, then we print the list of player pairs
            console.log(pairs);
            read.close()
        }
    });
}).catch(error=> console.log("Error"+ error));
}
printPlayers();
