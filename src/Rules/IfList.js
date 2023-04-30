import React from 'react'
import If from './If'

const IfList = () => {
    const [ifs, setIfs] = React.useState([{ id: '1', field: 'all', condition: { label: 'contains', group: 'Text' }, values: [''] }])
    const addIf = (e, args = {field: 'all', condition: { label: 'contains', group: 'Text' }, values: ['']}) => {
        const n = [...ifs]
        const n_id = Date.now()
        n.push({ id: n_id.toString(), ...args})
        setIfs(n)
    }
    const deleteIf = (id) => {
        const n = [...ifs].filter(element => element.id !== id)
        setIfs(n)        
    }
    return (
        <>
            {ifs.map(obj => { return (<If key={obj.id} args={obj} addIf={addIf} deleteIf={deleteIf} type={obj.id === '1' ? 'If' : 'And'}/>) })}
        </>
    )
}

export default IfList