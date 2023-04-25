import { TextField } from '@mui/material'
import React from 'react'

const Name = () => {
  return (
    <div className='block'>
        <TextField label='Rule name'></TextField>
        <TextField label='Description (Optional)' fullWidth></TextField>
    </div>
  )
}

export default Name