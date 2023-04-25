import React from 'react'
import If from './If'

const IfList = () => {
    const [ifs, setIfs] = React.useState([{ id: '1', field: '', condition: '', values: [''] }])
    const addIf = () => {
        const n = [...ifs]
        const n_id = Date.now()
        n.push({ id: n_id.toString(), field: '', condition: '', values: [''] })
        setIfs(n)
    }
    return (
        <>
            {ifs.map(obj => { return (<If key={obj.id} id={obj.id} addIf={addIf} type={obj.id === '1' ? 'If' : 'And'}/>) })}
        </>
    )
}

export default IfList