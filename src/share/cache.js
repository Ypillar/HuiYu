'use strict'
//import cfg from 'static/config'

// let loadingInstance = null;

let memory={
    _items:[],
    getItem:function(name){
        return (this._items.find(i=>i.name===name)).value;
    },
    setItem:function(name,value){
        if(this.exists(name)){
            this.removeItem(name);
        }
        this._items.push({name:name,value:value});
    },
    exists:function(name){
        return !!this._items.find(i=>i.name===name);
    },
    removeItem:function(name){
        let i = this._items.findIndex(i=>i.name===name);
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
    MEMORY_CACHE:"memory",// 内存缓存
    LOCAL_CACHE:"local",// localstorage
    SESSION_CACHE:"session",//sessionstorage
    // hash可选项，传入可避免key冲突覆盖，type为cache.MEMORY_CACHE | cache.LOCAL_CACHE | cache.SESSION_CACHE
    get:function(type,name,hash){
        return privateFunc.get(eval(type),name,hash);
    },
    // 同上
    set:function(type,name,value,hash){
        privateFunc.set(eval(type),name,value,hash);
    },
    // 同上
    exists:function(type,name,hash){
        return privateFunc.exists(eval(type),name,hash);
    },
    // 同上
    removeItem:function(type,name,hash){
        return privateFunc.removeItem(eval(type),name,hash);
    }
}