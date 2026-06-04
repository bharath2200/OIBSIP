export const Storage = {
   
    get(key, fallback = null) {
        try {
            const item = localStorage.getItem(`flowstate_${key}`);
            return item ? JSON.parse(item) : fallback;
        } catch (e) {
            console.error(`Error reading key "${key}" from localStorage:`, e);
            return fallback;
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(`flowstate_${key}`, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error(`Error saving key "${key}" to localStorage:`, e);
            return false;
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(`flowstate_${key}`);
            return true;
        } catch (e) {
            console.error(`Error removing key "${key}" from localStorage:`, e);
            return false;
        }
    }
};
