import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TodoWhereUniqueInput } from "../todo/TodoWhereUniqueInput";

export type ReminderWhereInput = {
  id?: StringFilter;
  reminderTime?: DateTimeNullableFilter;
  todo?: TodoWhereUniqueInput;
};
