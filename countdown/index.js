function countdown(timestamp) {
    let nowStamp = new Date().getTime()
    let futureTimes = new Date('2022/04/21 15:30').getTime()
    //未来30分钟获取
    let t = new Date()
    t.setMinutes(t.getMinutes() + 30)   //setHours 小时  setFullYear 年份
    var year = t.getFullYear()
    var month = (t.getMonth() + 1) < 10 ? ("0" + (t.getMonth() + 1)) : (t.getMonth() + 1)
    var data = t.getDate() < 10 ? ("0" + t.getDate()) : t.getDate()
    var houres = t.getHours() < 10 ? ('0' + t.getHours()) : t.getHours()
    var minute = t.getMinutes() < 10 ? ('0' + t.getMinutes()) : t.getMinutes()
    var endTimes = year + '/' + month + '/' + data +' '+ houres + ':' + minute  //时间格式化
    console.log(data);
    setTimeout(() => {
        let times = new Date(endTimes).getTime() - nowStamp
        let h = Math.floor(times / 1000 / 60 / 60) % 24,
        m = Math.floor(times / 1000 / 60 ) % 60,
        s = Math.floor(times / 1000 ) % 60;
        // console.log(h);
        // console.log(m);
        // console.log(s);
        countdown()
    }, 1000);
}
countdown()