document.addEventListener("DOMContentLoaded", () => {
    const games = [
        {
            name: "Sample Game",
            path: "games/sample-game/index.html"
        },
        {
            name: "Basketball Stars",
            path: "
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
