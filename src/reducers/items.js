export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return groupParent(action.items);
        
        case 'ITEMS_FETCH_DATA_ERROR':
            return action.message;

        default:
            return state;
    }
}

function groupBy(items, keyBy) {
	return items.reduce((map, item) => {
  	const key = item[keyBy];
    
    if (!map[key]) {
    	map[key] = [];
    }
    
    map[key].push(item);
    return map;
  }, {});
}

function groupParent(items) {
	items = items.map(item => ({ ...item }));

  const groupedByParentId = groupBy(items, 'parent_id');

  items.forEach(item => {
  	const children = groupedByParentId[item.id];

    if (!children) {
    	return;
    }

    item.children = children;
  });

  return items.filter(item => !item.parent_id);
}
