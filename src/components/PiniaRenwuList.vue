<template>
    <p>6660</p>
     <div v-if="show">
        <ul  v-for="(item,index) in props.list" :key="item.id">
            <li>
                <el-checkbox
                @change="itemCheck()" 
                class="name" 
                v-model="item.ischeck">
                    {{item.name}}
                </el-checkbox>
                <el-button type="danger" @click="dlt(index)" class="delete" size="small">删除</el-button>
            </li>
        </ul>
        <el-checkbox @change="AllCheck" v-model="isAllcheck" class="total">
            已完成{{ finishNum }}/全部{{ props.list.length }}
        </el-checkbox>
    </div>
    
    <div v-if="show1">
        <ul  v-for="(item,index) in list2" :key="item.id">
            <li>
                <el-checkbox
                @change="itemCheck1" 
                class="name" 
                v-model="item.ischeck">
                    {{item.name}}
                </el-checkbox>
                <el-button type="danger" @click="dlt1(item.id-1,index)" class="delete" size="small">删除</el-button>
            </li>
        </ul>
        <el-checkbox @change="AllCheck" v-model="isAllcheck" class="total">
            已完成{{ finishNum1 }}/全部{{ list2.length }}
        </el-checkbox>
    </div>
    <div class="input">
        <el-button type="danger" @click="ShowHas()"  size="small" class="cleanup">显示已完成任务</el-button>
        <el-button type="danger" @click="ShowAll()"  size="small" class="cleanup">显示全部</el-button>
        <el-button type="danger" @click="dltChecked()"  size="small" class="cleanup">清除已完成任务</el-button>
    </div> 
    <!-- {{ num }} -->
    {{ j }}
  </template>
  
  <script setup>
    import { ref,defineProps,reactive,defineEmits } from 'vue'
    const emit = defineEmits(['deletehas','hasfinish','ShowHas','ShowAll','dlt1'])
    const props = defineProps({
        list: Array,
        default: ''
    },
    )
    const show = ref(true)
    const list2 = reactive([])
    const show1 = ref(false)
    const finishNum = ref(0)
    const finishNum1 = ref(0)
    const j = ref(0)
    const isAllcheck = ref(false)
    const itemCheck = ()=>{
        const num = ref(0)
        props.list.forEach(item =>{
            if(item.ischeck){
                num.value++
            }
            finishNum.value = num.value
        })
        if(finishNum.value === props.list.length){
            isAllcheck.value = true
        }else{
            isAllcheck.value = false
        }
    }
    const AllCheck = ()=>{
        finishNum.value = props.list.length
        if(isAllcheck.value === true){
            props.list.forEach(item => {
                item.ischeck = true
            })
            finishNum.value = props.list.length
        }else{
            props.list.forEach(item => {
                item.ischeck = false
            })
            finishNum.value = 0
        }
    }
    const itemCheck1 = ()=>{
        const num = ref(0)
        list2.forEach(item =>{
            if(item.ischeck){
                num.value++
            }
            finishNum1.value = num.value
        })
        if(finishNum1.value === list2.length){
            isAllcheck.value = true
        }else{
            isAllcheck.value = false
        }
    }
    const dlt = (index)=>{
        props.list.splice(index,1)
        itemCheck()
        if(props.list.length === 0){
            finishNum.value = 0
            isAllcheck.value = false
        }
    }
    const dlt1 = (id,index)=>{
        console.log(id,index)
        list2.splice(index,1)
        itemCheck1()
        if(list2.length === 0){
            finishNum1.value = 0
            isAllcheck.value = false
        }
        emit('dlt1', id)
    }
    const ShowHas = ()=>{
        show.value = false
        show1.value = true
        list2.length = 0
        for(let i = 0 ; i < props.list.length ; i++){
            if(props.list[i].ischeck === true){
                list2.push(props.list[i])
            }
        }
        itemCheck1()
    }
    const ShowAll = ()=>{
        show.value = true
        show1.value = false
        itemCheck()
    }

    const dltChecked = ()=>{
        list2.length = 0
        for(let i = 0 ; i < props.list.length ; i++){
            if(props.list[i].ischeck === false){
                list2.push(props.list[i])
            }
        }
        emit('deletehas', list2)
        itemCheck()   
        itemCheck1()
    }
  </script>
  
  <style scoped>
  ul{
    position: relative;
    right: 40px;
    width: 100%;
  }
  li{
    list-style: none;
    width: 100%;
    border: 1px solid black
  }
  
  .name{
    text-align: left;
    width: 100px;
    display: block;
    position: relative;
    right: -1%;
  }

  .delete{
    display: block;
    margin-top: -33px;
    margin-left: 95%;
  }

  .input{
    width: 100%;
    height: 25px;
    position: relative;
  }
  
  .total{
    display: block;
    margin-left: -700px;
  }
  /* .cleanup{
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
  } */
  </style>