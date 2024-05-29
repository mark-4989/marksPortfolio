let sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        // let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            // activate sec for animation
            sec.classList.add("show-animate");
        }
        //reapeting same animation
        else {
            sec.classList.remove("show-animate");
        }
        //footer animation
        let footer = document.querySelector("footer");
        footer.classList.toggle(
            "show-animate",
            this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
        );
    });
};
var $cursor = $(".cursor"),
    $overlay = $(".project-overlay");

function moveCircle(e) {
    TweenLite.to($cursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY,
        },
        delay: 0.03,
    });
}

$(".p-1").hover(function() {
    $(".cursor").css({ "background-image": "url(image-1.jpg)" });
});
$(".p-2").hover(function() {
    $(".cursor").css({ "background-image": "url(image-2.jpg)" });
});
$(".p-3").hover(function() {
    $(".cursor").css({ "background-image": "url(image-3.jpg)" });
});
$(".p-4").hover(function() {
    $(".cursor").css({ "background-image": "url(image-4.jpg)" });
});

var flag = false;
$($overlay).mousemove(function() {
    flag = true;
    TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
    $($overlay).on("mousemove", moveCircle);
});

$($overlay).mouseout(function() {
    flag = false;
    TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
});