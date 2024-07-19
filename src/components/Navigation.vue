<template>
   <v-app-bar
        prominent
        elevation="0"
        class="border-b-thin"
    >
        <v-row class="d-flex align-center w-100 mx-auto px-md-15 px-5" style="max-width: 1920px;">
            <div>
                <v-img src="../assets/logo.png" width="60"></v-img>
            </div>
                
            <v-spacer></v-spacer>

            <template v-if="$vuetify.display.mdAndUp"> 
                <router-link
                    class="mx-3 router-link"
                    v-for="(link, i) in links"
                    :key="i"
                    :to="{ name: link }"
                >{{ link }} 
                </router-link>
            </template> 
        
            <v-spacer></v-spacer>

            <div>
                <v-app-bar-nav-icon variant="text" icon="mdi-account-outline"></v-app-bar-nav-icon>
                <v-app-bar-nav-icon variant="text" icon="mdi-magnify"></v-app-bar-nav-icon>
                <template v-if="$vuetify.display.smAndDown">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                </template>
            </div>
        </v-row>  
    </v-app-bar>

    <v-navigation-drawer
        v-if="$vuetify.display.smAndDown"
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'left' : undefined"
        temporary
    >   
        <v-list>
            <v-list-item
                v-for="(link, i) in links"
                :key="i"
                @click="drawer = false"
            >
                <router-link class="router-link" :to="{ name: link }">{{ link }}</router-link>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>

    import { ref, watch } from "vue";

    const drawer = ref(false);
    const group = ref(null);
    const model = ref(true);

    const links = ref([
        "Home", "About", "Service", "Doctor", 
        "Department", "Blog", "Contact"
    ]);

    watch(group, () => {
        drawer.value = false;
    });

    
</script>

<style scoped>
  
    :deep(.v-toolbar__content){
        height: 90px !important;
    }
    .v-navigation-drawer{
        top: 90px !important;
    }
    .router-link{
        text-decoration: none;
        color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    }

</style>

