$(document).ready(function () {
    $(".tabs").tabs();

    var counter = 0;

    // Click handler for delete icon
    $(document).on('click', '.deleteIcon', function (elm) {
        if (confirm("Are you sure you want to delete this uploaded file?")) {
            try {
                if (elm != null && elm.currentTarget != null) {
                    // Get selected row's Index
                    var index = elm.currentTarget.id;

                    // Set isDeleted property to true and hide the selected table row
                    $('#isDeleted' + index).val(true);
                    $('#trFileTable' + index).hide();
                }
            }
            catch (ex) {
                console.error("Error occured while deleting the uploaded file...", ex);
                alert("Error occured while deleting the uploaded file...");
            }
        }
    });

    // Click handler for file upload
    $("#btnUpload").on('click', function () {

        try {
            // Get File type
            var fileType = $('#fileType' + counter);
            var filePath = $('#fileUpload' + counter);
            var isDeleted = $('#isDeleted' + counter);
            var isUploaded = $('#isUploaded' + counter);

            if (fileType.val() == "" || filePath.val() == "") {
                alert("Please select File details...");
            }
            else {

                var tableRow = "<tr id='trFileTable" + counter + "'><td>" + fileType.val() + "</td><td>" + filePath.val() + "</td><td><p id='" + counter + "' class='glyphicon glyphicon-off deleteIcon' style='cursor: pointer'></p></td></tr>";

                // Increase counter after every upload 
                counter++;

                // Clone the file upload control and create new control
                var fileTypeCtrl = fileType.clone().prop('id', 'fileType' + counter).prop('name', 'FileDetails[' + counter + '].FileType');
                var fileUploadCtrl = filePath.clone().prop('id', 'fileUpload' + counter).prop('name', 'FileDetails[' + counter + '].FileUpload');
                var isDeletedCtrl = isDeleted.clone().prop('id', 'isDeleted' + counter).prop('name', 'FileDetails[' + counter + '].IsDeleted');
                var isUploadedCtrl = isUploaded.clone().prop('id', 'isUploaded' + counter).prop('name', 'FileDetails[' + counter + '].IsUploaded');

                // Hide previous controls
                fileType.hide();
                filePath.hide();

                // Add row to table
                $("#tblFileUpload > tbody:last-child").append(tableRow);

                // Append newly created control
                $('#fileTypeDiv').append(fileTypeCtrl);
                $('#fileUploadDiv').append(fileUploadCtrl);
                $('#fileUploadDiv').append(isDeletedCtrl);
                $('#fileUploadDiv').append(isUploadedCtrl);

                // Clear File type field
                fileTypeCtrl.val('');

                // Set isUploaded flag to true
                isUploaded.val(true);
            }
        }
        catch (ex) {
            console.error("Exception occured while uploading file...", ex);
            alert("Exception occured while uploading file...");
        }
    });
});