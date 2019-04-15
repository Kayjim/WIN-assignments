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
                        <span>submitted by <b>${user.name}</b></span>
                        <blockquote class="expando hidden">${post.body.replace('\\n', '<br />')}</blockquote>
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
                btn.text('+');
            }
        });

        await $('.album-expando-btn').click(async function(e) {
            var btn = $(this);
            var id = btn.data('album-id');
            if(btn.text() == '+') {
                if(btn.hasClass('unloaded')) {
                    await fetch('http://jsonplaceholder.typicode.com/photos').then(res => res.json())
                        .then(data => albums[id].photos = data.filter(photo => photo.albumId == id));
                    
                    btn.siblings('.album-expando').append(`
                        <h4>${albums[id].photos[0].title}</h4><br />
                        <div>
                            <button class="album-nav-btn">&lt;</button>
                            <img src="${albums[id].photos[0].thumbnailUrl}" />
                            <button class="album-nav-btn">&gt;</button>
                        </div>
                    `);

                    albums[id].index = 0;

                    $('.album-nav-btn').click(function(e) {
                        var album = albums[$(e.target).parent().parent().siblings('button').data('album-id')];
                        var index = album.index
                        var len = album.photos.length;
                        if($(e.target).text() == '<') {
                            album.index = (len + index - 1) % len;
                            var prev = album.photos[album.index];
                            $(e.target).parent().siblings('h4').text(prev.title);
                            $(e.target).next().attr('src', prev.thumbnailUrl);
                        } else {
                            album.index = (index + 1) % len;
                            var next = album.photos[album.index];
                            $(e.target).parent().siblings('h4').text(next.title);
                            $(e.target).prev().attr('src', next.thumbnailUrl);
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