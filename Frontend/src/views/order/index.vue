<template>
  <div class="container-fluid my-5">
    <div class="row justifiy content">
      <div class="col-12">
        <!-- <router-link
          :to="{ name: 'checkout.create' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
        >
          Add
        </router-link> -->

        <div class="card runded shadow">
          <div class="card-header">User List</div>
          <div class="card-body">
            <div class="table">
              <thead>
                <tr>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>ID Card</th>
                  <th>Payment</th>
                  <th>Down Payment</th>
                  <th>Credit Name</th>
                  <th>Credit Number</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(check, index) in checkout" :key="index">
                  <th>{{ index + 1 }}</th>
                  <td>{{ check._id }}</td>
                  <td>{{ check.name }}</td>
                  <td>{{ check.phone }}</td>
                  <td>{{ check.id_card }}</td>
                  <td>{{ check.payment }}</td>
                  <td>{{ check.down_payment }}</td>
                  <td>{{ check.credit_name }}</td>
                  <td>{{ check.credit_number }}</td>
                  <td>{{ check.price }}</td>
                  <td>
                    <div class="btn-group rounded">
                      <!-- <router-link
                        :to="{
                          name: 'checkout.edit',
                          params: { id: check._id },
                        }"
                        class="btn btn-sm btn-outline-info mx-1"
                      >
                        Edit
                      </router-link> -->
                      <button
                        class="btn btn-sm btn-outline-danger mx-1"
                        @click.prevent="destroy(check._id, index)"
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
    let checkout = ref([]);

    onMounted(() => {
      axios
        .get("http://localhost:5000/checkout")
        .then((res) => {
          checkout.value = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(_id, index) {
      axios
        .delete(`http://localhost:5000/checkout/${_id}`)
        .then(() => {
          users.value.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    return {
      checkout,
      destroy,
    };
  },
};
</script>
