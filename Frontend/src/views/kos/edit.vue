<template>
  <div class="container my-5">
    <div class="row justifiy content">
      <div class="col-8">
        <router-link
          :to="{ name: 'kos.index' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
        >
          Back
        </router-link>

        <div class="card runded shadow">
          <div class="card-header">Edit Kos</div>
          <div class="card-body">
            <form @submit.prevent="update()">
              <div class="mb-3">
                <label for="" class="form-label">Type</label>
                <select
                  id=""
                  name="type"
                  class="form-select"
                  v-model="kos.type"
                  required
                >
                  <option value="1">Kos</option>
                  <option value="2">Rumah</option>
                  <option value="3">Apartemen</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Owner</label>
                <input
                  name="owner"
                  type="text"
                  class="form-control"
                  v-model="kos.owner"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">City</label>
                <input
                  name="city"
                  type="text"
                  class="form-control"
                  v-model="kos.city"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Address</label>
                <input
                  name="address"
                  type="text"
                  class="form-control"
                  v-model="kos.address"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Price</label>
                <input
                  name="price"
                  type="text"
                  class="form-control"
                  v-model="kos.price"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Facilities</label>
                <input
                  name="facilities"
                  type="text"
                  class="form-control"
                  v-model="kos.facilities"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Phone</label>
                <input
                  name="phone"
                  type="text"
                  class="form-control"
                  v-model="kos.phone"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Status</label>
                <select
                  id=""
                  name="type"
                  class="form-select"
                  v-model="kos.status"
                  required
                >
                  <option value="Tersedia">Tersedia</option>
                  <option value="Pending">Pending</option>
                  <option value="Terjual">Terjual</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <input
                  name="description"
                  type="text"
                  class="form-control"
                  v-model="kos.description"
                  required
                />
              </div>
              <button class="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    // data binding
    let kos = reactive({
      type: "",
      owner: "",
      city: "",
      address: "",
      price: "",
      facilities: "",
      phone: "",
      status: "",
      description: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://localhost:5000/kos/${route.params.id}`)
        .then((result) => {
          kos.type = result.data.type;
          kos.owner = result.data.owner;
          kos.city = result.data.city;
          kos.address = result.data.address;
          kos.price = result.data.price;
          kos.facilities = result.data.facilities;
          kos.phone = result.data.phone;
          kos.status = result.data.status;
          kos.description = result.data.description;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    function update() {
      axios
        .patch(`http://localhost:5000/kos/${route.params.id}`, kos)
        .then(() => {
          router.push({ name: "kos.index" });
        })
        .catch((err) => {
          validation.value = err.response.data.errors;
        });
    }
    return {
      kos,
      validation,
      router,
      update,
    };
  },
};
</script>
