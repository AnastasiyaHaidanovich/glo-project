const request = () => {
    let newData;
    const getData = (url) => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                newData = data;
                console.log(newData);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const sendData = (url, data) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    getData("db.json");
    
    setTimeout(() => {
         sendData("https://jsonplaceholder.typicode.com/posts", newData);
    }, 1000);
};

export default request;