export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchDataError(message) {
    return {
        type: 'ITEMS_FETCH_DATA_ERROR',
        message
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    dispatch(itemsFetchDataError(response.statusText));
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)));
    };
}
