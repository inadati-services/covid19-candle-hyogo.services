<template>
    <div style="width: 100%;">
        <div class="mt-3 pb-1">
            <v-card class="mb-5">
                <v-alert
                    id="alert"
                    class="elevation-2 mb-2"
                    :type="importance.alert"
                    tile
                >{{ importance.message }}</v-alert>
                <v-card-title>
                    <h2 style="width: 100%;" class="title font-weight-bold">兵庫県の新型コロナウイルス感染の傾向</h2>
                </v-card-title>
                <v-card-text>
                    <p>
                        下のグラフは、兵庫県サイト公式の
                        <a
                            href="https://web.pref.hyogo.lg.jp/kk03/documents/yousei.xlsx"
                        >Excelデータ</a>を元に作成しています。
                        <br />累計ではなく、退院者及び死亡者を引いた入院中の患者数を利用しています。
                    </p>
                    <p>
                        グラフは「ローソク足」、「5日間平均線」、「10日間平均線」の並び順や数値の開き具合によって感染が「拡大傾向」か「終息傾向」か「鈍化傾向」かを判断できます。
                        <br />上から「ローソク足」、「5日間平均線」、「10日間平均線」の順の場合、感染は「拡大傾向」
                        <br />その逆の並びとなれば「終息傾向」であると分析する事ができます。
                        <br />また、「5日間平均線」、「10日間平均線」の間隔が狭くなると感染は「鈍化傾向」であると評価ができます。
                        <br />ただし、実質の脅威は空き病床数や医療物資の余裕の有無等も考慮されるべきであり、このグラフ一つで現在のウイルスの脅威度を判断できるわけではありません。
                    </p>
                </v-card-text>
            </v-card>
        </div>

        <candle-chart class="mt-5 pt-5" :chart-data-src="patientInfos"></candle-chart>
    </div>
</template>

<script>
import CandleChart from "~/components/CandleChart";
import ImportanceIndicator from "~/servant/ImportanceIndicator";

export default {
    components: {
        CandleChart
    },
    async asyncData({ app: { $rapi } }) {
        const [patientInfos] = await Promise.all([
            $rapi.Query.readPatientInfos()
        ]);

        const importance = ImportanceIndicator.serve(patientInfos);

        return {
            importance,
            patientInfos
        };
    }
};
</script>
