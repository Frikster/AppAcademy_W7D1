import {connect} from 'react-redux';
import React from 'react';

export const TodoListItem = (todo) => (
  <li>{todo.title}</li>
);

export default TodoListItem;
