<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': task.concluido }"
      @click="task.concluido = !task.concluido"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.concluido }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click.stop="handleRemoveTask(task.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    handleRemoveTask(id) {
      this.$store.commit("removeTask", id);
    },
  },
};
</script>

<style></style>
