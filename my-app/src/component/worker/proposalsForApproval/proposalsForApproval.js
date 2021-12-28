import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { connect } from 'react-redux'
import { actionsStore } from '../../../redux/actions/actions'
import { SettingsBackupRestoreOutlined } from '@mui/icons-material';

import './proposalsForApproval.css'
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({

    editUserDetails: (token) => dispatch(actionsStore.editUserDetails(token)),

})

function createData(name, date, city, street, buildingNum, floor, ok) {
    return {
        name,
        date,
        city,
        street,
        buildingNum,
        floor,
        ok
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [okJob, setOkJob] = React.useState();
    function ok() {
        debugger
        row.ok = !row.ok
        console.log(row)
        setOkJob(row.ok)
        // Http.post('Cleaner/SetJobStatus',row)
        //         .than(res =>{ res.json()
        //setOkJob(res.job.ok)})
        // })
        //         .catch((err) => {
        //             console.log(err)
        //         })
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" align="right">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.street} {row.buildingNum} {row.floor}</TableCell>
                <TableCell align="right">{row.ok ? 'לא מאושר' : 'מאושר'}</TableCell>
                {row.ok === true ? <TableCell align="right"><button className='btn btn-danger' type='button' onClick={ok}>אישור</button></TableCell>
                    : <TableCell align="right"><button className='btn btn-primary' type='button' onClick={ok}>ביטול</button></TableCell>}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment >
    );
}


Row.propTypes = {
    row: PropTypes.shape({
        street: PropTypes.string.isRequired,
        buildingNum: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        floor: PropTypes.number.isRequired,
        ok: PropTypes.bool.isRequired,
    }).isRequired,
};

const rows = [
    createData('Ice cream sandwich', '237', '9.0', 37, 4.3, 2, true),
    createData('Eclair', 262, 16.0, 24, 6.0, 2, false),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2, true),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default connect(mapStateToProps, mapDispatchToProps)(function ProposalsForApproval(props) {
    const { user, editUserDetails } = props;

    React.useEffect(() => {
        // Http.get('Cleaner/GetJobsForApproval', user)
        //         .than(res => res.data)
        // .then(jobs=>{
        //      jobs.forEach(element => {
        //         let job= createData(element.name, element.date, element.city, element.street, element.buildingNum, element.floor, element.ok)
        //          rows.push(job)
        //      });
        // })
        //         .catch((err) => {
        //             console.log(err)
        //         })
    }, [])

    return (
        <>
            <h1>הצעות עבודה לאישור</h1>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">שם</TableCell>
                            <TableCell align="right">תאריך</TableCell>
                            <TableCell align="right">עיר</TableCell>
                            <TableCell align="right">כתובת</TableCell>
                            <TableCell align="right">סטטוס</TableCell>
                            <TableCell align="right">שינוי סטטוס</TableCell>
                            <TableCell align="right">פרטים נוספים</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
})
