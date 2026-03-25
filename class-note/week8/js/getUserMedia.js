window.onload = getLiveVideo;

//async 异步 （让代码看起来像同步，但其实是异步执行）
async function getLiveVideo() {

    console.log("loaded");
    let video = document.getElementById("video");
    console.log(video.srcObject);

    try {//try...catch 并不是附属于 async 的 ——它是一个独立的 JavaScript 错误处理结构。
        //请求摄像头
        let stream = await navigator.mediaDevices.getUserMedia({
            video: {
                width: 320, //要视频（不要音频）分辨率：320 × 240
                height: 240,
            },
        });
        video.srcObject = stream;
        console.log(video.srcObject) //here there is something
    } catch (err) { //如果用户拒绝 → 会进入 catch
        /* handle the error */
        console.log("had an error getting the camera");
    }

}