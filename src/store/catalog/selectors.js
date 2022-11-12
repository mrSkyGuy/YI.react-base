import { Statuses } from "../../constants/statuses"


export const selectCatalogModule = state => state.catalog

export const selectCatalogs = state => {
    return selectCatalogModule(state).entities
}

export const selectCatalogsBookIds = (state, catalogId) => {
    const entities = selectCatalogModule(state).entities
    if (catalogId !== undefined)
        return entities[catalogId].books
    else
        return entities[Object.keys(entities)[0]].books
}

export const selectIsCatalogsLoading = (state) => {
    return selectCatalogModule(state).status === Statuses.inProgress
}
