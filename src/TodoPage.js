import React from "react";
import { Provider } from "react-redux";
import BasicForm from "./BasicForm";
import TodoTable from "./TodoTable";
import store from "./redux/store";

const TodoPage = (props) => {
  return (
    <Provider store={store}>
      <BasicForm />
      <TodoTable />
    </Provider>
  );
};

export default TodoPage;
