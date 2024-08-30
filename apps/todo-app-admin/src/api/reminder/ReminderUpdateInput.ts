import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ReminderUpdateInput = {
  reminderTime?: Date | null;
  todo?: TodoWhereUniqueInput | null;
};
