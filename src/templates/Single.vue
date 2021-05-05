<template>
    <Layout>
        <g-image :src="$page.single.image" width="500" />
        <h1>{{ $page.single.title }}</h1>
        <p>{{ $page.single.size }}</p>
        <p>{{ $page.single.date }}</p>
        <p>{{ $page.single.content }}</p>
    </Layout>
</template>

<page-query>
    query Single ($path: String!) {
        single: single (path: $path) {
            title
            image
            size
            date
            content
        }
    }
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.single.title,
        };
    },
};
</script>

