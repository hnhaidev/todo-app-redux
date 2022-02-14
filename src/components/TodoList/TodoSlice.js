const initState = [
  {
    id: Math.random().toString(36).substring(7),
    name: "Learn Yoga",
    completed: false,
    priority: "Medium",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "Learn Redux",
    completed: true,
    priority: "High",
  },
  {
    id: Math.random().toString(36).substring(7),
    name: "Learn JS",
    completed: false,
    priority: "Low",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.ompleted }
          : todo
      );

    default:
      return state;
  }
};

export default todoListReducer;
