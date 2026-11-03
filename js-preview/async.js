//จำลองการรับข้อมูลจาก server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
    console.log("1) start Loading...");
    await wait(2000);
    console.log("2) Complete");
    // await getUser();
    await postUser();
}

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const users = await response.json();
        console.log(`GET data ${users.length}`);
        users.forEach((u) => console.log(u.id, u.name, "-", u.email));
    } catch (error) {
        console.error("Error Found :", error.message);
    }
}

async function postUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const posts = await response.json();
        console.log(`GET data ${posts.length}`);
        posts.forEach((p) => console.log(p.userId, p.id, p.title, "-", p.body));
    } catch (error) {
        console.error("Error Found :", error.message);
    }
}

demo();
console.log("3) Show Data")