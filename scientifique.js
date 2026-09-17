const allQuestions = [

    // --- Décimal → scientifique ---
    { q: "Écrire 0,000 45 en notation scientifique",
      c: ["4,5 × 10⁻⁴", "0,45 × 10⁻³", "45 × 10⁻⁶", "4,5 × 10⁻³,2"], a: 0 },

    { q: "Écrire 320 000 en notation scientifique",
      c: ["3,2 × 10⁵", "32 × 10⁴", "0,32 × 10⁶", "3,2 × 10⁵,4"], a: 0 },

    { q: "Écrire 0,003 2 en notation scientifique",
      c: ["3,2 × 10⁻³", "32 × 10⁻⁴", "0,32 × 10⁻²", "3,2 × 10⁻²,5"], a: 0 },

    { q: "Écrire 78 000 000 en notation scientifique",
      c: ["7,8 × 10⁷", "78 × 10⁶", "0,78 × 10⁸", "7,8 × 10⁷,1"], a: 0 },

    { q: "Écrire 0,000 000 92 en notation scientifique",
      c: ["9,2 × 10⁻⁷", "92 × 10⁻⁸", "0,92 × 10⁻⁶", "9,2 × 10⁻⁶,8"], a: 0 },

    { q: "Écrire 0,006 en notation scientifique",
      c: ["6 × 10⁻³", "0,6 × 10⁻²", "60 × 10⁻⁴", "6 × 10⁻²,7"], a: 0 },

    { q: "Écrire 0,000 000 004 en notation scientifique",
      c: ["4 × 10⁻⁹", "40 × 10⁻¹⁰", "0,4 × 10⁻⁸", "4 × 10⁻⁸,9"], a: 0 },

    { q: "Écrire 54 000 en notation scientifique",
      c: ["5,4 × 10⁴", "54 × 10³", "0,54 × 10⁵", "5,4 × 10⁴,2"], a: 0 },

    { q: "Écrire 0,000 12 en notation scientifique",
      c: ["1,2 × 10⁻⁴", "12 × 10⁻⁵", "0,12 × 10⁻³", "1,2 × 10⁻³,9"], a: 0 },

    { q: "Écrire 0,000 000 000 7 en notation scientifique",
      c: ["7 × 10⁻¹⁰", "70 × 10⁻¹¹", "0,7 × 10⁻⁹", "7 × 10⁻⁹,8"], a: 0 },

    // --- Scientifique → décimal ---
    { q: "Quelle valeur correspond à 4,5 × 10⁻³ ?",
      c: ["0,004 5", "0,045", "0,000 45", "4,5 × 10⁻²,8"], a: 0 },

    { q: "Quelle valeur correspond à 3,2 × 10⁵ ?",
      c: ["320 000", "32 000", "3 200", "3,2 × 10⁵,7"], a: 0 },

    { q: "Quelle valeur correspond à 7,8 × 10⁷ ?",
      c: ["78 000 000", "7 800 000", "780 000 000", "7,8 × 10⁷,3"], a: 0 },

    { q: "Quelle valeur correspond à 9,2 × 10⁻⁷ ?",
      c: ["0,000 000 92", "0,000 0092", "0,000 000 0092", "9,2 × 10⁻⁶,4"], a: 0 },

    { q: "Quelle valeur correspond à 6 × 10⁻³ ?",
      c: ["0,006", "0,06", "0,000 6", "6 × 10⁻²,5"], a: 0 },

    { q: "Quelle valeur correspond à 4 × 10⁻⁹ ?",
      c: ["0,000 000 004", "0,000 000 04", "0,000 000 000 4", "4 × 10⁻⁸,7"], a: 0 },

    { q: "Quelle valeur correspond à 5,4 × 10⁴ ?",
      c: ["54 000", "5 400", "540 000", "5,4 × 10⁴,1"], a: 0 },

    { q: "Quelle valeur correspond à 1,2 × 10⁻⁴ ?",
      c: ["0,000 12", "0,0012", "0,000 012", "1,2 × 10⁻³,6"], a: 0 },

    { q: "Quelle valeur correspond à 7 × 10⁻¹⁰ ?",
      c: ["0,000 000 000 7", "0,000 000 007", "0,000 000 07", "7 × 10⁻⁹,4"], a: 0 },

    { q: "Quelle valeur correspond à 8 × 10⁻⁶ ?",
      c: ["0,000 008", "0,000 08", "0,000 000 8", "8 × 10⁻⁵,2"], a: 0 },

    // --- Mélange des deux types ---
    { q: "Écrire 0,000 000 000 000 000 45 en notation scientifique",
      c: ["4,5 × 10⁻¹⁶", "45 × 10⁻¹⁷", "0,45 × 10⁻¹⁵", "4,5 × 10⁻¹⁶,2"], a: 0 },

    { q: "Quelle valeur correspond à 3 × 10⁻²¹ ?",
      c: ["0,000 000 000 000 000 000 000 3",
          "0,000 000 000 000 000 000 003",
          "0,000 000 000 000 000 000 000 03",
          "3 × 10⁻²⁰,4"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 000 9 en notation scientifique",
      c: ["9 × 10⁻²⁴", "90 × 10⁻²⁵", "0,9 × 10⁻²³", "9 × 10⁻²³,8"], a: 0 },

    { q: "Quelle valeur correspond à 7 × 10⁻²⁷ ?",
      c: ["0,000 000 000 000 000 000 000 000 000 7",
          "0,000 000 000 000 000 000 000 000 007",
          "0,000 000 000 000 000 000 000 000 000 07",
          "7 × 10⁻²⁶,9"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 000 2 en notation scientifique",
      c: ["2 × 10⁻³⁰", "20 × 10⁻³¹", "0,2 × 10⁻²⁹", "2 × 10⁻²⁹,5"], a: 0 },

    { q: "Quelle valeur correspond à 5 × 10⁻³³ ?",
      c: ["0,000 000 000 000 000 000 000 000 000 000 000 5",
          "0,000 000 000 000 000 000 000 000 000 000 005",
          "0,000 000 000 000 000 000 000 000 000 000 000 05",
          "5 × 10⁻³²,4"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 000 000 000 9 en notation scientifique",
      c: ["9 × 10⁻³⁶", "90 × 10⁻³⁷", "0,9 × 10⁻³⁵", "9 × 10⁻³⁵,7"], a: 0 }
];

// Tirage aléatoire de 20 questions
const questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 20);

let index = 0;
let score = 0;

// Mélange des réponses
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    document.getElementById("progress").textContent =
        `Question ${index + 1} / 20`;

    const q = questions[index];
    document.getElementById("question").textContent = q.q;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    const shuffledChoices = shuffle(q.c.map((choice, i) => ({ choice, index: i })));

    shuffledChoices.forEach(obj => {
        const btn = document.createElement("div");
        btn.className = "choice";
        btn.textContent = obj.choice;
        btn.onclick = () => validate(obj.index);
        choicesDiv.appendChild(btn);
    });
}

function validate(i) {
    if (i === questions[index].a) score++;

    index++;

    if (index < 20) {
        showQuestion();
    } else {
        document.getElementById("question").textContent = "";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("progress").textContent = "";
        document.getElementById("result").innerHTML =
            `Score final : ${score} / 20 <br><br>
             <button onclick="restartQuiz()" class="restart">Recommencer</button>`;
    }
}

function restartQuiz() {
    location.reload();
}

showQuestion();

