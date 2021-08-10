import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useGetCurrentUser } from "../../Hooks/useGetCurrentUser";
import { logIn, logOut } from "../../State/userSlice";
import { useStyles } from "./useStyles";

export const Header = () => {

    const currentUser = useGetCurrentUser();

    const dispatch = useDispatch();

    const styles = useStyles();

    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setIsLogin(!!currentUser);
        setUserName(currentUser?.displayName);
    }, [currentUser]);

    return (
        <header className={styles.header}>
            <span className={styles.header__text}>Bitten Admin</span>
            <div className={styles.header__authorizator}>
                <span className={styles.header__authorizator_text}>{userName}</span>
            {!isLogin
                ?
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    onClick={() => dispatch(logIn())}
                >Log In</Button>
                :
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ExitToAppIcon />}
                    onClick={() => dispatch(logOut())}
                >Log Out</Button>}
            </div>
        </header>
    )
}