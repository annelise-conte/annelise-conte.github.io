import {gradeFromMark} from "./grades.js"
// --- Controllers ---
function onConvert() {
    const input = document.getElementById("markInput").value;
    const out = document.getElementById("gradeOut");
    const g = gradeFromMark(input);
        out.textContent = g ?? "Enter a mark from 0 to 100";
    }

    function onReset() {
        document.getElementById("markInput").value = "";
        document.getElementById("gradeOut").textContent =
            "Enter a mark from 0 to 100 to see your grade.";
    }

    // --- Events ---
    document.getElementById("gradeBtn").addEventListener("click", onConvert);
    document.getElementById("resetBtn").addEventListener("click", onReset);
    document.getElementById("markInput").addEventListener("keyup", (e) => {
        if (e.key === "Enter") onConvert();
    });