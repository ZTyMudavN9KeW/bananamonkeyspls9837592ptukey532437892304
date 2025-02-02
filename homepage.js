document.addEventListener("DOMContentLoaded", () => {
    const games = [
        {
            name: "Basketball Legends",
            path: "basketball-legends-2020.html"
        },
        {
            name: "Basketball Stars",
            path: "basketball-stars.html"
        },
        {
            name: "Crossy Road",
            path: "crossy-road.html"
        },
        {
            name: "Dinosaur Game",
            path: "dinosaur-game.html"
        },
        {
            name: "Drive Mad",
            path: "drive-mad.html"
        },
        {
            name: "Unblocker",
            path: "embedder.html"
        },
        {
            name: "Monkey Mart",
            path: "fiealkdcniealzxkejisdlcowuvuybntrrdx_f_f___________F_F_F_E_____E__S__S________e.html"
        },
        {
            name: "Retro Bowl",
            path: "retro-bowl.html"
        },
        {
            name: "Rocket League",
            path: "rocket-league.html"
        },
        {
            name: "Slope",
            path: "slope.html"
        },
        {
            name: "Snake.io",
            path: "snake-io.html"
        },
        {
            name: "Soccer Legends",
            path: "soccer-legends.html"
        },
        {
            name: "Euro Cup",
            path: "soccer-skills-euro-cup.html"
        },
        {
            name: "Subway Surfers",
            path: "subway-surfers.html"
        },
        {
            name: "Tunnel Rush",
            path: "tunnel-rush.html"
        },
    ];

    const gameList = document.getElementById("game-list");

    games.forEach(game => {
        const gameContainer = document.createElement("div");
        gameContainer.classList.add("game");

        const gameTitle = document.createElement("h3");
        gameTitle.textContent = game.name;

        const gameIframe = document.createElement("iframe");
        gameIframe.src = game.path;
        gameIframe.width = "800";
        gameIframe.height = "600";

        gameContainer.appendChild(gameTitle);
        gameContainer.appendChild(gameIframe);
        gameList.appendChild(gameContainer);
    });
});
