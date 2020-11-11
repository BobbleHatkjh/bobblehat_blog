class Message {
    /**
     * 配置
     * @param {String} content 是要显示的内容 - success
     * @param {Number} duration 时长
     */
    success = (content, duration = 2700) => Message_(content, 'success', duration)
    /**
     * 配置
     * @param {String} content 是要显示的内容 - error
     * @param {Number} duration 时长
     */
    error = (content, duration = 2700) => Message_(content, 'fail', duration)
    /**
     * 配置
     * @param {String} content 是要显示的内容 - warn
     * @param {Number} duration 时长
     */
    warn = (content, duration = 2700) => Message_(content, 'warn', duration)
    /**
     * 配置
     * @param {String} content 是要显示的内容 - help
     * @param {Number} duration 时长
     */
    help = (content, duration = 2700) => Message_(content, 'help', duration)
    /**
     * 配置
     * @param {String} content 是要显示的内容 - open
     * @param {Number} duration 时长
     */
    open = (content, duration = 2700) => Message_(content, 'open', duration)
}


/**
 * Message 弹窗动画
 * @param {String} content   是要显示的内容
 * @param {String} state     是要显示的状态
 * @param {Number} duration  是要显示的时长
 */

function Message_(content, state, duration) {

    /** 外面的包裹元素 */
    let message = document.createElement("div");

    /** icon */
    if (state !== 'open') {
        let icon_ = document.createElement("i");
        icon_.className = `icon iconfont icon-${state}`;
        message.appendChild(icon_);
    }

    /** 文字内容 */
    let content_ = document.createElement("div");
    content_.innerText = content;

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
        "box-shadow: 0 0 12px #cfcfcf;";

    /** 动画 弹出部分*/
    const message_key_frame_in = [
        {
            opacity: 0,
            easing: 'ease',
            filter: 'blur(10px)',
            transform: 'translateY(-70px) translateX(-50%) scale(0.5,2)'
        }, {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'translateY(0) translateX(-50%) scale(1)'
        }
    ];

    /** 动画 收起部分*/
    const message_key_frame_out = [
        {
            opacity: 1,
            easing: 'ease',
            filter: 'blur(0)',
            transform: 'translateY(0) translateX(-50%) scale(1)'
        }, {
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(-70px) translateX(-50%) scale(0.5,2)'
        },
    ];

    message.animate(message_key_frame_in, {duration: 160})
    message.animate(message_key_frame_out, {
        delay: duration - 160,
        duration: 220,
    })

    document.body.appendChild(message);
    setTimeout(() => {
        document.body.removeChild(message)
    }, duration)

}

export default new Message