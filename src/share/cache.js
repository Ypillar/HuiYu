/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 缓存服务，sCache、lCache、mCahce分别对应sessionstorage、localstorage、memory（内存变量）每种缓存下有get、set、exist、remove4种方法
 */
'use strict'
//import cfg from 'static/config'

// let loadingInstance = null;

let memory={
    _items:[],
    getItem:function(name){
        if(this.exists(name))
            return (_.find(this._items, o=>i=>i.name===name)).value;
        else return null;
    },
    setItem:function(name,value){
        if(this.exists(name)){
            this.removeItem(name);
        }
        this._items.push({name:name,value:value});
    },
    exists:function(name){
        return !!_.find(this._items, o=>i=>i.name===name);
    },
    removeItem:function(name){
        let i = _.findIndex(this._items, i=>i.name===name);
        if(i!==-1){
            this._items.splice(i,1);
        }
    }
};

let local = window.localStorage || memory;
let session = window.sessionStorage || memory;

let privateFunc={
    hasHash:function(hash,name){
        if(hash){name = `${hash}_${name}`;}
        return name;
    },
    get:function(storage,name,hash){
        name = this.hasHash(hash,name);
        try{
            return JSON.parse(storage.getItem(name));
        }catch(e){
            return storage.getItem(name);
        }
    },
    set:function(storage,name,value,hash){
        name = this.hasHash(hash,name);
        if(typeof value === "object"){
            storage.setItem(name,JSON.stringify(value));
        }else{
            storage.setItem(name,value);
        }
    },
    exists:function(storage,name,hash){
        name = this.hasHash(hash,name);
        return storage.getItem(name)!==null;
    },
    removeItem:function(storage,name,hash){
        name = this.hasHash(hash,name);
        storage.removeItem(name);
    }
}

export default{
    // memory 缓存
    mCache:{
        get:function(name,hash){
            return privateFunc.get(memory,name,hash);
        },
        // 同上
        set:function(name,value,hash){
            privateFunc.set(memory,name,value,hash);
        },
        // 同上
        exists:function(name,hash){
            return privateFunc.exists(memory,name,hash);
        },
        // 同上
        removeItem:function(name,hash){
            return privateFunc.removeItem(memory,name,hash);
        }
    },
    // sessionstorage 缓存
    sCache:{
        get:function(name,hash){
            return privateFunc.get(session,name,hash);
        },
        // 同上
        set:function(name,value,hash){
            privateFunc.set(session,name,value,hash);
        },
        // 同上
        exists:function(name,hash){
            return privateFunc.exists(session,name,hash);
        },
        // 同上
        removeItem:function(name,hash){
            return privateFunc.removeItem(session,name,hash);
        }
    },
    // localstorage 缓存
    lCache:{
        get:function(name,hash){
            return privateFunc.get(local,name,hash);
        },
        // 同上
        set:function(name,value,hash){
            privateFunc.set(local,name,value,hash);
        },
        // 同上
        exists:function(name,hash){
            return privateFunc.exists(local,name,hash);
        },
        // 同上
        removeItem:function(name,hash){
            return privateFunc.removeItem(local,name,hash);
        }
    }
    
}