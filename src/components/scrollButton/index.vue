<template lang="">
    <div class="scroll">
        <p><a :href=Anchor>SCROLL</a></p>
    </div>
</template>
<script>
export default {
    props:{
        Anchor:{
            type: String,
        }
    },
}
</script>
<style scoped>
    .scroll {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.5rem;
    cursor: pointer;
    color: white;
    text-shadow: 1px 1px 1px black;
}

.scroll:hover{
    font-size: 0.75rem;
    transition:font-size 0.5s;
}

a {
  color :white;  
}
</style>