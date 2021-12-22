export const styleComputedMixins = {
    methods: {
        styleComputed(attr) {
            let res = "";
            for (const item of attr) {
                res += item + " ";
            }
            return res;
        }
    }
}
