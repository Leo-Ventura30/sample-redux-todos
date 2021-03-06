import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, newTodo, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id, todo.text)}>Remove</button>
        </li>
      ))}
    </ul>
    <input
      onChange={(e) => {
        newTodo = e.target.value;
      }}
      placeholder="Nome do todo"
    ></input>
    <button
      onClick={() => {
        addTodo(newTodo);
      }}
    >
      Adicionar
    </button>
  </Fragment>
);
TodoList.propTypes = {
  addTodo: PropType.func.isRequired,
  removeTodo: PropType.func.isRequired,
  todos: PropType.arrayOf(
    PropType.shape({
      id: PropType.number,
      text: PropType.string,
    })
  ).isRequired,
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
