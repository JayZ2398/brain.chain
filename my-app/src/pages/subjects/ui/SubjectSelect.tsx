import React, { PropsWithChildren } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { subjects } from '../../dashboard/DashboardPage'

type SubjectSelectProps = PropsWithChildren<{

}>



function SubjectSelect({ children, ...rest }: SubjectSelectProps) {
  return (
    <Select
    >
      {subjects.map(s => (
        <MenuItem
          value={s.id}
        > { s.name } </MenuItem>
      ))}
    </Select>
  );
}

export default SubjectSelect;
