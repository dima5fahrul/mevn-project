<template>
  <div class="container-fluid my-5">
    <div class="row justifiy content">
      <div class="col-12">
        <router-link
          :to="{ name: 'kos.create' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
        >
          Add
        </router-link>

        <div class="card runded shadow">
          <div class="card-header">User List</div>
          <div class="card-body">
            <div class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Type</th>
                  <th>Owner</th>
                  <th>City</th>
                  <th>Address</th>
                  <th>Price</th>
                  <th>Facilities</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kosan, index) in kos" :key="index">
                  <th>{{ index + 1 }}</th>
                  <td>{{ kosan.type }}</td>
                  <td>{{ kosan.owner }}</td>
                  <td>{{ kosan.city }}</td>
                  <td>{{ kosan.address }}</td>
                  <td>{{ kosan.price }}</td>
                  <td>{{ kosan.facilities }}</td>
                  <td>{{ kosan.phone }}</td>
                  <td>{{ kosan.status }}</td>
                  <td>{{ kosan.description }}</td>
                  <td>
                    <div class="btn-group rounded">
                      <router-link
                        :to="{ name: 'kos.edit', params: { id: kosan._id } }"
                        class="btn btn-sm btn-outline-info mx-1"
                      >
                        Edit
                      </router-link>
                      <button
                        class="btn btn-sm btn-outline-danger mx-1"
                        @click.prevent="destroy(kos._id, index)"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    // reactive data
    let kos = ref([]);

    onMounted(() => {
      axios
        .get("http://localhost:5000/kos")
        .then((res) => {
          kos.value = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(_id, index) {
      axios
        .delete(`http://localhost:5000/kos/${_id}`)
        .then(() => {
          kos.value.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    return {
      kos,
      destroy,
    };
  },
};
</script>
