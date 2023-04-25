import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import ButtonMore from './ButtonMore';

const Then = () => {
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
    const [ors, setOrs] = React.useState([])
    return (
        <div className='block'>
            <div className='inputs'>
                <strong style={{ color: '#2196f3' }}>Then</strong>
                take
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={fields}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Field" />}
                />
                and
                <Autocomplete
                    id="grouped-demo"
                    options={actions}
                    groupBy={(action) => action.group}
                    getOptionLabel={(action) => action.name}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Action" />}
                />
            </div>
            <ButtonMore />
        </div>
    )
}

export default Then