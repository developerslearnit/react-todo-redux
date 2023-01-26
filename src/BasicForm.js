import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const BasicForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          id: "",
          todoTitle: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const id = Date.now();
          values.id = id;
          dispatch({ type: "todo/addTodo", payload: values });
          resetForm();
        }}
        onReset={(values) => {
          values.id = "";
          values.todoTitle = "";
        }}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field
            className="todoInput"
            id="todoTitle"
            name="todoTitle"
            placeholder="Enter todo here.."
          />
          <Button variant="contained" type="submit">
            Add
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
