var dataForm = {
    username: 'dau.tiep@furucrm.com',
    password: 'Dlqt1998.',
    url: 'Production',
};
var errors = [];

//event when click New Button
$('#newAccountBtn').click(function () {
    $('#newAccountTab').css('display', 'block');
    $('#accountListAccordion').css('display', 'none');
    $('#accountsTab').css('display', 'none'); //contain new button
});

//event when click Cancel button
$('#backToAccountsListBtn').click(function () {
    $('#newAccountTab').css('display', 'none');
    $('#accountListAccordion').css('display', 'block');
    $('#accountsTab').css('display', 'block');
});

//handle submit form new
$( "#newForm" ).submit(function( event ) {
    event.preventDefault();
    if (validate(dataForm)) {
        saveData(dataForm);
    }
});

/*START HANDLE */
//handle name
$('#name').on('change', function () {
    var name = $(this).val();
    dataForm.name = name;
});

//handle group
$('#groupName').on('change', function () {
    var groupName = $(this).val();
    dataForm.groupName = groupName;
});

//handle username
$('#username').on('change', function () {
    var username = $(this).val();
    dataForm.username = username;
});

//handle password
$('#password').on('change', function () {
    var password = $(this).val();
    dataForm.password = password;
});

//handle login url
$('#url').on('change', function () {
    var url = $(this).val();
    dataForm.url = url;
});

//handle token
$('#token').on('change', function () {
    var token = $(this).val();
    dataForm.token = token;
});
/*END HANDLE */

function validate (dataForm) {
    if (dataForm.username == '' || dataForm.username == undefined) {
        var message = 'Please set username';
        errors.push(message);
    }

    if (dataForm.password == '' || dataForm.password == undefined) {
        var message = 'Please set password';
        errors.push(message);
    }

    if (errors.length == 0) return true;
    toastr.error(errors[0], 'Error');
    return false;
}

function saveData (dataForm) {
    
}
