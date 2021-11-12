<template>
  <div>
    <img height=180px src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4"/>

    <div v-if="name!=null">
      <h1>Order Form</h1>
      product id:  <b>{{ name }}</b> 
      <div><shopping-product :name="name" mode="small"></shopping-product></div>
    </div>
    <div v-else>상품이 선택되지 않았습니다.</div>
</template>
<script>
  export default {
    props: ['name'],
    mounted(){
        var me = this;
        new BroadcastChannel("main").onmessage = (message)=>{
            if(message.data && message.data.type == "OrderPlaced"){
                me.name = message.data.productId;
                me.$forceUpdate();
            }
        }
    },
    methods: {
    }
  }
</script>