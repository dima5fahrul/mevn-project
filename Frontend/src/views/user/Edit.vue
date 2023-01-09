<template>
  <div class="container my-5">
    <div class="row justifiy content">
      <div class="col-8">
        <router-link
          :to="{ name: 'user.index' }"
          class="btn btn-primary btn-sm rounded shadow mb-3"
        >
          Back
        </router-link>

        <div class="card runded shadow">
          <div class="card-header">Edit User</div>
          <div class="card-body">
            <form @submit.prevent="update()">
              <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  v-model="users.name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  v-model="users.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Gender</label>
                <select
                  id=""
                  name="gender"
                  class="form-select"
                  v-model="users.gender"
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
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
    let users = reactive({
      name: "",
      email: "",
      gender: "",
    });
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://localhost:5000/users/${route.params.id}`)
        .then((result) => {
          users.name = result.data.name;
          users.email = result.data.email;
          users.gender = result.data.gender;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    function update() {
      axios
        .put(`http://localhost:5000/users/${route.params.id}`, users)
        .then(() => {
          router.push({ name: "user.index" });
        })
        .catch((err) => {
          validation.value = err.response.data.errors;
        });
    }
    return {
      users,
      validation,
      router,
      update,
    };
  },
};
</script>
