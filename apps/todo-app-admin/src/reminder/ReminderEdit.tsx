import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TodoTitle } from "../todo/TodoTitle";

export const ReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ReminderTime" source="reminderTime" />
        <ReferenceInput source="todo.id" reference="Todo" label="Todo">
          <SelectInput optionText={TodoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
