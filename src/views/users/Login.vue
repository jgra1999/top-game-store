<template>
	<div class=" w-full h-20"></div>

	<div class="container w-11/12 lg:w-2/4 my-10">
		<div class="flex flex-col items-center mb-5">
			<img src="/img/logo1.png" alt="logo top games" class="w-28 h-18" />
			<h3 class="text-4xl font-bold">Iniciar Sesión</h3>
		</div>
		<form action="" method="post" class="bg-white py-5 px-10 rounded shadow-md">
			<div class="flex flex-col">
				<label class="text-xl">Email</label>
				<input
					type="text"
					placeholder="Ingresa tu correo electronico"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none focus:border-gray-300"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-xl">Contraseña </label>
				<input
					type="password"
					placeholder="Ingresa tu contraseña"
					class="border-2 border-gray-200 p-2 rounded-lg my-3 focus:outline-none focus:border-gray-300"
				/>
			</div>

			<div class="my-2">
				<router-link to="#" class="text-red-600 opacity-75 hover:opacity-100"
					>¿Olvidaste tu contraseña?</router-link
				>
			</div>

			<button class="rounded-full hover:ring-2 ring-red-700 p-1 mt-4 w-full">
				<p class="rounded-full font-bold text-white py-2 px-5 bg-red-700 text-xs md:text-lg">
					Sign in
				</p>
			</button>

			<div class="text-center mt-10">
				<p>
					¿No tienes cuenta?
					<router-link to="/crear-cuenta" class="text-red-600 hover:border-b-2 border-red-600"
						>Registrate ahora</router-link
					>
				</p>
			</div>
		</form>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
