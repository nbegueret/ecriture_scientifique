const allQuestions = [
    // --- Transformer en écriture scientifique ---
    { q: "Écrire 0,000 45 en notation scientifique", c: ["4,5 × 10⁻⁴", "4,5 × 10⁻³", "4,5 × 10⁻⁵", "45 × 10⁻⁶"], a: 0 },
    { q: "Écrire 320 000 en notation scientifique", c: ["3,2 × 10⁵", "3,2 × 10⁴", "3,2 × 10⁶", "32 × 10⁴"], a: 0 },
    { q: "Écrire 0,003 2 en notation scientifique", c: ["3,2 × 10⁻³", "3,2 × 10⁻²", "3,2 × 10⁻⁴", "32 × 10⁻⁴"], a: 0 },
    { q: "Écrire 78 000 000 en notation scientifique", c: ["7,8 × 10⁷", "7,8 × 10⁶", "7,8 × 10⁸", "78 × 10⁶"], a: 0 },
    { q: "Écrire 0,000 000 92 en notation scientifique", c: ["9,2 × 10⁻⁷", "9,2 × 10⁻⁶", "9,2 × 10⁻⁸", "92 × 10⁻⁸"], a: 0 },
    { q: "Écrire 0,006 en notation scientifique", c: ["6 × 10⁻³", "6 × 10⁻²", "6 × 10⁻⁴", "0,6 × 10⁻²"], a: 0 },
    { q: "Écrire 0,000 000 004 en notation scientifique", c: ["4 × 10⁻⁹", "4 × 10⁻⁸", "4 × 10⁻¹⁰", "40 × 10⁻¹⁰"], a: 0 },
    { q: "Écrire 54 000 en notation scientifique", c: ["5,4 × 10⁴", "5,4 × 10³", "5,4 × 10⁵", "54 × 10³"], a: 0 },
    { q: "Écrire 0,000 12 en notation scientifique", c: ["1,2 × 10⁻⁴", "1,2 × 10⁻³", "1,2 × 10⁻⁵", "12 × 10⁻⁵"], a: 0 },
    { q: "Écrire 0,000 000 000 7 en notation scientifique", c: ["7 × 10⁻¹⁰", "7 × 10⁻⁹", "7 × 10⁻¹¹", "70 × 10⁻¹¹"], a: 0 },
    { q: "Écrire 0,85 en notation scientifique", c: ["8,5 × 10⁻¹", "8,5 × 10⁰", "8,5 × 10⁻²", "85 × 10⁻²"], a: 0 },
    { q: "Écrire 0,000 008 en notation scientifique", c: ["8 × 10⁻⁶", "8 × 10⁻⁵", "8 × 10⁻⁷", "80 × 10⁻⁷"], a: 0 },
    { q: "Écrire 0,000 000 31 en notation scientifique", c: ["3,1 × 10⁻⁷", "3,1 × 10⁻⁶", "3,1 × 10⁻⁸", "31 × 10⁻⁸"], a: 0 },
    { q: "Écrire 0,004 en notation scientifique", c: ["4 × 10⁻³", "4 × 10⁻²", "4 × 10⁻⁴", "40 × 10⁻⁴"], a: 0 },

    { q: "Écrire 0,000 000 000 002 en notation scientifique", c: ["2 × 10⁻¹²", "2 × 10⁻¹¹", "2 × 10⁻¹³", "20 × 10⁻¹³"], a: 0 },
    { q: "Écrire 0,000 000 000 000 9 en notation scientifique", c: ["9 × 10⁻¹³", "9 × 10⁻¹²", "9 × 10⁻¹⁴", "90 × 10⁻¹⁴"], a: 0 },
    { q: "Écrire 0,000 000 000 000 001 en notation scientifique", c: ["1 × 10⁻¹⁵", "1 × 10⁻¹⁴", "1 × 10⁻¹⁶", "10 × 10⁻¹⁶"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 45 en notation scientifique", c: ["4,5 × 10⁻¹⁶", "4,5 × 10⁻¹⁵", "4,5 × 10⁻¹⁷", "45 × 10⁻¹⁷"], a: 0 },
    { q: "Écrire 0,000 000 000 000 000 000 8 en notation scientifique", c: ["8 × 10⁻¹⁸", "8 × 10⁻¹⁷", "8 × 10⁻¹⁹", "80 × 10⁻¹⁹"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 3 en notation scientifique", c: ["3 × 10⁻²¹", "3 × 10⁻²⁰", "3 × 10⁻²²", "30 × 10⁻²²"], a: 0 },
    { q: "Écrire 0,000 000 000 000 000 000 000 000 9 en notation scientifique", c: ["9 × 10⁻²⁴", "9 × 10⁻²³", "9 × 10⁻²⁵", "90 × 10⁻²⁵"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 7 en notation scientifique", c: ["7 × 10⁻²⁷", "7 × 10⁻²⁶", "7 × 10⁻²⁸", "70 × 10⁻²⁸"], a: 0 },
    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 000 2 en notation scientifique", c: ["2 × 10⁻³⁰", "2 × 10⁻²⁹", "2 × 10⁻³¹", "20 × 10⁻³¹"], a: 0 },

    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 000 000 5 en notation scientifique", c: ["5 × 10⁻³³", "5 × 10⁻³²", "5 × 10⁻³⁴", "50 × 10⁻³⁴"], a: 0 },
    { q: "Écrire 0,000 000 000 000 000 000 000 000 000 000 000 000 9 en notation scientifique", c: ["9 × 10⁻³⁶", "9 × 10⁻³⁵", "9 × 10⁻³⁷", "90 × 10⁻³⁷"], a: 0 },

    // --- Reconnaître l’écriture scientifique ---
    { q: "Quelle valeur correspond à 4,5 × 10⁻³ ?", c: ["0,004 5", "0,045", "0,000 45", "45"], a: 0 },
    { q: "Quelle valeur correspond à 3,2 × 10⁵ ?", c: ["320 000", "32 000", "3 200", "320"], a: 0 },
    { q: "Quelle valeur correspond à 7,8 × 10⁷ ?", c: ["78 000 000", "7 800 000", "780 000 000", "78 000"], a: 0 },
    { q: "Quelle valeur correspond à 9,2 × 10⁻⁷ ?", c: ["0,000 000 92", "0,000 0092", "0,000 000 0092", "0,000 092"], a: 0 },
    { q: "Quelle valeur correspond à 6 × 10⁻³ ?", c: ["0,006", "0,06", "0,000 6", "6"], a: 0 },
    { q: "Quelle valeur correspond à 4 × 10⁻⁹ ?", c: ["0,000 000 004", "0,000 000 04", "0,000 000 000 4", "0,000 004"], a: 0 },
    { q: "Quelle valeur correspond à 5,4 × 10⁴ ?", c: ["54 000", "5 400", "540 000", "54"], a: 0 },
    { q: "Quelle valeur correspond à 1,2 × 10⁻⁴ ?", c: ["0,000 12", "0,0012", "0,000 012", "0,012"], a: 0 },
    { q: "Quelle valeur correspond à 7 × 10⁻¹⁰ ?", c: ["0,000 000 000 7", "0,000 000 007", "0,000 000 07", "0,000 000 000 07"], a: 0 },
    { q: "Quelle valeur correspond à 8,5 × 10⁻¹ ?", c: ["0,85", "8,5", "0,085", "0,0085"], a: 0 },
    { q: "Quelle valeur correspond à 8 × 10⁻⁶ ?", c: ["0,000 008", "0,000 08", "0,000 000 8", "0,008"], a: 0 },
    { q: "Quelle valeur correspond à 3,1 × 10⁻⁷ ?", c: ["0,000 000 31", "0,000 0031", "0,000 000 031", "0,000 000 0031"], a: 0 },
    { q: "Quelle valeur correspond à 4 × 10⁻³ ?", c: ["0,004", "0,04", "0,000 4", "4"], a: 0 },
    { q: "Quelle valeur correspond à 2 × 10⁻¹² ?", c: ["0,000 000 000 002", "0,000 000 000 02", "0,000 000 000 000 2", "0,000 000 000 2"], a: 0 },
    { q: "Quelle valeur correspond à 9 × 10⁻¹³ ?", c: ["0,000 000 000 000 9", "0,000 000 000 009", "0,000 000 000 000 09", "0,000 000 000 09"], a: 0 },
    { q: "Quelle valeur correspond à 1 × 10⁻¹⁵ ?", c: ["0,000 000 000 000 001", "0,000 000 000 000 01", "0,000 000 000 000 000 1", "0,000 000 000 000 000 01"], a: 0 },
    { q: "Quelle valeur correspond à 4,5 × 10⁻¹⁶ ?", c: ["0,000 000 000 000 000 45", "0,000 000 000 000 0045", "0,000 000 000 000 000 045", "0,000 000 000 000 0045"], a: 0 },
    { q: "Quelle valeur correspond à 8 × 10⁻¹⁸ ?", c: ["0,000 000 000 000 000 000 8", "0,000 000 000 000 000 008", "0,000 000 000 000 000 000 08", "0,000 000 000 000 000 008"], a: 0 },
    { q: "Quelle valeur correspond à 3 × 10⁻²¹ ?", c: ["0,000 000 000 000 000 000 000 3", "0,000 000 000 000 000 000 003", "0,000 000 000 000 000 000 000 03", "0,000 000 000 000 000 000 03"], a: 0 },
    { q: "Quelle valeur correspond à 9 × 10⁻²⁴ ?", c: ["0,000 000 000 000 000 000 000 000 9", "0,000 000 000 000 000 000 000 009", "0,000 000 000 000 000 000 000 000 09", "0,000 000 000 000 000 000 000 009"], a: 0 },
    { q: "Quelle valeur correspond à 7 × 10⁻²⁷ ?", c: ["0,000 000 000 000 000 000 000 000 000 7", "0,000 000 000 000 000 000 000 000 007", "0,000 000 000 000 000 000 000 000 000 07", "0,000 000 000 000 000 000 000 000 007"], a: 0 },
    { q: "Quelle valeur correspond à 2 × 10⁻³⁰ ?", c: ["0,000 000 000 000 000 000 000 000 000 000 2", "0,000 000 000 000 000 000 000 000 000 002", "0,000 000 000 000 000 000 000 000 000 000 02", "0,000 000 000 000 000 000 000 000 000 02"], a: 0 },
    { q: "Quelle valeur correspond à 5 × 10⁻³³ ?", c: ["0,000 000 000 000 000 000 000 000 000 000 000 5", "0,000 000 000 000 000 000 000 000 000 000 005", "0,000 000 000 000 000 000 000 000 000 000 000 05", "0,000 000 000 000 000 000 000 000 000 000 005"], a: 0 },
    { q: "Quelle valeur correspond à 9 × 10⁻³⁶ ?", c: ["0,000 000 000 000 000 000 000 000 000 000 000 000 9", "0,000 000 000 000 000 000 000 000 000 000 000 009", "0,000 000 000 000 000 000 000 000 000 000 000 000 09", "0,000 000 000 000 000 000 000 000 000 000 000 009"], a: 0 }
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
        choices
