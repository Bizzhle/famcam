function makephrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase)
}
makephrases()

var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

var output;
var i = 0;
while (i < scores.length) {
    output = "Bubble solution #" + i + "score: " + scores[i];
    console.log(output);
    i = i + 1;
}

/*for (i = 0; i < scores.length; i = i + 1) {
    output = "Bubble solution #" + i + "score: " + scores[i];
    console.log(output);
} -- for loop for above example */

var products = ["choo choo", "Icy Mint", " CAke BAtter", "Bubblegum"];
var hasBubbleGum = [true, false, false, true];
var i = 0;

while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    
    }
    i = i + 1;

}

for (i = 0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    
    }
}

/* var highScore = 0;
var output;

for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubbles score: " + highScore);

var bestSoln = [];

for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSoln.push(i);
    }
}

console.log(bestSoln); */

function getHighScore(scores) {
    var highScore = 0
    var output = 0
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
var highScore = getHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubbles tests: " + highScore);

function getResults(scores, highScore) {
    var bestSoln = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSoln.push(i)
        }
    }
    return bestSoln;
}

var bestSoln = getResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSoln);

function getCostEffectiveSoln(scores, costs, highScore) {
    var cost = 100;
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
} 

var mostCostEffectiveSoln = getCostEffectiveSoln(scores, costs, highScore);
console.log("Bubble Solution #" + 
            mostCostEffectiveSoln + " is the most cost effective");