<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button :loading="true" >默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>

    </div>

</template>
<script>
    import Button from '../../../src/button/button'
    export default {
        components: {
            'g-button': Button
        },
        data(){
            return{
                content:`
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
<g-button icon="thumbs-up">点赞</g-button>
<g-button icon="download" icon-position="right">下载</g-button>
`.trim()
            }
        }
    }
</script>