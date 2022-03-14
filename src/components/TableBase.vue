<template>
  <div class="tablecontainer">
    <p v-if="title !== ''" class="title">{{ title }}</p>
    <table ref="thisTable">
      <slot></slot>

      <template v-if="description !== ''">
        <tr>
          <td class="description" colspan="100%">
            {{ description }}
            <InfoToolTip
              v-if="download === true"
              type="download"
              text="Diese Tabelle als .csv herunterladen."
              @click="getTableToCSVBlob()"
            />
          </td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
import InfoToolTip from "./InfoToolTip.vue";

export default {
  components: { InfoToolTip },
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    download: {
      type: Boolean,
      default: true,
    },
    filename: {
      type: String,
      default: "table", // required when download true
    },
  },
  data() {
    return {
      overflow: false,
      realWidth: 0,
      clientHeight: 0,
      scrollWidth: 0,
      scrollHeight: 0,
    };
  },
  computed: {
    showDescription() {
      // weirdly doesnt work as expected
      return this.description !== "" || this.download;
    },
  },
  mounted() {
    const isOverflown = ({
      clientWidth,
      clientHeight,
      scrollWidth,
      scrollHeight,
    }) => {
      this.realWidth = clientWidth;
      this.clientHeight = clientHeight;
      this.scrollWidth = scrollWidth;
      this.scrollHeight = scrollHeight;

      return scrollHeight > clientHeight || scrollWidth > this.realWidth;
    };
    if (isOverflown(this.$refs.thisTable.parentElement)) {
      this.$refs.thisTable.style.cursor = "e-resize";
    }
  },
  methods: {
    getTableToCSVBlob() {
      let csvData = [];
      if (this.$refs.thisTable !== null) {
        let rows = this.$refs.thisTable.getElementsByTagName("tr");
        if (rows.length > 0) {
          let rowArray = [...rows];
          rowArray.splice(rows.length - 1, 1);
          rowArray.forEach((row) => {
            let cols = row.querySelectorAll("td,th");
            let csvRows = [];
            [...cols].forEach((col, index) => {
              csvRows.push(col.innerText);
              if (cols[index].colSpan > 1) {
                for (let i = 1; i < cols[index].colSpan; i++) {
                  csvRows.push("");
                }
              }
            });
            csvData.push(csvRows.join(";"));
          });
          var csvFile = new Blob([csvData.join("\n")], {
            type: "text/csv",
          });
          const blobURL = window.URL.createObjectURL(csvFile);
          const anchor = document.createElement("a");
          anchor.href = blobURL;
          anchor.target = "_blank";
          anchor.download = `floralink-${this.filename}.csv`;
          anchor.click();
          URL.revokeObjectURL(blobURL);
        }
      }
      return "";
    },
  },
};
</script>

<style scoped>
h3 {
  display: inline-block;
  text-align: center;
}

.tablecontainer {
  overflow: auto;
  max-height: 60vh;
  margin: 20px 0;
}

table {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.title {
  background-color: var(--grey2);
  text-align: center;
  font-size: 1.2em;
}

table :deep(th),
table :deep(td) {
  padding: 8px;
  text-align: left;
}

table :deep(td) {
  background-color: var(--grey4);
}

table :deep(th) {
  background-color: var(--grey2b);
}
</style>
