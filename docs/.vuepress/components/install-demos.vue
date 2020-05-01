<template>
    <div>
        <pre><code>{{content}}</code></pre>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                content: `
                npm install gulu-demo
                `.trim()
            }


        }
    }
</script>