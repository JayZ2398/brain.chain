import react from "react";
import TextField from "@material-ui/core/TextField";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import InputAdornment from "@material-ui/core/InputAdornment";
import { WithStyle } from "../../../shared/types";
import SendIcon from "@material-ui/icons/Send";
import { unwrapValueThen } from "../../../shared/js";
import IconButton from "@material-ui/core/IconButton";

import styled from "styled-components";

const Outer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 0 8px;
  place-items: center;
`;

type AddCommentProps = WithStyle & {
  onSubmit: () => void;
  submitDisabled?: boolean;
  value: string | undefined;
  onChange: (x: string | undefined) => void;
  textFieldProps: any;
};

function AddComment({
  onSubmit,
  value,
  onChange,
  submitDisabled,
  textFieldProps,
  ...rest
}: AddCommentProps) {
  return (
    <Outer {...rest}>
      <TextField
        color="secondary"
        value={value}
        onChange={unwrapValueThen(onChange)}
        multiline
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HelpOutlineIcon />
            </InputAdornment>
          ),
        }}
        style={{
          width: "100%",
        }}
        {...textFieldProps}
      />
      <IconButton disabled={submitDisabled} color="secondary" onClick={onSubmit}>
        <SendIcon />
      </IconButton>
    </Outer>
  );
}

export default AddComment;
