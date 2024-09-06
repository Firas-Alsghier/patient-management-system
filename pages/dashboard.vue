<script setup lang="ts"></script>

<template>
	<div class="bg-gray-900 min-h-screen text-white">
		<!-- Navbar -->
		<div class="bg-gray-800 p-4 flex justify-between items-center">
			<div class="flex items-center">
				<img src="/public/logo.png" alt="CarePulse" class="h-8" />
			</div>
			<div class="flex items-center">
				<img src="/public/logo.png" alt="Admin Avatar" class="h-10 w-10 rounded-full" />
				<span class="ml-2">Admin</span>
			</div>
		</div>

		<!-- Content -->
		<div class="container mx-auto py-12">
			<!-- Header -->
			<div class="mb-12">
				<h1 class="text-4xl font-bold mb-2">Welcome, Admin</h1>
				<p class="text-gray-400">Start your day with managing new appointments</p>
			</div>

			<!-- Summary Cards -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				<!-- Scheduled Appointments -->
				<div class="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
					<div class="text-yellow-400 text-4xl font-bold mb-2">94</div>
					<div class="text-gray-300">Total number of <span class="text-white">scheduled appointments</span></div>
				</div>
				<!-- Pending Appointments -->
				<div class="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
					<div class="text-blue-400 text-4xl font-bold mb-2">32</div>
					<div class="text-gray-300">Total number of <span class="text-white">pending appointments</span></div>
				</div>
				<!-- Cancelled Appointments -->
				<div class="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
					<div class="text-red-400 text-4xl font-bold mb-2">56</div>
					<div class="text-gray-300">Total number of <span class="text-white">cancelled appointments</span></div>
				</div>
			</div>

			<!-- Appointments Table -->
			<div class="bg-gray-800 p-6 rounded-lg shadow-md">
				<table class="w-full table-auto">
					<thead>
						<tr class="text-left text-gray-400">
							<th class="pb-4">Patient</th>
							<th class="pb-4">Date</th>
							<th class="pb-4">Status</th>
							<th class="pb-4">Doctor</th>
							<th class="pb-4">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr class="border-t border-gray-700">
							<td class="py-4 flex items-center">
								<span class="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center text-sm mr-2">PB</span>
								Phoenix Baker
							</td>
							<td class="py-4">Jan 4, 2022</td>
							<td class="py-4">
								<span class="text-green-400">✔ Scheduled</span>
							</td>
							<td class="py-4">Dr. Alex Ramirez</td>
							<td class="py-4">
								<a href="#" class="text-green-400 hover:underline mr-4">Schedule</a>
								<a href="#" class="text-red-400 hover:underline">Cancel</a>
							</td>
						</tr>
						<!-- Add more rows here for each appointment -->
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
