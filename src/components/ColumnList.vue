<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="item in list" :key="item.id">
                <div class="card" style="width: 18rem;">
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.desc }}</p>
                        <a href="#" class="btn btn-primary">进入专栏</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';

export interface ColumnsProps {
    id: number,
    img: string,
    title: string,
    desc: string
}
defineProps({
    list: {
        type: Array as PropType<ColumnsProps[]>,
        required: true
    }
})
</script>

<style scoped>
</style>