index.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get Requests</title>
    <link href="styles.css" rel="stylesheet" />
    <link rel="icon" href="data:;base64,=" />
</head>

<body>
    <div class="container">
        <h1>Games</h1>

        <div class="results">
            <div class="loader"></div>
        </div>
    </div>
    <script src="displayError.js"></script>
    <script src="script.js"></script>
</body>

</html>





script.js

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        //console.log(data);

        const facts = data.results;
        const tags = facts;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < 8; i++) {
            console.log(facts[i].name);
            console.log(facts[i].rating);
            console.log(tags.length);

            resultsContainer.innerHTML += `<div class="results">${facts[i].name} ${facts[i].rating} ${tags.length}</div>`;

        }
    } catch (error) {
        console.log("Unknown error");
        resultsContainer.innerHTML = displayError("Something went wrong calling the API!");
    }

}

getGames();





styles.css

h1 {
    background-color: coral;
}

.results {
    margin: 2rem;
    padding: 2rem;
    max-width: 400px;
    background: rgb(225, 225, 226);
    border: 1px solid rgb(197, 29, 29);
    border-radius: 2rem;
}

.loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid rgb(65, 20, 230);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}





displayError.js

function displayError(message = "Unknown error") {

    return `<div class="error">${message}</div>`;
}

