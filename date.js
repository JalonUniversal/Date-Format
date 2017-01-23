
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

;(function (win){
	let __ = function () {
		function __instance () {
			this.nowtime = Date.now();
			this.weekArr = ['一','二','三', '四', '五', '六', '日'];
		}
		__instance.prototype = {
			now: function () { 
				return this.nowtime 
			},
			date: function (timestamp) { 
				return ( new Date(timestamp) )
			},
			disTime: function (target) { 
				return this.nowtime + 3600 * 24 * 1000 * target 
			},
			yesterday: function () {
			 return this.disTime(-1) 
			},
			tomorrow: function () {
			 return this.disTime(1) 
			},
			month: function () {
			 return this.disTime(-30) 
			},
			year: function () {
			 return this.disTime(-365)
			},
			largerTen: function (value) {
				return value > 10 ? value : '0' + value;
			}
		}
		return new __instance() 
	}();
	win.__ = __;
})(window);