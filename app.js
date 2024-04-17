#! /usr/bin/env node
import inquirer from "inquirer";
async function wordCounter() {
    do {
        let word = await inquirer.prompt({
            name: "counter", type: "input",
            message: "Enter the Paragragh: "
        });
        let whiteSpaces = word.counter.replace(/\s/g, "").length;
        console.log(whiteSpaces);
    } while (true);
}
wordCounter();
