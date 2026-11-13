const countryForm = document.querySelector("#countryForm");
const countryInput = document.querySelector("#countryInput");
const message = document.querySelector("#message");
const countryResult = document.querySelector("#countryResult");

countryForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    const countryName = countryInput.value.trim();

    message.textContent = "";
    countryResult.innerHTML = "";

    if (countryName === "") {
        message.textContent = "Please enter a country name.";
        return;
    }

    message.textContent = "Loading country information...";

    try {
       let apiUrl = "https://countries.dev/name/" +
    encodeURIComponent(countryName);

if (countryName.toLowerCase() === "united states" ||
    countryName.toLowerCase() === "usa") {
    apiUrl = "https://countries.dev/alpha/US";
}

const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Unable to find country");
        }

        const data = await response.json();

        const countries = Array.isArray(data) ? data : [data];

        if (countries.length === 0) {
         throw new Error("Country not found");
    }

const country = countries.find(function(item) {
    return item.name.toLowerCase() === countryName.toLowerCase();
}) || countries[0];

       
        const languages = (country.languages || [])
            .map(language => language.name)
            .join(", ");

        const capital = country.capital || "Not available";

        message.textContent = "";

        countryResult.innerHTML = `
            <div class="country-card">
                <h2>${country.name}</h2>
                <img src="${country.flags.png}" alt="Flag of ${country.name}">
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Languages:</strong> ${languages || "Not available"}</p>
            </div>
        `;

    } catch (error) {
        console.log("Actual error:", error);
        message.textContent =
            "Country not found or unable to load data. Please try again.";
    }
});