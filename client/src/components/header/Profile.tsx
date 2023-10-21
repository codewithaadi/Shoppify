import { useState,useRef } from 'react';

//Material UI
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Typography,
    Menu,MenuItem,styled 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

//CSS
const Component = styled(Menu)`
    margin-top: 5px;
`
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 15px;
`

const Profile = (props:any) => {

    const navigate = useNavigate();
    const anchorRef = useRef(null);
    // State
    const[open,setOpen] = useState(false);

    const handleClick = (e:any)=>{
        anchorRef.current = e.currentTarget; 
        setOpen(e.currentTarget)
    }

    const handleClose = ()=>{
        setOpen(false);
    }

    return (
        <>
            <Box 
             ref={anchorRef} 
            onClick={handleClick}
            ><Typography style={{ marginTop: 3 , cursor:'pointer'}}>{props.user.userName}</Typography></Box>
            <Component anchorEl={anchorRef.current} open={Boolean(open)} onClose={handleClose}>
                <MenuItem onClick={()=>{handleClose(); navigate('/login')}}>
                    <PowerSettingsNewIcon color="primary" fontSize='small'/>
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile;
