// Callback Help syntax
    $.get('https://jsonplaceholder.typicode.com/posts', (response) => {
        console.log(response);
        let id = 1;
        $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
        console.log(response)

            $.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, (response) => {
                console.log(response)
            }).fail(err => {
                console.log(err);
            })
        }).fail(err => {
            console.log(err);
        })
    }).fail(err => {
        console.log(err);
    })