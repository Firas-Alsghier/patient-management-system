<script setup lang="ts"></script>

<template>
	<div class="login-container flex h-screen">
		<div class="login-inputs-container w-full lg:w-6/12 py-8 px-20 text-2xl">
			<login-logo />
			<login-form />
			<p class="text-secondary-text-color font-normal text-base">@carepulse copyright</p>
		</div>
		<div class="login-bg hidden lg:block lg:w-6/12 rounded-tl-3xl rounded-bl-3xl"></div>
	</div>
</template>

<style scoped>
	.login-bg {
		background-image: url('/assets/images/login-bg.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
