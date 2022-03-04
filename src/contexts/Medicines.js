import { createContext, useContext, useState, useEffect } from "react";
import supabaseApi from "../api";

const MedicinesContext = createContext();

export default function MedicinesProvider({children}){
    
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        getMedicines();
    }, []);

    const getMedicines = async () => {
        const res = await supabaseApi.getMedicines();
        
        if(res.error){
            console.log(res.error);
            return;
        }

        setMedicines(res.data);
    }
    
    return(
        <MedicinesContext.Provider value={{medicines, setMedicines}}>
            {children}
        </MedicinesContext.Provider>
    );
}

export function useMedicines(){
    return useContext(MedicinesContext);
} 