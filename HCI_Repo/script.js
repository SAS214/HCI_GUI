tippy('#btnJs', {
    content: "<strong>Device: TEST!<br/>Status: TEST!</strong>",
    placement: "right",
    animation: "fade",
    allowHTML: true,
})

tippy('#btnJs-r', {
    content: "<strong>Device: TEST!<br/>Status: OFF</strong>",
    placement: "right",
    animation: "fade",
    allowHTML: true,
})


tippy('#btnJs-g', {
    content: "<strong>Device: TEST!<br/>Status: Unavailable</strong>",
    placement: "right",
    animation: "fade",
    allowHTML: true,
})


tippy('#btnJs-gn', {
    content: "<strong>Device: TEST!<br/>Status: ON</strong>",
    placement: "right",
    animation: "fade",
    allowHTML: true,
})


function openWindow(){
    window.open("statusRed.html","_blank", "left=100,top=100,width=320,height=320");
}

