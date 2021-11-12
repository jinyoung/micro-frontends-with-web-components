<template>
  <div>
    <img height=220px src="https://avatars.githubusercontent.com/u/6128107?s=280&v=4"/>
    <div>
    Hello <b>{{ name }}</b> from your friendly Vue component.</div>
    <button v-on:click="hello" class="btn btn-secondary">Say Hello</button>
    
    <inner-component :name="name"></inner-component>

    <react-el name="jjy"></react-el>
  </div>
</template>
<script>
import InnerComponent from './InnerComponent.vue';
  export default {
  components: { InnerComponent },
    props: ['name'],
    mounted(){
        var me = this;
        new BroadcastChannel("main").onmessage = (message)=>{
            if(message.data && message.data.type == "OrderPlaced"){
                me.name = "Order Form for " + message.data.productId;
            }
        }
    },
    methods: {

        
        hello(){

            this.$emit('helloEvt');
        }
    }
  }
</script>