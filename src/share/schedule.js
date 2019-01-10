/*
 * @Author: JuYangjia
 * @Date: 2019-01-07 14:43:30
 * @Description: 任务调度服务，外部使用均可通过comm服务中的addSchedule方法和removeSchedule方法使用，示例见pages/jyj/HelloWrold.vue
 */
'use strict'
import Vue from 'vue'
import router from '../router';
let Tasks=[];
let timer = setInterval(schedule,100);
let getNow=()=>{
    return (new Date()).getTime();
}
class Task {
    first_run_time=0;
    last_run_time=0;
    run_times=0;
    interval=0;
    exec=null;
    guid="";
    _isDestory=true;
    sleep=null;
    constructor (exec,interval,guid,sleep) {
        this.exec =exec;
        this.interval =interval;
        this.guid=guid;
        this.sleep=sleep;
    }

    excute(){
        if(typeof this.sleep ==="function"){
            if(this.sleep())return;//外部阻止执行
        }
        // if(typeof this.sleep ==="boolean"){
        //     if(this.sleep)return;//外部阻止执行
        // }
        if(typeof this.sleep ==="string"){
            if(router.app.$route.path.toLowerCase()!==this.sleep.toLowerCase())return;
        }
        let now = getNow();
        if(this.first_run_time===0){
            this.first_run_time=now;
        }
        this.last_run_time=now;
        if(this.exec)this.exec();
        this.run_times++;
    }

    getGuid(){
        return this.guid;
    }
    getInterval(){
        return this.interval;
    }
    getLastRunTime(){
        return this.last_run_time;
    }
    
    destroy(){
        this._isDestory=true;
        Tasks = Tasks.filter(o=>!o._isDestory);
    }
}
function schedule(){
    // console.log("调度任务执行start",Tasks.length);
    for(let i=0;i<Tasks.length;i++){
        let task = Tasks[i];
        if(getNow() - task.getLastRunTime() > task.getInterval()){
            setTimeout(()=>{
                task.excute();
            });
        }
    }
    //console.log("调度任务执行end");
}
function addTask(opt){
    let task = Tasks.find(o=>o.getGuid()===opt.guid);
    if(task){
        // 重复的任务
        console.warn("试图添加重复的任务，清空之前的任务");
        removeTask(task.getGuid());
        console.log(111)
    }
    
    task = new Task(opt.excute,opt.interval,opt.guid,opt.sleep);
    Tasks.push(task);
    return task;
}
function removeTask(guidOrTask){
    if(typeof guidOrTask ==="string"){
        guidOrTask = Tasks.find(o=>o.guid===guidOrTask);
    }
    if(guidOrTask)guidOrTask.destroy();
}


export default{
    addTask,
    removeTask
}