import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import ButtonMore from './ButtonMore';
import Or from './Or';

const If = ({args, addIf, deleteIf, type}) => {
    const fields = ['all', 'product_name', 'price', 'logo', 'img', 'description', 'color', 'size', 'height', 'width', 'brand'];
    const conditions = [
        { label: 'contains', group: 'Text' },
        { label: "doesn't contain", group: 'Text' },
        { label: 'is equal to', group: 'Text' },
        { label: 'is not equal to', group: 'Text' },
        { label: 'starts with', group: 'Text' },
        { label: "doen't start with", group: 'Text' },
        { label: 'ends with', group: 'Text' },
        { label: "doesn't end with", group: 'Text' },
        { label: 'is empty', group: 'Text' },
        { label: "isn't empty", group: 'Text' },
        { label: 'lenght exceeds', group: 'Text' },
        { label: "lenght doesn't exceed", group: 'Text' },
        { label: 'word count exceeds', group: 'Text' },
        { label: "word count doesn't exceed", group: 'Text' },
        { label: 'contains any of', group: 'Multiple' },
        { label: "doesn't contain any of", group: 'Multiple' },
        { label: 'is equal to any', group: 'Multiple' },
        { label: "isn't equal to any", group: 'Multiple' },
        { label: 'is greater than', group: 'Number' },
        { label: 'is not greater than', group: 'Number' },
        { label: 'is less than', group: 'Number' },
        { label: 'is less or equal to', group: 'Number' },
        { label: 'is in highest', group: 'Number' },
        { label: 'is in lowest', group: 'Number' },
        { label: 'matches regex', group: 'Advanced' },
        { label: "doesn't matches regex", group: 'Advanced' }
    ]
    const [field, setField] = React.useState(args.field)
    const [condition, setCondition] = React.useState(args.condition)
    const [values, setValues] = React.useState([''])
    const [ors, setOrs] = React.useState([])
    const addOr = () => {
        const u = [...ors]
        const u_id = Date.now()
        u.push({id: u_id.toString(), field: 'all', condition: { label: 'contains', group: 'Text' }, values: ['']})
        setOrs(u)
    }
    const copy = (e) => {
        addIf(e, {field: field, condition: condition, values: values})
    }
    return (
        <>
        <div className={type === 'Or' ? 'or-block' : 'block'}>
            <div className='inputs'>
                <strong style={{ color: '#2196f3' }}>{type}</strong>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={fields}
                    sx={{ width: 300 }}
                    defaultValue={args.field}
                    onChange={(_, value) => setField(value)}
                    renderInput={(params) => <TextField {...params} label="Field" />}
                />
                {field !== 'all' && field && <>
                    <Autocomplete
                        id="grouped-demo"
                        options={conditions}
                        defaultValue={args.condition}
                        groupBy={(condition) => condition.group}
                        getOptionLabel={(condition) => condition.label}
                        isOptionEqualToValue={(condition, value)=> condition.label === value.label}
                        onChange={(_, value) => setCondition(value)}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Condition" />}
                    />
                    {(condition?.label !== 'is empty' && condition?.label !== "isn't empty" && condition) && <TextField multiline={condition.group === 'Multiple'} rows={5} defaultValue={args.values} onChange={(e) => setValues(e.target.value)} placeholder={condition.group === 'Multiple' ? 'Enter one value per line' : 'Value'}></TextField>}
                </>}
            </div>
            <ButtonMore andFunction={addIf} deleteFunction={() => deleteIf(args.id)} copyFunction={copy} orFunction={addOr} first={args.id==='1'}/>
        </div>
        {ors.map(obj => {return (<Or key={obj.id} args={obj}/>)})}
</>
    )
}

export default If