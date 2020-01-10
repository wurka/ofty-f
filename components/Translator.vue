<template>
    <div style="display: none;"></div>
</template>

<script>
    export default {
        name: "Translator",
        data() { return {
            dictionary: {}
        }},
        methods: {
            setDictionary(newDictionary) {
                this.dictionary = newDictionary;
            },
            translate(text) {
                let BreakException = {},
                    ans = 'ошибка на сервере',
                    dictionary = this.dictionary;

                try {
                    Object.keys(dictionary).forEach((key)=>{
                        if (text.toLowerCase().startsWith(key.toLowerCase())) {
                            ans = dictionary[key];
                        }
                    });
                } catch (e) {
                    if (e !== BreakException) { throw e}
                }
                return ans;
            }
        }
    }
</script>

<style scoped>

</style>
