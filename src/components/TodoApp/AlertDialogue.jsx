import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export interface SimpleDialogProps {
    open: boolean;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, open, ticketData } = props;
    if(!open) return null;
    const obj = JSON.parse(JSON.stringify(ticketData));
    var unflattenData = JSON.parse(obj.pointDetails.points).map((details, i) => (
        Object.entries(details.points).sort().map(([k, v]) => `${k} | ${v*details.winningMultiplier} `)
    ))

    var flattenData = unflattenData.flat(1)
    
    var finalData = [];
    for (var i=0,len=flattenData.length; i<len; i+=3)
        finalData.push(flattenData.slice(i,i+3));
    
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
                <table style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <tr style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Bet No</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign': 'center' }}>Qty</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Bet No</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign': 'center' }}>Qty</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign':'center'}}>Bet No</th>
                    <th style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid', 'textAlign': 'center' }}>Qty</th>
                    </tr>
                    {
                        Object.entries(finalData).map(([key,val]) => {
                            return (
                                <tr>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[0] === undefined)?'':("000"+val[0].split("|")[0]).substring("000"+val[0].split("|")[0].length - 2)}</td>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[0] === undefined)?'':val[0].split("|")[1]}</td>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[1] === undefined)?'':("000"+val[1].split("|")[0]).substring("000"+val[1].split("|")[0].length - 2)}</td>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[1] === undefined)?'':val[1].split("|")[1]}</td>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[2] === undefined)?'':("000"+val[2].split("|")[0]).substring("000"+val[2].split("|")[0].length - 2)}</td>
                                         <td style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid', 'textAlign': 'center' }}>{(val[2] === undefined)?'':val[2].split("|")[1]}</td>     
                                </tr>
                            )
                        })
                    }
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
