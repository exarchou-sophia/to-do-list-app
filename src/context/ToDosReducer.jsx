export const toDosReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                { id: Date.now(), text: action.payload, completed: false },
                ...state
            ];
        // change from active to completed or vice versa
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

        default:
            return state;
    }
};