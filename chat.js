const wordEmojiMap = {
    "woah": "😯",
    "hey": "👋",
    "lol": "😂",
    "like": "👍🏻",
    "congratulation": "🥳",
    "cool":"😎"
};

function checkEnter(event) {
    if (event.key === "Enter") {
        CatchValue();
    }
}

function CatchValue() {
    var inputValue = document.getElementById("name").value;
    var words = inputValue.split(" ");
    var modifiedText = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word in wordEmojiMap) {
            modifiedText += wordEmojiMap[word] + " ";
        } else {
            modifiedText += word + " ";
        }
    }

    var headElement = document.getElementById("head");

    if (headElement.innerText !== "") {
        headElement.innerHTML += "<br>";
    }

    headElement.innerHTML += modifiedText.trim();
    document.getElementById("name").value = "";
}