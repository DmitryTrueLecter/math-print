import React, { useEffect, useState } from 'react'
import { generateExercises } from './generate.js'

export default function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        // Generate exercises on mount
        setItems(generateExercises(30, 2, 9))
    }, [])

    function handlePrint() {
        // Open print dialog
        window.print()
    }

    return (
        <div className="container">
            <header className="toolbar no-print">
                <h1>Задания по таблице умножения</h1>
                <button onClick={handlePrint}>Распечатать</button>
            </header>

            <main>
                <section className="sheet">
                    <div className="grid">
                        {items.map((it) => (
                            <div className="cell" key={it.id}>
                                <span className="expr">{it.a} × {it.b} =</span>
                                <span className="blank"></span>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}
