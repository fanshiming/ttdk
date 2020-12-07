// miniprogram/pages/etcMap/etcMap.js
const gantrys = require("../../utils/gantry.js").gantrys;

Page({

	/**
   * 页面的初始数据
   */
	data: {		
		latitude: 39.885915,
		longitude: 116.312672,
		isShowScale: false,
		isShowCompass: false,
		isShowPosition: true,
		markerImgs: [{
			normal: './imgs/Marker1_Normal@3x.png',
			active: './imgs/Marker1_Activated@3x.png'
		},{
			normal: './imgs/Marker2_Normal@3x.png',
			active: './imgs/Marker2_Activated@3x.png'
		},{
			normal: './imgs/Marker3_Normal@3x.png',
			active: './imgs/Marker3_Activated@3x.png'
		}],				
		markers: [],
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
		let _markers = [];
    for(let i = 0; i < gantrys.length; i++){
			let mkr = {
				id: i,
				callout: {
					content: gantrys[i][2],
					padding: 10,
					borderRadius: 2,
					display: 'BYCLICK'
				},
				latitude: gantrys[i][0],
				longitude: gantrys[i][1],
				iconPath: './imgs/Marker1_Activated@3x.png',
				width: '34px',
				height: '34px',
				rotate: 0,
				alpha: 1
			};
			_markers.push(mkr);
		}
		this.setData({
			markers:_markers,
		});  
	},
	// 激活定位控件
	onChangeShowPosition (event) {
		const {value} = event.detail;
		if (value) {
			wx.getLocation({
				type: 'gcj02',
				success: (res) => {
					const {latitude, longitude} = res;
					this.setData({
						location: {
							latitude,
							longitude
						}
					});
				}
			});
		}
		this.setData({
			isShowPosition: value
		});
	},
	onShareAppMessage: function () {

	}
})