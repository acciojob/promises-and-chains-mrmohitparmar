async function vald(e) {
  e.preventDefault(); // stop page reload

  let age = document.getElementById("age").value.trim();
  let name = document.getElementById("name").value.trim();

  // Validate
  if (age === "" || name === "") {
    alert("Please enter valid details");
    return;
  }

  // Promise with delay
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });

  if (age < 18) {
    alert("Oh sorry. You aren't old enough.");
  } else {
    alert("Welcome " + name + "!");
  }
}
