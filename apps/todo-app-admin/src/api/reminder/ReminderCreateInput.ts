import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ReminderCreateInput = {
  reminderTime?: Date | null;
  todo?: TodoWhereUniqueInput | null;
};
