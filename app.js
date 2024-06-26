"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchGreeting() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
}
fetchGreeting().then((greeting) => {
    console.log(greeting);
});
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
async function simulateTask() {
    console.log("Task started");
    setTimeout(() => {
    }, 1000);
    console.log("Task completed");
}
// Runs the simulateTask function
simulateTask();
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
;
fetchData().then((data) => {
    console.log(data);
});
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        const a = false;
        if (a !== false) {
            resolve("Data fetched succesfully!");
        }
        else {
            reject("Data fetch failed!");
        }
        setTimeout(() => {
        }, 1000);
    });
}
fetchWithError().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
/*Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/
async function fetchdata() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            console.log("fetch data");
            resolve();
        }, 1000);
    });
}
async function processData() {
    return await new Promise((resolve) => {
        setTimeout(() => {
            console.log("process data");
            resolve();
        }, 1000);
    });
}
async function executeData() {
    try {
        const fetchdata = await fetchData();
        console.log(fetchdata);
    }
    catch (error) {
        console.log(error, "error");
    }
}
executeData();
