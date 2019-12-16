
const URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async page  => {
    const response = await fetch(URL);
    const data = await response.json();

    if(response.status >= 400){
        throw new Error(data.error);
    }
    console.log(data);
    return data;
}

export {fetchUsers};
