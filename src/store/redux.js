// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import store from './store';
// import TodoApp from './TodoApp';

// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// );

const toggleAllTodos = () => ({ type: 'TOGGLE_ALL_TODOS' });

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_ALL_TODOS':
      const allCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({ ...todo, completed: !allCompleted }));
    default:
      return state;
  }
};

