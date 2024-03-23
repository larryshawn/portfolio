<!-- write  a program that prints out the numbers 1 - 100 -->
<!-- If the number is divisible by 3 print fizz -->
<!-- if the number is divisible by 5 pring buzz -->
<!-- if divisible by both print fizz buzz -->
<!-- otherwise print the number -->
<template>
  <div class="round-coin">
    <div class="abrrev"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

for (let index = 1; index < 100; index++) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log('fizz buzz')
  }
  if (index % 3 == 0) {
    console.log('fizz')
  } else if (index % 5 == 0) {
    console.log('buzz')
  } else {
    console.log(index)
  }
}

for (let i = 1; i < 101; i++) {
    let answer = '';
    if (i % 3 == 0 && i % 5 == 0) {
        answer = 'Fizz Buzz'
    }
    else if (i % 3 == 0) {
        answer = 'Fizz'
    }
    else if (i % 5 == 0) {
        answer = 'Buzz'
    }
    else {
        answer = i
    }
    console.log(answer)
    
}

// Display round coin with abbreviated number centered inside
// 2500 should say 2.5 k

data() {
    return {
        key: value
    }
},
props: {
    propName: {
        type: Number,
        default: 
    },
},

computed: {
    newVal(prop) {
    
}
computed: {
    newVal(prop) {
        const prop = 2500
    prop /= 1000 
    prop = num + 'k'
        return this.data 
    }
},

</script>

<style lang="scss" scoped>
.round-coin {

}
</style>
