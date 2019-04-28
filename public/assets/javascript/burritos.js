// *********************************************************************
// REST API METHODS
// *********************************************************************
$(function () {
    //New Burrito
    $(".createForm").on("submit", function (event) {
        event.preventDefault();

        //Store new burrito in variable object using datbase col names
        var newBurrito = {
            burrito_name: $("#addBurrito").val().trim(),
            devoured: 0
        };

        //Send POST - data = data of newBurrito
        $.ajax("/api/burrito", {
            type: "POST",
            data: newBurrito
        }).then(function () {
            location.reload();
        });
    })
// *********************************************************************
    //Change to pickup card
    $(".changeDevour").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burrito/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            location.reload();
        });
    });
// *********************************************************************
    //Delete Burrito
    $(".deleteBurrito").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burrito/" + id, {
            type: "DELETE"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
