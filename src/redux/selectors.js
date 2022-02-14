import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemaningSelector = createSelector(
  todoListSelector,
  statusSelector,
  prioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);

//   const todosRemaning = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });

//   return todosRemaning;
// };
