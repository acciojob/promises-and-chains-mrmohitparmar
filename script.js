document.getElementById("voteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let age = document.getElementById("age").value.trim();
    let name = document.getElementById("name").value.trim();

    // Validation
    if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
    }

    // Promise Logic
    let checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    });

    // Resolve / Reject Handling
    checkAge
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
