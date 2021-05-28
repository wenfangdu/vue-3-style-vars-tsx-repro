<script lang="tsx" src="./App"></script>

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
