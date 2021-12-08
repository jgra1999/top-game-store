<template>
	<div class="w-full h-14"></div>

	<div class="container my-20 w-11/12 lg:w-3/4">
		<h3 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
			Finalizar Compra
		</h3>
		<div class="flex flex-col divide-y-2 divide-red-700 bg-white rounded-lg shadow-lg p-4">
			<!-- Detalles de facturacion -->
			<div class="pb-5">
				<h5 class="font-bold text-xl">Detalles de facturación</h5>

				<form action="" method="post" class="md:grid md:grid-cols-2 md:gap-4 py-5 px-10 " id="formulario">
					<div class="flex flex-col" id="input_name">
						<label class="text-lg">Nombre</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Ingresa tu nombre y apellido"
							class="border-2 w-full p-2 rounded-lg my-3 focus:outline-none "
							required
							v-model="billing.name"
							@blur="inputValidation"
							@keyup="inputValidation"
						/>

						<p class="text-red-600 text-xs hidden">
							Ingresa un nombre valido, el campo nombre solo debe contener letras y no debe contener mas de 45
							caracteres.
						</p>
					</div>

					<div class="flex flex-col" id="input_email">
						<label class="text-lg">Correo electronico</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Ingresa tu correo electronico"
							class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
							required
							v-model="billing.email"
							@blur="inputValidation"
							@keyup="inputValidation"
						/>

						<p class="text-red-600 text-xs hidden">
							Ingresa un correo electronico valido, el campo email solo puede contener letras, numeros, puntos,
							guiones y guion bajo.
						</p>
					</div>

					<div class="flex flex-col" id="input_address">
						<label class="text-lg">Dirección</label>
						<input
							type="text"
							name="address"
							id="address"
							placeholder="Ingresa tu dirección"
							class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
							required
							v-model="billing.address"
							@blur="inputValidation"
							@keyup="inputValidation"
						/>

						<p class="text-red-600 text-xs hidden">
							El campo direccion solo debe contener letras y no debe contener mas de 45 caracteres.
						</p>
					</div>

					<div class="flex flex-col" id="input_phone">
						<label class="text-lg">Télefono</label>
						<input
							type="number"
							name="phone"
							id="phone"
							placeholder="Ingresa tu numero de télefono"
							class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none "
							required
							v-model="billing.phone"
							@blur="inputValidation"
							@keyup="inputValidation"
						/>
						<p class="text-red-600 text-xs hidden">
							Ingresa un numero de telefono valido.
						</p>
					</div>

					<!-- <div class="text-gray-400 text-xs md:col-span-2">
						Nota: crea una cuenta para tener estos datos guardados y agilizar el proceso de pago.
					</div> -->
				</form>
			</div>

			<!-- Tu pedido -->
			<div class="pt-5 px-4">
				<h5 class="font-bold text-xl">Tu pedido</h5>
				<div class="p-4">
					<div class="flex justify-between py-2 border-b-2">
						<p class="font-semibold text-gray-400">Producto</p>
						<p class="font-semibold text-gray-400">Subtotal</p>
					</div>
					<div>
						<ul>
							<li class="py-2" v-for="item in items" :key="item.id">
								<div class="flex justify-between items-center">
									<div class="flex items-center">
										<div>
											<p>
												{{ item.name }} <span class="text-sm ml-2 text-red-600">x{{ item.cantidad }}</span>
											</p>
											<p class="text-gray-400 text-xs">{{ item.consoles.name }}</p>
										</div>
									</div>

									<div>
										<p>{{ item.price * item.cantidad }} $</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="flex justify-between py-2 border-t-2">
						<p class="font-semibold text-gray-400">Total a cancelar:</p>
						<p class="text-md font-semibold">{{ totalToPay }} $</p>
					</div>
					<div class="mt-5">
						<router-link
							to="/carrito-de-compras"
							class="flex  items-center text-gray-400 text-sm hover:text-red-600 duration-300"
						>
							<ArrowLeftIcon class="w-4 h-4 mr-2" />
							Volver al carrito</router-link
						>
					</div>
				</div>
			</div>

			<!-- Metodos de pago -->
			<div class="py-5 lg:px-4">
				<h5 class="font-bold text-xl">Elige tu método de pago</h5>

				<div class="mt-5 grid grid-cols-1 gap-5 p-5">
					<div class="border-2 border-gray-100 rounded-lg shadow-lg p-4">
						<div class="flex items-center justify-between">
							Transferencia Bancaria
							<LibraryIcon class="w-5 h-5" />
						</div>
						<div class="mt-2">
							<p class="text-xs text-gray-400">
								Por favor, transfiera el monto expresado en Bolivares a la siguiente cuenta.
							</p>
							<div class="mt-2 w-full flex flex-wrap gap-5 sm:gap-10">
								<div>
									<p class="text-sm">
										0105-0670-12-0670169242
										<br />
										A nombre de: Carlos Aular
										<br />
										C.I: 24.423.060
									</p>
								</div>
								<div>
									<p class="text-sm">
										0134-0890-49-8901016561
										<br />
										A nombre de: Oriana Escalona
										<br />
										C.I: 25.049.452
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="border-2 border-gray-100 rounded-lg shadow-lg p-4">
						<div class="flex items-center justify-between">
							Pago Movil
							<DeviceMobileIcon class="w-5 h-5" />
						</div>
						<div class="mt-2">
							<p class="text-xs text-gray-400">
								Por favor, transfiera el monto expresado en Bolivares a la siguiente cuenta.
							</p>
							<div class="mt-2 w-full flex flex-wrap gap-5 sm:gap-10">
								<div>
									<p class="text-sm">
										Banco: Mercantil
										<br />
										C.I: 24.423.060
										<br />
										TLF: 0414-5831111
									</p>
								</div>
								<div>
									<p class="text-sm">
										Banco: Banesco
										<br />
										C.I: 25.049.452
										<br />
										TLF: 0414-4708869
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="border-2 border-gray-100 rounded-lg shadow-lg p-4">
						<div class="flex items-center justify-between">
							PayPal
							<CreditCardIcon class="w-5 h-5" />
						</div>
						<div class="mt-2">
							<p class="text-xs text-gray-400">
								Por favor, transfiera el monto a uno de estos correos electronicos.
							</p>
							<div class="mt-2 w-full flex flex-wrap gap-5 sm:gap-10">
								<div>
									<p class="text-sm">
										lawiirc@gmail.com
									</p>
								</div>
								<div>
									<p class="text-sm">
										themastered11@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
					<p class="mt-2 text-xs text-gray-400">
						NOTA: Espera que el pedido sea confirmado y realiza el pago, haz capture al comprobante del pago
						independientemente del método que utilices.
					</p>
				</div>
				<div class="mt-8">
					<button
						class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4 w-full"
						@click.prevent="sendDetails(billing)"
						id="enviarPedido"
					>
						<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-sm">
							Realizar Pedido
						</p>
					</button>

					<div class="bg-green-500 p-4 rounded-lg text-white text-sm text-center hidden" id="pedidoRealizado">
						<p>
							Pedido Realizado exitosamente, Por favor envianos por whatsapp al número 0414-5831111 el comprobante
							del pago.
						</p>
					</div>

					<div class="hidden mt-5" id="pedidoFallido">
						<div class="flex justify-center items-center mt-10">
							<XCircleIcon class="w-5 h-5 text-red-600 mr-1.5" />
							<p>
								Rellena todos los campos de la facturación correctamente.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { LibraryIcon, DeviceMobileIcon, CreditCardIcon, ArrowLeftIcon } from '@heroicons/vue/outline';
import { XCircleIcon } from '@heroicons/vue/solid';

import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	components: { LibraryIcon, DeviceMobileIcon, CreditCardIcon, XCircleIcon, ArrowLeftIcon },

	data() {
		return {
			billing: {
				id: null,
				name: '',
				email: '',
				address: '',
				phone: '',
			},
		};
	},

	setup() {
		const store = useStore();

		const items = computed(() => store.state.cart);

		const totalToPay = computed(() => store.getters.totalToPay);

		let campos = {
			name: false,
			email: false,
			address: false,
			phone: false,
		};

		function sendDetails(billing) {
			if (campos.name && campos.email && campos.address && campos.phone) {
				const user = billing;
				const order = items.value;
				const pay = totalToPay.value;
				store.dispatch('saveDetails', {
					details: {
						user: user,
						order: order,
						pay: pay,
					},
				});

				let clientName = billing.name;
				let clientEmail = billing.email;
				let clientAddress = billing.address;
				let clientPhone = billing.phone;
				let clientPay = totalToPay.value;

				const orderArray = Object.values(items.value);

				let clientOrder = orderArray.map(
					(item) => ' ' + item.name + ' x' + item.cantidad + ' ' + item.consoles.name
				);

				let url =
					'https://wa.me/+584145831111?text=Pedido %0ACliente: ' +
					clientName +
					'%0A Email: ' +
					clientEmail +
					'%0A Direccion: ' +
					clientAddress +
					'%0A Telefono: ' +
					clientPhone +
					'%0A Pedido: ' +
					clientOrder +
					'%0A Total a Pagar: ' +
					clientPay +
					'$';

				window.open(url);

				for (let i = 0; i < orderArray.length; i++) {
					const idItem = orderArray[i].id;
					const stockItem = orderArray[i].stock - orderArray[i].cantidad;

					store.dispatch('updateStock', {
						idItem,
						stockItem,
					});
				}

				for (let i = 0; i < orderArray.length; i++) {
					const idItem = orderArray[i].id;
					const stockItem = orderArray[i].stock - orderArray[i].cantidad;

					store.dispatch('updateStockAccesories', {
						idItem,
						stockItem,
					});
				}

				const pedidoRealizado = document.getElementById('pedidoRealizado');
				const enviarPedido = document.getElementById('enviarPedido');

				pedidoRealizado.classList.remove('hidden');
				enviarPedido.classList.add('hidden');
			} else {
				const pedidoFallido = document.getElementById('pedidoFallido');
				pedidoFallido.classList.remove('hidden');
				setTimeout(() => {
					pedidoFallido.classList.add('hidden');
				}, 5000);
			}
		}

		function inputValidation(event) {
			const expressions = {
				nombre: /^[a-zA-ZÀ-ÿ\s]{1,45}$/, // Letras y espacios, pueden llevar acentos.
				email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
				phone: /^\d{11}$/, // 10 a 11 numeros.
			};

			switch (event.target.name) {
				case 'name':
					if (expressions.nombre.test(event.target.value)) {
						document.getElementById('name').classList.remove('border-red-700');
						document.querySelector('#input_name p').classList.add('hidden');
						campos.name = true;
					} else {
						document.getElementById('name').classList.add('border-red-700');
						document.querySelector('#input_name p').classList.remove('hidden');
						campos.name = false;
					}
					break;

				case 'email':
					if (expressions.email.test(event.target.value)) {
						document.getElementById('email').classList.remove('border-red-700');
						document.querySelector('#input_email p').classList.add('hidden');
						campos.email = true;
					} else {
						document.getElementById('email').classList.add('border-red-700');
						document.querySelector('#input_email p').classList.remove('hidden');
						campos.email = false;
					}
					break;

				case 'address':
					if (expressions.nombre.test(event.target.value)) {
						document.getElementById('address').classList.remove('border-red-700');
						document.querySelector('#input_address p').classList.add('hidden');
						campos.address = true;
					} else {
						document.getElementById('address').classList.add('border-red-700');
						document.querySelector('#input_address p').classList.remove('hidden');
						campos.address = false;
					}
					break;

				case 'phone':
					if (expressions.phone.test(event.target.value)) {
						document.getElementById('phone').classList.remove('border-red-700');
						document.querySelector('#input_phone p').classList.add('hidden');
						campos.phone = true;
					} else {
						document.getElementById('phone').classList.add('border-red-700');
						document.querySelector('#input_phone p').classList.remove('hidden');
						campos.phone = false;
					}
					break;

				default:
					break;
			}
		}

		return { items, totalToPay, sendDetails, inputValidation };
	},
};
</script>
