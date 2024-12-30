function capitalizeFirstLetter(str: string) {
  if (!str) return str;
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("");
}

const vueComponentTemplate = `<script setup lang="ts">
</script>

<template>
</template>

<style scoped>
</style>
`;

const fileType = prompt(
  "Qual o tipo do arquivo? [component, service, composable] ",
);
if (
  fileType !== "component" && fileType !== "composable" &&
  fileType !== "service"
) {
  console.log(
    "Tipo de arquivo inválido! Deve ser: [component, service ou composable]",
  );
  Deno.exit(1);
}
const fileName = prompt(`Digite o nome do ${fileType}:`);

const functionTemplate = `export default function ${fileName}() {

}
`;

const componentTestTemplate = `/**
 * @vitest-environment happy-dom
 */

import { describe, it } from "vitest";

describe("${fileName} component", () => {
    it.todo("stuff")
})
`;

const functionTestTemplate = `import { describe, it } from "vitest";

describe("${fileName} ${fileType}", () => {
    it.todo("stuff")
})
`;

try {
  const filesDir = `src/${fileType}s/${fileName}`;
  await Deno.mkdir(filesDir);
  console.log(`✔️ Diretório ${filesDir} criado`);
  if (fileType === "component") {
    await Deno.writeTextFile(
      `${filesDir}/${fileName}.vue`,
      vueComponentTemplate,
    );
    console.log(`✔️ Arquivo ${fileName}.vue criado`);
    await Deno.writeTextFile(
      `${filesDir}/${fileName}.spec.ts`,
      componentTestTemplate,
    );
    console.log(`✔️ Arquivo ${fileName}.spec.ts criado`);
  } else {
    await Deno.writeTextFile(`${filesDir}/${fileName}.ts`, functionTemplate);
    console.log(`✔️ Arquivo ${fileName}.ts criado`);
    await Deno.writeTextFile(
      `${filesDir}/${fileName}.spec.ts`,
      functionTestTemplate,
    );
    console.log(`✔️ Arquivo ${fileName}.spec.ts criado`);
  }

  console.log(`✅ ${capitalizeFirstLetter(fileType)} criado com sucesso!`);
} catch (error) {
  console.log("Error creating directory", (error as Error).message);
  Deno.exit(1);
}
