const minRange = document.getElementById('min-range');
const maxRange = document.getElementById('max-range');
const rangeHighlight = document.getElementById('slider-range');

function updateRange() {
    const min = parseInt(minRange.value);
    const max = parseInt(maxRange.value);
    const minPercent = (min / minRange.max) * 100;
    const maxPercent = (max / maxRange.max) * 100;
    rangeHighlight.style.left = minPercent + '%';
    rangeHighlight.style.width = (maxPercent - minPercent) + '%';
}

minRange.addEventListener('input', () => {
    if (parseInt(minRange.value) > parseInt(maxRange.value) - 500) {
        minRange.value = parseInt(maxRange.value) - 500;
    }
    updateRange();
});

maxRange.addEventListener('input', () => {
    if (parseInt(maxRange.value) < parseInt(minRange.value) + 500) {
        maxRange.value = parseInt(minRange.value) + 500;
    }
    updateRange();
});

updateRange();
