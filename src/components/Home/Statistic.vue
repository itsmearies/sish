<template>
    <div class="mx-4 mx-md-15">
        <v-card class="pa-15" style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"> 
            <v-row>
                <v-col 
                    class="d-flex flex-column justify-center align-center" 
                    v-for="item in items"
                    :key="item"
                    cols="6"
                    md="3"
                >
                    <v-icon size="50" color="#41B883">{{ item.icon }}</v-icon>
                    <h1 class="text-h4 my-3">{{ item.quantity }}</h1>
                    <p class="text-body-1">{{ item.text }}</p>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup>
    
    import { ref } from 'vue';

    const items = ref({
        item1: { icon: "mdi-hospital-building", text: "Beds", quantity: "1000+"}, 
        item2: { icon: "mdi-account-group", text: "Patients", quantity: "1000+"},
        item3: { icon: "mdi-account", text: "Nurse & Doctors", quantity: "100"},
        item4: { icon: "mdi-seal", text: "Year Experience", quantity: "4"}
    });

</script>
