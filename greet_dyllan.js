"use strict";
const chalk = require('chalk');

const greet = require('./greet');

var figlet = require('figlet');

figlet.text(greet('Dyllan'), {
	font: 'ANSI Shadow',
    horizontalLayout: 'default',
    verticalLayout: 'default'
},function(err, data){
	if(err){
		console.log('Something went wrong...');
		console.log(err);
		return;
	}	
	console.log(chalk.bgBlack.green(data));
})

