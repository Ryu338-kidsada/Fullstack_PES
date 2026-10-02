<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p class="text-lg text-gray-600 mb-6">
            The page you're looking for doesn't exist.
        </p>

        <button
            @click="goHome"
            class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            Go to Home
        </button>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    methods: {
        goHome() {
            this.$router.push('/');
        },
    },
};
</script>