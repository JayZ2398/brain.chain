import { Task } from "../../../shared/models";
import { Dayjs } from "dayjs";
import { dateStringToDayjs } from "../../../shared/datetime/funcs";

export function getTaskDisplayName(t: Task) {
  return t.name;
}

export function getPriorityTask(ts: Task[]) {
  const sorted = ts
    .map((t) => ({
      ...t,
      due: dateStringToDayjs(t.due),
    }))
    .sort((t1, t2) => {
      if (t1 && !t2) return -1;
      else if (!t2 && t1) return 1;
      else if (!t1 && !t2) return 0;
      else return (t1.due as Dayjs).diff(t2.due as Dayjs);
    });

  if (sorted.length > 0) return ts.find((t) => t.id === sorted[0].id);
}
