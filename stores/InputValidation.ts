import { defineStore } from 'pinia';

export const useInputValidation = defineStore('InputValidation', {
	state: () => {
		return {
			nameInput: '',
			emailInput: '',
			phoneInput: 0,
		};
	},

	actions: {
		updateNameInput(n: string) {
			this.nameInput = n;
		},
		updateEmailInput(n: string) {
			this.emailInput = n;
		},

		updatePhoneInput(n: number) {
			this.phoneInput = n;
		},
	},
});
