document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");

            // Create HTML elements to display the JSON data
            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.name;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + data.age;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + data.city;

            // const profElement = document.createElement("p");
            // cityElement.textContent = "City: " + data.city;

           const professionElement = document.createElement("p");
            professionElement.textContent = "Profession: " + data.profession;

            // Append the elements to the "dataDisplay" div
            dataDisplay.appendChild(nameElement);
            dataDisplay.appendChild(ageElement);
            dataDisplay.appendChild(cityElement);
            dataDisplay.appendChild(professionElement)
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});