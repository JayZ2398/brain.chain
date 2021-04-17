import React, { ComponentProps } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { subjects } from "../../../shared/data";

type SubjectSelectProps = ComponentProps<typeof Select>;

function SubjectSelect({ children, ...rest }: SubjectSelectProps) {
  return (
    <Select {...rest}>
      {subjects.map((s) => (
        <MenuItem value={s.id}> {s.name} </MenuItem>
      ))}
    </Select>
  );
}

export default SubjectSelect;
