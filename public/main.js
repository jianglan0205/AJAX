let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            //把这个JSON字符串变成JS数组
            array.forEach(item => {
                //对数组的每一项插到ul后面
                const li = document.createElement("li")
                //创建一个li元素
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
            //n = n+1
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            //可以把符合JSON语法的字符串变成对应的对象或者是其他东西
            console.log(object)
            //也有可能是其他的
            // console.log(typeof request.response)
            // console.log(request.response)
            // const bool = JSON.parse(request.response)
            // console.log(typeof bool)
            // console.log(bool)
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onload = () => {
        const div = document.createElement('div')
        //创建div标签
        div.innerHTML = request.response
        //填写div内容
        document.body.appendChild(div)
        //插到<body>里
    }
    request.onerror = () => { }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()

    request.open('GET', '2.js')

    request.onload = () => {
        const script = document.createElement('script')
        //创建script标签
        script.innerHTML = request.response
        //填写script内容
        document.body.appendChild(script)
        //插到<body>里
    }
    request.onerror = () => { }

    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            //找到一个叫warning的标签,然后获取它的textContent
            //但是getElement是获取一个伪数组所以加[0]
            console.log(text.trim())
            //加trim()就没有空格什么的了
        }
    }
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    //第一步,创建HttpRequest对象(全称是XMLHttpRequest)

    request.open('GET', '/style.css');
    //mdn xmlhttprequest open  google一下就教你怎么用
    //第二步,调用对象的open方法

    request.onreadystatechange = () => {
        //下载完成,但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                //创建style标签
                style.innerHTML = request.response
                //填写style内容
                document.head.appendChild(style)
                //插到<head>里
            } else {
                alert('加载 CSS 失败')
            }
        }
    }
    request.send();
    //第四步,调用对象的send方法(发送请求)

    // console.log('request.response')
    // //打印出我们请求的字符串
    // console.log(request.response)
    // const style = document.createElement('style')
    // //创建style标签
    // style.innerHTML = request.response
    // //填写style内容
    // document.head.appendChild(style)
    // //插到<head>里

    // request.onerror = () => {
    //     console.log('失败了')
    // };
    // //第三步,监听对象的onload & onerror事件

}
//放在按钮里好看效果