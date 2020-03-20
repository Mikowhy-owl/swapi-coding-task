import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

const CustomDialog = props => {
  return (
    <Dialog
      open={props.openDialog}
      keepMounted
      onClose={props.handleCloseDialog}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <DialogContent>
        <DialogContentText className={props.classes.dialogText}>
          {props.dialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleCloseDialog}
          color='secondary'
          variant='contained'
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CustomDialog;
