import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useGetCurrentUser } from "../../Hooks/useGetCurrentUser";
import { login, logout } from "../../Redux/userSlice";

export const Home = () => {

    const currentUser = useGetCurrentUser();

    const dispatch = useDispatch();

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
                    onClick={() => dispatch(login())}
                >Log In</Button>
                :
                <Button
                    variant="contained"
                    color="default"
                    startIcon={<ExitToAppIcon />}
                    onClick={() => dispatch(logout())}
                >Log Out</Button>}
            {userName}
        </>
    )
}