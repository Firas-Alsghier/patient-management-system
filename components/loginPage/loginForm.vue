<script setup lang="ts">
	import { ref } from 'vue';
	const data = ref(''); /*This variable was passed in the updateNameInput method */
	import { useInputValidation } from '@/stores/InputValidation';
	const store = useInputValidation();
</script>

<template>
	<div class="login-form my-10">
		<div class="heading mb-3">
			<h1 class="font-bold text-primary-text-color text-4xl mb-4">Hi there, ....</h1>
			<p class="text-secondary-text-color text-lg">Get Started with Appointments.</p>
		</div>
		<div class="form-inputs">
			<div class="name-input mb-4">
				<label for="name" class="text-sm font-medium text-secondary-text-color">Full name</label>
				<div class="relative mt-2">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<!-- Icon -->
						<i class="fa-regular fa-user text-xl"></i>
					</span>
					<input
						type="text"
						placeholder="Michael Scofield"
						id="name"
						class="bg-input-bg rounded-lg py-1 pl-10 pr-4 placeholder:font-medium placeholder:text-base placeholder:text-primary-text-color focus:text-primary-text-color focus:text-base focus:font-medium focus:py-2 w-full"
						@input="store.updateNameInput(data)"
					/>
				</div>
			</div>
			<div class="email-input mb-4">
				<label for="email" class="text-sm font-medium text-secondary-text-color">Email address</label>
				<div class="relative mt-2">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<!-- Font Awesome Email Icon -->
						<i class="fa-regular fa-envelope text-xl"></i>
					</span>
					<input
						type="email"
						placeholder="Email@example.com"
						id="email"
						class="bg-input-bg rounded-lg py-1 pl-10 pr-4 placeholder:font-medium placeholder:text-base placeholder:text-primary-text-color focus:text-primary-text-color focus:text-base focus:font-medium focus:py-2 w-full"
					/>
				</div>
			</div>
			<div class="phone-input mb-4">
				<label for="phone" class="text-sm font-medium text-secondary-text-color">Phone number</label>
				<div class="relative mt-2">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<!-- Font Awesome Phone Icon -->
						<i class="fa-solid fa-mobile-screen-button text-xl"></i>
					</span>
					<input
						type="tel"
						placeholder="Phone"
						id="phone"
						class="bg-input-bg rounded-lg py-1 pl-10 pr-4 placeholder:font-medium placeholder:text-base placeholder:text-primary-text-color focus:text-primary-text-color focus:text-base focus:font-medium focus:py-2 focus:input-success w-full"
					/>
				</div>
			</div>
			<div class="submit-input mt-8">
				<button class="text-primary-text-color text-base bg-btn-bg py-2 px-6 rounded-lg w-full">Get Started</button>
			</div>
		</div>
	</div>
</template>
