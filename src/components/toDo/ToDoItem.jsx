import React, {useContext} from 'react';
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";
import cn from "./ToDo.module.scss";

const ToDoItem = ({item, getClass, changeCompleted, removeItem}) => {
    const {theme} = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <li onClick={() => changeCompleted(item)} className={getClass(item)}>
            {item.title} for {user}
            <button
                onClick={(e) => removeItem(e, item.id)}
                style={{backgroundColor: theme === 'light' ? 'gray' : 'yellow'}}
            >Remove</button>
        </li>
    );
};

export default ToDoItem;