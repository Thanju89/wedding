

document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the weddingCard
    var weddingCard = document.getElementById('weddingCard');
    weddingCard.addEventListener('click', function () {
        showControls();
    });

    // Function to show the controls
    function showControls() {
        var controls = document.getElementById('controls');
        if (controls.style.display === "none"){
            controls.style.display = 'block';
        } else {
            controls.style.display = "none";
        }
    }

    // Initial hide controls
    var controls = document.getElementById('controls');
    controls.style.display = 'none';
});

function changeTextColor() {
    var textColor = document.getElementById('textColor').value;
    document.getElementById('weddingCard').style.color = textColor;
}

function changeTextSize() {
    var textSize = document.getElementById('textSize').value + 'px';
    document.getElementById('weddingCard').style.fontSize = textSize;
}

function changeFontFamily() {
    var fontFamily = document.getElementById('fontFamily').value;
    document.getElementById('weddingCard').style.fontFamily = fontFamily;
}
