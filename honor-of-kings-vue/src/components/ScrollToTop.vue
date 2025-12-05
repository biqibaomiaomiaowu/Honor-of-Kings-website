<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<template>
    <div class="scroll-indicator" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
    </div>
</template>

<style scoped>
.scroll-indicator {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: rgba(255, 215, 0, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-indicator:hover {
    background: #ffd700;
    transform: scale(1.1);
}

.scroll-indicator i {
    color: #0f1419;
    font-size: 1.2rem;
}
</style>