import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
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

    return (
        <>
            <Header />
            {isLogin ?
                <Grid container className={styles.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
                      <Grid  item>
                        <Paper className={styles.paper} />
                        1
                      </Grid>
                      <Grid  item>
                        <Paper className={styles.paper} />
                        2
                      </Grid>
                      <Grid  item>
                        <Paper className={styles.paper} />
                        3
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
                :
                <CircularProgress />
            }
        </>
    )
}