import React from 'react';

export function Items({ items }) {
    return (
        <ul>
            {items.map(item => 
                <li key={item.id}>
                    {item.label}
                    <ul>
                        {item.children !== undefined &&
                        item.children.map(item => 
                            <li key={item.id}>
                                {item.label}
                                <ul>
                                    {item.children !== undefined &&
                                    item.children.map(item => 
                                        <li key={item.id}>
                                            {item.label}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        )}
                    </ul>
                </li>
            )}
        </ul>
    )
}