export function host (url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}

export function timeAgo (time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/*
 * 2017.11.28
 * 2015年01月01日 ==> 2015-01-01
 */

export function myDate (value) {
  if (!value) return ''
  let tmp = value.replace(/[年|月]/g, '-')
  tmp = tmp.replace(/[日]/g, '')
  return tmp
}
/*
 * 2017.11.28
 * 20150101 ==> 2015-01-01
 */

export function myDate1 (value) {
  if (!value) return ''
  value = (value + '').trim()
  let tmp = value.substr(0, 4) + '-' + value.substr(4, 2) + '-' + value.substr(6, 2)
  return tmp
}

/**
 * 2017.11.30
 * lff
 * 日期 2017-11-11  ==>>  11月11日
 */
export function myMD (value) {
  if (!value) return ''
  value = (value + '').trim()
  value = value.split('-')
  return value[1] + '月' + value[2] + '日'
}

/**
 * 2017.12.12
 * lff
 * 日期 2017-11-11  ==>>  11-11
 */
export function myMd (value) {
  if (!value) return ''
  value = (value + '').trim()
  value = value.split('-')
  return value[1] + '-' + value[2]
}

/**
 * 2017.11.30
 * lff
 * 银行卡后四位数字
 */

export function bankEndFour (value) {
  if (!value) return ''
  return value.trim().substr(-4)
}

/**
 * 2017.12.27
 * lff
 * 数字前 n 展示 后 m 展示 中间六个 * 号
 */

export function numberFormat (value, n, m) {
  if (!value) return ''
  value = (value + '').trim()
  return value.substr(0, n) + '******' + value.substr(-m, m)
}

/**
 * 2017.01.08
 * lff
 * 千位分+ 保留几位小数
 */
export function moneydecimal (value, param) {
  if (!value) {
    return '--'
  }
  if (isNaN(parseFloat(value))) return value
  let myValue = value
  let comma = 3 // 几位用逗号隔开
  let decimalTrue = true
  if (param > 20) {
    decimalTrue = false
  }
  param && param.length > 1 && comma > 0 && param <= 20 ? comma = param : comma = 3
  if (myValue) {
    let pre = ''
    let temp = myValue.toString()
    if (myValue < 0) {
      pre = temp[0]
      temp = temp.substr(1, temp.length)
    }
    // 小数点位数
    if (temp.indexOf('.') > -1) {
      if (temp.split('.')[1].length > 2) {
        temp = temp.substr(0, temp.indexOf('.') + 3)
      } else {
        if (temp.split('.')[1].length === 0) {
          temp = temp + '00'
        }
        if (temp.split('.')[1].length === 1) {
          temp = temp + '0'
        }
      }
    } else {
      temp = temp + '.00'
    }
    let r = temp.split('.')[1] ? temp.split('.')[1] : '00'
    // 用逗号隔开
    myValue = parseFloat((temp + '').replace(/[^\d\.-]/g, '')) + ''
    if (comma === 0) {
      return pre + myValue + '.' + r
    }
    let l = myValue.split('.')[0].split('').reverse()
    let t = ''
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % comma === 0 && (i + 1) !== l.length ? ',' : '')
    }
    if (decimalTrue) {
      return pre + t.split('').reverse().join('') + '.' + r
    } else {
      return pre + t.split('').reverse().join('')
    }
  }

  if (decimalTrue) {
    return '0.00'
  } else {
    return '0'
  }
}

/*
* 2018.01.08
* lff
* 时间戳 转化为时间格式 2018-01-01
* */
export function timeStamp (value) {
  let t = new Date(value)
  let y = t.getFullYear()
  let m = addZero(t.getMonth() + 1)
  let d = addZero(t.getDate())
  return y + '-' + m + '-' + d
}

/*
* 小于10 前面加 0
* */
function addZero (value) {
  if (parseFloat(value) < 10) {
    return '0' + value
  }
  return value
}

/**
 * 2018.01.08
 * lff
 * 千位分隔符
 */
export function thousandsPoints (value, unit) { //  '--'  ''  null  '333'
  if (!value) {
    return '--'
  }
  if (isNaN(parseFloat(value))) return value
  let str = value.toString()
  if (str.indexOf('.') > -1) {
    str = str.split('.')
    str[0] = str[0].replace(/(?=(?!^)(\d{3})+$)/g, ',')
    return unit ? str.join('.') + unit : str.join('.')
  }
  return unit ? value.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',') + unit : value.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')
}

/**
 * 2018.01.09
 * lff
 * 1000000 转换为 100 万
 */
export function tenThousand (value) { // decimal(3)
  if (!value) {
    return '--'
  }
  if (isNaN(parseFloat(value))) return value
  if (!(value % 10000)) {
    return parseFloat(value) / 10000
  }
  return (parseFloat(value) / 10000).toFixed(2)
}

/**
 * 2017.11.30
 * lff
 * 保留 n 位小数 默认2位
 */

export function decimal (value, n = 2) { // decimal(3)
  if (!value) {
    return '--'
  }
  if (isNaN(parseFloat(value))) return value
  value = (value + '').trim()
  if (value.toString().indexOf('.') > -1) {
    let str = value.split('.')
    if (!n) return str[0]
    return str[0] + '.' + str[1].slice(0, n)
  } else {
    if (!n) return value
    return value + '.' + '0000000000000000'.slice(0, n)
  }
}

/**
 * 2018.01.09
 * lff
 * 时间格式转化 2018-01-06 17:01:53 => 2018-01-06
 */
export function dateFormat (value) { // decimal(3)
  if (!value) return ''
  return value.substr(0, 10)
}

/**
 * 2017.12.09
 * lj
 * 获取银行图标地址
 * code:
 */
let banklist = {
  'ABC': 'abc',
  'AHXYS': 'ahxys',
  'ASBANK': 'asbank',
  'AYBANK': 'aybank',
  'BCB': 'bcb',
  'BHBANK': 'bhbank',
  'BJBANK': 'bjbank',
  'BJNSBANK': 'bjnsbank',
  'BOC': 'boc',
  'BOD': 'bod',
  'BSBANK': 'bsbank',
  'CCB': 'ccb',
  'CDBANK': 'cdbank',
  'CDNSBANK': 'cdnsbank',
  'CEB': 'ceb',
  'CFT': 'cft',
  'CIB': 'cib',
  'CITIC': 'citic',
  'CMB': 'cmb',
  'CMBC': 'cmbc',
  'COMM': 'comm',
  'CQBANK': 'cqbank',
  'CQNC': 'cqnc',
  'CQSX': 'cqsx',
  'CSBANK': 'csbank',
  'CSNS': 'csns',
  'DDBANK': 'ddbank',
  'DGNC': 'dgnc',
  'DLBANK': 'dlbank',
  'DY': 'dy',
  'DYBANK': 'dybank',
  'DYYH': 'dyyh',
  'DZBANK': 'dzbank',
  'EERDS': 'eerds',
  'FDBANK': 'fdbank',
  'FJHX': 'fjhx',
  'FSBANK': 'fsbank',
  'FXBANK': 'fxbank',
  'GANZ': 'ganz',
  'GDB': 'gdb',
  'GDBANK': 'gdbank',
  'GDNX': 'gdnx',
  'GDNY': 'gdny',
  'GFB': 'gfb',
  'GJKF': 'gjkf',
  'GLBANK': 'glbank',
  'GSNCXYS': 'gsncxys',
  'GXBB': 'gxbb',
  'GXNCXYS': 'gxncxys',
  'GYBANK': 'gybank',
  'GZBANK': 'gzbank',
  'GZNC': 'gznc',
  'GZNS': 'gzns',
  'GZYH': 'gzyh',
  'HBBANK': 'hbbank',
  'HBNC': 'hbnc',
  'HBNCXYS': 'hbncxys',
  'HBYH': 'hbyh',
  'HDYH': 'hdyh',
  'HFBANK': 'hfbank',
  'HHNC': 'hhnc',
  'HKBANK': 'hkbank',
  'HNNC': 'hnnc',
  'HNXYS': 'hnxys',
  'HRXJ': 'hrxj',
  'HSBANK': 'hsbank',
  'HSYH': 'hsyh',
  'HUZBANK': 'huzbank',
  'HXBANK': 'hxbank',
  'HZBANK': 'hzbank',
  'ICBC': 'icbc',
  'JCBANK': 'jcbank',
  'JINH': 'jinh',
  'JJBANK': 'jjbank',
  'JLBANK': 'jlbank',
  'JLNC': 'jlnc',
  'JNBANK': 'jnbank',
  'JNNC': 'jnnc',
  'JSBANK': 'jsbank',
  'JSJY': 'jsjy',
  'JSNC': 'jsnc',
  'JSYH': 'jsyh',
  'JXYH': 'jxyh',
  'JZBANK': 'jzbank',
  'JZYH': 'jzyh',
  'KEL': 'kel',
  'KFBANK': 'kfbank',
  'KLBANK': 'klbank',
  'KSNC': 'ksnc',
  'LFYH': 'lfyh',
  'LJBANK': 'ljbank',
  'LSBANK': 'lsbank',
  'LSSH': 'lssh',
  'LSYH': 'lsyh',
  'LYBANK': 'lybank',
  'LYYH': 'lyyh',
  'LZBANK': 'lzbank',
  'MYSH': 'mysh',
  'NBBANK': 'nbbank',
  'NCSY': 'ncsy',
  'NHNS': 'nhns',
  'NJCB': 'njcb',
  'NMG': 'nmg',
  'NXBANK': 'nxbank',
  'PDS': 'pds',
  'PSBC': 'psbc',
  'QDBANK': 'qdbank',
  'QHBANK': 'qhbank',
  'QLBANK': 'qlbank',
  'QSBANK': 'qsbank',
  'QZBANK': 'qzbank',
  'SCNC': 'scnc',
  'SDNC': 'sdnc',
  'SDNS': 'sdns',
  'SHBANK': 'shbank',
  'SHNS': 'shns',
  'SMX': 'smx',
  'SPABANK': 'spabank',
  'SPDB': 'spdb',
  'SRBANK': 'srbank',
  'SXBANK': 'sxbank',
  'SXXH': 'sxxh',
  'SZBANK': 'szbank',
  'SZNC': 'sznc',
  'TABANK': 'tabank',
  'TCBANK': 'tcbank',
  'TCCB': 'tccb',
  'TJNS': 'tjns',
  'TLZF': 'tlzf',
  'WFBANK': 'wfbank',
  'WHNC': 'whnc',
  'WHSY': 'whsy',
  'WJNC': 'wjnc',
  'WLMQ': 'wlmq',
  'WXNC': 'wxnc',
  'WYZX': 'wyzx',
  'WZYH': 'wzyh',
  'XABANK': 'xabank',
  'XTBANK': 'xtbank',
  'XXBANK': 'xxbank',
  'XYBANK': 'xybank',
  'XZYH': 'xzyh',
  'YBBANK': 'ybbank',
  'YBZF': 'ybzf',
  'YDBANK': 'ydbank',
  'YDNS': 'ydns',
  'YKBANK': 'ykbank',
  'YNNC': 'ynnc',
  'YQBANK': 'yqbank',
  'YXBANK': 'yxbank',
  'YZBANK': 'yzbank',
  'ZGBANK': 'zgbank',
  'ZJCZ': 'zjcz',
  'ZJGBANK': 'zjgbank'
}

export function banklogo (value) {
  return `/public/bank/${banklist[value]}.png`
}

/**
 * 2017.12.13
 * 鲁旭
 * 145522555255252 ==> 2015-01-01
 */

export function createDate (value) {
  if (!value) return ''
  let mydata = new Date(value)
  let year = mydata.getFullYear()
  let month = mydata.getMonth() + 1
  let day = mydata.getDate()
  let createDate = year + '-' + month + '-' + day
  return createDate
}

/**
 * 2017.12.13
 * 鲁旭
 * 20150101 ==> 2015-01-01
 */
export function recomDate (value) {
  if (!value) return ''
  let yRecomDate = value.substr(0, 4)
  let mRecomDate = value.substr(4, 2)
  let dRecomDate = value.substr(6, 2)
  let recomDate = yRecomDate + '-' + mRecomDate + '-' + dRecomDate
  return recomDate
}
