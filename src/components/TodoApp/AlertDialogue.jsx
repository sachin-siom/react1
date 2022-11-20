import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open, ticketData } = props;
    const obj = JSON.parse(JSON.stringify(ticketData));
    var data = JSON.parse(obj.pointDetails.points).map((details, i) => (
        Object.entries(details.points).sort().map(([k, v]) => `${k} | ${v*details.winningMultiplier} `)
    ))
    
    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Ticket Details</DialogTitle>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Ticket Id" variant="outlined" value={obj.pointDetails.ticketId} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-basic" label="Retail Id" variant="outlined" value={obj.pointDetails.retailId} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-basic" label="Total Points" variant="outlined" value={obj.pointDetails.totalPoints} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-basic" label="Deleted" variant="outlined" value={(obj.pointDetails.deleted)?'Yes':'No'} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-basic" label="Ticket Time" variant="outlined" value={obj.pointDetails.creationTime} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="outlined-basic" label="Draw Time" variant="outlined" value={obj.draw} InputProps={{
                    readOnly: true,
                }} />

            </Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                {/*                 <TextareaAutosize
                    variant='outlined'
                    label="Bet No"
                    aria-label="Ticket No"
                    placeholder="Ticket No"
                    value={data}
                /> */}
                <table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <tr style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Bet No</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign': 'center' }}>Qty</th>
                        {/* <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Column 2</th>
                        <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Column 3</th> */}
                    </tr>
                    {data.map((key, val) => {
                        return (
                            key.map((listValues, index) =>
                                <tr key={index}>
                                    <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{listValues.split("|")[0]}</td>
                                    <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{listValues.split("|")[1]}</td>
                                </tr>
                            )
                        )
                    })}
                </table>
            </Box>

        </Dialog>
    );
}

export default function SimpleDialogDemo({ ticketData }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };
    const obj = JSON.parse(ticketData)
    //console.log(typeof obj +" "+JSON.stringify(obj) +" "+ obj.draw);
    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen} style={{ fontSize: '13px', padding: 5, margin: '1px' }}>
                {obj.ticketid}
            </Button>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                ticketData={obj}
            />
        </div>
    );
}
