import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0",
    },
    header__text: {
        fontSize: "x-large",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    header__authorizator: {
        display: "flex",
        alignItems: "center",
    },
    header__authorizator_text: {
        marginRight: "10px",
    }
});