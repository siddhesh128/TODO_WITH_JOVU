import { Todo } from "../todo/Todo";

export type Reminder = {
  createdAt: Date;
  id: string;
  reminderTime: Date | null;
  todo?: Todo | null;
  updatedAt: Date;
};
