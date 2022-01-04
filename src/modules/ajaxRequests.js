const request = () => {
    // const getData = (url, urlSend) => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             sendData(urlSend, JSON.stringify(data));
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };

    // const sendData = (url, dataSend) => {
    //     return fetch(url, {
    //         method: "POST",
    //         body: dataSend,
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // };
    // getData("db.json", "https://jsonplaceholder.typicode.com/posts");

    let json = JSON.stringify({
        name: "Вася",
        surname: "Петров"
      });
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(json);

    xhr.onload = function() {
       console.log(`Загружено: ${xhr.response}`);
      };
      
      xhr.onerror = function() {
        console.log(`Ошибка соединения`);
      };
};

export default request;