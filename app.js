const colors = require('colors');

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);




const printProfileData = profileDataArr => {
    console.log("================".magenta);

    profileDataArr.forEach((profileItem) => console.log(profileItem));
};
printProfileData(profileDataArgs);