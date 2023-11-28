import { useState } from "react"


export const useToogle = ( initialState = {} ) => {

    const [toggle, setToggle] = useState(initialState.toggle);
    const [tableColumns, setTableColumns] = useState(initialState.columns);

    const handleToggleClick = () =>{

    setToggle(!toggle);
        
    }

    function handleToggleColumn(id) {
        let columns=[...tableColumns];

        columns[id].omit = !columns[id].omit;
        setTableColumns(columns);

    } 

    return [ toggle, handleToggleClick,tableColumns,handleToggleColumn ];

}