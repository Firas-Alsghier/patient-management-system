<script setup lang="ts"></script>

<template>
	<div class="bg-gray-900 text-white min-h-screen flex items-center justify-center">
		<div class="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
			<div class="mb-8">
				<img src="/public/logo.png" alt="CarePulse" class="h-10 mb-4" />
				<h2 class="text-3xl font-bold mb-2">Hey there 👋</h2>
				<p class="text-gray-400">Request a new appointment in 10 seconds</p>
			</div>

			<form>
				<!-- Doctor Selection -->
				<div class="mb-6">
					<label for="doctor" class="block text-sm font-medium mb-2">Doctor</label>
					<div class="relative">
						<select id="doctor" name="doctor" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none">
							<option>Dr. Adam Smith</option>
							<!-- Add more options here if needed -->
						</select>
					</div>
				</div>

				<!-- Reason for Appointment and Additional Notes -->
				<div class="grid grid-cols-1 gap-6 mb-6">
					<div>
						<label for="reason" class="block text-sm font-medium mb-2">Reason for appointment</label>
						<input type="text" id="reason" name="reason" placeholder="ex: Annual monthly check-up" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none" />
					</div>
					<div>
						<label for="notes" class="block text-sm font-medium mb-2">Additional comments/notes</label>
						<input type="text" id="notes" name="notes" placeholder="ex: Prefer afternoon appointments, if possible" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none" />
					</div>
				</div>

				<!-- Appointment Date -->
				<div class="mb-6">
					<label for="appointmentDate" class="block text-sm font-medium mb-2">Expected appointment date</label>
					<div class="relative">
						<input type="date" id="appointmentDate" name="appointmentDate" class="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none" />
					</div>
				</div>

				<!-- Submit Button -->
				<div class="text-center">
					<button type="submit" class="w-full py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500">Submit and continue</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>
