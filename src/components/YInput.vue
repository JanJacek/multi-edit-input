<template>
  <q-input
    :modelValue="article"
    dense
    outlined
    ref="editor"
    type="textarea"
    color="lime-4"
    stack-label
    bg-color="grey-2"
  />
</template>

<script setup lang="ts">
/* imports */
// libraries
import { ref, onMounted } from 'vue';
import { QInput } from 'quasar';
import { TextAreaBinding } from 'y-textarea';
import { YText } from 'yjs/dist/src/internals';
// utils
import { hexToRgb } from 'src/utils/hexToRGB';
// types
// stores
import { exampleStore } from 'src/stores/exampleStore';
// components

/* script*/
const { ydoc, provider } = exampleStore();
const editor = ref<QInput | null>(null);
const yarray = ref(ydoc.getText('myText') as YText);

onMounted(() => {
  if (provider) {
    const textArea = editor.value?.nativeEl as HTMLTextAreaElement;
    if (!textArea) throw new Error('missing Text area?');
    textArea.id = 1; // 'specific-id-for-your-input-to-enable-user-badges'
    const areaBinding = new TextAreaBinding(yarray.value, textArea, {
      awareness: provider.awareness,
      clientName: `${exampleStore().pickUpRandomUser.name} `,
      color: hexToRgb(exampleStore().pickUpRandomUser.color),
    });
    window.addEventListener('resize', () => {
      areaBinding.rePositionCursors();
    });
  }
});
const article = ref(yarray.value.toJSON());
</script>

<style>
.selectedText {
  border-radius: 2px;
  padding: 1px;
  z-index: 5;
}
.nameTag {
  color: #fcfcfc;
  font-weight: 600;
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 3px;
  z-index: 5;
}
input ~ div.selectedText {
  transform: translate(0px, -6px);
}
input ~ div.nameTag {
  transform: translate(0px, -47px);
}
textarea ~ div.selectedText {
  transform: translate(0px, 2px);
}
textarea ~ div.nameTag {
  transform: translate(0px, -37px);
}
</style>
