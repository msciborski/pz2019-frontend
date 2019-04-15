import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@material-ui/core";

const AvailableVisits = props => {
    const { visits } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date:</TableCell>
                    <TableCell>Time:</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {visits.map(visit => (
                    <TableRow>
                        <TableCell>{visit.toDateString()}</TableCell>
                        <TableCell>{visit.toLocaleTimeString()}</TableCell>
                        <TableCell><Button>Make visit</Button></TableCell>
                    </TableRow>
                    ))}
            </TableBody>
        </Table>
    )
}

export { AvailableVisits };