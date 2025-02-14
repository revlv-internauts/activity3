const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("1) Add");
console.log("2) Subtract");
console.log("3) Divide");
console.log("4) Multiply");

readline.question('Please Select an action: ', action => {
	switch(action) {
		
		//eto yung case sa addition
		case "1":
			readline.question ("Enter the first number: ", fnum => {
				readline.question ("Enter the second number: ", snum => {
					const add_result = parseFloat(fnum) + parseFloat(snum);
					console.log(`Result: ${add_result}`);
					readline.close();
				});
			});
			break;

		//eto yung case sa subtract
		case "2":
			readline.question ("Enter the first number: ", fnum => {
				readline.question ("Enter the second number: ", snum => {
					const sub_result = parseFloat(fnum) - parseFloat(snum);
					console.log(`Result: ${sub_result}`);
					readline.close();
				});
			});
			break;

		//eto yung case sa divide 
		case "3":
			readline.question ("Enter the first number: ", fnum => {
				readline.question ("Enter the second number: ", snum => {
					const div_result = parseFloat(fnum) / parseFloat(snum);
					console.log(`Result: ${div_result}`);
					readline.close();
				});
			});
			break;

		//eto yung case sa multiply 
		case "4":
			readline.question ("Enter the first number: ", fnum => {
				readline.question ("Enter the second number: ", snum => {
					const mul_result = parseFloat(fnum) * parseFloat(snum);
					console.log(`Result: ${mul_result}`);
					readline.close();
				});
			});
			break;


		default: 
			console.log("Invalid Input");
			readline.close()


	}
});
