const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Input a number: ", number => {
    console.log(`The inputted number is ${number}`);

    readline.question("Would you like to add a task to do? (1 for yes, 2 for no): ", answer => {
        if (answer === "1") {
            // Ask for the first task
            readline.question("Write to do task 1: ", task1 => {
                console.log(`Task added: ${task1}`);

                // Ask for the second task
                readline.question("Write to do task 2: ", task2 => {
                    console.log(`Task added: ${task2}`);

                    // Ask for the third task
                    readline.question("Write to do task 3: ", task3 => {
                        console.log(`Task added: ${task3}`);
                        readline.close(); // Close the interface after the last question
                    });
                });
            });
        } else {
            console.log("No task added.");
            readline.close();
        }
    });
});
