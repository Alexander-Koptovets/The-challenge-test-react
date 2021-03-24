import React from 'react';

export function Items({ items }) {
    return (
        <ul>
            {items !== undefined &&
            items.map(item => 
                <li key={item.id}>
                    {item.label}
                    <Items items={item.children}/>
                </li>
            )}
        </ul>
    )
}