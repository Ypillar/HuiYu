/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 常用正则服务
 */
'use strict'
var regs = {
    isMobile:function(str){
        return /^1[3|5|7|8|9][0-9]{9}$/.test(str);
    },
    isLng:function(str){
        //经度范围：-180.0000~180.0000
        return /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]{6})?)|180(([.][0]{6})?))$/.test(str);
    },
    isLat:function(str){
        //纬度范围：-90.0000~90.0000
        return /^-?((0|[1-8]?[0-9]?)(([.][0-9]{6})?)|90(([.][0]{6})?))$/.test(str);
    },
    isPositiveInteger:function(str){//是否为正整数
        return /^[0-9]+$/.test(str);
    },
    // 座机和手机
    isPhone:function(str){
        return regs.isMobile(str) || /^(\d{3}-)(\d{8})$|^(\d{4}-)(\d{7})$|^(\d{4}-)(\d{8})$/.test(str);
    },
    isIDCard:function(str){
        return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(str);
    }
}
export default regs