const showMail = document.getElementById("show-email");


async function randomMail() {
    const response = await axios.get("https://flynn.boolean.careers/exercises/api/random/mail");
    return response.data.response; 
}


async function generateMails(count) {
    const emails = [];
    for (let i = 0; i < count; i++) {
        const email = await randomMail(); 
        if (email) {
            emails.push(email); 
        }
    }
    console.log("Tutte le email:", emails);

    
    showMail.innerHTML = `<ul>${emails.map(email => `<li>${email}</li>`).join("")}</ul>`;

}


generateMails(10);
