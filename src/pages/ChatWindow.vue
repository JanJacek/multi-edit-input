<template>
  <q-card class="main-container shadow-6 bg-grey-2">
    <q-card-section>
      <p class="text-h4 text-bold">
        Welcome, {{ exampleStore().pickUpRandomUser.name }}
      </p>
      <p class="text-body1">
        Collaborate with your team and edit this text in real-time!
      </p>
      <p class="text-caption">
        <span class="text-bold">Instruction:</span>
        <br />
        1. <span class="text-bold">Copy this card:</span> Select the text or
        link and copy it (Ctrl+C / Cmd+C). <br />
        2. <span class="text-bold">Open a new browser window:</span> Use the
        menu or shortcut (Ctrl+N / Cmd+N). <br />
        3. <span class="text-bold">Paste and go:</span> Paste it into the
        address bar (Ctrl+V / Cmd+V) and press Enter. <br />
        4. <span class="text-bold">Collaborate live:</span> Share the link with
        your team and edit together!
      </p>
    </q-card-section>
    <q-card-section>
      <y-input />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
/* imports */
// libraries
// utils
// types
// stores
import { exampleStore } from 'src/stores/exampleStore';
// components
import YInput from 'src/components/YInput.vue';

/* script*/
const { runProvider } = exampleStore();
runProvider();
</script>

<style>
.main-container {
  color: #515151;
  max-width: 600px;
  margin: 100px auto;
}
</style>
