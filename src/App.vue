<template>
    <v-app>
        <v-system-bar app window>
            <span v-if="$user != null">Welcome back, {{ $user.username }}</span>
            <v-skeleton-loader v-else type="text" />

            <v-spacer></v-spacer>

            <span>{{ dateFormatted }}</span>
        </v-system-bar>

        <Bars v-on:drawer="$refs.drawer.change()" />
        <Drawer ref="drawer" />

        <v-main>
            <v-alert
                color="red"
                type="error"
                text
                v-if="showAlert"
                transition="expand-transition"
            >
                <v-row align="center">
                    <v-col class="grow">
                        I'm an example of an Alert about an error which you, the
                        user just need to click on this -> button to fix the
                        problem, and this alert text is long because I'm testing
                        the resize made by the framework
                    </v-col>
                    <v-col class="shrink">
                        <v-btn
                            depressed
                            color="error"
                            :loading="fixing"
                            @click="fix"
                            >Fix</v-btn
                        >
                    </v-col>
                </v-row>
            </v-alert>

            <router-view></router-view>
        </v-main>

        <v-footer padless>
            <v-col class="text-center" cols="12">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

// Model
import { User } from "@/models/User.ts";

// Components
import Bars from "@/components/Bars.vue";
import Drawer from "@/components/Drawer.vue";

@Component({
    components: {
        Bars,
        Drawer,
    },
})
export default class App extends Vue {
    async created() {
        Vue.prototype.$user = null;
        Vue.prototype.$user = await this.getUserData();
    }

    showAlert = true;

    dateFormatted = "";
    fixing = false;

    mounted() {
        setInterval(this.getDate, 1000);
    }

    getDate() {
        const date = new Date();
        this.dateFormatted = date.toLocaleTimeString();
    }

    fix() {
        this.fixing = true;
        setTimeout(() => (this.showAlert = false), 2500);
    }

    async getUserData(): Promise<User> {
        const url =
            "https://randomuser.me/api/?gender=female&inc=gender,name,email,login,picture&noinfo";

        const response = await fetch(url);
        const json = await response.json();

        const obj = json.results[0];
        const name = obj.name.first + " " + obj.name.last;

        return new User(
            obj.gender,
            name,
            obj.login.username,
            obj.email,
            obj.picture.large
        );
    }
}
</script>
