<template>
  <div class="row full-width justify-center">
    <q-form @submit.prevent="handleSubmit" class="col-8 q-my-lg">
      <q-input filled v-model="text" label="Text" />
      <div class="q-my-lg row full-width justify-center">
        <q-card
          v-for="(item, index) in getTasksArray"
          :key="index"
          class="my-card bg-secondary text-accent q-my-sm col-8"
        >
          <q-card-section class="flex justify-between items-center text-white">
            <i class="fa-solid fa-list-check"></i>
            <span>{{ item.task }}</span>
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
    </q-form>
  </div>
  {{ getTasksArray }}
</template>

<script setup>
import { useTasksStore } from "src/stores/texts/state";
import { computed, defineComponent, ref } from "vue";
import { getTasks, addTask } from "./../stores/texts/actions";

getTasks();
const TasksStore = useTasksStore();

const getTasksArray = computed(() => {
  return Object.values(TasksStore.tasks);
});

const textArray = ref();

const textArrayComputed = computed(() => {
  return textArray.value;
});

const text = ref("");

const handleSubmit = () => {
  if (text.value) {
    addTask(text.value);
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
