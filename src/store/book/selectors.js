export const selectBookModule = state => state.book

export const selectBooks = state => selectBookModule(state)?.entities

export const selectBookById = (state, bookId) => {
    console.log(selectBookModule(state))
    return selectBookModule(state).entities[bookId]
}
