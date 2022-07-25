<template>
  <div class="home">
    <v-col cols="12">
      <v-text-field
        label="Qual sua tarefa?"
        outlined
        clearable
        v-model="taskField"
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(task, i) in $store.state.tasks" :key="i">
          <Tarefa :task="task" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Tarefa from "../components/Tarefas/tarefa.vue";

@Component({
  components: { Tarefa },
})
export default class Home extends Vue {
  taskField = null;

  handleAddTask() {
    this.$store.commit("addTasks", this.taskField);
    this.taskField = null;
  }
}
</script>
