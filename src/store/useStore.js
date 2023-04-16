import { defineStore } from 'pinia'

const useStore = defineStore('ncode',{
    state: ()=>{
        return {
          num:100,
          list:[
            {
                name:'吃饭',
                id:1,
                ischeck:false
            }
            ,
            {
                name:'睡觉',
                id:2,
                ischeck:false
                
            },
            {
                name:'打豆豆',
                id:3,
                ischeck:false
            },
            {
                name:'敲代码',
                id:4,
                ischeck:false
            }
        ]
        }
    },
    getters:{

    },
    actions:{
      add(item){
        this.list.push(item)
      }
    }
})

export default useStore