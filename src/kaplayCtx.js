import kaplay from "kaplay";

const k = kaplay({
    width: 3500,
    height: 1800,
    letterbox: true,
    background: [0, 0, 0],
    global: false,
    touchToMouse: true,
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: "left",
        },
    },
    debugKey: "d",
    debug: false,
});

export default k;