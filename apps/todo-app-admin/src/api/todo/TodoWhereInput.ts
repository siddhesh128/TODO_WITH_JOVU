import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoWhereInput = {
  archive?: BooleanNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  reminders?: ReminderListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
