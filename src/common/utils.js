/**
 * 防抖动函数
 */
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function formatDate (date, fmt) {
  if (typeof date == 'string') {
    return date;
  }
  if (!fmt) fmt = "yyyy-MM-dd hh:mm:ss";
  if (!date || date == null) return null;
  // 时间戳是秒单位，Date需要毫秒
  date = new Date(date *1000);
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt;
}

export function bigNumberTransform(value){
  const newValue = ['', '', ''];
  let fr = 1000;
  let num = 3;
  let text1 = '';
  let fm = 1;
  while(value/fr >= 1) {
    fr *= 10;
    num += 1;
    // console.log('数字', value / fr, 'num:', num)
  }
  if(num <=4) {//千
    newValue[1] = '千';
    newValue[0] = parseInt(value / 1000) + '';
  }else if(num <= 8 ){//万
    text1 = parseInt(num -4)/3 > 1 ? '千万' : '万';
    fm = '万' === text1 ? 10000: 10000000;
    newValue[1] = text1;
    if( value % fm === 0){
      newValue[0] = parseInt(value / fm) + '';
    }else{
      newValue[0] = parseFloat(value /fm).toFixed(2) + '';
    }
  }else if(num <= 16){//亿
    text1 = (num-8)/3 > 1 ? '千亿' : '亿';
    text1 = (num-8)/4 > 1 ? '万亿': text1;
    text1 = (num-8)/7 > 1 ? '千万亿' : text1;
    fm =1;
    if('亿' === text1){
      fm = 100000000;
    } else if('千亿' === text1){
      fm = 100000000000;
    } else if('万亿' === text1){
      fm = 1000000000000;
    } else if('千万亿' === text1){
      fm = 1000000000000000;
    }
    newValue[1] = text1;
    if( value % fm === 0){
      newValue[0] = parseInt(value / fm) + '';
    }else{
      newValue[0] = parseFloat(value /fm).toFixed(2) + '';
    }
  }
  if(value < 1000){
    newValue[1] ='';
    newValue[0] = value + '';
  }
  return newValue.join('');
}
