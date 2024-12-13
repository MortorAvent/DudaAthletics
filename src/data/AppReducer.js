function AppReducer(state, action) {
  switch (action.type) {
      case "add":
          return [...state, action.data];
      case "edit":
          return state.map(item => item.id === action.data.id ? action.data : item);
      case "delete":
          return state.filter(item => item.id !== action.id);
      case "rate": {
          return state.map(item => 
              item.id === action.id 
                  ? { ...item, rating: item.rating === 10 ? 0 : item.rating + 1 }
                  : item
          );
      }
      default:
          return state;
  }
}

export default AppReducer;