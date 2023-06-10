"use strict";
/**
 * ## Utility Types
 *
 * In TypeScript, utility types are predefined type transformations provided by the language that allow you to manipulate
 * and transform existing types into new types.
 * These utility types help you write more concise and reusable code by abstracting common type transformations.
 *
 * Below are the commonly used utility type
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
///we want this method to update some of the props, not all. and we can use Partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
/**
 * 2. Required<Type>:
 *  - Constructs a type with all properties of Type set as required.
 *  - It allows you to create a new type with all properties being mandatory.
 */
const recordAssignment = (assign) => {
    // send to database etc.
    return assign;
};
/**
 * 3. Readonly<Type>:
 *  - Constructs a type with all properties of Type set as read-only.
 *  - It makes all properties of the type read-only, preventing them from being modified.
 */
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// if we try to modified the obj assignVerified.grade, it won't work because assignVerified is a readonl prop
// assignVerified.grade = 88
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
/**
 * 4. Record<Keys, Type>:
 *  - Constructs an object type whose keys are `Keys` and values are `Type`.
 *  - It allows you to create a type with a specific set of keys mapped to a particular
 */
const hexoColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    //such that only defined types will be allowed to be signed KEY:Data
    Sara: "B",
    Kelly: "A" //if you assign Kelly: "Z" -> typescript won't allow you because grade Z was not deifined, same with keys
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 95 }
};
const score = {
    studentId: 'EB3/3332/15',
    grade: 45
};
const preview = {
    studentId: 'EB3/3332/15',
    title: 'Final Project',
};
/**
 * 10. ReturnType<Type>:
 */
// type newAssign = { title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generic", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
