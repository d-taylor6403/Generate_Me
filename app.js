const colors = require('colors');
const fs = require('fs');
const generatePage = require('./src/page-template');

//Creating array from index 2 of user input
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

const pageHTML = generatePage(name, github);

fs.writeFile('index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!'.magenta);
});