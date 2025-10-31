// Create random multiplication exercises
export function generateExercises(count = 30, min = 2, max = 9) {
    const out = []
    for (let i = 0; i < count; i++) {
        const a = Math.floor(Math.random() * (max - min + 1)) + min
        const b = Math.floor(Math.random() * (max - min + 1)) + min
        out.push({ id: `${i}-${a}x${b}`, a, b })
    }
    return out
}
