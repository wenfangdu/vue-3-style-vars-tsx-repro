<!-- 👇 works -->
<!-- <script lang="ts">
  import { defineComponent, h } from 'vue'

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
      return () => h('div', { class: 'text' }, 'hello')
    },
  })
</script> -->

<!-- 👇 works -->
<!-- <script>
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
      return () => <div class="text">hello</div>
    },
  })
</script> -->

<!-- 👇 does not work -->
<script lang="tsx">
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
      return () => <div class="text">hello</div>
    },
  })
</script>

<style>
  body {
    background: #000;
    text-align: center;
  }

  .text {
    color: v-bind(color);

    /* expressions (wrap in quotes) */
    font-size: v-bind('font.size');
  }
</style>
