import { ADDTODO, TODODONE } from "./Types";

export const AddTodo = (Text) => {
  return { type: ADDTODO, payload: Text };
};

export const DoneTodo = (id) => {
  return { type: TODODONE, payload: id };
};
