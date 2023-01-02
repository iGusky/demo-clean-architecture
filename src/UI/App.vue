<script lang="ts" setup>

import MatterComposable from "@/UI/views/composables/MatterComposable";
import MatterRepository from "@/Data/Network/Repositories/MatterRepository";

console.log(MatterRepository.get({token : '132|SzbUeGOT27Lyl6IomEkrqVw0vDEqvQDIZvCNFars'}))

const listOfMatters = MatterComposable.getAllMatter()

</script>

<template>

    Hello

    <div v-for="(matter, index) in listOfMatters" :key="index">
        <ul class="matter-list-properties">

            <li>ID : {{ matter.id }}</li>
            <li>Nombre : {{ matter.name }}</li>
            <li>Código : {{ matter.code }}</li>
            <li>Area : {{matter.area.name}}</li>

        </ul>
    </div>


</template>


