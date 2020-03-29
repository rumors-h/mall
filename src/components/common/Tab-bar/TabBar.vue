<template>
 <div id="Tab-Bar">
  <slot></slot>
 </div>
</template>

<script>
 

 export default {
   data () {
     return {

     }
   },
   components: {
    
   }
 }
</script>

<style>
#Tab-Bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}
 
</style>
