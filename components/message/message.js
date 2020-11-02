
function Message_ (content, state) {

    /** 文字内容 */
    let content_ = document.createElement("div");
    content_.innerText = content;

    /** 外面的包裹元素 */
    let message = document.createElement("div");

    /** icon */
    if(state){
        let icon_ = document.createElement("i");
        icon_.className = `icon iconfont icon-${state}`;
        message.appendChild(icon_);
    }

    message.appendChild(content_)

    message.style.cssText = "" +
        "position: fixed;" +
        "display: flex;" +
        "align-items: center;" +
        "left: 50%;" +
        "transform: translateX(-50%) translate3d(0, 0, 0);" +
        "color: #333333;" +
        "top: 80px;" +
        "border-radius:10px;" +
        "background-color: white;" +
        "padding: 15px 30px 15px 18px;" +
        "box-shadow: 0 0 12px #cfcfcf;" +
        "animation: 2.7s message ease;";
    document.body.appendChild(message);
    setTimeout(() => {
        document.body.removeChild(message)
    }, 2700)

}

class Message{
    success(content){
        Message_(content, 'success')
    }
    error(content){
        Message_(content, 'fail')
    }

}

export default new Message