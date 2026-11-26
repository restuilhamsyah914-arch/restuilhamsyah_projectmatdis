
// ==========================================
// MOODIFY
// Created by: Restu Ilhamsyah
// Discrete Mathematics Project
// ==========================================


// 1. NAVIGASI HALAMAN

function showPage(page, button) {

    document.querySelectorAll(".page").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".nav-btn").forEach(item => {
        item.classList.remove("active");
    });

    const selectedPage = document.getElementById(page);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// 2. REKOMENDASI MUSIK

function recommendMusic() {

    const mood = document.getElementById("mood").value;
    const weather = document.getElementById("weather").value;
    const activity = document.getElementById("activity").value;
    const focus = document.getElementById("focus").value;

    // Validasi input

    if (!mood || !weather || !activity || !focus) {
        alert("Silakan lengkapi semua pilihan terlebih dahulu!");
        return;
    }


    // 3. DEFINISI PROPOSISI

    const P = mood === "Senang";
    const Q = weather === "Cerah";
    const R = activity === "Belajar";
    const S = activity === "Olahraga";
    const T = focus === "Ya";


    // 4. OPERASI KONJUNGSI

    const conjunction = P && Q;


    // 5. OPERASI DISJUNGSI

    const disjunction = R || S;


    // 6. MENENTUKAN REKOMENDASI MUSIK

    let genre = "";
    let song = "";
    let description = "";

    if (R && T) {

        genre = "Instrumental / Lo-Fi";
        song = "Lo-Fi Study Beats";

        description =
            "Musik instrumental untuk menemani kegiatan belajar dan membantu menjaga konsentrasi.";

    } else if (S) {

        genre = "Energetic Music";
        song = "Upbeat Workout Music";

        description =
            "Musik energik untuk menemani aktivitas olahraga.";

    } else if (P && Q) {

        genre = "Pop Ceria";
        song = "Feel Good Pop";

        description =
            "Musik ceria untuk menemani suasana hati yang menyenangkan.";

    } else if (mood === "Sedih") {

        genre = "Acoustic / Relaxing";
        song = "Relaxing Acoustic";

        description =
            "Musik santai untuk menemani waktu beristirahat.";

    } else if (mood === "Bersemangat") {

        genre = "Upbeat Music";
        song = "Positive Energy";

        description =
            "Musik dengan irama semangat untuk menemani aktivitasmu.";

    } else {

        genre = "Chill Music";
        song = "Chill Evening";

        description =
            "Musik santai untuk menemani aktivitas sehari-hari.";

    }


    // 7. OPERASI IMPLIKASI

    const V = genre === "Instrumental / Lo-Fi";
    const implication = !T || V;


    // 8. OPERASI BIIMPLIKASI

    const U = activity === "Belajar";
    const biconditional = T === U;


    // 9. OPERASI EKUIVALENSI

    const expression1 = (P && Q) || R;
    const expression2 = (P || R) && (Q || R);
    const equivalence = expression1 === expression2;


    // 10. MENAMPILKAN HASIL

    const result = document.getElementById("result");

    result.innerHTML = `

        <div class="music-card">

            <div class="music-icon">♫</div>

            <div class="music-label">
                YOUR MUSIC RECOMMENDATION
            </div>

            <h2>${genre}</h2>

            <h3>${song}</h3>

            <p>${description}</p>

            <div class="music-info">

                <div class="info-item">
                    <span>😊 Suasana Hati</span>
                    <strong>${mood}</strong>
                </div>

                <div class="info-item">
                    <span>🌤️ Cuaca</span>
                    <strong>${weather}</strong>
                </div>

                <div class="info-item">
                    <span>🎯 Aktivitas</span>
                    <strong>${activity}</strong>
                </div>

                <div class="info-item">
                    <span>🧠 Ingin Fokus</span>
                    <strong>${focus}</strong>
                </div>

            </div>

            <!-- TOMBOL DROPDOWN -->

            <button
                class="logic-toggle"
                onclick="toggleLogic(this)"
                aria-expanded="false">

                <span>🧠 Lihat Hasil Evaluasi Logika</span>
                <span class="arrow">▼</span>

            </button>

            <!-- HASIL EVALUASI TERSEMBUNYI -->

            <div class="logic-details" hidden>

                <h4>Hasil Evaluasi Logika Matematika</h4>

                <div class="logic-result-item">

                    <strong>1. Konjungsi (P ∧ Q)</strong>

                    <p>
                        ${P ? 1 : 0} AND ${Q ? 1 : 0} =
                        <b class="${conjunction ? "true" : "false"}">
                            ${conjunction ? "BENAR" : "SALAH"}
                        </b>
                    </p>

                </div>

                <div class="logic-result-item">

                    <strong>2. Disjungsi (R ∨ S)</strong>

                    <p>
                        ${R ? 1 : 0} OR ${S ? 1 : 0} =
                        <b class="${disjunction ? "true" : "false"}">
                            ${disjunction ? "BENAR" : "SALAH"}
                        </b>
                    </p>

                </div>

                <div class="logic-result-item">

                    <strong>3. Implikasi (T → V)</strong>

                    <p>
                        ${T ? 1 : 0} → ${V ? 1 : 0} =
                        <b class="${implication ? "true" : "false"}">
                            ${implication ? "BENAR" : "SALAH"}
                        </b>
                    </p>

                </div>

                <div class="logic-result-item">

                    <strong>4. Biimplikasi (T ↔ U)</strong>

                    <p>
                        ${T ? 1 : 0} ↔ ${U ? 1 : 0} =
                        <b class="${biconditional ? "true" : "false"}">
                            ${biconditional ? "BENAR" : "SALAH"}
                        </b>
                    </p>

                </div>

                <div class="logic-result-item">

                    <strong>5. Ekuivalensi</strong>

                    <p>
                        Ekspresi 1 = ${expression1 ? 1 : 0}
                        <br>
                        Ekspresi 2 = ${expression2 ? 1 : 0}
                    </p>

                    <b class="${equivalence ? "true" : "false"}">
                        ${equivalence ? "EKUIVALEN" : "TIDAK EKUIVALEN"}
                    </b>

                </div>

                <div class="logic-note">

                    <strong>Keterangan</strong>

                    <p>
                        1 = Benar dan 0 = Salah.
                        Hasil evaluasi diperoleh dari pilihan
                        yang dimasukkan pengguna.
                    </p>

                </div>

            </div>

        </div>

    `;

    result.classList.add("show");

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


// 11. DROPDOWN HASIL EVALUASI

function toggleLogic(button) {

    const details = button.nextElementSibling;

    if (!details) return;

    const isOpen = !details.hidden;

    details.hidden = isOpen;

    button.classList.toggle("open", !isOpen);

    button.setAttribute("aria-expanded", String(!isOpen));

    const label = button.querySelector("span:first-child");

    label.textContent = isOpen
        ? "🧠 Lihat Hasil Evaluasi Logika"
        : "🧠 Sembunyikan Hasil Evaluasi Logika";

}


// 12. GENERATE TABEL EKUIVALENSI

function generateEquivalenceTable() {

    const tableBody = document.getElementById("equivalence-table");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    // Menghasilkan seluruh kombinasi P, Q, dan R

    for (let P = 0; P <= 1; P++) {

        for (let Q = 0; Q <= 1; Q++) {

            for (let R = 0; R <= 1; R++) {

                const expression1 = (P && Q) || R;

                const expression2 = (P || R) && (Q || R);

                const equivalent = expression1 === expression2;

                const row = document.createElement("tr");

                row.innerHTML = `

                    <td>${P}</td>
                    <td>${Q}</td>
                    <td>${R}</td>
                    <td>${expression1 ? 1 : 0}</td>
                    <td>${expression2 ? 1 : 0}</td>

                    <td class="${equivalent ? "true" : "false"}">
                        ${equivalent ? "EKUIVALEN" : "TIDAK"}
                    </td>

                `;

                tableBody.appendChild(row);

            }

        }

    }

}


// 13. INISIALISASI PROGRAM

document.addEventListener("DOMContentLoaded", function () {

    generateEquivalenceTable();

});
