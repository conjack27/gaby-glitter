<template>
    <Layout>
        <g-image :src="$page.oneOff.image" width="500"/>
        <h1>{{$page.oneOff.title}}</h1>
        <p>{{$page.oneOff.size}}</p>
        <p>{{$page.oneOff.date}}</p>
        <p>{{$page.oneOff.description}}</p>
    </Layout>
</template>

<page-query>
    query OneOff ($path: String!) {
        oneOff: oneOff (path: $path) {
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
            title: this.$page.oneOff.title
        }
    }
}
</script>

