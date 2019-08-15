$(document).ready(function () {
    var modal = document.getElementById('confirmModal');
    var submitBtn = document.getElementById("modal-submit");
    var cancelBtn = document.getElementById("modal-cancel");
    var confirmBtn = document.getElementById("modal-confirm")
    var span = document.getElementsByClassName("close")[0];

    submitBtn.onclick = function () {
        $('#m-first-name').text($('#first-name').val());
        $('#m-middle-initial').text($('#middle-initial').val());
        $('#m-last-name').text($('#last-name').val());
        $('#m-city').text($('#city').val());
        $('#m-state').text($('#state').val());
        $('#m-zip-code').text($('#zip-code').val());
        $('#m-phone-number').text($('#phone-number').val());
        $('#m-email').text($('#email').val());
        $('#m-college').text($('#college').val());
        $('#m-area-of-study').text($('#area-of-study').val());
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    /*
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    */

    cancelBtn.onclick = function () {
        modal.style.display = "none";
    };

    confirmBtn.onclick = function () {
        document.getElementById("inquiry-form").reset();
        modal.style.display = "none";
        /* Success message */
    }
});