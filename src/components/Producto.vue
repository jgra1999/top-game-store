<template>
	<img :src="imageUrl" alt="" loading="lazy" class="w-40 h-52 md:h-56 lg:w-44 lg:h-56 rounded-xl" />
</template>

<script>
export default {
	name: 'Productos',
	props: ['imageUrl', 'name', 'price'],
};
</script>
