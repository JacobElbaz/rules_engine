import React from 'react'
import Name from './Name'
import If from './If'
import Then from './Then'
import { Button } from '@mui/material'
import IfList from './IfList'

const RulesEngine = () => {
    return (
        <>
            <Name />
            <IfList />
            <Then />
            <Button variant='contained' sx={{marginTop: '15px'}}>Save Rule</Button>
        </>
    )
}

export default RulesEngine