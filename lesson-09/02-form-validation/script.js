$('#submit').click(function(e) {
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var message = $('#message');

    var required = [name, email, phone];
    for(item of required) {
        if(item.val() == '') {
            message.text('Please Fill Out Required Fields').addClass('warning');
            item.labels().addClass('warning');
            // Without jQuery UI: $(`label[for=${item.attr('id')}]`).addClass('warning');
        }
    }

    if($('label.warning').length == 0) {
        $('#form').remove();
        $('#pre-form > h2').text('Thanks for your feedback!');
    }
});

$('input').keyup(function(e) {
    if($(this).val() != '') {
        $(this).removeClass('warning').labels().removeClass('warning');
        // Without jQuery UI: $(`label[for=${$(this).attr('id')}]`).addClass('warning');
    }

    if($('label.warning').length == 0) {
        $('#message').text('').removeClass('warning');
    }
});