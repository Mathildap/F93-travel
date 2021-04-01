console.log("Funkar");
// - - - - - - - - - - USERS - - - - - - - - - - //
import { userArray } from "./userInfo.js";

// - - - - - - - - - - LOCAL STORAGE - - - - - - - - - - //
if (localStorage.getItem("User")) {
    printLoggedInSP();
} else {
    printStartPage();
};

// - - - - - - - - - - STARTPAGE - - - - - - - - - - //
function printStartPage() {
    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", `
    <section class="log-in-page">
    <div class="login-container">
        <div class="input-container">
            <h3>Hello you,<br> logga in först</h3>
            <input type="text" placeholder="Namn" class="input-field" id="uName">
            <input type="password" placeholder="Lösenord" class="input-field" id="pWord">
        </div>
        <div id="errorMsgDiv"></div>
        <button class="login-btn" id="logInBtn">Nu börjar resan</button>
    </div>
    </section>`);
};

// - - - - - - - - - - LOG IN FUNCTION - - - - - - - - - - //
function logIn(users) {
    let uName = document.getElementById("uName").value;
    let pWord = document.getElementById("pWord").value;

    for (let user in users) {
        if(uName == users[user].uName && pWord == users[user].pWord) {
            console.log("rätt login");
            localStorage.setItem("User", uName);
            return;
        };
    };
    const errorMsgDiv = document.getElementById("errorMsgDiv");
    errorMsgDiv.innerHTML = `<p class="error-msg-p">Nääej nu skrev du fel va!</p>`;
};

// - - - - - - - - - - LOGGED IN STARTPAGE - - - - - - - - - - //
function printLoggedInSP() {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="logged-in-sp">
    <header>
        <nav>
            <li class="nav-links" id="planLink">Planering</li>
            <li class="nav-links" id="budgetLink">Budget</li>
            <li class="nav-links" id="photosLink">Bilder</li>
        </nav>
    </header>
    <section class="sp-info">
        <div class="sp-text-box">
            <h3 class="sp-h4">Vaaamos</h3>
            <p class="sp-p">Välkommen till F93´s rese-app!</p>
        </div>
    </section>
    <button id="logOutBtn" class="log-out-btn">Checka ut</button>
    </section>`;
};

// - - - - - - - - - - PRINT NAV-PAGES FUNCTION - - - - - - - - - - //
document.querySelector("main").addEventListener("click", function(evt) {
    printNavPages(evt.target.id);
});

function printNavPages(evtId) {
    switch (evtId) {
        case "logInBtn":
            logIn();
            printLoggedInSP();
        break;
        case "planLink":
            printPlan();
            console.log("printa planering");
        break;
        case "budgetLink":
            printBudget();
            console.log("printa budget");
        break;
        case "photosLink":
            printPhotos();
            console.log("printa bilder");
        break;
        case "logOutBtn":
            logOut();
        break;
    };
};

function printPlan() {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="logged-in-sp">
    <header>
        <nav>
            <li class="nav-links" id="planLink">Planering</li>
            <li class="nav-links" id="budgetLink">Budget</li>
            <li class="nav-links" id="photosLink">Bilder</li>
        </nav>
    </header>
    <section class="sp-info">
        <div class="sp-text-box">
            <h3 class="sp-h4">Vart, När & Hur åker vi</h3>
            <p class="sp-p">OKEEJ, här kan vi samla tankar, förslag och allmän planering kring vår reeeesa!</p>
        </div>
    </section>
    <button id="logOutBtn" class="log-out-btn">Checka ut</button>
    </section>`;
};

function printBudget() {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="logged-in-sp">
    <header>
        <nav>
            <li class="nav-links" id="planLink">Planering</li>
            <li class="nav-links" id="budgetLink">Budget</li>
            <li class="nav-links" id="photosLink">Bilder</li>
        </nav>
    </header>
    <section class="sp-info">
        <div class="sp-text-box">
            <h3 class="sp-h4">Para-planering</h3>
            <p class="sp-p">Lyckas vi göra en budget, kan vi skriva den här. Lyckas vi hålla den, tror inte det.</p>
        </div>
    </section>
    <button id="logOutBtn" class="log-out-btn">Checka ut</button>
    </section>`;
};

function printPhotos() {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="logged-in-sp">
    <header>
        <nav>
            <li class="nav-links" id="planLink">Planering</li>
            <li class="nav-links" id="budgetLink">Budget</li>
            <li class="nav-links" id="photosLink">Bilder</li>
        </nav>
    </header>
    <section class="sp-info">
        <div class="sp-text-box">
            <h3 class="sp-h4">Epic pics</h3>
            <p class="sp-p">Medans vi längtar och väntar in nya minnen för livet, kan vi njuta av några gamla!</p>
        </div>
        <div class="img-slide">Bildspel kommer</div> 
    </section>
    <button id="logOutBtn" class="log-out-btn">Checka ut</button>
    </section>`;
};

// - - - - - - - - - - LOG OUT - - - - - - - - - - //
function logOut() {
    location.reload();
    localStorage.removeItem("User");
};