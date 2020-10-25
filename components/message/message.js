function Message (content, state='success') {
    let btn = document.createElement("div");
    btn.innerText = content;
    btn.style.cssText = "" +
        "position: fixed;" +
        "display: flex;" +
        "left: 50%;" +
        "transform: translateX(-50%);"+
        "top: 80px;" +
        "border-radius:10px;" +
        "background-color: white;" +
        "padding: 15px 30px;" +
        "box-shadow: 0 0 16px #d8d8d8";
    console.log(btn.style);
    document.body.appendChild(btn);

    setTimeout(() => {
        document.body.removeChild(btn)
    },2000)
}

export default Message