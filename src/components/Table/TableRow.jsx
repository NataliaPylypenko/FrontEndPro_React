const TableRow = ({item, style}) => {
    return (
        <tr
            style={style}
        >
            <td>{item.type}</td>
            <td>{item.icon}</td>
        </tr>
    )
};

export default TableRow;