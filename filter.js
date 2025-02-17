//pang filter ng name length
const name= ["eugene","resthel","millares","dipasupil"];

const shortnames= name.filter(sn => sn.length <= 8);

console.log("Mga short names ", shortnames);


//pang filter ng odd number
const oddnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const oddnumbers = oddnumber.filter(en => en % 2 !== 0);

console.log("Odd Numbers are \n", oddnumbers);

//pang filter ng even number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumber = number.filter(en => en % 2 === 0);

console.log("Even Numbers are \n", evenNumber);


//pang filter ng objects
const valorantagents = [
	{agent: "Sage", type: "Sentinel"},
	{agent: "Brimstone", type: "Smoker"},
	{agent: "Sova", type: "Initiatior"},
];

const type = valorantagents.filter(agent => agent.type === "Sentinel" || agent.type === "Smoker");

console.log(type);


//filter ng students na under 18
const students = [
	{name: "Eugene", age: 22, grade: "B"},
	{name: "CJ", age: 21, grade: "A"},
	{name: "Adrian", age: 23, grade: "C"},
	{name: "Justine", age: 22, grade: "B"},

];

const filteredage = students.filter(ua => ua.age <= 22);

console.log("Yung na filter na age: \n", filteredage);


//multiple conditions naman
const mstudents = [
	{name: "Eugene", age: 22, grade: "B"},
	{name: "CJ", age: 21, grade: "A"},
	{name: "Adrian", age: 23, grade: "C"},
	{name: "Justine", age: 22, grade: "B"},

];

const multiple = mstudents.filter(multiple => multiple.age >= 21 && multiple.grade === "A" );

console.log("yung may age na 21 and above tapos may grade na A: \n", multiple)


//challenge 3: filtering based on string matching
const items = [
	{name: "Laptop", category: "Electronics"},
	{name: "Shirt", category: "Clothing"},
	{name: "Smartphone", category: "Electronics"},
	{name: "Book", category: "Literature"},
	{name: "Tablet", category: "Electronics"},
];

const filter = items.filter(items => items.category === "Electronics" && items.name.toLowerCase().includes("a"));

console.log("items na may electronics tapos meron letter a sa name nila: \n", filter)


//challenge 4: Excluding specific values
const valorantAgents = [
	{name: "Sage", type: "Sentinel" },
	{name: "Brimstone", type: "Smoker" },
	{name: "Viper", type: "Smoker" },
	{name: "Sova", type: "Initiator" },
	{name: "Phoenix", type: "Duelist" },
];

const filtered = valorantAgents.filter(agents => agents.type !== "Sentinel" && (agents.type === "Initiator" || agents.type === "Smoker"));

console.log("return all agents na smoker or initiator", filtered);



//challenge 5: advanced filtering with multiple types
const employees = [
	{name:"Alice", position: "Manager", salary: 60000},
	{name:"Bob", position: "Developer", salary: 55000},
	{name:"Charlie", position: "Intern", salary: 20000},
	{name:"Diana", position: "Manager", salary: 45000},
	{name:"Edward", position: "Developer", salary: 70000},
];

const femployees = employees.filter(employee => employee.salary > 50000 && (employee.position === "Manager" || employee.position === "Developer"));

console.log("Filter ng employee na merong salary na greater than 50,000 tapos dapat manager o kaya developer", femployees);


//challenge 6: complex object filtering
const product = [
	{name: "iphone 12", category: "Electronics", rating: 4.5},	
	{name: "Samsung Galaxy S21", category: "Electronics", rating: 4.3},
	{name: "Wireless Earbuds", category: "Electronics", rating: 4.1},
	{name: "Leather Wallet", category: "Accessories", rating: 3.8},
	{name: "Phone Case", category: "Accessories", rating: 4.0},
	
]; 


const filteredproduct = product.filter(filpro => filpro.name.includes("phone") && (filpro.category === "Electronics" || filpro.rating >= 4));

console.log("electronics, rating of 4, and name includes phone: ", filteredproduct);



//Challenge 7: dynamic filtering based on user input
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const valorantAgentsss = [
	{name: "Sage", type: "Sentinel" },
	{name: "Brimstone", type: "Smoker" },
	{name: "Viper", type: "Smoker" },
	{name: "Sova", type: "Initiator" },
	{name: "Phoenix", type: "Duelist" },
];


readline.question('\nInput an agent type: ', fAgents => {
	const filteredAgents = valorantAgentsss.filter(agents => agents.type.toLowerCase() === fAgents.toLowerCase());

	if (filteredAgents.length > 0) {
	console.log("Found Agent: ", filteredAgents);
	readline.close();
	} else 
		console.log("Not found");
	readline.close();
});


