import React from 'react'
import If from './If'

const IfList = () => {
    
    // useStates
    const [ifs, setIfs] = React.useState([{ id: '1', field: 'all', condition: { label: 'contains', group: 'Text' }, values: [''], ors: [] }])
    
    // Functions
    const addIf = (e, args = {field: 'all', condition: { label: 'contains', group: 'Text' }, values: ['']}, id) => {
        const n = [...ifs]
        const n_id = Date.now()
        const index = n.findIndex(element => element.id == id)
        n.splice(index + 1, 0, { id: n_id.toString(), ...args})
        setIfs(n)
    }
    const deleteIf = (id) => {
        const n = [...ifs].filter(element => element.id !== id)
        setIfs(n)        
    }
    const addOr = (id, args) => {
        const n = [...ifs]
        const index = n.findIndex(element => element.id == id)
        n[index].ors.push(args)
    }

    return (
        <>
            {ifs.map(obj => { return (<If key={obj.id} args={obj} addIf={addIf} deleteIf={deleteIf} type={obj.id === '1' ? 'If' : 'And'}/>) })}
        </>
    )
}

export default IfList