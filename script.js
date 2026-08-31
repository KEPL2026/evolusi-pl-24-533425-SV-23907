const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const eventCards = document.querySelectorAll(".event-card");

function filterEvents() {
    const keyword = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    eventCards.forEach(function (eventCard) {
        const eventName = eventCard
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const eventCategory = eventCard.dataset.category;

        const matchesSearch = eventName.includes(keyword);
        const matchesCategory =
            selectedCategory === "all" ||
            eventCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            eventCard.style.display = "block";
        } else {
            eventCard.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterEvents);
categoryFilter.addEventListener("change", filterEvents);