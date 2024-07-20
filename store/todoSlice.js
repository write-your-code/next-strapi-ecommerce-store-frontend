const { createSlice } = require("@reduxjs/toolkit");

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {
                id: 1,
                title: "first todo",
                status: false
            }]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            let obj = state.todos.find(todo => todo.id === action.payload.id)
            console.log(action)
            obj.title = action.payload.title
            obj.status = action.payload.status
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer