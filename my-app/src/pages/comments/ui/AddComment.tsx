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
  value: string | undefined;
  onChange: (x: string | undefined) => void;
};

function AddComment({ onSubmit, value, onChange, ...rest }: AddCommentProps) {
  return (
    <Outer {...rest}>
      <TextField
        value={value}
        onChange={unwrapValueThen(onChange)}
        label="Task question"
        placeholder="All questions are good questions!"
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
      />
      <IconButton color="primary" onClick={onSubmit}>
        <SendIcon />
      </IconButton>
    </Outer>
  );
}

export default AddComment;
