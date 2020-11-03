
function Message_ (content, state) {

    /** 文字内容 */
    let content_ = document.createElement("div");
    content_.innerText = content;

    /** 外面的包裹元素 */
    let message = document.createElement("div");

    /** icon */
    if(state !== 'open'){
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
        "padding: 15px 24px;" +
        "box-shadow: 0 0 12px #cfcfcf;" +
        "animation: 2.7s message ease;";
    document.body.appendChild(message);
    setTimeout(() => {
        document.body.removeChild(message)
    }, 2700)

}

class Message{
    /**
     * 配置
     * @param content 是要显示的内容 - success
     */
    success = (content) => Message_(content, 'success')
    /**
     * 配置
     * @param content 是要显示的内容 - error
     */
    error = (content) => Message_(content, 'fail')
    /**
     * 配置
     * @param content 是要显示的内容 - warn
     */
    warn = (content) => Message_(content, 'warn')
    /**
     * 配置
     * @param content 是要显示的内容 - help
     */
    help = (content) =>Message_(content, 'help')
    /**
     * 配置
     * @param content 是要显示的内容 - open
     */
    open = (content) => Message_(content,'open')
}

export default new Message