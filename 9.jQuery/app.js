$("h1").on("click", function() {
    console.log("Another click");
    $(this).animate({
        opacity: 0,
        width: "50px",
    }, 1000, function() {
        $(this).remove();
    })
});

$("h1").on("mouseenter", function() {
    $(this).css("border", "10px solid purple")
});

$("h1").on("mouseleave", function() {
    $(this).css("border", "none")
});

$("#add-input").on("click", function(e) {
    e.preventDefault();
    $("form").append("<input type='text'/>");
})

$("form").on("focus", "input", function() {
    $(this).val("Bamboozled");
})