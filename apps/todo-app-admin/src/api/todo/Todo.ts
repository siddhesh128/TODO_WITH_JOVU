import { JsonValue } from "type-fest";
import { Reminder } from "../reminder/Reminder";
import { User } from "../user/User";

export type Todo = {
  archive: boolean | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  image: JsonValue;
  reminders?: Array<Reminder>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
