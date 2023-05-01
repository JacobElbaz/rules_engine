import React from 'react'
import Name from './Name'
import ThenList from './ThenList'
import { Button } from '@mui/material'
import IfList from './IfList'

const RulesEngine = () => {
    return (
        <>
            <Name />
            <IfList />
            <ThenList />
            <Button variant='contained' sx={{marginTop: '15px'}}>Save Rule</Button>
        </>
    )
}

export default RulesEngine