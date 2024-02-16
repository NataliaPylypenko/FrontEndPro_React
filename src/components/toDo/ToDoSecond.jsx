import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {addItem, deleteItem, fetchPosts, updateItem} from "../../services/listServices";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import ThemeContext from "../context/ThemeContext";

export const ToDoSecond = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');
    const [filter, setFilter] = useState('all');

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        fetchPosts()
            .then(data => setList(data.slice(0, 10)));
    }, []);

    const getFilteredList = () => {
        if(filter === 'all') {
            return list;
        } else if (filter === 'completed') {
            return list.filter(item => item.completed)
        } else if (filter === 'progress') {
            return list.filter(item => !item.completed)
        }
    };

    const filteredList = useMemo(() => getFilteredList(), [list, filter]);

    const changeCompleted = useCallback(async item => {
        const updatedItem = await updateItem(item.id, {
            completed: !item.completed,
        });

        setList(prevState => (
            prevState.map(el => {
                if (el.id === item.id) el.completed = updatedItem.completed;
                return el;
            })
        ));
    }, []);

    const addTask = useCallback(async e => {
        e.preventDefault();

        const addedItem = await addItem({title: title, completed: false});
        setList(prevState => [...prevState, addedItem]);
        e.target.reset();
    },[title]);

    const removeItem = useCallback(async (e, id) => {
        e.stopPropagation();
        await deleteItem(id);
        setList(prevState => prevState.filter(item => item.id !== id));
    }, []);

    const getClass = item => item.completed ? 'completed' : 'progress';

    const changeTitle = e => setTitle(e.target.value);

    return (
        <>
            <ToDoForm submitForm={addTask} changeTitle={changeTitle} />

            <select onChange={e => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="progress">In Progress</option>
            </select>

            {list.length ? (
                <ul className={theme}>
                    {filteredList.map(item => (
                        <ToDoItem
                            key={item.id}
                            item={item}
                            getClass={getClass}
                            changeCompleted={changeCompleted}
                            removeItem={removeItem}
                        />
                    ))}
                </ul>
            ) : null}
        </>
    );
};