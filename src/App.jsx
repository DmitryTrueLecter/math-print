import React, {useEffect, useState} from 'react'
import {generateRandomUnique, generateWithLeft, generateSeriesWithLeft} from './generate.js'

function Group({items}) {
    return (
        <div className="group">
            <div className="cells">
                {items.map((it) => (
                    <div className="cell" key={it.id}>
                        <span className="expr">{it.a} × {it.b} =</span>
                        <span className="blank"></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function App() {
    const [left, setLeft] = useState(null)
    const [groups, setGroups] = useState([])

    useEffect(() => {
        // Params
        const MIN = 2
        const MAX = 9
        const LIMIT = MAX - MIN + 1;

        // Pick left once
        const l = Math.floor(Math.random() * LIMIT) + MIN
        setLeft(l)

        // 6 groups
        const g1 = generateSeriesWithLeft(l, MIN, MAX)
        const g2 = generateWithLeft(l, LIMIT, MIN, MAX)
        const g3 = generateWithLeft(l, LIMIT, MIN, MAX)
        const g4 = generateRandomUnique(LIMIT, MIN, MAX)
        const g5 = generateRandomUnique(LIMIT, MIN, MAX)
        const g6 = generateRandomUnique(LIMIT, MIN, MAX)

        setGroups([g1, g2, g3, g4, g5, g6])
    }, [])

    function handlePrint() {
        window.print()
    }

    return (
        <div className="container">
            <header className="toolbar no-print">
                <button onClick={handlePrint}>Распечатать</button>
            </header>

            <main>
                <section className="sheet">
                    <div className="groups">
                        {groups.map((items, i) => (
                            <React.Fragment key={`wrap-${i}`}>
                                <Group items={items}/>
                                {i === 2 && <hr className="row-sep"/>}
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
