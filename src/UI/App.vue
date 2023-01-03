<script lang="ts" setup>

import MatterComposable from "@/UI/views/composables/MatterComposable";
import useXDA from "@/UI/views/composables/useXDA";

const listOfMatters = MatterComposable.getAllMatter()
const { XDA, getXDA } = useXDA()
getXDA()
</script>

<template>

    Hello
    {{ XDA }}
    <div v-for="(matter, index) in listOfMatters" :key="index">
        <ul class="matter-list-properties">

            <li>ID : {{ matter.id }}</li>
            <li>Nombre : {{ matter.name }}</li>
            <li>Código : {{ matter.code }}</li>
            <li>Area : {{matter.area.name}}</li>

        </ul>
    </div>


</template>


