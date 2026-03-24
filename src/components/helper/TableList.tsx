interface TableListItem {
    header: string;
    descriptions: string[];
}

interface TableListProps {
    tableTitle: string;
    items: TableListItem[];
}

function TableList({ tableTitle, items }: TableListProps) {
    return (
        <>
            <h1 className="tableTitle scrollTextShowRight">{tableTitle}</h1>
            <table className="styled-table">
                <tbody>
                    {items.map((item) => (
                        <tr key={item.header}>
                            <td className="tableFirst">{item.header}</td>
                            <td className="tableSecond">
                                {item.descriptions.map((desc) => (
                                    <span key={desc} className="scrollTextShowLeft">{desc} <br/></span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableList;