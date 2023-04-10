<template>
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
            1已完成{{ finishNum }}/全部{{ props.list.length }}
        </el-checkbox>
    </div>
    
    <div v-if="show1">
        <ul  v-for="(item,index) in list2" :key="item.id">
            <li>
                <el-checkbox
                @change="itemCheck()" 
                class="name" 
                v-model="item.ischeck">
                    {{item.name}}
                </el-checkbox>
                <el-button type="danger" @click="dlt1(index)" class="delete" size="small">删除</el-button>
            </li>
        </ul>
        <el-checkbox @change="AllCheck" v-model="isAllcheck" class="total">
            2已完成{{ finishNum }}/全部{{ list2.length }}
        </el-checkbox>
    </div>
    <div v-if="show2">
        <ul  v-for="(item,index) in list3" :key="item.id">
            <li>
                <el-checkbox
                @change="itemCheck()" 
                class="name" 
                v-model="item.ischeck">
                    {{item.name}}
                </el-checkbox>
                <el-button type="danger" @click="dlt1(index)" class="delete" size="small">删除</el-button>
            </li>
        </ul>
        <el-checkbox @change="AllCheck" v-model="isAllcheck" class="total">
            2已完成{{ finishNum }}/全部{{ list2.length }}
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
    const emit = defineEmits([])
    const props = defineProps({
        list: Array,
        default: ''
    },
    )
    const show = ref(true)
    const list2 = reactive([])
    const list3 = reactive({})
    const show1 = ref(false)
    const show2= ref(false)
    const finishNum = ref(0)
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
    
    const dlt = (index)=>{
        props.list.splice(index,1)
        itemCheck()
        if(props.list.length === 0){
            finishNum.value = 0
            isAllcheck.value = false
        }
    }
    const dlt1 = (index)=>{
        list2.splice(index,1)
        itemCheck()
        if(props.list.length === 0){
            finishNum.value = 0
            isAllcheck.value = false
        }
    }
    const ShowHas = ()=>{
            show.value = false
            show1.value = true
            show2.value = false
            list2.value = []
            for(let i = 0 ; i < props.list.length ; i++){
                if(props.list[i].ischeck === true){
                   
                    list2.push(props.list[i])
                    console.log( list2.value.filter(x => x.name != list2.value.name))
                }
            }
            // for(const i in list2){
            //     list2.filter(x => x.id == list2[i].id)
            //     //console.log(list.filter(x => x.name != payload[i].name))
            // }
           
            // console.log(list2)
    }
    const ShowAll = ()=>{
        show.value = true
        show1.value = false
        show2.value = false
    }

    const dltChecked = ()=>{
        for(const i in props.list){
           
            if(props.list[i].ischeck){
                for(j=0; j.value<=props.list.length ;j.value++){
                    console.log(111)
                    j.value=5
                    // if(j===i){
                    //     props.list.splice(j,1)
                    // }
                }
               
                
                // for( const j = ref(0); j <= props.list.length ; j++){
                //     console.log(111)
                //     // if(j === i){
                //     //   console.log(j)
                //     // }else{
                //     //     console.log(11)
                //     // }
                // }
            }
            
            
        }
       
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