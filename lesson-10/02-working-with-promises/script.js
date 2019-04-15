var user = undefined;
var albums = {};

async function login() {
    var username = $('#username-input').val();
    await fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(data => user = data.filter(user => user.username.toLowerCase() == username.toLowerCase())[0]);
    
    if(user) {
        $('#login').hide();
        $('#output').html('').append(`<h1>${user.name} <span id="user-info">(${user.username} | ${user.email})</span></h1>`);

        var posts = $('<ol>');
        var albumsList = $('<ol>');

        await fetch(`http://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(res => res.json())
            .then(data => {
                for(var post of data) {
                    posts.append($('<li>').html(`
                        <h3 class="title">${post.title}</h3>
                        <button class="expando-btn">+</button>
                        <span>submitted by <b>${user.name}</b></span> | 
                        <a class="comments-link unloaded" data-post-id="${post.id}">show comments</a>
                        <blockquote class="expando hidden">${post.body.replace('\\n', '<br />')}</blockquote>
                        <blockquote class="comments hidden"></blockquote>
                    `));
                }
            });

        await fetch(`http://jsonplaceholder.typicode.com/albums?userId=${user.id}`).then(res => res.json())
            .then(data => {
                for(var album of data) {
                    albums[album.id] = album;
                    albumsList.append($('<li>').html(`
                        <h3 class="title">${album.title}</h3>
                        <button class="album-expando-btn unloaded" data-album-id="${album.id}">+</button>
                        <span>submitted by <b>${user.name}</b></span>
                        <blockquote class="album-expando hidden"></blockquote>
                    `));
                }
            });
        
        $('#output').append('<h2>Posts</h2>').append(posts).append('<hr><h2>Albums</h2>').append(albumsList);

        $('.expando-btn').click(function(e) {
            var btn = $(this);
            if(btn.text() == '+') {
                btn.siblings('.expando').removeClass('hidden');
                btn.text('-');
            } else {
                btn.siblings('.expando').addClass('hidden');
                if(btn.siblings('.comments-link').text() == 'hide comments') {
                    btn.siblings('.comments-link').click();
                }
                btn.text('+');
            }
        });

        $('.comments-link').click(async function(e) {
            var link = $(this);
            if(link.text() == 'show comments') {
                if(link.siblings('.expando-btn').text() == '+') {
                    link.siblings('.expando-btn').click(); 
                }
                if(link.hasClass('unloaded')) {
                    link.siblings('.comments').append('<h3>Comments</h3>');
                    var list = $('<ul>');
    
                    await fetch(`http://jsonplaceholder.typicode.com/comments?postId=${link.data('post-id')}`).then(res => res.json())
                        .then(data => {
                            for(var comment of data) {
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

        await $('.album-expando-btn').click(async function(e) {
            var btn = $(this);
            var id = btn.data('album-id');
            if(btn.text() == '+') {
                if(btn.hasClass('unloaded')) {
                    await fetch(`http://jsonplaceholder.typicode.com/photos?albumId=${id}`).then(res => res.json())
                        .then(data => albums[id].photos = data);
                    
                    btn.siblings('.album-expando').append(`
                        <h4>${albums[id].photos[0].title}</h4><br />
                        <div>
                            <button class="album-nav-btn">&lt;</button>
                            <img src="${albums[id].photos[0].thumbnailUrl}" />
                            <button class="album-nav-btn">&gt;</button>
                        </div><br />
                        <input type="text" placeholder="Filter by title, click an arrow to filter" />
                    `);

                    albums[id].index = 0;

                    $('.album-nav-btn').click(function(e) {
                        var target = $(e.target);
                        var album = albums[target.parent().parent().siblings('button').data('album-id')];
                        var index = album.index
                        var len = album.photos.length;
                        var filter = target.parent().siblings('input').val();
                        if(target.text() == '<') {
                            while(true) {
                                album.index = (len + album.index - 1) % len;
                                if(album.index == index) break;
                                var prev = album.photos[album.index];
                                
                                if(filter == '' || next.title.indexOf(filter) != -1) {
                                    target.parent().siblings('h4').text(prev.title);
                                    target.next().attr('src', prev.thumbnailUrl);
                                    break;
                                }
                            }
                        } else {
                            while(true) {
                                album.index = (album.index + 1) % len;
                                if(album.index == index) break;
                                var next = album.photos[album.index];
                                
                                if(filter == '' || next.title.indexOf(filter) != -1) {
                                    target.parent().siblings('h4').text(next.title);
                                    target.prev().attr('src', next.thumbnailUrl);
                                    break;
                                }
                            }
                        }
                    });
                    
                    btn.removeClass('unloaded');
                }
                btn.siblings('.album-expando').removeClass('hidden');
                btn.text('-');
            } else {
                btn.siblings('.album-expando').addClass('hidden');
                btn.text('+');
            }
        });
    } else {
        $('#output').text('Incorrect username.');
    }
    return false;
}

$('#username-input').keyup(e => e.keyCode == 13 ? $('#login button').click() : null);