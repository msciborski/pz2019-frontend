import React from "react";
import { Table, TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";

const VisitList = props => {
    const { visits, isDoctor } = props;

    const dates = visits.map(visit => {
        return {
            ...visit,
            start: new Date(visit.start * 1000),
            end: new Date(visit.end * 1000),
        }
    });

    return (
        <Table>
            <TableHead>
                <TableCell>Start date</TableCell>
                <TableCell>End date</TableCell>
                {
                    isDoctor ?
                        <TableCell>Patient</TableCell>
                    :
                        <TableCell>Doctor</TableCell>
                }
            </TableHead>
            <TableBody>
                {
                    dates.map(visit => (
                        <TableRow>
                            <TableCell>{visit.start.toLocaleString()}</TableCell>
                            <TableCell>{visit.end.toLocaleString()}</TableCell>
                            {
                                isDoctor ?
                                    <TableCell>
                                        {`${visit.patient.name} ${visit.patient.surname}`}
                                    </TableCell>
                                :
                                    <TableCell>
                                        {`${visit.doctor.name} ${visit.doctor.surname}`}
                                    </TableCell>
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export { VisitList };