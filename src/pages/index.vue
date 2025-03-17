<!-- src/components/DebugPanel.vue -->
<template>
  <div v-if="show" class="debug-panel">
    <div class="debug-header">
      <h3>{{ title }}</h3>
      <button @click="toggleExpanded" class="debug-toggle">
        {{ expanded ? '−' : '+' }}
      </button>
    </div>
    
    <div v-if="expanded" class="debug-content">
      <pre>{{ formattedContent }}</pre>
      
      <div v-if="error" class="debug-error">
        <h4>Erro</h4>
        <pre>{{ error }}</pre>
      </div>
      
      <div class="debug-info">
        <p>Tempo: {{ timestamp }}</p>
        <p>URL: {{ currentUrl }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  data: {
    type: [Object, Array, String, Number],
    default: null
  },
  error: {
    type: [Object, Error, String],
    default: null
  },
  title: {
    type: String,
    default: 'Debug Info'
  },
  showInProd: {
    type: Boolean,
    default: false
  }
})

const expanded = ref(false)
const timestamp = ref('')
const currentUrl = ref('')

const show = computed(() => {
  // Só mostra em produção se showInProd for true
  if (process.env.NODE_ENV === 'production') {
    return props.showInProd
  }
  return true
})

const formattedContent = computed(() => {
  try {
    if (props.data === null || props.data === undefined) {
      return 'Sem dados para exibir'
    }
    return typeof props.data === 'object' 
      ? JSON.stringify(props.data, null, 2) 
      : props.data
  } catch (e) {
    return `Erro ao formatar dados: ${e.message}`
  }
})

const toggleExpanded = () => {
  expanded.value = !expanded.value
}

onMounted(() => {
  timestamp.value = new Date().toISOString()
  currentUrl.value = window.location.href
})
</script>

<style scoped>
.debug-panel {
  margin: 1rem 0;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  background-color: #f8fafc;
  font-family: monospace;
  font-size: 0.875rem;
}

.debug-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #e2e8f0;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.debug-toggle {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.debug-content {
  padding: 1rem;
  overflow-x: auto;
}

.debug-error {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #fee2e2;
  border-radius: 0.25rem;
}

.debug-info {
  margin-top: 1rem;
  font-size: 0.75rem;
  color: #64748b;
}

pre {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>