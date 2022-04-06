<template>
    <div :class="['tile', tileCssClass, backgroundCsssClass, newTileCssClass]">
        <span v-if="tile && tile.value !== -1" :class="[mergeCssClass]">
            {{ tile.value }}
        </span>
    </div>
</template>

<script>
export default {
    name: "Tile",
    props: {
        row: Number,
        col: Number,
        tile: Object,
    },
    computed: {
        tileCssClass() {
            return `tile-${this.row}-${this.col}`;
        },
        backgroundCsssClass() {
            return this.tile && this.tile.value ? `background-${this.tile.value}` : "";
        },
        newTileCssClass() {
            return this.tile && this.tile.newlyAdded ? "tile-new" : "";
        },
        mergeCssClass() {
            return this.tile && this.tile.merged ? "tile-merged" : "";
        },
    },
};
</script>


<style scoped>
.tile {
  --font-size: 3em;
  border-color: transparent;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile span {
  font-size: var(--font-size);
  font-weight: 600;
}

div.background--1 {
  background: rgba(238, 228, 218, 0.35);
  border: 1px solid #9a9a9a;
}
div.background-2, div.background-4 {
  color: #776e65;
  border: 1px solid #9a9a9a;
}
div.background-2 {
  background: #eee4da;
  border: 1px solid #9a9a9a;
}
div.background-4 {
  background: #ede0c8;
  border: 1px solid #9a9a9a;
}
div.background-8, div.background-16, div.background-32, div.background-64, div.background-128, div.background-256, div.background-512, div.background-1024 {
  color: #f9f6f2;
  border: 1px solid #9a9a9a;
}
div.background-8 {
  background: #f2b179;
  border: 1px solid #9a9a9a;
}
div.background-16 {
  background: #f59563;
  border: 1px solid #9a9a9a;
}
div.background-32 {
  background: #f67c5f;
  border: 1px solid #9a9a9a;
}
div.background-64 {
  background: #f65e3b;
  border: 1px solid #9a9a9a;
}
div.background-128 {
  background: #edcf72;
  border: 1px solid #9a9a9a;
}
div.background-256 {
  background: #edcc61;
  border: 1px solid #9a9a9a;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);
}
div.background-512 {
  background: #edc850;
  border: 1px solid #9a9a9a;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);
}
div.background-1024 {
  background: #edc53f;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);
}
div.background-2048 {
  background: #edc22e;
  border-color:  #9a9a9a;
  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);
}

.tile-merged {
  animation: merged 0.3s ease 100ms;
  animation-fill-mode: backwards;
}

.tile-new {
  animation: bounce-in 0.2s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes merged {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@media screen and (min-width: 355px) and (max-width: 499px) {
  .tile {
    --font-size: 2.2em;
  }
}
</style>
