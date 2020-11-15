# 绒球帽的博客
>==标记文本==
```bash
最新更新时间: 2020-10-9
```

## 服务器维护:
~~服务器为nodeJS服务架构，采用nuxt前端模板框架~~

| 工具      | 功能描述       | 补充          |
| ------   | ------------- | ------------ |
| Nginx    | 反向代理服务器   |              | 
| pm2      | 进程控制器      |              | 
| node     | node服务       |              |

## 在重新部署的时候需要进行的操作

**关闭pm2的当前node进程*  
**关闭Nginx的解析*   
**上传nuxt文件包*  

先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中先检查pm2上在跑的进程,生成如下图时说明当前服务器的node服务正在启动中


### 步骤一:pm2
```bash
$ pm2 list 
```
```bash
先检
pm2基础操作:

$ pm2 start npm -- start    运行此node进程 
$ pm2 list                  打开pm2进程列表
$ pm2 show 0                展开id为0的进程的详细信息
$ pm2 stop 0/all            停止id为0/所有进程
$ pm2 reload 0/all          重载id为0/所有表中的进程
$ pm2 delete 0/all          删除表中的进程       
```

### 步骤二: Nginx
```bash
ps aux | grep nginx
```
```bash
检查nginx是不是在已经启动了，若返回三条记录类似下图说明已经启动了

root     32501  0.0  0.1 122956  2132 ?        Ss   15:02   0:00 nginx: master process nginx
nginx    32502  0.0  0.1 125464  3576 ?        S    15:02   0:00 nginx: worker process
root     32509  0.0  0.0 112712   960 pts/0    R+   15:02   0:00 grep --color=auto nginx

Nginx基础操作:

$ nginx                  启动Nginx
$ nginx -s stop          立即停止Nginx，无论有程序是否未运行结束
$ nginx -s quit          从容停止，等待最后一个程序结束运行后中断nginx
$ killall nginx          杀死进程
$ netstat -tlnp          查看端口状态
```
```bash
Nginx配置:

位置: etc/nginx/nginx.conf
操作: vim nginx.conf
模板及解释:
```
```bash
http {

    ...

    gzip                on;  // 进行网页gzip压缩
    gzip_comp_level     8;   // 1-9 压缩等级从小到大
    gzip_types text/plain application/javascript text/css;

    ...

    upstream nodenuxt {
        server 172.17.0.12:3000;  // 内网ip以及部署端口号
        keepalive 64;
    }

    server {
        listen       80;          // 监听端口
        server_name  bobblehat.cn;   // 映射域名
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
                proxy_pass http://bobblehat.cn:3000/;
        }
    }
}
```

### 步骤三: 上传nuxt相关文件
```bash 
$ npm run build (在本地先打包,线上打包会找不到模板)
```
```bash
需要上传的文件:
─┬─
 │── .nuxt
 │── static
 │── package.json
 └── nuxt.config.js

上传完毕后更新node_modules:

$ npm install -production 
```

### 步骤四: 启动服务 




#