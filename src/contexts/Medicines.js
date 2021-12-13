import React, { createContext, useContext, useState } from "react";

const MedicinesContext = createContext();

export function useMedicines(){
    const medicines = useContext(MedicinesContext);
    return medicines;
} 

export default function MedicinesProvider({children}){
    
    const [medicines] = useState([
        {
            title: 'Cloridrato de metformina',
            days: [1,2,3,4,5,6,7],
            morning: '1 comprimido',
            afternoon: '1 comprimido',
            night: '1 comprimido'
        },
        {
            title: 'Besilato de andilopino',
            days: [1,2,3,4,5,6,7],
            morning: '1 comprimido',
            night: '1 comprimido'
        },
        {
            title: 'Atacand',
            days: [1,2,3,4,5,6,7],
            morning: '1 comprimido',
            night: '1 comprimido'
        },
        {
            title: 'Trayenta',
            days: [1,2,3,4,5,6,7],
            afternoon: '1 comprimido'
        },
        {
            title: 'Venlift',
            days: [1,2,3,4,5,6,7],
            afternoon: '1 comprimido'
        },
        {
            title: 'Vytorin',
            days: [1,2,3,4,5,6,7],
            night: '1 comprimido'
        },
        {
            title: 'Addera D3',
            days: [1,2,3,4,5,6,7],
            afternoon: '1 comprimido'
        },
        {
            title: 'Citoneurin',
            days: [1,2,3,4,5,6,7],
            afternoon: '1 comprimido'
        },
        {
            title: 'Acetato de ciproterona',
            days: [1,2,3,4,5,6,7],
            morning: '1 comprimido',
            night: '1 comprimido'
        },
    ]);

    return(
        <MedicinesContext.Provider value={medicines}>
            {children}
        </MedicinesContext.Provider>
    );
}