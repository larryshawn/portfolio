<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'
import { useRouter } from 'vue-router'

const newCafe = ref({
  name: '',
  rating: 0,
  location: 'United States',
  price: 1,
  favorite: false
})

const db = useFirestore()
const router = useRouter()

async function addCafe() {
  const newDoc = await addDoc(collection(db, 'cafes'), {
    ...newCafe.value
  })

  // Check if the new document was successfully created
  if (newDoc.id) {
    // Navigate to the home page if this is true
    router.push({ name: 'cafeApp' })
  }
}

const cancelAdd = () => {
  router.push({ name: 'cafeApp' })
}

console.log('Document written with ID: ', newCafe.value.id)
</script>

<template>
  <BaseContainer>
    <h1 class="mb-4">New Cafe</h1>
    <BaseCard>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="newCafe.name"
            label="Name"
            required
            placeholder="Cafe with a Vue"
            variant="underlined"
          />
          <BaseInput
            v-model="newCafe.rating"
            label="Rating"
            type="number"
            min="0"
            max="5"
            step="0.5"
            variant="underlined"
            required
          />
          <BaseInput v-model="newCafe.location" label="Location" variant="underlined" required />
          <BaseInput
            v-model.number="newCafe.price"
            label="Price"
            type="number"
            min="1"
            max="4"
            variant="underlined"
            required
          />
          <BaseCheckbox v-model="newCafe.favorite" label="Favorite" />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="addCafe" variant="tonal" color="success"> Add New Cafe </BaseButton>
        <BaseButton variant="tonal" color="error" outline @click="cancelAdd"> Cancel </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
