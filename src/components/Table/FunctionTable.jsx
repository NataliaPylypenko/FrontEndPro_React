import {useEffect, useState} from "react";
import TableRow from "./TableRow";
import styles from './Table.module.css';
import { shuffle } from "../../utils/shuffle";

const FunctionTable = ({listAnimals, title}) => {
    const [look, setLook] = useState({
        color: '#000',
        fontWeight: 'normal',
        borderWidth: '0',
        borderColor: '#1abc9c',
    });

    const [arrays, setArrays] = useState({
        list: listAnimals,
        randomIndexArray: shuffle(Object.keys(listAnimals)),
        selectedElements: []
    });

    useEffect(() => {
        const interval = setInterval(selectRandomElement, 2000);

        return () => clearInterval(interval);
    }, [arrays.selectedElements]);

    const selectRandomElement = () => {
        const nextIndex = arrays.randomIndexArray.pop();
        if (nextIndex === undefined) return;

        const newSelectedElements = [...arrays.selectedElements, arrays.list[nextIndex].type];

        setLook(prevStyles => ({
            ...prevStyles,
            color: '#1abc9c',
            fontWeight: 'bold'
        }));

        setArrays(prevStyles => ({
            ...prevStyles,
            selectedElements: newSelectedElements
        }));

        const allCount = arrays.list.length;
        const halfCount = Math.ceil(allCount / 2);

        if (newSelectedElements.length >= halfCount) {
            setLook((prevStyles) => ({
                ...prevStyles,
                borderWidth: '10px',
            }));
        }

        if (newSelectedElements.length === allCount) {
            setLook(prevStyles => ({
                ...prevStyles,
                borderWidth: '20px',
            }));
        }
    };

    return (
        <>
            <h1 style={{margin: '30px 0', textAlign: 'center'}}>{title}</h1>

            <table className={styles.table} style={{ border: `${look.borderWidth} solid ${look.borderColor}` }}>
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Icon</th>
                </tr>
                </thead>
                <tbody>
                {listAnimals?.map((item, index) =>
                    <TableRow
                        key={item.type}
                        item={item}
                        style={{
                            color: arrays.selectedElements.includes(item.type) ? look.color : 'black',
                            fontWeight: arrays.selectedElements.includes(item.type) ? look.fontWeight : 'normal',
                        }}
                    />
                )}
                </tbody>
            </table>
        </>
    )
};

export default FunctionTable;