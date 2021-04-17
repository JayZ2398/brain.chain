import React, { PropsWithChildren } from 'react';

type SubjectSelectProps = PropsWithChildren<{

}>

function SubjectSelect({ children, ...rest }: SubjectSelectProps) {
  return (
    <div
      {...rest}
    >
      Subject select
    </div>
  );
}

export default SubjectSelect;
