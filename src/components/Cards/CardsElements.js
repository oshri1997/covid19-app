import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    margin: "50px 0 ",
    width: "60vw",
  },
  card: {
    margin: "0 2%",
    width: "33%",
  },
  infected: {
    borderBottom: "10px solid rgba(255, 15, 15, 0.5)",
  },
  recoverd: {
    borderBottom: "10px solid rgba(0, 158, 42, 0.5)",
  },
  deaths: {
    borderBottom: "10px solid rgba(0, 0, 0, 0.5)",
  },
});

export default useStyles;
