import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      color: 'red',
      font: {
        size: '2em',
      },
    }
  },
  setup() {
    return () => <div class="text">Hello</div>
  },
})
