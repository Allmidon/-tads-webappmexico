document.addEventListener("DOMContentLoaded", function () {
    const greenRange = document.getElementById("greenRange");
    const redRange = document.getElementById("redRange");
    const leftBand = document.getElementById("left-band");
    const rightBand = document.getElementById("right-band");
    const hexCode = document.getElementById("hexCode");

    function updateColors() {
        const greenValue = parseInt(greenRange.value).toString(16).padStart(2, '0');
        const redValue = parseInt(redRange.value).toString(16).padStart(2, '0');
        
        const greenHex = `#00${greenValue}00`;
        const redHex = `#${redValue}0000`;

        leftBand.style.backgroundColor = greenHex;
        rightBand.style.backgroundColor = redHex;

        hexCode.textContent = `${greenHex} - ${redHex}`;
    }

    greenRange.addEventListener("input", updateColors);
    redRange.addEventListener("input", updateColors);

    updateColors(); // Inicializar colores
});
