var logRes = res => $('#output').html('').text(JSON.stringify(res));

var requests = [
    {url: 'http://jsonplaceholder.typicode.com/posts', method: 'GET', success: logRes},
    {url: 'http://jsonplaceholder.typicode.com/posts/10', method: 'GET', success: logRes},
    {url: 'http://jsonplaceholder.typicode.com/posts/12/comments', method: 'GET', success: logRes},
    {url: 'http://jsonplaceholder.typicode.com/posts', method: 'GET', data: {userId: 2}, success: logRes},
    {
        url: 'http://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        data: {title: 'tts', body: 'ed', user: 3000},
        success: res => $('#output').html('').text(`Post id: ${res.id}`)
    },
    {url: 'http://jsonplaceholder.typicode.com/posts/12', method: 'PUT', data: {title: 'title', body: 'body', userId: 3000}, success: logRes},
    {url: 'http://jsonplaceholder.typicode.com/posts/12', method: 'PATCH', data: {title: 'new title'}, success: logRes},
    {
        url: 'http://jsonplaceholder.typicode.com/posts/12',
        method: 'DELETE',
        complete: res => $('#output').html('').text(res.status == 200 ? 'Deleted' : 'Failed to delete')
    },
    {
        url: 'http://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: res => showPosts(res)
    }
];

$('form').submit(function(e) {
    $.ajax(requests[$('select').val()]);
    return false;
});

async function showPosts(posts) {
    $('#output').html('<h2>Loading...</h2>');
    var list = $('<ol>');
    for(var post of posts) {
        var username = null;
        await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`).then(function(res) {
            return res.json();
        }).then(function(data) {
            username = data.username;
        });

        list.append($('<li>').addClass('post').html(`
            <h2 class="title">${post.title}</h2>
            <button class="expando-btn">+</button>
            <span class="submitted">submitted by <b>${username}</b></span> | 
            <a class="comments-link unloaded" data-post-id="${post.id}">show comments</a>
            <blockquote class="expando hidden">${post.body.replace('\\n', '<br />')}</blockquote>
            <blockquote class="comments hidden"></blockquote>
        `));
    }

    $('#output').html('').append(list);

    $('.expando-btn').click(function(e) {
        if($(this).text() == '+') {
            $(this).siblings('.expando').removeClass('hidden');
            $(this).text('-');
        } else {
            $(this).siblings('.expando').addClass('hidden');
            $(this).text('+');
        }
    });

    $('.comments-link').click(async function(e) {
        var link = $(this);
        if(link.text() == 'show comments') {
            if(link.hasClass('unloaded')) {
                link.siblings('.comments').append('<h3>Comments</h3>');
                var list = $('<ul>');

                await $.get(`http://jsonplaceholder.typicode.com/comments?postId=${link.data('post-id')}`, function(res) {
                    for(var comment of res) {
                        list.append(`
                            <li class="comment">
                                <h4>${comment.name} &lt;${comment.email}&gt;</h4>
                                <blockquote>${comment.body.replace('\\n', '<br />')}</blockquote>
                            </li>
                        `);
                    }
                });
                link.siblings('.comments').append(list);
                link.removeClass('unloaded');
            }
            link.siblings('.comments').removeClass('hidden');
            link.text('hide comments');
        } else {
            link.siblings('.comments').addClass('hidden');
            link.text('show comments');
        }
    });
}