import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import ButtonMore from './ButtonMore';

const Then = ({args, addThen, deleteThen, type}) => {
    
    // Constants
    const fields = ['all', 'product_name', 'price', 'logo', 'img', 'description', 'color', 'size', 'height', 'width', 'brand'];
    const actions = [
        { name: 'set to value', group: 'Text' },
        { name: 'append value', group: 'Text' },
        { name: 'copy value', group: 'Text' },
        { name: 'combine value', group: 'Text' },
        { name: 'search for value', group: 'Text' },
        { name: 'replace value', group: 'Text' },
        { name: 'lookup and replace value', group: 'Text' },
        { name: 'search and replace value', group: 'Text' },
        { name: 'split text', group: 'Text' },
        { name: 'maximum length', group: 'Text' },
        { name: 'modify text', group: 'Text' },
        { name: 'add Google tracking', group: 'Tracking and categories' },
        { name: 'set to Facebook category', group: 'Tracking and categories' },
        { name: 'round number', group: 'Math' },
        { name: 'reformat number', group: 'Math' },
        { name: 'calculate', group: 'Math' },
        { name: 'calculate sum', group: 'Math' },
        { name: 'calculate length', group: 'Math' },
        { name: 'calculate list length', group: 'Math' },
        { name: 'sort list', group: 'List' },
        { name: 'slice list', group: 'List' },
        { name: 'split text to list', group: 'List' },
        { name: 'join list to text', group: 'List' },
        { name: 'duplicate list', group: 'List' },
        { name: 'split items', group: 'Item' },
        { name: 'group items', group: 'Item' },
        { name: 'duplicate items', group: 'Item' },
        { name: 'calculate item group', group: 'Item' }
    ];
    const _all_Actions = [{name: 'do nothing', group: 'all'}, {name: 'exclude', group: 'all'}];

    // useStates
    const [ors, setOrs] = React.useState([])
    const [field, setField] = React.useState(args.field)
    const [action, setAction] = React.useState(args.action)
    const [values, setValues] = React.useState([''])

    // Functions

    const copy = (id) => {
        addThen(undefined, {field: field, action: action, values: values}, id)
    }
    const addOr = () => {

    }

    return (
        <div className='block'>
            <div className='inputs'>
                <strong style={{ color: '#2196f3' }}>{type}</strong>
                take
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={fields}
                    defaultValue={args.field}
                    onChange={(_, value) => setField(value)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Field" />}
                />
                and
                <Autocomplete
                    id="grouped-demo"
                    options={actions}
                    groupBy={(action) => action.group}
                    getOptionLabel={(action) => action.name}
                    defaultValue={args.action}
                    onChange={(_, value) => setAction(value)}
                    isOptionEqualToValue={(action, value)=> action.name === value.name}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Action" />}
                />
            </div>
            <ButtonMore andFunction={(e) => addThen(e,undefined,args.id)} deleteFunction={() => deleteThen(args.id)} copyFunction={() => copy(args.id)} orFunction={addOr} first={args.id==='1'}/>
        </div>
    )
}

export default Then