function Message (content, state='success') {
    let btn = document.createElement("div");
    btn.innerText = content;
    btn.style.cssText = "" +
        "position: fixed;" +
        "display: flex;" +
        "left: 50%;" +
        "transform: translateX(-50%) translate3d(0, 0, 0);" +
        "color: #333333;" +
        "top: 80px;" +
        "border-radius:10px;" +
        "background-color: white;" +
        "padding: 15px 34px;" +
        "box-shadow: 0 0 16px #d8d8d8;" +
        "animation: 2.7s message ease;";
    document.body.appendChild(btn);

    setTimeout(() => {
        document.body.removeChild(btn)
    },2700)
}

export default Message