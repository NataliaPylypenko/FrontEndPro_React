import React, {useEffect, useState} from 'react';
import {addItem, deleteItem, fetchPosts, updateItem} from "../../services/listServices";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

export const ToDo = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchPosts()
            .then(data => setList(data.slice(0, 10)));
    }, []);

    const getClass = item => {
        return item.completed ? 'completed' : 'progress'
    };

    const removeItem = async (e, id) => {
        e.stopPropagation();
        await deleteItem(id);
        setList(prevState => prevState.filter(item => item.id !== id));
    };

    const changeCompleted = async item => {
        const updated = await updateItem(item.id, {
            completed: !item.completed
        });

        setList(prevState =>
            prevState.map(el => {
                if (el.id === item.id) el.completed = updated.completed;
                return el;
            })
        )
    };

    const submitForm = async e => {
        e.preventDefault();
        const addedItem = await addItem({title, completed: false});
        setList(prevState => [...prevState, addedItem]);
        e.target.reset();
    };

    const changeTitle = e => setTitle(e.target.value);

    return (
        <>
            <ToDoForm submitForm={submitForm} changeTitle={changeTitle} />
            {list.length ? (
                <ul>
                    {list.map(item => (
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