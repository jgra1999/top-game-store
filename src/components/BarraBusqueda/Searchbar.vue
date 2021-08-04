<template>
	<div class="bg-red-700 w-screen h-0 flex justify-center items-center fixed z-10 mt-14" id="searchbar">
		<form action="" class="w-3/4">
			<input
				type="text"
				name=""
				id="inputSearch"
				placeholder="Que estas Buscando?"
				class=" rounded w-full h-10 p-2 mb-10"
			/>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Searchbar',
};
</script>

<style>
#searchbar,
#inputSearch {
	transition: 0.3s ease all;
}
</style>
