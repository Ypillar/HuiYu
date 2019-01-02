'use strict'
import Vue from 'vue'
import Regex from './regex'
export default{
    install : function (Vue, options){
        const createValid = function(regx,msg){
            return (rule, value, callback) => {        
                if(value != null && value != "") {
                    if(!regx(value)) {
                        callback(new Error(msg))
                    } else {
                        callback()
                    }
                }
                else{
                    callback();
                }
            }
        }

        const validRange= (rule, value, callback)=> {        
            if(value != null && value != "") {
                if(!Regex.isPositiveInteger(value)){
                    callback(new Error(`请输入正整数`));return;
                }
                let min = rule.range.split(',');
                let max = min[1];
                min = min[0];
                if(min){
                    if(parseInt(min)>parseInt(value)){
                        callback(new Error(`不能小于${min}`));return;
                    }
                }
                if(max){
                    if(parseInt(max)<parseInt(value)){
                        callback(new Error(`不能大于${max}`));return;
                    }
                }
                callback();
            }
            else{
                callback();
            }
        }
        Vue.prototype.filter_rules = function (item){
            let rules = [];
            if(item.required){
                rules.push({ required: true, message: '必填', trigger: 'blur' });
            }
            // 字符长度
            if(!item.maxLen && item.minLen){
                rules.push({ min:item.minLen, message: '至少输入'+item.minLen+'个字符', trigger: 'blur' })
            }else if(item.maxLen && !item.minLen){
                rules.push({ max:item.maxLen, message: '最多输入'+item.maxLen+'个字符', trigger: 'blur' })
            }else if(item.minLen&&item.maxLen){       
                if(item.minLen===item.maxLen){
                    rules.push({ min:item.minLen,max:item.maxLen, message: '请输入'+item.minLen+'位字符', trigger: 'blur' })
                }else{
                    rules.push({ min:item.minLen,max:item.maxLen, message: '字符长度在'+item.minLen+'至'+item.maxLen+'之间', trigger: 'blur' })
                }
            }
            // 数字范围
            if(item.max || item.min){
                rules.push( { validator: validRange, trigger: 'blur' , range:(item.min||'')+','+(item.max||'')});
            }
            if(item.type){
                let type = item.type;
                switch(type) {
                    case 'email':
                        rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'  });
                        break;
                    case 'lng':
                        rules.push( { validator: createValid(Regex.isLng,'经度范围：-180.000000~180.000000'), trigger: 'blur' });
                        break;    
                    case 'lat':
                        rules.push( { validator: createValid(Regex.isLat,'纬度范围：-90.000000~90.000000'), trigger: 'blur' });
                        break;    
                    case 'number':
                        rules.push( { validator: createValid(Regex.isPositiveInteger,'请输入正整数'), trigger: 'blur' });
                        break;
                    case 'phone':
                        rules.push( { validator: createValid(Regex.isPhone,'请输入合法的手机或座机'), trigger: 'blur' });
                        break;
                    case 'idCard':
                        rules.push( { validator: createValid(Regex.isIDCard,'请输入合法的身份证号'), trigger: 'blur' });
                        break;
                    default:
                        rule.push({});
                        break;
                }
            }
            return rules;
        };
    }
};