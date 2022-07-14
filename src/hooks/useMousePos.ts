import { onMounted, onUnmounted, reactive, toRefs } from "vue";
export default function useMousePos() {

    const pos = reactive({ x: 0, y: 0 })
    const changePos = (e: MouseEvent) => {
        pos.x = e.pageX
        pos.y = e.pageY
    }

    onMounted(() => {
        document.addEventListener('click', changePos)
    })

    onUnmounted(() => {
        document.removeEventListener('click', changePos)
    })
    return toRefs(pos)
}