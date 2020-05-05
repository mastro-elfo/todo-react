import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

export default function ConfirmDialog({
  // Content of `DialogTitle`
  title = "",
  // If array each element is the content of a different `DialogContentText`
  content = "",
  // Content of confirm button
  confirm = "",
  // Content of cancel button
  cancel = "",
  // Confirm callback
  onConfirm = () => {},
  // Cancel callback
  onCancel = () => {},
  // Buttons props
  ConfirmButtonProps = {},
  CancelButtonProps = {},
  // Other props are passed to `Dialog`
  ...other
}) {
  return (
    <Dialog {...other}>
      {!!title && <DialogTitle>{title}</DialogTitle>}
      {!!content && (
        <DialogContent>
          {typeof content === "object" && content.map ? (
            content.map((item, i) => (
              <DialogContentText key={i}>{item}</DialogContentText>
            ))
          ) : (
            <DialogContentText>{content}</DialogContentText>
          )}
        </DialogContent>
      )}
      {(!!confirm || !!cancel) && (
        <DialogActions>
          {!!confirm && (
            <Button
              color="primary"
              variant="contained"
              title="Confirm"
              onClick={onConfirm}
              {...ConfirmButtonProps}
            >
              {confirm}
            </Button>
          )}
          {!!cancel && (
            <Button
              color="secondary"
              title="Cancel"
              onClick={onCancel}
              {...CancelButtonProps}
            >
              {cancel}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,
  confirm: PropTypes.node,
  cancel: PropTypes.node,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  ConfirmButtonProps: PropTypes.object,
  CancelButtonProps: PropTypes.object
};
