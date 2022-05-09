let getCSS = document.querySelector('#getCSS');
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log('请求 CSS 成功');
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.head.appendChild(style);
        }else {
            console.log('请求 CSS 失败');
        }
    }
    request.send();
}

let getJS = document.querySelector('#getJS');
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/test.js');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log('请求到 JS ');
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        } else {
            console.log('请求 JS 失败');
        }
    }
    request.send();
}

let getXML = document.querySelector('#getXML');
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/XML.xml');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log('请求到 XML ');
            const dom = request.responseXML;  // 获取 XML 的方式，这个方式有点特殊，返回的是 XML 的所有节点
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text);
        } else {
            console.log('请求 XML 失败');
        }
    }
    request.send();
}

let getJSON = document.querySelector('#getJSON');
getJSON.onclick = () => {
    // console.log('点击');
    let request = new XMLHttpRequest();
    request.open('GET','/JSON.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response); // 将 JSON 的变量变成 JS 的变量。。
            console.log(typeof bool);
            console.log(bool);
        } else {
            console.log('请求 JSON 失败');
        }
    }
    request.send();
}
