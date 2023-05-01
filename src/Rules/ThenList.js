import React from 'react'
import Then from './Then'

const ThenList = () => {

    // useStates
    const [thens, setThens] = React.useState([{ id: '1', field: 'price', action: { name: 'set to value', group: 'Text' }, values: [''] }])

    // Functions
    const addThen = (e, args = { field: 'all', action: { name: 'do nothing', group: 'all' }, values: [''] }, id) => {
        const n = [...thens]
        const n_id = Date.now()
        const index = n.findIndex(element => element.id == id)
        n.splice(index + 1, 0, { id: n_id.toString(), ...args})
        setThens(n)
    }
    const deleteThen = (id) => {
        const n = [...thens].filter(element => element.id !== id)
        setThens(n)  
    }

    return (
        <>
            {thens.map(obj => { return (<Then key={obj.id} args={obj} addThen={addThen} deleteThen={deleteThen} type={obj.id === '1' ? 'Then' : 'And'} />) })}
        </>
    )
}

export default ThenList