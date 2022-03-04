import {supabase} from '../services/supabase';

const supabaseApi = {
    getMedicines: async () => {
        const res = await supabase.from('medical-prescription').select();
        return res;
    }
};

export default supabaseApi;