const cardsContainer = document.querySelector(".cards-container");

const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const categoryFilters = document.querySelector("#category-filters");

const emptyState = document.querySelector("#empty-state");

const modalPrev = document.querySelector(".modal-prev");
const modalNext = document.querySelector(".modal-next");
const modalCounter = document.querySelector("#modal-counter");
const modal = document.querySelector("#card-modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

const modalImage = document.querySelector("#modal-card-image");
const modalName = document.querySelector("#modal-card-name");
const modalCategory = document.querySelector("#modal-card-category");
const modalEffect = document.querySelector("#modal-card-effect");
const modalWarning = document.querySelector("#modal-card-warning");
const modalDescription = document.querySelector("#modal-card-description");
const modalKeywords = document.querySelector("#modal-card-keywords");

let activeCategory = "All";

let currentCards = tarotCards;
let currentCardIndex = 0;

/* =========================
   Render cards
   ========================= */

function renderCards(cards) {

    cardsContainer.innerHTML = "";


    if (cards.length === 0) {

        emptyState.classList.add("is-visible");

        return;

    }


    emptyState.classList.remove("is-visible");


    cards.forEach(card => {

        const cardElement = document.createElement("article");

        cardElement.classList.add("tarot-card");

        cardElement.innerHTML = `
            <div class="card-image">
                <img
                    src="images/cards/${card.image}"
                    alt="${card.name} tarot card"
                    loading="lazy"
                    decoding="async"
                >
            </div>

            <div class="card-info">
                <h2>${card.name}</h2>

                <span class="card-category">
                    ${card.category}
                </span>

                <p class="card-effect">
                    ${card.shortEffect}
                </p>

                ${
                    card.warning
                        ? `<p class="card-warning">${card.warning}</p>`
                        : ""
                }
            </div>
        `;

        cardsContainer.appendChild(cardElement);


        /* Open modal */

        cardElement.addEventListener("click", () => {
            openModal(card);
        });

    });
}


/* =========================
   Category filters
   ========================= */

const categories = [
    "All",
    "Combat",
    "Information",
    "Survival",
    "Utility",
    "Buff",
    "Traits"
];


categories.forEach(category => {

    const button = document.createElement("button");

    button.type = "button";
    button.classList.add("category-button");

    button.textContent = category;

    if (category === "All") {
        button.classList.add("active");
    }


button.addEventListener("click", () => {

    activeCategory = category;


    if (category === "All") {
        searchInput.value = "";
    }


        document
            .querySelectorAll(".category-button")
            .forEach(button => {
                button.classList.remove("active");
            });


        button.classList.add("active");

        applyFilters();

    });


    categoryFilters.appendChild(button);

});


/* =========================
   Filtering
   ========================= */

function applyFilters() {

    const searchTerm = searchInput.value
        .trim()
        .toLowerCase();


    const filteredCards = tarotCards.filter(card => {


        /* Category filter */

        const matchesCategory =
            activeCategory === "All" ||
            card.category === activeCategory;


        /* Search filter */

        const searchableText = [
            card.name,
            card.category,
            card.shortEffect,
            card.description,
            ...card.keywords
        ]
            .join(" ")
            .toLowerCase();


        const matchesSearch =
            searchTerm === "" ||
            searchableText.includes(searchTerm);


        return matchesCategory && matchesSearch;

    });


    currentCards = filteredCards;

    renderCards(filteredCards);


    /* Results text */

    if (
        searchTerm === "" &&
        activeCategory === "All"
    ) {

        searchResults.textContent = "";

    } else {

        searchResults.textContent =
            `${filteredCards.length} card${filteredCards.length === 1 ? "" : "s"} found`;

    }

}


/* =========================
   Search
   ========================= */

searchInput.addEventListener("input", applyFilters);


/* =========================
   Open modal
   ========================= */

function openModal(card) {

    currentCardIndex = currentCards.findIndex(
      currentCard => currentCard.id === card.id
    );

    modalCounter.textContent =
    `${currentCardIndex + 1} / ${currentCards.length}`;

    updateModalNavigation();

    preloadCard(currentCards[currentCardIndex - 1]);
    preloadCard(currentCards[currentCardIndex + 1]);

    modalImage.src = `images/large/${card.image}`;
    modalImage.alt = `${card.name} tarot card`;

    modalName.textContent = card.name;
    modalCategory.textContent = card.category;
    modalEffect.textContent = card.shortEffect;
    modalWarning.textContent = card.warning || "";
    modalWarning.classList.toggle("is-visible", Boolean(card.warning));
    modalDescription.textContent = card.description;


    /* Keywords */

    modalKeywords.innerHTML = "";


    card.keywords.forEach(keyword => {

        const keywordElement = document.createElement("span");

        keywordElement.classList.add("keyword");

        keywordElement.textContent = keyword;

        modalKeywords.appendChild(keywordElement);

    });


    modal.classList.add("is-open");

}

function showCard(index) {
    if (index < 0 || index >= currentCards.length) {
        return;
    }

    modalContent.classList.add("is-switching");

    setTimeout(() => {
        currentCardIndex = index;
        openModal(currentCards[currentCardIndex]);

        modalContent.classList.remove("is-switching");
    }, 150);
}

function updateModalNavigation() {
    modalPrev.disabled = currentCardIndex === 0;
    modalNext.disabled =
        currentCardIndex === currentCards.length - 1;
}

function preloadCard(card) {
    if (!card) {
        return;
    }

    const image = new Image();

    image.src = `images/large/${card.image}`;
}

/* =========================
   Close modal
   ========================= */

function closeModal() {

    modal.classList.remove("is-open");

}


modalPrev.addEventListener("click", () => {
    showCard(currentCardIndex - 1);
});

modalNext.addEventListener("click", () => {
    showCard(currentCardIndex + 1);
});

modalClose.addEventListener("click", closeModal);


/* =========================
   Close modal by clicking outside
   ========================= */

modal.addEventListener("click", event => {

    if (event.target === modal) {
        closeModal();
    }

});


/* =========================
   Close modal with Escape
   ========================= */

document.addEventListener("keydown", event => {
    if (!modal.classList.contains("is-open")) {
        return;
    }

    if (event.key === "Escape") {
        closeModal();
    }

    if (event.key === "ArrowLeft") {
        showCard(currentCardIndex - 1);
    }

    if (event.key === "ArrowRight") {
        showCard(currentCardIndex + 1);
    }
});


/* =========================
   Initial render
   ========================= */

renderCards(tarotCards);