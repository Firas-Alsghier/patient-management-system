<script setup lang="ts">
	import { ref } from 'vue';

	const otp = ref(Array(6).fill(''));

	const otpInputs = ref<(HTMLInputElement | null)[]>([]);

	const focusNextField = (index: number) => {
		if (otp.value[index].length === 1 && index < otpInputs.value.length - 1) {
			otpInputs.value[index + 1]?.focus();
		}
	};

	const submitOTP = () => {
		const enteredOTP = otp.value.join('');
		console.log('OTP entered:', enteredOTP);
		// Add your OTP verification logic here
	};

	const closeModal = () => {
		// Logic to close the modal
		console.log('Modal closed');
	};
</script>

<template>
	<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
		<div class="bg-dark-mode-background rounded-xl shadow-lg p-6 w-96">
			<div class="flex justify-between items-center mb-4">
				<h2 class="text-xl font-semibold text-primary-text-color">Verify OTP</h2>
				<button @click="closeModal" class="text-secondary-text-color">&times;</button>
			</div>
			<p class="text-secondary-text-color text-sm mb-6">Please enter the OTP sent to your registered mobile number.</p>
			<div class="flex space-x-2 justify-center mb-6">
				<input
					v-for="(digit, index) in otp"
					:key="index"
					type="text"
					maxlength="1"
					class="w-12 h-12 text-3xl text-center rounded-lg border-2 focus:outline-none"
					:class="{ 'border-green-500': digit, 'border-secondary-text-color': !digit }"
					v-model="otp[index]"
					@input="focusNextField(index)"
					ref="otpInputs"
				/>
			</div>
			<button class="bg-btn-bg text-primary-text-color text-base py-2 px-6 rounded-lg w-full" @click="submitOTP">Verify</button>
		</div>
	</div>
</template>

<style scoped>
	.bg-dark-mode-background {
		background-color: #1f2937; /* Replace with your dark background color */
	}
	.text-primary-text-color {
		color: #ffffff; /* Replace with your primary text color */
	}
	.text-secondary-text-color {
		color: #9ca3af; /* Replace with your secondary text color */
	}
	.bg-btn-bg {
		background-color: #10b981; /* Replace with your button background color */
	}
</style>
