<script setup lang="ts">
import { object, string, type InferType } from "yup";

definePageMeta({ layout: "navigation" });
useHead({ title: "Abfrage" });

const schema = object({
  areaValue: string().matches(/^\d\d\d\d(\/\d)?\d?\d?$/g, {
    excludeEmptyString: true,
    message: "Ungültiges Format (siehe Hilfe)",
  }),
  from: string(),
  to: string(),
});

const state = reactive({
  areaValue: "2350/4",
  from: "1990",
  to: "2019",
});

/**
 * Generates a query object with data provider ID, creation date, area, and period.
 * The area and period are included only if their respective values are present
 * in the state. The area uses the MTB format and the period includes optional
 * 'from' and 'to' dates.
 *
 * @returns {object} The generated query object containing dataProviderID,
 * creationDate, and optionally area and period.
 */
function generateQuery() {
  let query = {
    dataProviderID: "werbeo",
    creationDate: new Date().toISOString(),
  };

  if (state.areaValue)
    query.area = {
      areaFormat: "mtb",
      areaValue: state.areaValue,
    };

  let period = {};
  if (state.from) period.from = state.from + "-01-01";
  if (state.to) period.to = state.to + "-12-31";
  if (period.from || period.to) query.period = period;

  return query;
}

const queryStatus = ref("idle");
const toast = useToast();

async function query() {
  queryStatus.value = "loading";
  const response = await performQuery(generateQuery());
  if (response === "OK") {
    queryStatus.value = "idle";
    toast.add({
      icon: "i-heroicons-check-badge",
      title: "Abfrage erfolgreich",
      description:
        "Die Ergebnisse und statistische Berechnungen für die erfassten Taxa stehen nun bereit.",
    });
    navigateTo("/report/occurrences/statistics");
  }
}

// TK25-Blattschnitte
const tk25Label = computed(
  () =>
    getTK25Label(parseTK25String(state.areaValue)) || "Gib einen Wert ein..."
);

// const selectedTK25 = ref(tk25Areas[0]);
</script>

<template>
  <template v-if="queryStatus === 'loading'">
    <div class="flex flex-col justify-center w-full">
      <UProgress animation="carousel" />
      <UAlert
        class="mt-4"
        icon="i-heroicons-arrow-right"
        title="Abfrage in Arbeit"
        description="Die Erfassungsdaten werden abgefragt..."
      ></UAlert>
    </div>
  </template>

  <template v-else>
    <div class="flex flex-col w-full h-full items-center overflow-auto">
      <UForm
        :schema="schema"
        :state="state"
        class="flex flex-col gap-3 w-72 h-full justify-center"
        @submit="query()"
      >
        <!-- TK-25 Picker -> too slow :/ -->
        <!-- <UFormGroup label="TK25-Blattschnitt" size="xl">
          <USelectMenu
            v-model="selectedTK25"
            :options="tk25Areas"
          ></USelectMenu>
        </UFormGroup> -->

        <UFormGroup
          label="TK25-Quadrant"
          size="xl"
          :help="tk25Label"
          name="areaValue"
        >
          <UInput v-model="state.areaValue" placeholder="1234/123" />

          <template #label>
            <div class="flex">
              <p class="block font-medium text-gray-700 dark:text-gray-200">
                TK25-Quadrant
              </p>
              <UPopover class="ml-2 mt-[0.1rem] align-bottom" mode="hover">
                <UIcon name="i-heroicons-question-mark-circle" />

                <template #panel>
                  <div class="flex flex-col gap-4 max-w-[30vw] p-8">
                    <p>
                      Gib den Quadranten eines TK25-Blattschnittes im Format
                      <code>1234/1</code> an. Die Auflösung reicht bis
                      1/64-Quadranten (<code>1234/1</code>). Die Ziffern nach
                      dem Schrägstrich kodieren die Position der Quadranten.
                    </p>
                    <UTable
                      :ui:="{
                        td: {
                          padding: '!py-0',
                        },
                      }"
                      :columns="[
                        { key: 'quadrant', label: 'Quadrant' },
                        { key: 'direction', label: 'Himmelsrichtung' },
                      ]"
                      :rows="[
                        { quadrant: '1', direction: 'NW' },
                        { quadrant: '2', direction: 'NO' },
                        { quadrant: '3', direction: 'SW' },
                        { quadrant: '4', direction: 'SO' },
                      ]"
                    />
                    <p>
                      Bei der höchsten Auflösung (1/64-Quadrant, z.B.
                      <code>2336/114</code>) entspricht die Untersuchungsfläche
                      - je nach Lage in Deutschland - einer durchschnittlichen
                      Fläche von etwa 2,1 km².
                    </p>
                  </div>
                </template>
              </UPopover>
            </div>
          </template>
        </UFormGroup>

        <UFormGroup label="Von Jahr" size="xl" name="from">
          <UInput v-model="state.from" />
        </UFormGroup>
        <UFormGroup label="Bis einschließlich Jahr" size="xl" name="to">
          <UInput v-model="state.to" />
        </UFormGroup>

        <UButton
          type="submit"
          icon="i-heroicons-arrow-right"
          class="justify-center mt-4"
          size="lg"
          >Abfrage durchführen</UButton
        >

        <UDivider class="my-4" label="ODER" />

        <UButton
          icon="i-heroicons-sparkles"
          class="justify-center"
          size="lg"
          @click="loadExampleData()"
        >
          Beispieldaten laden
        </UButton>
      </UForm>
    </div>
  </template>
</template>
