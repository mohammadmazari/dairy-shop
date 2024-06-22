const authvalidation = (key) => {
    const localstate = localStorage.getItem(key);
    return localstate ? JSON.parse(localstate) : false;
};
export default authvalidation;
