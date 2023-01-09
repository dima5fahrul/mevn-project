<template>
  <div class="container my-5">
    <div class="row justifiy content">
      <div class="col-8">
        <router-link
          :to="{ name: 'user.create' }"
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
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <th>{{ index + 1 }}</th>
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.gender }}</td>
                  <td>
                    <div class="btn-group rounded">
                      <router-link
                        :to="{ name: 'user.edit', params: { id: user._id } }"
                        class="btn btn-sm btn-outline-info mx-1"
                      >
                        Edit
                      </router-link>
                      <button
                        class="btn btn-sm btn-outline-danger mx-1"
                        @click.prevent="destroy(user._id, index)"
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
    let users = ref([]);

    onMounted(() => {
      axios
        .get("http://localhost:5000/users")
        .then((res) => {
          users.value = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(_id, index) {
      axios
        .delete(`http://localhost:5000/users/${_id}`)
        .then(() => {
          users.value.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    return {
      users,
      destroy,
    };
  },
};
</script>
