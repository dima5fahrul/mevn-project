<template>
  <div class="container mt-3">
    <div
      class="row row-cols-12 mb-2 border border-4 border-success rounded-3"
      v-if="kos.type == 1"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="row">
            <strong class="d-inline-block mb-2 text-success col-lg-10">
              <h3>Kos</h3>
            </strong>
            <p
              class="d-inline-block mb-2 col-lg-2 text-success float-end"
              v-if="kos.status == 'Tersedia'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-warning float-end"
              v-if="kos.status == 'Pending'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-muted float-end"
              v-if="kos.status == 'Terjual'"
            >
              <b>{{ kos.status }}</b>
            </p>
          </div>
          <h2 class="mb-0">{{ kos.price }}</h2>
          <div class="mb-1 text-muted">{{ kos.city }}</div>
          <div class="v">
            <b>{{ kos.owner }}</b>
          </div>
          <div>
            <b>{{ kos.phone }}</b>
          </div>
          <p>
            {{ kos.address }}
          </p>
          <p>{{ kos.facilities }}</p>
          <p class="card-text text-muted mb-auto">
            {{ kos.description }}
          </p>
          <div class="btn-group">
            <router-link
              v-if="kos.status == 'Tersedia'"
              :to="{
                name: 'order.checkout',
                params: { id: kos._id },
              }"
              class="btn btn-sm btn-success mx-1"
            >
              <h3>
                <b>Pesan</b>
              </h3>
            </router-link>
            <div
              v-if="kos.status == 'Pending'"
              class="btn btn-sm btn-warning mx-1"
              disabled
            >
              <h3>
                <b>Terpesan</b>
              </h3>
            </div>
            <div
              v-if="kos.status == 'Terjual'"
              class="btn btn-sm btn-secondary mx-1"
              disabled
            >
              <h3>
                <b>Terjual</b>
              </h3>
            </div>
          </div>
        </div>

        <div class="col-auto d-none d-lg-block">
          <img
            src="../../assets/kos-kosan.jpg"
            alt=""
            class="bd-placeholder-img"
            width="500"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
    </div>

    <div
      class="row row-cols-12 mb-2 border border-4 border-primary rounded-3"
      v-if="kos.type == 2"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="row">
            <strong class="d-inline-block mb-2 col-lg-10 text-primary">
              <h3>Rumah</h3>
            </strong>
            <p
              class="d-inline-block mb-2 col-lg-2 text-primary float-end"
              v-if="kos.status == 'Tersedia'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-warning float-end"
              v-if="kos.status == 'Pending'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-muted float-end"
              v-if="kos.status == 'Terjual'"
            >
              <b>{{ kos.status }}</b>
            </p>
          </div>
          <h2 class="mb-0">{{ kos.price }}</h2>
          <div class="mb-1 text-muted">{{ kos.city }}</div>
          <div>
            <b>{{ kos.owner }}</b>
          </div>
          <div>
            <b>{{ kos.phone }}</b>
          </div>
          <p>
            {{ kos.address }}
          </p>
          <p>{{ kos.facilities }}</p>
          <p class="card-text text-muted mb-auto">
            {{ kos.description }}
          </p>
          <div class="btn-group">
            <router-link
              v-if="kos.status == 'Tersedia'"
              :to="{
                name: 'order.checkout',
                params: { id: kos._id },
              }"
              class="btn btn-sm btn-primary mx-1"
            >
              <h3>
                <b>Pesan</b>
              </h3>
            </router-link>
            <div
              v-if="kos.status == 'Pending'"
              class="btn btn-sm btn-warning mx-1"
              disabled
            >
              <h3>
                <b>Terpesan</b>
              </h3>
            </div>
            <div
              v-if="kos.status == 'Terjual'"
              class="btn btn-sm btn-secondary mx-1"
              disabled
            >
              <h3>
                <b>Terjual</b>
              </h3>
            </div>
          </div>
        </div>

        <div class="col-auto d-none d-lg-block">
          <img
            src="../../assets/house-isolated-field.jpg"
            alt=""
            class="bd-placeholder-img"
            width="500"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
    </div>

    <div
      class="row row-cols-12 border border-4 border-danger rounded-3"
      v-if="kos.type == 3"
    >
      <div
        class="row g-0 border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
      >
        <div class="col p-4 d-flex flex-column position-static">
          <div class="row">
            <strong class="d-inline-block mb-2 col-lg-10 text-danger">
              <h3>Apartemen</h3>
            </strong>
            <p
              class="d-inline-block mb-2 col-lg-2 text-danger float-end"
              v-if="kos.status == 'Tersedia'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-warning float-end"
              v-if="kos.status == 'Pending'"
            >
              <b>{{ kos.status }}</b>
            </p>
            <p
              class="d-inline-block mb-2 col-lg-2 text-muted float-end"
              v-if="kos.status == 'Terjual'"
            >
              <b>{{ kos.status }}</b>
            </p>
          </div>
          <h2 class="mb-0">{{ kos.price }}</h2>
          <div class="mb-1 text-muted">{{ kos.city }}</div>
          <div class="v">
            <b>{{ kos.owner }}</b>
          </div>
          <div>
            <b>{{ kos.phone }}</b>
          </div>
          <p>
            {{ kos.address }}
          </p>
          <p>{{ kos.facilities }}</p>
          <p class="card-text text-muted mb-auto">
            {{ kos.description }}
          </p>
          <div class="btn-group">
            <router-link
              v-if="kos.status == 'Tersedia'"
              :to="{
                name: 'order.checkout',
                params: { id: kos._id },
              }"
              class="btn btn-sm btn-danger mx-1"
            >
              <h3>
                <b>Pesan</b>
              </h3>
            </router-link>
            <div
              v-if="kos.status == 'Pending'"
              class="btn btn-sm btn-warning mx-1"
              disabled
            >
              <h3>
                <b>Terpesan</b>
              </h3>
            </div>
            <div
              v-if="kos.status == 'Terjual'"
              class="btn btn-sm btn-secondary mx-1"
              disabled
            >
              <h3>
                <b>Terjual</b>
              </h3>
            </div>
          </div>
        </div>

        <div class="col-auto d-none d-lg-block">
          <img
            src="../../assets/window-building-pattern-exterior.jpg"
            alt=""
            class="bd-placeholder-img"
            width="500"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    // data binding
    let kos = reactive([]);

    // router
    const route = useRoute();

    // get data
    onMounted(() => {
      axios
        .get(`http://localhost:5000/kos/${route.params.id}`)
        .then((result) => {
          kos._id = result.data._id;
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

    return {
      kos,
    };
  },
};
</script>
