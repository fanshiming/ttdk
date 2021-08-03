/**
 * 为两字节uuid生成全字节UUID
 * @param {*} uuid 
 */
function gen_ful_uuid(uuid) {
  let theuuid = uuid.toUpperCase() + '0000'
  return '0000'+theuuid.slice(0,4) + '-0000-1000-8000-00805F9B34FB'
}

let service = gen_ful_uuid("FEE7");
let ch_write = gen_ful_uuid("FEC7");
let ch_read = gen_ful_uuid("FEC9");
let ch_indicate = gen_ful_uuid("FEC8");

/**
 * BLE OBU FRAME
 */
const BLE_FRAME_WIDTH = 0xfe;
let BLE_FRAME_SN = 0;

/**
 * protoco-weixin 包头
 */

/**
 * 将tpdu-package封装一层 weixin-protobuf
 * @param {*} ab 
 */
function qiguai_pkg(ab) {
  let abView = new Uint8Array(ab)
  let nLength = 12 + abView.length + 2
  let buffer = new ArrayBuffer(nLength)
  let vB = new Uint8Array(buffer)
  vB[0] = 0x7e
  vB[1] = 0x01
  vB[2] = nLength & 0x0f
  vB[3] = nLength & 0xf0
  // 发送的 ncmdid 永为 7531H  且 nSeq 永为0
  // 外设返回的 ncmdid 永为 2712H  且 nSeq 永不为0
  vB[4] = 0x75
  vB[5] = 0x31
  vB[6] = 0
  vB[7] = 0
  vB[8] = 0x0A
  vB[9] = 0x00
  vB[10] = 0x12
  vB[11] = abView.length
  let idx = 12
  for (let i = 0; i <abView.length; i++ ){
    vB[idx++] = abView[i]
  }
  vB[idx++] = 0x18
  vB[idx++] = 0
  return buffer  
}

/**
 * 
 * @param {ArrayBuffer} ab 
 */
function  qiguai_decode(ab) {
  // FE01 0027 2712 00AF 0A0012


}


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
 * 实际中的OBU没按着文档做 fuck
 * 此函数不满足实际应用
 * 将tpdu_arr变为ble包
 * 目前这个版本仅支持一个tpdu
 * tpdu_arr_list   [type:ArrayBuffer]
 * return  type: ArrayBuffer
 */
function tpdu_to_package_ble (tpdu_arr_list) {    
  let lenArray = 2 + tpdu_arr_list.length * 2
  for ( let i = 0; i < tpdu_arr_list.length; i++){
    lenArray += tpdu_arr_list[i].byteLength
  }
  if ( lenArray > 0x80 ) throw "only suport LEN < 0X80"
  let ab = new ArrayBuffer(lenArray)
  let aView = new Uint8Array(ab)
  aView[0] = 0x80
  aView[1] = lenArray-2
  let aIdx = 2
  for ( let i = 0; i < tpdu_arr_list.length; i++){
    let theitem = tpdu_arr_list[i]
    let itemView = new Uint8Array(theitem)
    aView[aIdx++] = i+1
    aView[aIdx++] = itemView.length
    for (let k = 0; k < itemView.length; k++){
      aView[aIdx++] = itemView[k]
    }
  }
  return ab    
}


/**
 * 将ble包分为33协议帧  ST||SN||CTL||LEN||DATA||BCC
 *  ab  ArrayBuffer
 * @param {} ab 
 * return type: list[ArrayBuffer,]
 */
function  fragments_ble(ab) {
  let nuts = []
  let abView = new Uint8Array(ab)
  let abIdx = 0

  // 拆分为 ble_frame_WIDTH 个字节为一帧
  let ble_content_width = BLE_FRAME_WIDTH-5
  let fragment_count = Math.floor((ab.byteLength)/(ble_content_width) )
  let fragment_last = (ab.byteLength)%(ble_content_width)  
  let fragment_total = fragment_count + 1
  if (fragment_last == 0){
    fragment_total = fragment_count
  }
  if (fragment_total > 0x70){return}
    
  // 第一个帧 
  let bd_len = 0
  if (fragment_count == 0){ bd_len = fragment_last  } else { 
    bd_len = ble_content_width
  } 

  let ble_fragment = new ArrayBuffer(bd_len+5)
  let bfView = new Uint8Array(ble_fragment)
  bfView[0] = 0x33
  let bfIdx = 4    
  for ( let i = 0; i < bd_len; i++){
    bfView[bfIdx++] = abView[abIdx++]
  }
  bfView[0] = 0x33
  bfView[3] = bd_len
  bfView[2] = fragment_total - 1 + 0x80
  let thebcc = 0
  for ( let b = 1; b < bd_len+5-1; b++){
    thebcc ^= bfView[b]
  }
  bfView[bd_len+5-1] = thebcc
  nuts.push(ble_fragment)

  // 余下的整帧
  bd_len = BLE_FRAME_WIDTH - 5
  for (let k = 1; k < fragment_count; k++){ 
    let ble_fragment = new ArrayBuffer(bd_len+5)
    let bfView = new Uint8Array(ble_fragment)
    bfIdx = 4    
    for ( let i = 0; i < bd_len; i++){
      bfView[bfIdx++] = abView[abIdx++]
    }
    bfView[0] = 0x33
    bfView[3] = bd_len
    bfView[2] = fragment_total-k-1
    thebcc = 0
    for ( let b = 1; b < bd_len+5-1; b++){
      thebcc ^= bfView[b]
    }
    bfView[bd_len+5-1] = thebcc
    nuts.push(ble_fragment)
  }

  // last 帧
  if (fragment_last > 0 && fragment_count >= 1){
    bd_len = fragment_last
    let ble_fragment = new ArrayBuffer(bd_len+5)
    let bfView = new Uint8Array(ble_fragment)
    let bfIdx = 4    
    for ( let i = 0; i < bd_len; i++){
      bfView[bfIdx++] = abView[abIdx++]
    }
    bfView[0] = 0x33
    bfView[3] = bd_len
    bfView[2] = 0
    thebcc = 0
    for ( let b = 1; b < bd_len+5-1; b++){
      thebcc ^= bfView[b]
    }
    bfView[bd_len+5-1] = thebcc
    nuts.push(ble_fragment)
  }
  return nuts
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
  tpdu_to_package_ble as tpdu_to_ble_package,
  fragments_ble,qiguai_pkg,ab_from_hexstring,
}