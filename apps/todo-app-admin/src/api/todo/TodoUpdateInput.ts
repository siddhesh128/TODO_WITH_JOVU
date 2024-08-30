import { InputJsonValue } from "../../types";
import { ReminderUpdateManyWithoutTodosInput } from "./ReminderUpdateManyWithoutTodosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  archive?: boolean | null;
  description?: string | null;
  dueDate?: Date | null;
  image?: InputJsonValue;
  reminders?: ReminderUpdateManyWithoutTodosInput;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
