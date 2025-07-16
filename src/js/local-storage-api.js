export const savedInLs = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFormLs = (key) => {
 const savedData = localStorage.getItem(key);
 if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData;
 } 
 return null;
}