/*
 * 1. When the DOM is ready, console.log the message “Let’s get ready to
 *  party with jQuery!”
 */
console.log("Let’s get ready to party with jQuery!");
/*
 * 2. Give all images inside of an article tag the class of image-center 
 * (this class is defined inside of the style tag in the head)
 */
const $articleImg = $("article").children("img");
$articleImg.addClass("image-center");
/*
 * 3. Remove the last paragraph in the article.
 */
const $articleLastP = $("article").children("p").eq(5)
$articleLastP.remove();
/*
 * 4. Set the font size of the title to be a random pixel size from 0 
 * to 100.
 */
const $title = $("#title");
$title.css("font-size", "50px");
/*
 * 5. Add an item to the list; it can say whatever you want.
 */
const $list = $("ol");
$list.append("<li>Where the mf cheeeesssseee at</li>");
/*
 * 6. Scratch that; the list is silly. Empty the aside and put a paragraph
 * in it apologizing for the list’s existence.
 */
$list.remove();
$("aside").append("<p>LoL sorry, no paragraph for you buddy</p>");
/*
 * 7. When you change the numbers in the three inputs on the bottom, the 
 * background color of the body should change to match whatever the three
 * values in the inputs are.
 */
$(".form-control").eq(0).on("click", function(e) {
    e.preventDefault();
    let red = $(".form-control").eq(0).val();
    $("body").css("background-color", 
        "rgb(" + red + ",0,0)");
});

$(".form-control").eq(1).on("click", function(e) {
    e.preventDefault();
    let green = $(".form-control").eq(1).val();
    $("body").css("background-color", 
        "rgb(0," + green + ",0)");
});

$(".form-control").eq(2).on("click", function(e) {
    e.preventDefault();
    let blue = $(".form-control").eq(2).val();
    $("body").css("background-color", 
        "rgb(0,0," + blue +")");
});
/*
function paintBody(r, g, b) {
    console.log("IM HERE")
    $("body").css("background-color", 
        "rgb(" + r + "," + g + "," + b + ")");
}

const red = $(".form-control").eq(0).on("click", function(e) {
    return $(".form-control").eq(0).val();
});

const blue = $(".form-control").eq(1).on("click", function(e) {
    return $(".form-control").eq(1).val();
});

const green = $(".form-control").eq(2).on("click", function(e) {
    return $(".form-control").eq(2).val();
});

$(".form-control").on("click", paintBody(red, green, blue));
*/
/*
 * 8. Add an event listener so that when you click on the image, it is 
 * removed from the DOM.
 */
$("img").on('click', function (e) {
    $(e.target).remove();
});