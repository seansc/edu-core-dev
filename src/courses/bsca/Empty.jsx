import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

function Empty() {

    return(<div style={{margin:50}}>
        <Divider/>
        <Typography variant="h6" sx={{margin:5}}>
          This lab does not require a solutions guide.
        </Typography>
    </div>);

}

export default Empty;