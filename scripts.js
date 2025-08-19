function getUser() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];
      console.log(user);

      let result = `
        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
        <h1 class="name">${user.name.first} ${user.name.last}</h1>
        <p class="email"><b>Email:</b> ${user.email}</p>
        <p class="phone"><b>Phone:</b> ${user.phone}</p>
        <p class="address"><b>Address:</b> ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
        <p class="gender"><b>Gender:</b> ${user.gender}</p>
      `;

      const genderDiv = document.getElementById("gender");
      genderDiv.innerHTML = result;

      if (user.gender === "male") {
        const img = genderDiv.querySelector("img");
        img.style.borderRadius = "50%";
        img.style.border = "5px solid steelblue";
      } else if (user.gender === "female") {
        const img = genderDiv.querySelector("img");
        img.style.borderRadius = "50%";
        img.style.border = "5px solid pink";
      } else if (user.gender === "other") {
        const img = genderDiv.querySelector("img");
        img.style.borderRadius = "50%";
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

getUser();

const getUserButton = document.getElementById("getUser");
let value = 0;
getUserButton.addEventListener("click", function (event) {
  event.preventDefault();

  getUser();

  value++;
  console.log("Button clicked " + value + " times");
});
