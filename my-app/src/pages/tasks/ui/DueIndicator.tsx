import React from "react";
import Button from "@material-ui/core/Button";
import AlarmIcon from "@material-ui/icons/Alarm";

import { DateArg, formatDateDisplay } from "../../../shared/datetime/funcs";

interface DueIndicatorProps {
  due: DateArg;
}

function DueIndicator({ due }: DueIndicatorProps) {
  return (
    <Button startIcon={<AlarmIcon />} variant="outlined" color="secondary">
      CLOSING: &nbsp;
      {formatDateDisplay(due, { format: "DateWithTime" }).toUpperCase()}
    </Button>
  );
}

export default DueIndicator;
