/**
 * ## Utility Types
 * 
 * In TypeScript, utility types are predefined type transformations provided by the language that allow you to manipulate 
 * and transform existing types into new types. 
 * These utility types help you write more concise and reusable code by abstracting common type transformations.
 * 
 * Below are the commonly used utility type
 */

/**
 * 1. Partial<Type>: 
 *  - Constructs a type with all properties of Type set as optional. 
 *  - It allows you to create a new type with some optional properties.
 */

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

///we want this method to update some of the props, not all. and we can use Partial
const updateAssignment  =  (assign: Assignment, propsToUpdate: 
Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}));

const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})

/**
 * 2. Required<Type>: 
 *  - Constructs a type with all properties of Type set as required. 
 *  - It allows you to create a new type with all properties being mandatory. 
 */

const recordAssignment = (assign: Required<Assignment>) : Assignment => {
    // send to database etc.
    return assign
}

/**
 * 3. Readonly<Type>: 
 *  - Constructs a type with all properties of Type set as read-only. 
 *  - It makes all properties of the type read-only, preventing them from being modified. 
 */
const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true} 
// if we try to modified the obj assignVerified.grade, it won't work because assignVerified is a readonl prop
// assignVerified.grade = 88

recordAssignment({...assignGraded, verified: true})

/**
 * 4. Record<Keys, Type>: 
 *  - Constructs an object type whose keys are `Keys` and values are `Type`.
 *  - It allows you to create a type with a specific set of keys mapped to a particular 
 */

const hexoColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

// let's create our own custom types
type Students = "Sara" | 'Kelly'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    //such that only defined types will be allowed to be signed KEY:Data
    Sara: "B",
    Kelly: "A" //if you assign Kelly: "Z" -> typescript won't allow you because grade Z was not deifined, same with keys
}

interface Grades {
    assign1:number,
    assign2:number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 76, assign2: 95}
}


/**
 * 5. Pick<Type, Keys>: 
 *  - Constructs a type by picking the specified properties `Keys` from `Type`.
 *  - It allows you to create a new type with only the selected properties.
 */

type AssignResult =  Pick<Assignment, "studentId" | "grade" >

const score: AssignResult = {
    studentId:'EB3/3332/15',
    grade: 45
}

/**
 * 6. Omit<Type, Keys>: 
 *  - Constructs a type by excluding the specified properties `Keys` from `Type`.
 *  - It allows you to create a new type without the selected properties.
 */

type AssignPreview =  Omit<Assignment, "verified" | "grade" >

const preview: AssignPreview = {
    studentId:'EB3/3332/15',
    title: 'Final Project',
}


/**
 * 7. Exclude<Type, ExcludedUnion>: 
 *  - Constructs a type by excluding from `Type` all union members that are assignable to `ExcludedUnion`.
 *  - It allows you to create a new type by excluding certain union members.
 */

type adjustedGrades = Exclude<LetterGrades, "U">

/**
 * 8. Extract<Type, Union>:  
 *  - Constructs a type by extracting from `Type` all union members that are assignable to `Union`.
 *  - It allows you to create a new type by extracting certain union members.
 */

type highGrades = Extract<LetterGrades, "A" | "B">


/**
 * 9. NonNullable<Type>:  
 */
type AllPossibleGrade = 'Cleo' | 'Jane' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrade>

/**
 * 10. ReturnType<Type>:  
 */
// type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);


/**
 * 11. Parameters<Type>:  
 *     -It allows you to create a tuple
 */

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generic", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);

/**
 * 11. Waited<Type>:  
 *     -Helps us with the `ReturnType` of `Promise`
 *  */
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))