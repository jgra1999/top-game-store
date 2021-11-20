<template>
	<div class=" w-full h-20"></div>

	<div class="container w-11/12 lg:w-3/4 my-10">
		<div class="flex flex-col items-center mb-5">
			<img src="/img/logo1.png" alt="logo top games" class="w-28 h-18" />
			<h3 class="text-xl font-bold">
				Crea una cuenta con nosotros y se el primero en enterarte de nuestras promociones
			</h3>
		</div>

		<form
			action=""
			method="post"
			class="md:grid md:grid-cols-2 md:gap-4 bg-white py-5 px-10 rounded shadow-md"
			id="formulario"
		>
			<div class="flex flex-col" id="input_name">
				<label class="text-xl">Nombre</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Ingresa tu nombre y apellido"
					class="border-2 w-full p-2 rounded-lg my-3 focus:outline-none "
					required
					v-model="usuario.name"
					@blur="InputValidation"
					@keyup="InputValidation"
				/>

				<p class="text-red-600 text-xs hidden">
					Ingresa un nombre valido, el campo nombre solo debe contener letras y no debe contener mas de 45
					caracteres.
				</p>
			</div>

			<div class="flex flex-col" id="input_email">
				<label class="text-xl">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="Ingresa tu correo electronico"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
					required
					v-model="usuario.email"
					@blur="InputValidation"
					@keyup="InputValidation"
				/>

				<p class="text-red-600 text-xs hidden">
					Ingresa un correo electronico valido, el campo email solo puede contener letras, numeros, puntos, guiones
					y guion bajo.
				</p>
			</div>

			<div class="flex flex-col" id="input_password">
				<label class="text-xl">Contraseña</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Elige una tu contraseña"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
					required
					v-model="usuario.password"
					@blur="InputValidation"
					@keyup="InputValidation"
				/>

				<p class="text-red-600 text-xs hidden">
					la contreseña debe tener de 4 a 12 caracteres.
				</p>
			</div>

			<div class="flex flex-col" id="input_password2">
				<label class="text-xl">Repetir Contraseña</label>
				<input
					type="password"
					name="password2"
					id="password2"
					placeholder="Repite tu contraseña"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
					required
					@blur="InputValidation"
					@keyup="InputValidation"
				/>

				<p class="text-red-600 text-xs hidden">
					Las contraseñas deben ser iguales, verifica.
				</p>
			</div>

			<div class="flex flex-col" id="input_address">
				<label class="text-xl">Dirección</label>
				<input
					type="text"
					name="address"
					id="address"
					placeholder="Ingresa tu dirección"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
					required
					v-model="usuario.address"
					@blur="InputValidation"
					@keyup="InputValidation"
				/>

				<p class="text-red-600 text-xs hidden">
					El campo direccion solo debe contener letras y no debe contener mas de 45 caracteres.
				</p>
			</div>

			<div class="flex flex-col" id="input_phone">
				<label class="text-xl">Télefono</label>
				<input
					type="number"
					name="phone"
					id="phone"
					placeholder="Ingresa tu numero de télefono"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
					required
					v-model="usuario.phone"
					@blur="InputValidation"
					@keyup="InputValidation"
				/>
				<p class="text-red-600 text-xs hidden">
					Ingresa un numero de telefono valido.
				</p>
			</div>

			<button
				type="submit"
				class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4 w-full md:col-span-2"
				@click.prevent="CreateUser"
			>
				<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-lg">
					Crear Cuenta
				</p>
			</button>
		</form>

		<div class="hidden" id="exito">
			<div class="flex justify-center items-center mt-10">
				<CheckCircleIcon class="w-5 h-5 text-green-600 mr-1.5" />
				<p>
					Cuenta creada exitosamente,
					<router-link to="/buscar" class="text-red-600 hover:border-b-2 border-red-600"
						>sigue comprando.</router-link
					>
				</p>
			</div>
		</div>

		<div class="hidden" id="error">
			<div class="flex justify-center items-center mt-10">
				<XCircleIcon class="w-5 h-5 text-red-600 mr-1.5" />
				<p>
					Rellena todos los campos correctamente.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/solid';

export default {
	components: {
		CheckCircleIcon,
		XCircleIcon,
	},

	data() {
		return {
			usuario: {
				id: null,
				name: '',
				email: '',
				password: '',
				address: '',
				phone: '',
			},

			campo: {
				name: false,
				email: false,
				password: false,
				address: false,
				phone: false,
			},
		};
	},

	methods: {
		CreateUser() {
			let url = 'http://topgamestore.test/api/customer';

			const formulario = document.getElementById('formulario');
			const registroExitoso = document.getElementById('exito');
			const registroFallido = document.getElementById('error');

			let params = {
				name: this.usuario.name,
				email: this.usuario.email,
				password: this.usuario.password,
				address: this.usuario.address,
				phone: this.usuario.phone,
			};

			if (this.campo.name && this.campo.email && this.campo.password && this.campo.address && this.campo.phone) {
				formulario.reset();
				registroExitoso.classList.remove('hidden');
				axios.post(url, params);
			} else {
				registroFallido.classList.remove('hidden');
				setTimeout(() => {
					registroFallido.classList.add('hidden');
				}, 5000);
			}
		},

		InputValidation(event) {
			const expressions = {
				nombre: /^[a-zA-ZÀ-ÿ\s]{1,45}$/, // Letras y espacios, pueden llevar acentos.
				password: /^.{4,12}$/, // 4 a 12 digitos.
				email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
				phone: /^\d{11}$/, // 10 a 11 numeros.
			};

			switch (event.target.name) {
				case 'name':
					if (expressions.nombre.test(event.target.value)) {
						document.getElementById('name').classList.remove('border-red-700');
						document.querySelector('#input_name p').classList.add('hidden');
						this.campo.name = true;
					} else {
						document.getElementById('name').classList.add('border-red-700');
						document.querySelector('#input_name p').classList.remove('hidden');
						this.campo.name = false;
					}
					break;

				case 'email':
					if (expressions.email.test(event.target.value)) {
						document.getElementById('email').classList.remove('border-red-700');
						document.querySelector('#input_email p').classList.add('hidden');
						this.campo.email = true;
					} else {
						document.getElementById('email').classList.add('border-red-700');
						document.querySelector('#input_email p').classList.remove('hidden');
						this.campo.email = false;
					}
					break;

				case 'password':
					if (expressions.password.test(event.target.value)) {
						document.getElementById('password').classList.remove('border-red-700');
						document.querySelector('#input_password p').classList.add('hidden');
						this.campo.password = true;
					} else {
						document.getElementById('password').classList.add('border-red-700');
						document.querySelector('#input_password p').classList.remove('hidden');
						this.campo.password = false;
					}
					validatePassword();
					break;

				case 'password2':
					validatePassword();
					break;

				case 'address':
					if (expressions.nombre.test(event.target.value)) {
						document.getElementById('address').classList.remove('border-red-700');
						document.querySelector('#input_address p').classList.add('hidden');
						this.campo.address = true;
					} else {
						document.getElementById('address').classList.add('border-red-700');
						document.querySelector('#input_address p').classList.remove('hidden');
						this.campo.address = false;
					}
					break;

				case 'phone':
					if (expressions.phone.test(event.target.value)) {
						document.getElementById('phone').classList.remove('border-red-700');
						document.querySelector('#input_phone p').classList.add('hidden');
						this.campo.phone = true;
					} else {
						document.getElementById('phone').classList.add('border-red-700');
						document.querySelector('#input_phone p').classList.remove('hidden');
						this.campo.phone = false;
					}
					break;

				default:
					break;
			}

			function validatePassword() {
				const inputPassword1 = document.getElementById('password');
				const inputPassword2 = document.getElementById('password2');

				if (inputPassword1.value !== inputPassword2.value) {
					document.getElementById('password2').classList.add('border-red-700');
					document.querySelector('#input_password2 p').classList.remove('hidden');
				} else {
					document.getElementById('password2').classList.remove('border-red-700');
					document.querySelector('#input_password2 p').classList.add('hidden');
				}
			}
		},
	},
};
</script>

<style></style>
