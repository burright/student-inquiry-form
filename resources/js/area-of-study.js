$(document).ready(function () {

    var data = null;
    $.ajax({
        url: 'http://external.spokane.edu/REST/API/SampleData',
        type: 'GET',
        dataType: 'json',
        success: function (json) {
            data = json.data;
        }
    });


    $("#college").change(function () {
        var selectedCollege = $("#college").find(":selected").text();
        onSelectCollege(selectedCollege);
    });


    function onSelectCollege(selectedCollege) {
        if (data != null) {
            var filteredData = data.AreaOfStudy.filter(function (obj) {
                return obj.College == selectedCollege;
            });

            $('#area-of-study').empty();
            $('#area-of-study')
                .append($('<option>')
                    .text("Choose area of study")
                    .attr('selected', true)
                    .attr('disabled', true));
            $.each(filteredData, function (i, value) {
                $('#area-of-study').append($('<option>').text(value.Title).attr('Title', value.Title));
            });
        }

        /* handle null data */
    }
});