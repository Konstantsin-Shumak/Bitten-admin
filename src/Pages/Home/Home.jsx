import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useGetCurrentUser } from "../../Hooks/useGetCurrentUser";
import { firebaseAuthAsync } from "../../Services/firebaseAuthAsync";
import { firebaseLogOut } from "../../Services/firebaseLogOut";
import "./Home.css";

export const Home = () => {

    const currentUser = useGetCurrentUser();

    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        setIsLogin(!!currentUser);
        setUserName(currentUser?.displayName)
    }, [currentUser]);

    return (
        <>
            {!isLogin
                ?
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    onClick={firebaseAuthAsync}
                >Log In</Button>
                :
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ExitToAppIcon />}
                    onClick={firebaseLogOut}
                >Log Out</Button>} <br />
            {userName}
        </>
    )
}