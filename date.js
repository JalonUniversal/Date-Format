
function timeformat (timeStamp, output) {
	let date  = new Date(timeStamp);
	let year  = date.getFullYear();
	let month = date.getMonth() + 1;
	let day   = date.getDate(); 
	let week  = date.getDay();
	let hour  = date.getHours();
	let min   = date.getMinutes();
	let second= date.getSeconds();

	month = month > 10 ? month : '0' + month;
	day   = day > 10 ? day : '0' + day;
	hour  = hour > 10 ? hour : '0' + hour;
	min   = min > 10 ? min : '0' + min;
	second = second > 10 ? second : '0' + second;

	const result = [year, month, day, hour, min, second, week];
	const weekArr = ['一','二','三', '四', '五', '六', '日'];
	if (output) {
		if (output === 'date') {
			return year + '-' + month + '-' + day;
		}
		if (output === 'time') {
			return hour + ':' + min + ':' + second
		}
		if (output === 'week') {
			return '星期' + weekArr[week - 1];
		}
	}
	
	return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second + ' ' + '周' + weekArr[week-1];

}