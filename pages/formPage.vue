<script setup lang="ts"></script>

<template>
	<div class="bg-gray-900 text-white font-sans">
		<div class="min-h-screen flex items-center justify-center">
			<div class="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg">
				<!-- Header -->
				<div class="text-center mb-8">
					<img src="/public/logo.png" alt="CarePulse Logo" class="mx-auto mb-4" />
					<h1 class="text-3xl font-bold">Welcome 👋</h1>
					<p class="text-gray-400">Let us know more about yourself</p>
				</div>

				<!-- Personal Information -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold mb-4">Personal Information</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="fullName" class="block text-sm font-medium">Full name</label>
							<input type="text" id="fullName" placeholder="ex: Adam" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="email" class="block text-sm font-medium">Email address</label>
							<div class="relative">
								<input type="email" id="email" placeholder="adrian@jsmastery.pro" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none pl-10" />
								<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">@</span>
							</div>
						</div>
						<div>
							<label for="phone" class="block text-sm font-medium">Phone number</label>
							<div class="relative">
								<input type="tel" id="phone" placeholder="+00 0342 0453 34" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none pl-10" />
								<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📞</span>
							</div>
						</div>
						<div>
							<label for="dob" class="block text-sm font-medium">Date of birth</label>
							<div class="relative">
								<input type="date" id="dob" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
								<span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📅</span>
							</div>
						</div>
						<div>
							<label for="address" class="block text-sm font-medium">Address</label>
							<input type="text" id="address" placeholder="ex: 14 street, New York, NY - 5101" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="occupation" class="block text-sm font-medium">Occupation</label>
							<input type="text" id="occupation" placeholder="Software Engineer" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="emergencyContact" class="block text-sm font-medium">Emergency contact name</label>
							<input type="text" id="emergencyContact" placeholder="Guardian's name" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="emergencyPhone" class="block text-sm font-medium">Phone number</label>
							<input type="tel" id="emergencyPhone" placeholder="ex: +1 (868) 579-9831" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
					</div>
				</section>

				<!-- Medical Information -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold mb-4">Medical Information</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="primaryCare" class="block text-sm font-medium">Primary care physician</label>
							<input type="text" id="primaryCare" placeholder="Dr. Adam Smith" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="insuranceProvider" class="block text-sm font-medium">Insurance provider</label>
							<input type="text" id="insuranceProvider" placeholder="ex: BlueCross" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="insuranceNumber" class="block text-sm font-medium">Insurance policy number</label>
							<input type="text" id="insuranceNumber" placeholder="ex: ABC1234567" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="allergies" class="block text-sm font-medium">Allergies (if any)</label>
							<input type="text" id="allergies" placeholder="ex: Peanuts, Penicillin, Pollen" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="medications" class="block text-sm font-medium">Current medications</label>
							<input type="text" id="medications" placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="familyHistory" class="block text-sm font-medium">Family medical history (if relevant)</label>
							<input type="text" id="familyHistory" placeholder="ex: Mother had breast cancer" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
						<div>
							<label for="pastHistory" class="block text-sm font-medium">Past medical history</label>
							<input type="text" id="pastHistory" placeholder="ex: Asthma diagnosis in childhood" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
					</div>
				</section>

				<!-- Identification and Verification -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold mb-4">Identification and Verification</h2>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div>
							<label for="idType" class="block text-sm font-medium">Identification type</label>
							<select id="idType" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none">
								<option>Birth Certificate</option>
								<option>Passport</option>
								<option>Driver's License</option>
							</select>
						</div>
						<div>
							<label for="idNumber" class="block text-sm font-medium">Identification Number</label>
							<input type="text" id="idNumber" placeholder="ex: 1234567" class="w-full mt-1 p-2 bg-gray-700 rounded-lg border-none" />
						</div>
					</div>
					<div class="mt-4">
						<label class="block text-sm font-medium">Scanned Copy of Identification Document</label>
						<div class="mt-2 p-4 bg-gray-700 rounded-lg flex items-center justify-center">
							<input type="file" id="idDocument" class="hidden" />
							<label for="idDocument" class="cursor-pointer text-center text-gray-400">
								<span class="block">Click to upload</span>
								<span class="block text-xs">or drag and drop</span>
								<span class="block text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</span>
							</label>
						</div>
					</div>
				</section>

				<!-- Consent and Privacy -->
				<section class="mb-8">
					<h2 class="text-2xl font-semibold mb-4">Consent and Privacy</h2>
					<div class="space-y-4">
						<div class="flex items-start">
							<input type="checkbox" id="consentTreatment" class="mt-1 h-5 w-5 text-green-600 border-none rounded bg-gray-700 focus:ring-0" />
							<label for="consentTreatment" class="ml-3 text-sm font-medium">I consent to receive treatment for my health condition.</label>
						</div>
						<div class="flex items-start">
							<input type="checkbox" id="consentInformation" class="mt-1 h-5 w-5 text-green-600 border-none rounded bg-gray-700 focus:ring-0" />
							<label for="consentInformation" class="ml-3 text-sm font-medium">I consent to the use and disclosure of my health information for treatment purposes.</label>
						</div>
						<div class="flex items-start">
							<input type="checkbox" id="acknowledgePolicy" class="mt-1 h-5 w-5 text-green-600 border-none rounded bg-gray-700 focus:ring-0" />
							<label for="acknowledgePolicy" class="ml-3 text-sm font-medium">I acknowledge that I have reviewed and agree to the privacy policy.</label>
						</div>
					</div>
				</section>

				<!-- Submit Button -->
				<div class="text-center">
					<button class="w-full py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-500 focus:outline-none focus:bg-green-500">Submit and continue</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
