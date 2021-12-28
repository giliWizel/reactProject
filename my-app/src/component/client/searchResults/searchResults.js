import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router';

function createData(name, city, street) {
    return { name, city, street };
}

let rows = [];

export default function SearchResults(props) {
    const { client, job, suggestions } = props;
    const navigate = useNavigate()
    const [sug, setSug] = useState(false)
    const [currentWorker, setCurrentWorker] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {

        suggestions.forEach(element => {
            let suggestion = createData(element.name, element.city, element.street)
            console.log("su", suggestion)
            rows.push(suggestion)

        });
        setSug(true)
    }, [])

    function select(worker) {
        console.log("worker", worker)
        setCurrentWorker(worker)
        handleShow()
        // Http.post('Customer/MyWorker',worker, client,job)
        //         .than(res =>handleShow())
        // })
        //         .catch((err) => {
        //             console.log(err)
        //         })
    }
    function afterClose() {
        handleClose()
        navigate("/", { replace: true });
    }

    return (
        <>
            <h1>תוצאות חיפוש</h1>
            {sug ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">שם העובד</TableCell>
                            <TableCell align="right">כתובת</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="right">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.city} {row.street}</TableCell>
                                <TableCell align="right"><button className='btn btn-primary' type='button' onClick={() => select(row)}>בחר</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> : ''}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>לקוח יקר</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    בקשתך נשלחה לעובד {currentWorker !== null ? currentWorker.name : ''} וממתינה לאישורו
                    בעת אישור העובד תשלח לך הודעה
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={afterClose} variant="primary">הבנתי</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
