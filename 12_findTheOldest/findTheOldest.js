const findTheOldest = function (people) {
    let currentyear = new Date().getFullYear();
    let sorted = people.map(person => {
        if (!person.yearOfDeath) person.age = currentyear - person.yearOfBirth;
        else person.age = person.yearOfDeath - person.yearOfBirth;
        return (person);
    }).sort((a, b) => a.age - b.age);
    return (sorted[sorted.length - 1]);
};

// Do not edit below this line
module.exports = findTheOldest;
