const searchInput = document.getElementById("searchInput");
const eventCards = document.querySelectorAll(".event-card");

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();

    eventCards.forEach(function (eventCard) {
        const eventName = eventCard
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (eventName.includes(keyword)) {
            eventCard.style.display = "block";
        } else {
            eventCard.style.display = "none";
        }
    });
});