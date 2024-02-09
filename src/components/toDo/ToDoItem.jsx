import React from 'react';
import cn from "./ToDo.module.scss";

const ToDoItem = ({item, getClass, changeCompleted, removeItem}) => {
    return (
        <li onClick={() => changeCompleted(item)} className={cn[getClass(item)]}>
            {item.title}
            <button onClick={(e) => removeItem(e, item.id)}>Remove</button>
        </li>
    );
};

export default ToDoItem;