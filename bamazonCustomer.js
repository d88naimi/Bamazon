var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  runSearch();
  
});

// global var to hold user's total
var total = 0;
// function to display Inventory
var runSearch = function() {

	// initial display of inventory
	displayInventory();
// question and promts
  inquirer.prompt([
  {
    name: "itemPicked",
    message: "Choose an item to purchase ID#",

  },
   {
    name: "howMany",
    message: "Quantity?",
  }
  ]).then(function(answer) {

  	var item = answer.itemPicked;
  	var quantity = answer.howMany;

    //console.log("I:"+item);
    //console.log("Q:"+quantity);

    var query = "SELECT stockQuantity FROM products WHERE ?";

    connection.query(query,{ itemID : item }, function(err, res) {

      console.log("In Stock:"+res[0].stockQuantity);

      if (parseInt(res[0].stockQuantity) >= parseInt(quantity)){

        processOrder(item, quantity);

      }
      else{

      console.log("Not enough inventory to complete your order");
      runSearch();

      }
    
    });

  });
};


function processOrder(item, quantity){

    var query = "SELECT * FROM products WHERE ?";

    item = parseInt(item);

    connection.query(query,{ itemID : item }, function(err, res) {
      
      var pricePerItem = res[0].price;
      var newQuantity = res[0].stockQuantity- quantity;
      var totalAdded = pricePerItem *quantity;

      console.log("ADDED TO CART- "+quantity+" "+res[0].productName+" ="+"$"+totalAdded);

      total =+ totalAdded;

      updateCart(total);

      updateInventory(item, newQuantity);

    });
};


function updateInventory(item, newQuantity){

 var query = "UPDATE products SET ? WHERE ?";

    connection.query(query,[{stockQuantity: newQuantity },{ itemID : item }], function(err, res) {

    if(err) throw err;

      console.log("items successfully updated from DB");
    });
};


function updateCart(total){

  inquirer.prompt(
   {
    type: "list",
    name: "keepShopping",
    message: "Would you like to keep shopping?",
    choices: ["KEEP SHOPPING!", "CHECK OUT"]
  }
  ).then(function(answer){

    if(answer.keepShopping === "KEEP SHOPPING!"){

        runSearch();

    }else{

      console.log("YOUR TOTAL IS: $"+ total);
      total = 0;
      return false;
    }

  });
};


function displayInventory(){

	 var query = "SELECT * FROM products";

    connection.query(query, function(err, res) {

    	
      	console.log("|||||| Products & Inventory |||||");
      	

      for (var i = 0; i < res.length; i++) {

		console.log("ID #"+res[i].itemID+": " + res[i].productName + " -- Price: $" + res[i].price);

      };

    });
};
