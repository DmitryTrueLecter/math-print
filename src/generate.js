// Fisher–Yates shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

// Generate unique unordered pairs (treat a×b and b×a as the same)
export function generateRandomUnique(count = 30, min = 2, max = 9) {
    if (min > max) [min, max] = [max, min]

    const pairs = []
    for (let a = min; a <= max; a++) {
        for (let b = a; b <= max; b++) {
            pairs.push([a, b])
        }
    }

    shuffle(pairs)
    const take = Math.min(count, pairs.length)
    const out = []
    for (let i = 0; i < take; i++) {
        const [a, b] = pairs[i]
        out.push({ id: `r-${i}-${a}x${b}`, a, b })
    }
    return out
}

// Generate unique exercises with a fixed left operand (left × b), b ∈ [min..max]
export function generateWithLeft(left, count = 30, min = 2, max = 9) {
    if (!Number.isFinite(left)) throw new Error("left must be a finite number")
    if (min > max) [min, max] = [max, min]

    const rights = []
    for (let b = min; b <= max; b++) rights.push(b)

    shuffle(rights)
    const take = Math.min(count, rights.length)
    const out = []
    for (let i = 0; i < take; i++) {
        const b = rights[i]
        out.push({ id: `l-${i}-${left}x${b}`, a: left, b })
    }
    return out
}

export function generateSeriesWithLeft(left, min = 2, max = 9) {
    if (!Number.isFinite(left)) throw new Error("left must be a finite number")
    if (min > max) [min, max] = [max, min]

    const out = []
    let i = 0
    for (let b = min; b <= max; b++) {
        out.push({ id: `s-${i++}-${left}x${b}`, a: left, b })
    }
    return out
}