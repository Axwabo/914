<template>
    <header>
        <button class="header-button hidden"></button>
        <div class="text">
            <h1>SCP-914 Recipes</h1>
            Not affiliated with <a href="https://scpslgame.com" target="SCP: Secret Laboratory">Northwood Studios</a>
        </div>
        <button class="header-button">ℹ</button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.text {
    flex: 1;
    text-align: center;
}

.text h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.header-button {
    font-size: 2em;
    width: 2.5em;
    height: 2.5em;
    text-align: center;
    padding: 0;
}

.hidden {
    visibility: hidden;
}

@keyframes spin {
    to {
        rotate: 1turn;
    }
}
</style>
