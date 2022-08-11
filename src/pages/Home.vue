<template>
  <div class="row full-width justify-center">
    <q-form @submit.prevent="handleSubmit" class="col-8 q-my-lg">
      <q-input filled v-model="text" label="Text" />
      <div class="q-my-lg row full-width justify-center">
        <q-card
          v-for="(item, index) in textArrayComputed"
          :key="index"
          class="my-card bg-secondary text-accent q-my-sm col-8"
        >
          <q-card-section class="flex justify-between items-center text-white">
            <i class="fa-solid fa-list-check"></i>
            <span>{{ item }}</span>
            <div>
              <i class="fa-solid fa-pen q-mr-sm cursor-pointer"></i>
              <i
                class="fa-solid fa-trash-can cursor-pointer"
                @click="removeItem(index)"
              ></i>
            </div>
          </q-card-section>
        </q-card>
      </div>
      {{ textArrayComputed }}
    </q-form>
  </div>
</template>

<script setup>
import { computed, defineComponent, ref } from "vue";
import { getTexts } from "./../stores/texts/actions";
// import { getTextsFirebase } from "./../services/textsService";

const textArray = ref();
console.log(textArray);

const textArrayComputed = computed(() => {
  return textArray.value;
});

const text = ref("");

const handleSubmit = () => {
  if (text.value) {
    textArray.value.push(text.value);
  }

  text.value = "";
};

const removeItem = (item) => {
  textArray.value.splice(item, 1);
};

defineComponent({
  name: "HomePage",
});
</script>
