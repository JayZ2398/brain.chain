import React, { PropsWithChildren } from 'react';

type SquadSelectProps = PropsWithChildren<{

}>

function SquadSelect({ children, ...rest }: SquadSelectProps) {
  return (
    <div
      {...rest}
    >
      Squad select
    </div>
  );
}

export default SquadSelect;
