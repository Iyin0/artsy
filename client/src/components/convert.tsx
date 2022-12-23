const convert = (value: number) => {
    let hours: number = Math.floor(value / 3600);
    let minutes: number = Math.floor((value - (hours * 3600)) / 60);
    let seconds: number = Math.floor(value - (hours * 3600) - (minutes * 60));
    let str_hour: string = ''
    let str_minute: string = ''
    let str_sec: string = ''

    if (hours < 1) {
        str_hour = "";
    }

    else if (hours > 0) {
        str_hour = hours + ""
    }

    if (minutes < 1) {
        str_minute = "00:"
    }
    else if (minutes < 10) {
        str_minute = "0" + minutes + ""
    }
    else if (minutes > 9) {
        str_minute = minutes + "";
    }

    if (seconds < 1) {
        str_sec = "00"
    }
    else if (seconds < 10) {
        str_sec = "0" + seconds;
    }
    else if (seconds > 10) {
        str_sec = "" + seconds
    }
    return (`${str_hour}hrs:${str_minute}mins:${str_sec}s`)
}

export default convert