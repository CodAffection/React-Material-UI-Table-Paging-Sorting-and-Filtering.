import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    //padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5)
  }
}));

export default function Popup(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <Typography varient="h6" component="div">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
