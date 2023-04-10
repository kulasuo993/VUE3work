<template>
    <div style="height: 500px;">
        <h3>任务列表</h3>
        <button @click="abc">111</button>
        <el-input v-model="newList" @keyup.enter="add" placeholder="请输入你的任务名称,按回车键确认" clearable class="title" />
        <RenwuList :list="list"></RenwuList>
    </div>
    <div class="btn">
        <!-- <el-button  size="small" >显示已完成任务</el-button> -->
      
    </div>
    {{ list }}
</template>

<script  setup>
    import {isRef, ref, unref, customRef, onRenderTracked, 
        onRenderTriggered, reactive, toRef, toRefs, shallowRef, 
        triggerRef, isReactive, readonly, isReadonly,
        isProxy,toRaw, markRaw, shallowReactive, computed} from 'vue'
    
    import RenwuList from '@/components/RenwuList.vue';
    const abc = () =>{
        for(let i in list){
            list[i]={
            name:'吃饭',
            ischeck:false,
        },{
            name:'吃饭1',
            ischeck:false
        },{
            name:'吃饭2',
            ischeck:false
        },{
            name:'吃饭3',
            ischeck:false
        },{
            name:'吃饭4',
            ischeck:false
        }
        }
    }
    const newList = ref('')
    const list = reactive([
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
        },
    ])
    const list2 =reactive([])

    const add = ()=>{
        list.push({name:newList.value,ischeck:false,id:list.length+1})
        newList.value = ''
        console.log(list)

    }
    const dltChecked = (payload)=>{
        const checkList = reactive([])
        //console.log(payload)
        for(const i in payload){
            //console.log(payload[i].name)
            list.value  = list.filter(x => x.id == payload[i].id)
             //console.log(list.filter(x => x.name != payload[i].name))
        }
        // list2.a1 = payload
        console.log(list)
    }
</script>

<style scoped>
.title{
    width: 100%;
}

.btn{
    width: 100%;
    height: 30px;
    position: relative;
    top: -150px;
}
</style>