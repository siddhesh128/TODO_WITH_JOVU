import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TodoTitle } from "../todo/TodoTitle";

export const ReminderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ReminderTime" source="reminderTime" />
        <ReferenceInput source="todo.id" reference="Todo" label="Todo">
          <SelectInput optionText={TodoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
