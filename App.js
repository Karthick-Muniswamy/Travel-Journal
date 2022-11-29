import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Journal from './components/Journal'
import data from './data'

function App(){
    const cards = data.map(item => {
        return (
            <Journal
                key={item.id}
                item={item}
            />)
        })
    return (
        <div>
            <Navbar />
            <section>
                {cards}
            </section>
        </div>
    )
}

export default App