import {useState} from "react";
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

    const [nextIndex, setNextIndex] = useState(null);

    const randomIndexArray = shuffle(Object.keys(listAnimals));
    console.log('randomIndexArray', randomIndexArray);


    const interval = setInterval(() => selectRandomElement, 2000);


    const selectRandomElement = () => {
        const nextIndex = randomIndexArray.pop();
        setNextIndex(nextIndex);
        console.log('nextIndex', nextIndex);

        setLook(prevStyles => ({
            ...prevStyles,
            color: '#1abc9c',
            fontWeight: 'bold',
        }));

        const allCount = listAnimals.length;
        const halfCount = Math.ceil(allCount / 2);

        if (listAnimals.length >= halfCount) {
            setLook((prevStyles) => ({
                ...prevStyles,
                borderWidth: '10px',
            }));
        }

        if (listAnimals.length === allCount) {
            setLook(prevStyles => ({
                ...prevStyles,
                borderWidth: '20px',
            }));

            clearInterval(interval);
        }
    };

    return (
        <>
            <h1 style={{margin: '30px 0', textAlign: 'center'}}>{title}</h1>

            <table className={styles.table}>
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
                            color: index === nextIndex ? '#1abc9c' : '#000',
                            fontWeight: index === nextIndex ? 'bold' : 'normal',
                        }}
                    />
                )}
                </tbody>
            </table>
        </>
    )
};

export default FunctionTable;