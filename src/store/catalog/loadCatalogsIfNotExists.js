import { catalogSlice } from "."
import { prepareData } from "../utils"

export const loadCatalogsIfNotExists = (dispatch, getState) => {
    if (getState()?.length > 0) return
    dispatch(catalogSlice.actions.startLoading())
    fetch("http://localhost:8000/api/catalogs")
        .then(response => response.json())
        .then(catalogs => {
            dispatch(catalogSlice.actions.successLoading(prepareData(catalogs)))
        })
        .catch(() => {
            dispatch(catalogSlice.actions.failLoading())
        })
}
