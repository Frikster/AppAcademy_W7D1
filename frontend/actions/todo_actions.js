export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

const newTodos = {
  1: {
    id: 3,
    title: 'wash house',
    body: 'with soap',
    done: false
  },
  2: {
    id: 4,
    title: 'wash carpet',
    body: 'with shampoo',
    done: true
  },
};
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.newTodos = newTodos;
