const cardsContainer = document.querySelector(".cards-container");

const viewSwitcher = document.querySelector("#view-switcher");
const viewButtons = document.querySelectorAll(".view-button");
const cardControls = document.querySelector("#card-controls");

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

const languageSwitcher = document.querySelector("#language-switcher");
const languageButtons = document.querySelectorAll("[data-language]");

const pageTitle = document.querySelector("#page-title");
const pageSubtitle = document.querySelector("#page-subtitle");
const footerStatus = document.getElementById("footer-status");
const footerRights = document.getElementById("footer-rights");
const searchLabel = document.querySelector("#search-label");
const descriptionTitle = document.querySelector("#description-title");
const keywordsTitle = document.querySelector("#keywords-title");

const emptyTitle = document.querySelector("#empty-title");
const emptyText = document.querySelector("#empty-text");

let currentLanguage =
    localStorage.getItem("tarot-language") || "ru";

let activeCategory = "All";
let currentCards = tarotCards;
let currentCardIndex = 0;

let currentView =
    localStorage.getItem("tarot-view") || "cards";

/* =========================
   View switcher
   ========================= */

function updateViewButtons() {

    viewButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.view === currentView
        );

    });

}


function setView(view) {

    currentView = view;

    localStorage.setItem(
        "tarot-view",
        currentView
    );

    cardsContainer.classList.toggle(
        "overview-view",
        currentView === "overview"
    );

    cardControls.classList.toggle(
        "is-hidden",
        currentView === "overview"
    );

    updateViewButtons();
}


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        setView(button.dataset.view);

    });

});


/* =========================
   Translations
   ========================= */

const translations = {

    ru: {

        pageTitle: "HUNT: SHOWDOWN",
        pageSubtitle: "Карты Таро",

        searchLabel: "Поиск карт Таро",
        searchPlaceholder:
            "Поиск по названию, эффекту или ключевому слову...",

        description: "Описание",
        keywords: "Ключевые слова",

        emptyTitle: "Карты не найдены",
        emptyText:
            "Попробуйте изменить поисковый запрос или категорию.",

        categories: {
            All: "Все",
            Combat: "Бой",
            Information: "Информация",
            Survival: "Выживание",
            Utility: "Утилиты",
            Buff: "Усиления",
            Traits: "Навыки"
        },

        previous: "Предыдущая карта",
        next: "Следующая карта",
        close: "Закрыть",

        results: {
            one: "карта найдена",
            few: "карты найдено",
            many: "карт найдено"
        },

        footerStatus: "Неофициальный некоммерческий фанатский проект",

        footerRights: "Hunt: Showdown и связанные с ним материалы являются собственностью Crytek GmbH. Этот проект не связан с Crytek и не одобрен компанией.",
    },

    en: {

        pageTitle: "HUNT: SHOWDOWN",
        pageSubtitle: "Tarot Cards",

        searchLabel: "Search Tarot Cards",
        searchPlaceholder:
            "Search by name, effect or keyword...",

        description: "Description",
        keywords: "Keywords",

        emptyTitle: "No cards found",
        emptyText:
            "Try another search or category.",

        categories: {
            All: "All",
            Combat: "Combat",
            Information: "Information",
            Survival: "Survival",
            Utility: "Utility",
            Buff: "Buff",
            Traits: "Traits"
        },

        previous: "Previous card",
        next: "Next card",
        close: "Close",

        results: {
            one: "card found",
            few: "cards found",
            many: "cards found"
        },

        footerStatus: "Unofficial non-commercial fan project",

        footerRights: "Hunt: Showdown and related assets are trademarks and property of Crytek GmbH. This project is not affiliated with or endorsed by Crytek.",
    }
};


/* =========================
   Language
   ========================= */

function getText(value) {
    if (!value) {
        return "";
    }

    if (typeof value === "string") {
        return value;
    }

    return value[currentLanguage] || value.en || "";
}


function getKeywords(card) {
    return card.keywords?.[currentLanguage]
        || card.keywords?.en
        || [];
}


function updateLanguageButtons() {

    languageButtons.forEach(button => {

        const isActive =
            button.dataset.language === currentLanguage;

        button.classList.toggle("active", isActive);

    });
}


function updateInterfaceLanguage() {

    const t = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;

    if (pageTitle) {
        pageTitle.textContent = t.pageTitle;
    }

    if (pageSubtitle) {
        pageSubtitle.textContent = t.pageSubtitle;
    }

    footerStatus.textContent = t.footerStatus;
    footerRights.textContent = t.footerRights;

    if (searchLabel) {
        searchLabel.textContent = t.searchLabel;
    }

    searchInput.placeholder = t.searchPlaceholder;

    if (descriptionTitle) {
        descriptionTitle.textContent = t.description;
    }

    if (keywordsTitle) {
        keywordsTitle.textContent = t.keywords;
    }

    if (emptyTitle) {
        emptyTitle.textContent = t.emptyTitle;
    }

    if (emptyText) {
        emptyText.textContent = t.emptyText;
    }

    modalPrev.setAttribute("aria-label", t.previous);
    modalNext.setAttribute("aria-label", t.next);
    modalClose.setAttribute("aria-label", t.close);

    updateLanguageButtons();
    renderCategoryFilters();

    applyFilters();
}


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        "tarot-language",
        currentLanguage
    );

    updateInterfaceLanguage();
}


languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language =
            button.dataset.language;

        setLanguage(language);

    });

});


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

        const cardElement =
            document.createElement("article");

        cardElement.classList.add("tarot-card");

        const cardName = getText(card.name);
        const cardCategory =
            translations[currentLanguage]
                .categories[card.category];

        const cardEffect =
            getText(card.shortEffect);

        const cardWarning =
            getText(card.warning);

        cardElement.innerHTML = `
            <div class="card-image">
                <img
                    src="images/cards/${card.image}"
                    alt="${cardName} tarot card"
                    loading="lazy"
                    decoding="async"
                >
            </div>

            <div class="card-info">

                <h2>${cardName}</h2>

                <span class="card-category">
                    ${cardCategory}
                </span>

                <p class="card-effect">
                    ${cardEffect}
                </p>

                ${
                    cardWarning
                        ? `<p class="card-warning">${cardWarning}</p>`
                        : ""
                }

            </div>
        `;

        cardsContainer.appendChild(cardElement);

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


function renderCategoryFilters() {

    categoryFilters.innerHTML = "";

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.type = "button";
        button.classList.add("category-button");

        button.textContent =
            translations[currentLanguage]
                .categories[category];

        if (category === activeCategory) {
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
}


/* =========================
   Search helpers
   ========================= */

function normalizeSearchText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


function getCardSearchText(card) {

    const nameText =
        Object.values(card.name || {});

    const effectText =
        Object.values(card.shortEffect || {});

    const descriptionText =
        Object.values(card.description || {});

    const warningText =
        Object.values(card.warning || {});

    const keywordText = [
        ...(card.keywords?.ru || []),
        ...(card.keywords?.en || [])
    ];

    const categoryText = [
        card.category,
        translations.ru.categories[card.category],
        translations.en.categories[card.category]
    ];

    return [
        ...nameText,
        ...categoryText,
        ...effectText,
        ...descriptionText,
        ...warningText,
        ...keywordText
    ]
        .filter(Boolean)
        .join(" ");
}


/* =========================
   Filtering
   ========================= */

function applyFilters() {

    const searchTerm =
        normalizeSearchText(
            searchInput.value.trim()
        );

    const filteredCards =
        tarotCards.filter(card => {

            const matchesCategory =
                activeCategory === "All" ||
                card.category === activeCategory;

            const searchableText =
                normalizeSearchText(
                    getCardSearchText(card)
                );

            const matchesSearch =
                searchTerm === "" ||
                searchableText.includes(searchTerm);

            return matchesCategory && matchesSearch;

        });

    currentCards = filteredCards;

    renderCards(filteredCards);

    updateSearchResults(
        filteredCards.length,
        searchTerm,
        activeCategory
    );
}


/* =========================
   Search results text
   ========================= */

function getRussianCardWord(count) {

    const lastTwo = count % 100;
    const last = count % 10;

    if (
        lastTwo >= 11 &&
        lastTwo <= 14
    ) {
        return "карт найдено";
    }

    if (last === 1) {
        return "карта найдена";
    }

    if (
        last >= 2 &&
        last <= 4
    ) {
        return "карты найдено";
    }

    return "карт найдено";
}


function updateSearchResults(
    count,
    searchTerm,
    category
) {

    if (
        searchTerm === "" &&
        category === "All"
    ) {

        searchResults.textContent = "";

        return;
    }

    if (currentLanguage === "ru") {

        searchResults.textContent =
            `${count} ${getRussianCardWord(count)}`;

        return;
    }

    searchResults.textContent =
        `${count} ${count === 1 ? "card" : "cards"} found`;
}


/* =========================
   Search
   ========================= */

searchInput.addEventListener(
    "input",
    applyFilters
);


/* =========================
   Open modal
   ========================= */

function openModal(card) {

    currentCardIndex =
        currentCards.findIndex(
            currentCard =>
                currentCard.id === card.id
        );

    modalCounter.textContent =
        `${currentCardIndex + 1} / ${currentCards.length}`;

    updateModalNavigation();

    preloadCard(
        currentCards[currentCardIndex - 1]
    );

    preloadCard(
        currentCards[currentCardIndex + 1]
    );

    const cardName =
        getText(card.name);

    const cardCategory =
        translations[currentLanguage]
            .categories[card.category];

    const cardEffect =
        getText(card.shortEffect);

    const cardWarning =
        getText(card.warning);

    const cardDescription =
        getText(card.description);

    modalImage.src =
        `images/large/${card.image}`;

    modalImage.alt =
        `${cardName} tarot card`;

    modalName.textContent =
        cardName;

    modalCategory.textContent =
        cardCategory;

    modalEffect.textContent =
        cardEffect;

    modalWarning.textContent =
        cardWarning;

    modalWarning.classList.toggle(
        "is-visible",
        Boolean(cardWarning)
    );

    modalDescription.textContent =
        cardDescription;


    /* Keywords */

    modalKeywords.innerHTML = "";

    getKeywords(card).forEach(keyword => {

        const keywordElement =
            document.createElement("span");

        keywordElement.classList.add("keyword");

        keywordElement.textContent =
            keyword;

        modalKeywords.appendChild(
            keywordElement
        );

    });


    modal.classList.add("is-open");

    document.body.style.overflow = "hidden";
}


/* =========================
   Modal navigation
   ========================= */

function showCard(index) {

    if (
        index < 0 ||
        index >= currentCards.length
    ) {
        return;
    }

    modalContent.classList.add(
        "is-switching"
    );

    setTimeout(() => {

        currentCardIndex = index;

        openModal(
            currentCards[currentCardIndex]
        );

        modalContent.classList.remove(
            "is-switching"
        );

    }, 150);
}


function updateModalNavigation() {

    modalPrev.disabled =
        currentCardIndex === 0;

    modalNext.disabled =
        currentCardIndex ===
        currentCards.length - 1;
}


function preloadCard(card) {

    if (!card) {
        return;
    }

    const image = new Image();

    image.src =
        `images/large/${card.image}`;
}


/* =========================
   Close modal
   ========================= */

function closeModal() {

    modal.classList.remove(
        "is-open"
    );

    document.body.style.overflow = "";

}


modalPrev.addEventListener(
    "click",
    () => {
        showCard(
            currentCardIndex - 1
        );
    }
);


modalNext.addEventListener(
    "click",
    () => {
        showCard(
            currentCardIndex + 1
        );
    }
);


modalClose.addEventListener(
    "click",
    closeModal
);


/* =========================
   Close modal by clicking outside
   ========================= */

modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {
            closeModal();
        }

    }
);


/* =========================
   Keyboard navigation
   ========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !modal.classList.contains(
                "is-open"
            )
        ) {
            return;
        }

        if (event.key === "Escape") {
            closeModal();
        }

        if (event.key === "ArrowLeft") {
            showCard(
                currentCardIndex - 1
            );
        }

        if (event.key === "ArrowRight") {
            showCard(
                currentCardIndex + 1
            );
        }

    }
);


/* =========================
   Initial render
   ========================= */

setView(currentView);

renderCards(tarotCards);

updateInterfaceLanguage();