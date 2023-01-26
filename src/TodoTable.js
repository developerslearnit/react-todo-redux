import {
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoTable = () => {
  const todoList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  return (
    <div className="tableWrapper">
      <TableContainer component={Paper}>
        {todoList && todoList.length > 0 ? (
          <Table sx={{ minWidth: 100 }} arial-label="Todo-Table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList.map((todo, indx) => (
                <TableRow key={indx.toString()}>
                  <TableCell>{todo.id}</TableCell>
                  <TableCell>{todo.todoTitle}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      onClick={() => {
                        dispatch({ type: "todo/removeTodo", payload: todo.id });
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <h3>No todo to display</h3>
        )}
      </TableContainer>
    </div>
  );
};

export default TodoTable;
