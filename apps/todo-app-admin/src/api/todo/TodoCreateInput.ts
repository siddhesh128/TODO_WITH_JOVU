import { InputJsonValue } from "../../types";
import { ReminderCreateNestedManyWithoutTodosInput } from "./ReminderCreateNestedManyWithoutTodosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  archive?: boolean | null;
  description?: string | null;
  dueDate?: Date | null;
  image?: InputJsonValue;
  reminders?: ReminderCreateNestedManyWithoutTodosInput;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
