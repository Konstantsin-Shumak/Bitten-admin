import React, { useEffect, useState } from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CircularProgress } from "@material-ui/core";
import { useGetCurrentUser } from "../../Hooks/useGetCurrentUser";
import { Header } from "../../Components/Header";
import { useStyles } from "./useStyles";

export const Home = () => {

    const currentUser = useGetCurrentUser();

    const [isLogin, setIsLogin] = useState(false);

    const styles = useStyles();

    useEffect(() => {
        setIsLogin(!!currentUser);
    }, [currentUser]);

    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData(682, '16.07.2021', 'roseeeoood', 'roseeeoood', 2),
    ];

    return (
        <>
            <Header />
            {isLogin ?
                <TableContainer component={Paper}>
                <Table className={styles.table} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={styles.tables__header}>Number</TableCell>
                      <TableCell className={styles.tables__header} align="right">LastSeenOn</TableCell>
                      <TableCell className={styles.tables__header} align="right">Nick</TableCell>
                      <TableCell className={styles.tables__header} align="right">NickLowered</TableCell>
                      <TableCell className={styles.tables__header} align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                :
                <CircularProgress />
            }
        </>
    )
}