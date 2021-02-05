const colors = require('colors');

//Creating array from index 2 of user input
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//print array indexes starting at index 2 nad printing to console
const printProfileData = profileDataArr => {
    console.log("================".magenta);

    profileDataArr.forEach((profileItem) => console.log(profileItem));
};
printProfileData(profileDataArgs);