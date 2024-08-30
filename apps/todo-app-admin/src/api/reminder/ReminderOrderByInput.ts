import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reminderTime?: SortOrder;
  todoId?: SortOrder;
  updatedAt?: SortOrder;
};
