<template>
    <Layout>
        <g-image :src="$page.oneoff.image" width="500" />
        <h1>{{ $page.oneoff.title }}</h1>
        <p>{{ $page.oneoff.size }}</p>
        <p>{{ $page.oneoff.date }}</p>
        <p>{{ $page.oneoff.description }}</p>
    </Layout>
</template>

<page-query>
    query OneOff ($path: String!) {
        oneoff: oneoff (path: $path) {
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
            title: this.$page.oneoff.title,
        };
    },
};
</script>

