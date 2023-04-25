import { IconButton, Menu, MenuItem } from '@mui/material'
import { MoreVert, Add, ContentCopy, DeleteOutline } from '@mui/icons-material'
import React from 'react'

const ButtonMore = ({andFunction, orFunction, copyFunction, deleteFunction, first}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='button-more'>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVert color='action' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={andFunction}><Add color='action' />AND</MenuItem>
                <MenuItem onClick={orFunction}><Add color='action' />OR</MenuItem>
                <MenuItem onClick={copyFunction}><ContentCopy color='action' />Copy</MenuItem>
                {!first && <MenuItem onClick={deleteFunction}><DeleteOutline color='action' />Delete</MenuItem>}
            </Menu></div>
    )
}

export default ButtonMore