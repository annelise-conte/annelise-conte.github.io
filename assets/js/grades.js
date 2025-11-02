const bands = [
    { min: 85, label: "High-Distinction" },
    { min: 75, label: "Distinction" },
    { min: 65, label: "Credit" },
    { min: 50, label: "Pass" },
    { min: 0,  label: "Non-Complete" }
];

// --- Pure function ---
export function gradeFromMark(mark) {
    const m = Number(mark);
    if (Number.isNaN(m) || m < 0 || m > 100) return null;
    return bands.find(b => m >= b.min).label;
}