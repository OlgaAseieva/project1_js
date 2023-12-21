// Promises async/await

let checkConnect = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (Math.random() > 0.5) {
            resolve("Connection established ");
        } else { 
            reject("Connection not established");
        }
    }, 2000);
});


async function Connect() {
    try { 
        let connect = await checkConnect;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

Connect;