import React, {useState} from 'react';
import Item from './Item';
import NewItemForm from './NewItemForm';

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: 1, name: 'Peanut Butter', qty: 2},
        {id: 1, name: 'Whole Milk', qty: 1},
    ]

    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (name, qty) => {
        setItems(items => [...items, {name, qty}])
    }
    return (
        <div>
            <h3>Shopping List</h3>
            <hr/>
            <NewItemForm addItem={addItem}/>
            <hr/>
            <div>
                {items.map(({id, name, qty}) => <Item id={id} name={name} qty={qty} key={id}/>)}
            </div>
        </div>
    )
}

export default ShoppingList;