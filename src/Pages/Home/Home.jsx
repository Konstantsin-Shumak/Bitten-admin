import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useGetCurrentUser } from "../../Hooks/useGetCurrentUser";

export const Home = (props) => {

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
                    onClick={props.onLogIn}
                >Log In</Button>
                :
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ExitToAppIcon />}
                    onClick={props.onLogOut}
                >Log Out</Button>}
            {userName}
        </>
    )
}