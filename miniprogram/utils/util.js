/**
 * 为两字节uuid生成全字节UUID
 * @param {*} uuid 
 */
function gen_ful_uuid(uuid) {
  let theuuid = uuid.toUpperCase() + '0000'
  return '0000'+theuuid.slice(0,4) + '-0000-1000-8000-00805F9B34FB'
}

/**
 * 蓝牙OBU的UUID
 */
let service = gen_ful_uuid("FEE7");
let ch_write = gen_ful_uuid("FEC7");
let ch_read = gen_ful_uuid("FEC9");
let ch_indicate = gen_ful_uuid("FEC8");


/**
 * 
 * @param {} arr 
 * @param {*} key 
 * @param {*} val 
 */
function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i;
    }
  }
  return -1;
}

// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  var hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('');
}


/**
 * HEX字串转 arraybuffer
 *  "1122" -> 0x11 0x22
 * @param { hex string} hexstring 
 */
const HEX_UINT8 = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0,
  'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,
  'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15,
}
function ab_from_hexstring(hexstring) {
  let ab = new ArrayBuffer(hexstring.length/2)
  let abView = new Uint8Array(ab)
  for (let i = 0; i < abView.length; i++){
    abView[i] = HEX_UINT8[hexstring[i*2]] * 16 + HEX_UINT8[hexstring[i*2+1]]
  }
  return ab
}

export {
  gen_ful_uuid as gen_ful_uuid,
  service, ch_write, ch_read, ch_indicate,
  ab2hex, inArray,
  ab_from_hexstring,
}