console.log("Hello")

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
// The first step is to write a function that returns that literal HTML string.

const createStudentComponent = (name, subject, info) => {
    return `
        <div class="student">
            <h1>${name}</h1>
            <section>${subject}</section>
            <aside>
                ${info}
            </aside>
        </div>
    `
}


//  Now you can invoke the function, pass different values into its arguments, and get different output.
// const lissa = createStudentComponent(
//     "Lissa Goforth",
//     "History",
//     "Asks pointless, unrelated questions")

// const courtney = createStudentComponent(
//     "Courtney Seward",
//     "History",
//     "Has completed all homework")

const greg = createStudentComponent(
    "Greg Lawrence",
    "History",
    "Sub-par performance all around")

    // Then you can invoke that function and update the DOM with the HTML string that it returns.

    // Then store a reference to an existing HTML element
const studentContainer = document.querySelector("#container")

// Update its contents with the return value of the function
// studentContainer.innerHTML = createStudentComponent(lissa)
// studentContainer.innerHTML = createStudentComponent(courtney)
// studentContainer.innerHTML = createStudentComponent(greg)
studentContainer.innerHTML = greg


// Now that you have a function that dynamically builds HTML strings based on its input (via arguments),
// now you can iterate the array of students and use the function.

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info
    )
}



