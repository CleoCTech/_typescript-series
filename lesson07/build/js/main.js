"use strict";
/** Index Signatures */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    KRA: 20,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
// what if we want to access the index that's not available from the objec? i.e:
// the object is: to eliminate the possibility of trying to access a key on an object that do not exist.
console.log(todaysTransactions['KRA']); //from our object we don't have 'KRA' as index and typescript is not giving us an error but it's going to return 'undefined'
const student = {
    name: "Doug",
    gpa: 3.5,
    classes: [102, 451]
};
// console.log(student.test); //trying to access the prop that do not exist
for (const key in student) {
    //we can use key assertion of the object to loop through the keys as were defined during creation
    console.log(`${key}: ${student[key]}`);
}
//this example demonstrates more on this key
Object.keys(student).map(key => {
    /**
     * We just have an object `student` and we assume we do not know the type
     * we are reteiving the type of the object by referencing the object itself
     * without knowing the keys and object type, we are able to access the object data using key assertions and object typeof
     */
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'gpa');
const monthyIncomes = {
    salary: 1000,
    bonus: 200,
    sidehustle: 500,
};
for (const revenue in monthyIncomes) {
    /**
     * When you use Record utility type instead of providing an index signature, you still going have to access keyof
     */
    console.log(monthyIncomes[revenue]);
}
