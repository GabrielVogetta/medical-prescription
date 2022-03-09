import {supabase} from '../services/supabase';

const supabaseApi = {
    getMedicines: async () => {
        const res = await supabase.from('medical-prescription').select();
        return res;
    },

    insertMedicine: async ({name, mg, days, breakfast, lunch, dinner}) => {
        const res = await supabase.from('medical-prescription').insert([{
            name: name,
            mg: mg === 0 ? null : mg,
            days: days,
            breakfast: breakfast === 0 ? null : breakfast,
            lunch: lunch === 0 ? null : lunch,
            dinner: dinner === 0 ? null : dinner
        }]);
        return res;
    },

    deleteMedicine: async (id) => {
        const res = await supabase
        .from('medical-prescription')
        .delete()
        .match({ id: id });

        return res;
    }
};

export default supabaseApi;