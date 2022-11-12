import { bookSlice } from "."
import { prepareData } from "../utils"

export const loadBooksIfNotExists = (catalogId) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading())
    fetch(`http://localhost:8000/api/books?catalogId=${catalogId}`)
        .then(response => response.json())
        .then(books => {
            dispatch(bookSlice.actions.successLoading(prepareData(books)))
        })
        .catch(() => {
            dispatch(bookSlice.actions.failLoading())
        })
}

export const loadBookIfNotExists = (bookId) => (dispatch, getState) => {
    dispatch(bookSlice.actions.startLoading())
    fetch(`http://localhost:8000/api/books?bookId=${bookId}`)
        .then(response => {
            return response.json()})
        .then(book => {
            dispatch(bookSlice.actions.successLoading(prepareData([book])))
        })
        .catch((e) => {
            dispatch(bookSlice.actions.failLoading())
        })
}
