<template>
  <div class="container-fluid">
    <div class="row">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <md-card>
            <md-card-header data-background-color="red">
              <h4 class="title">Doctors</h4>
              <p class="category">
                Click on a doctor to see more informations about him
              </p>
            </md-card-header>
            <md-card-content class="mb-4">
              <simple-table table-header-color="red"></simple-table>
            </md-card-content>
          </md-card>
        </div>

        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    SimpleTable,
  },
};
</script>
