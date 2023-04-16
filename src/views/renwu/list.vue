<template>
    <div style="height: 500px;">
        <h3>任务列表</h3>
        <button @click="abc">111</button>
        <el-input v-model="newList" @keyup.enter="add" placeholder="请输入你的任务名称,按回车键确认" clearable class="title" />
        <RenwuList :list="list" @deletehas="deletehas" @hasfinish="hasfinish" @dlt1="dlt1"></RenwuList>
    </div>
</template>

<script  setup>
    import {isRef, ref, unref, customRef, onRenderTracked, 
        onRenderTriggered, reactive, toRef, toRefs, shallowRef, 
        triggerRef, isReactive, readonly, isReadonly,
        isProxy,toRaw, markRaw, shallowReactive, computed} from 'vue'
    
    import RenwuList from '@/components/RenwuList.vue';
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
    const add = ()=>{
        list.push({name:newList.value,ischeck:false,id:list.length+1})
        newList.value = ''
    }
    const hasfinish = (list2)=>{
        list.length = 0
        list.push(...list2)
    }
    const deletehas = (list2)=>{
        list.length = 0
        list.push(...list2)
    }
    const dlt1 = (id,index)=>{
        for(const i in list){
            console.log(list[i])
            if(list[i].id === id){
                list.splice(list[i].id,1)
            }
        }
       
    }
</script>

<style scoped>
.title{
    width: 100%;
}
</style>