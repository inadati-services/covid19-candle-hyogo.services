<template>
    <v-app id="inspire" v-resize="mutateWindowSize">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="subtitle-1 py-3">
                            新型コロナ関連サイト
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>
                <v-list-item
                    href="https://www.washingtonpost.com/graphics/2020/health/corona-simulation-japanese/"
                    target="_blank"
                    two-line
                >
                    <v-list-item-content>
                        <v-list-item-title
                            >自粛効果シミュレーションサイト</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    href="https://stop-covid19-hyogo.org/"
                    target="_blank"
                    two-line
                >
                    <v-list-item-content>
                        <v-list-item-title
                            >兵庫県 新型コロナウイルスサイト</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    href="https://web.pref.hyogo.lg.jp/kk03/200129.html"
                    target="_blank"
                    two-line
                >
                    <v-list-item-content>
                        <v-list-item-title>兵庫県 公式サイト</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="blue" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title><h1 class="subtitle-1 font-weight-bold">COVID19 CANDLE 兵庫</h1></v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <v-footer app>
            <span class="overline">&copy; 2020 COVID19 CANDLE HYOGO</span>
        </v-footer>
    </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
    methods: {
        ...mapMutations(['mutateWindowSize'])
    }
}
</script>
