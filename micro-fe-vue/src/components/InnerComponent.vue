<template>
  <div>
    This is inner component: <b>{{ name }}
  </div>
</template>
<script>
  export default {
    props: ['name']
  }
</script>