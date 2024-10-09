export const toDosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                { id: Date.now(), text: action.payload, completed: false },
                ...state
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

        case 'FETCH_TODOS_SUCCESS':
            return action.payload;

        default:
            return state;
    }
};