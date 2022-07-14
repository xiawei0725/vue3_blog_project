import { ref } from 'vue'
import axios from "axios";
export default function useFetch<R>(url: string) {
    const result = ref<R | null>(null)
    const loading = ref(true)
    const loaded = ref(false)
    const err = ref(null)
    axios.get(url).then(res => {
        result.value = res.data
        loading.value = false
        loaded.value = true
    }).catch(e => {
        err.value = e
        loading.value = false
        loaded.value = true
    })
    return {
        result,
        loading,
        loaded
    }
}