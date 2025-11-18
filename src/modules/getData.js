const getData = (str) => {
    // return fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    return fetch(
      `https://ozon-d3bcc-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
    ).then((res) => res.json());
}

export default getData