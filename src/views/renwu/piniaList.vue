<template>
    <div style="height: 500px;">
        <h3>piania</h3>
        <el-input v-model="newList" @keyup.enter="add" placeholder="请输入你的任务名称,按回车键确认" clearable class="title" />
        <PiniaRenwuList :list="store.list" @deletehas="deletehas" @hasfinish="hasfinish" @dlt1="dlt1"></PiniaRenwuList>
    </div>
</template>

<script  setup>
    import {isRef, ref, unref, customRef, onRenderTracked, 
        onRenderTriggered, reactive, toRef, toRefs, shallowRef, 
        triggerRef, isReactive, readonly, isReadonly,
        isProxy,toRaw, markRaw, shallowReactive, computed} from 'vue'
    
    import PiniaRenwuList from '@/components/PiniaRenwuList.vue';
    import useStore from '@/store/useStore'

    const store = useStore()
    const newList = ref('')
    
    const add = ()=>{
        store.list.push({name:newList.value,ischeck:false,id:store.list.length+1})
        console.log(store.list)
        newList.value = ''
    }
    const hasfinish = (item)=>{
        store.list.length = 0
        store.list.push(...item)
    }
    const deletehas = (item)=>{
        store.list.length = 0
        store.list.push(...item)
    }
    const dlt1 = (id,index)=>{
        for(const i in store.list){
            console.log(store.list[i])
            if(store.list[i].id === id){
                console.log(store.list[i].id)
                store.list.splice(store.list[i].id,1)
            }
        }
       
    }
</script>

<style scoped>
.title{
    width: 100%;
}
</style>