<template>
    <Layout>
        <g-image :src="$page.one-off.image" width="500"/>
        <h1>{{$page.one-off.title}}</h1>
        <p>{{$page.one-off.size}}</p>
        <p>{{$page.one-off.date}}</p>
        <p>{{$page.one-off.description}}</p>
    </Layout>
</template>

<page-query>
    query One-Off ($path: String!) {
        one-off: one-off (path: $path) {
            title
            image
            size
            date
            description
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.one-off.title
        }
    }
}
</script>

