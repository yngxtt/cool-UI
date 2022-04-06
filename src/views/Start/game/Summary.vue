<template>
    <div class="actions">
        <div class="stats">
          <div class="score"><span>步骤: </span>{{ info.numMoves }}</div>
          <div class="score"><span>平均用时: </span>{{ avg }} </div>
<!--          <div class="score"><span>历史最高: </span>{{ info.highest }}</div>-->
          <div class="score"><span>得分: </span>{{ info.score }}</div>
        </div>
        <div class="buttons">
            <span>请 使 用 方 向 键 控 制 :  ←  ↑  →  ↓ </span><button class="btn" v-if="info.gameState !== 'RUNNING'" @click="startGame">开始游戏</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Summary",
    props: {
        info: { numMoves: Number, highest: Number, score: Number, gameState: String, timeDiff: Number },
    },
    computed: {
        avg() {
            const { timeDiff, numMoves } = this.info;
            return (timeDiff / Math.max(1, numMoves) / 1000).toFixed(2);
        },
    },
    methods: {
        startGame() {
            this.$emit("startGame");
            this.$bus.$emit('testIsShow',false)
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.actions {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.actions .stats {
  --font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.actions .stats .score {
  padding: 8px;
  font-size: var(--font-size);
  font-weight: 500;
  line-height: 2em;
  color: #409eff;
}
.actions .stats .score span {
  color: #806286;
}

.actions .buttons {
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
}
.actions .buttons span {
  color: #90c4cc;
  font-size: 1.1rem;
  margin-right: 1rem;
}
.actions .btn {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  transition: ease-in-out, background-color 0.15s;
}

@media screen and (min-width: 355px) and (max-width: 499px) {
  .actions .stats {
    --font-size: 1em;
  }
}
</style>
