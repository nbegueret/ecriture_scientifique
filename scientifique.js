const allQuestions = [

    // --- Décimal → scientifique ---
    { q: "Écrire 0,000 45 en notation scientifique",
      c: ["45 × 10⁻⁶", "4,5 × 10⁻⁴", "0,45 × 10⁻³", "4,5 × 10⁻³"], a: 1 },

    { q: "Écrire 320 000 en notation scientifique",
      c: ["3,2 × 10⁵", "32 × 10⁴", "0,32 × 10⁶", "3,2 × 10⁶"], a: 0 },

    { q: "Écrire 0,003 2 en notation scientifique",
      c: ["32 × 10⁻⁴", "0,32 × 10⁻²", "3,2 × 10⁻³", "3,2 × 10⁻²"], a: 2 },

    { q: "Écrire 78 000 000 en notation scientifique",
      c: ["7,8 × 10⁷", "78 × 10⁶", "0,78 × 10⁸", "7,8 × 10⁸"], a: 0 },

    { q: "Écrire 0,000 000 92 en notation scientifique",
      c: ["92 × 10⁻⁸", "0,92 × 10⁻⁶", "9,2 × 10⁻⁷", "9,2 × 10⁻⁶"], a: 2 },

    { q: "Écrire 0,006 en notation scientifique",
      c: ["60 × 10⁻⁴", "0,6 × 10⁻²", "6 × 10⁻³", "6 × 10⁻²"], a: 2 },

    { q: "Écrire 0,000 000 004 en notation scientifique",
      c: ["4 × 10⁻⁹", "40 × 10⁻¹⁰", "0,4 × 10⁻⁸", "4 × 10⁻⁸"], a: 0 },

    { q: "Écrire 54 000 en notation scientifique",
      c: ["54 × 10³", "0,54 × 10⁵", "5,4 × 10⁴", "5,4 × 10⁵"], a: 2 },

    { q: "Écrire 0,000 12 en notation scientifique",
      c: ["12 × 10⁻⁵", "0,12 × 10⁻³", "1,2 × 10⁻⁴", "1,2 × 10⁻³"], a: 2 },

    { q: "Écrire 0,000 000 000 7 en notation scientifique",
      c: ["7 × 10⁻¹⁰", "70 × 10⁻¹¹", "0,7 × 10⁻⁹", "7 × 10⁻⁹"], a: 0 },

    // --- Scientifique → décimal ---
    { q: "Quelle valeur correspond à 4,5 × 10⁻³ ?",
      c: ["0,045", "0,000 45", "4,5 × 10⁻²", "0,004 5"], a: 3 },

    { q: "Quelle valeur correspond à 3,2 × 10⁵ ?",
      c: ["3 200", "32 000", "3,2 × 10⁶", "320 000"], a: 3 },

    { q: "Quelle valeur correspond à 7,8 × 10⁷ ?",
      c: ["7 800 000", "780 000 000", "7,8 × 10⁸", "78 000 000"], a: 3 },

    { q: "Quelle valeur correspond à 9,2 × 10⁻⁷ ?",
      c: ["0,000 0092", "0,000 000 0092", "9,2 × 10⁻⁶", "0,000 000 92"], a: 3 },

    { q: "Quelle valeur correspond à 6 × 10⁻³ ?",
      c: ["0,06", "0,000 6", "6 × 10⁻²", "0,006"], a: 3 },

    { q: "Quelle valeur correspond à 4 × 10⁻⁹ ?",
      c: ["0,000 000 04", "0,000 000 000 4", "4 × 10⁻⁸", "0,000 000 004"], a: 3 },

    { q: "Quelle valeur correspond à 5,4 × 10⁴ ?",
      c: ["5 400", "540 000", "5,4 × 10⁵", "54 000"], a: 3 },

    { q: "Quelle valeur correspond à 1,2 × 10⁻⁴ ?",
      c: ["0,0012", "0,000 012", "1,2 × 10⁻³", "0,000 12"], a: 3 },

    { q: "Quelle valeur correspond à 7 × 10⁻¹⁰ ?",
      c: ["0,000 000 007", "0,000 000 07", "7 × 10⁻⁹", "0,000 000 000 7"], a: 3 },

    { q: "Quelle valeur correspond à 8 × 10⁻⁶ ?",
      c: ["0,000 08", "0,000 000 8", "8 × 10⁻⁵", "0,000 008"], a: 3 },

    // --- Mélange réaliste (puissances limitées entre 10⁻¹⁰ et 10¹⁰) ---
    { q: "Écrire 0,000 000 45 en notation scientifique",
      c: ["45 × 10⁻⁸", "0,45 × 10⁻⁶", "4,5 × 10⁻⁷", "4,5 × 10⁻⁶"], a: 2 },

    { q: "Quelle valeur correspond à 9 × 10⁻⁸ ?",
      c: ["0,000 000 9", "0,000 009", "9 × 10⁻⁷", "0,000 000 09"], a: 3 },

    { q: "Écrire 0,000 000 001 en notation scientifique",
      c: ["10 × 10⁻¹⁰", "0,1 × 10⁻⁸", "1 × 10⁻⁹", "1 × 10⁻⁸"], a: 2 },

    { q: "Quelle valeur correspond à 2 × 10⁻⁹ ?",
      c: ["0,000 000 02", "0,000 000 000 2", "2 × 10⁻⁸", "0,000 000 002"], a: 3 },

    { q: "Écrire 0,000 000 000 1 en notation scientifique",
      c: ["10 × 10⁻¹¹", "0,1 × 10⁻⁹", "1 × 10⁻⁹", "1 × 10⁻¹⁰"], a: 3 },

    { q: "Quelle valeur correspond à 4 × 10⁻⁷ ?",
      c: ["0,000 004", "0,000 000 04", "4 × 10⁻⁶", "0,000 000 4"], a: 3 },

    { q: "Écrire 0,000 000 003 en notation scientifique",
      c: ["30 × 10⁻¹⁰", "0,3 × 10⁻⁸", "3 × 10⁻⁹", "3 × 10⁻⁸"], a: 2 },

    { q: "Quelle valeur correspond à 6 × 10⁻⁸ ?",
      c: ["0,000 006", "0,000 000 6", "6 × 10⁻⁷", "0,000 000 06"], a: 3 },

    { q: "Écrire 0,000 000 02 en notation scientifique",
      c: ["20 × 10⁻⁹", "0,2 × 10⁻⁷", "2 × 10⁻⁸", "2 × 10⁻⁷"], a: 2 },

    { q: "Quelle valeur correspond à 5 × 10⁻⁶ ?",
      c: ["0,000 05", "0,000 000 5", "5 × 10⁻⁵", "0,000 005"], a: 3 }
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

  

    


