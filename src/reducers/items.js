export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return sortData(action.items);
        
        case 'ITEMS_FETCH_DATA_ERROR':
            return action.message;

        default:
            return state;
    }
}

export function sortData(arr) {
    let data = [];

    arr.filter(item => {
        if (item.parent_id == 0) {
            data.push(item);
        }
        return data;
    });

    for (let i of data) {
        i.children = [];
        for (let j of arr) {
            if (i.id == j.parent_id) {
                i.children.push(j);
            }
        }
    }

    for (let i of data) {
        if (i.children.length === 0) {
            delete i.children;
        } else {
            for (let j of i.children) {
                j.children = [];
                for (let k of arr) {
                    if (j.id == k.parent_id) {
                        j.children.push(k);
                    }
                }
            }
        }
    }

    for (let i of data) {
        if (i.hasOwnProperty('children')) {
            for (let j of i.children) {
                if (j.children.length === 0) {
                    delete j.children;
                }
            }
        }
    }
     
    return data;
}
