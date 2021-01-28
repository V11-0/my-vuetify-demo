<template>
    <v-navigation-drawer app temporary v-model="showing">
        <v-container v-if="$user == null">
            <v-skeleton-loader type="avatar, text, text" />
        </v-container>
        <v-list v-else>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img :src="$user.picUrl"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title class="title">{{
                        $user.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                        $user.email
                    }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense shaped>
            <v-list-item :to="{ name: 'Home' }" exact>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'Dashboard' }" exact>
                <v-list-item-icon>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <v-list-item :to="{ name: 'About' }" exact>
                <v-list-item-icon>
                    <v-icon>mdi-information-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Drawer extends Vue {
    showing = false;

    change() {
        this.showing = !this.showing;
    }
}
</script>
