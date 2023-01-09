<template>
  <div class="container-fluid">
    <div class="row">
      <!-- ------------------------ Navbar --------------------------------------------------------------------- -->

      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-success sidebar collapse show fixed-top"
        style="padding-bottom: 1000px"
      >
        <div class="position-sticky pt-3 sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                class="nav-link text-white text-opacity-75 active"
                aria-current="page"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart align-text-bottom"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  ></path>
                </svg>
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users align-text-bottom"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Customers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bar-chart-2 align-text-bottom"
                  aria-hidden="true"
                >
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
                Reports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-layers align-text-bottom"
                  aria-hidden="true"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Integrations
              </a>
            </li>
          </ul>

          <h6
            class="sidebar-heading d-flex text-white justify-content-between align-items-center px-3 mt-4 mb-1 text-uppercase"
          >
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather text-white feather-plus-circle align-text-bottom"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file-text align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Current month
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file-text align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Last quarter
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file-text align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Social engagement
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-opacity-75" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file-text align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  ></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3 main-content">
        <!-- --------------------- Filter -------------------------------------------------------------------------- -->

        <h4 class="pb-2">Cari berdasarkan</h4>
        <div class="row g-4 pb-4 border-bottom">
          <div class="col-3">
            <a href="" class="text-white" style="text-decoration: none">
              <div class="card bg-success shadow">
                <div class="card-body">
                  <h4>
                    Kosan
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home align-text-bottom"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      ></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-3">
            <a href="" class="text-white" style="text-decoration: none">
              <div class="card bg-primary text-white shadow">
                <div class="card-body">
                  <h4>
                    Rumah
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home align-text-bottom"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      ></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </h4>
                </div>
              </div>
            </a>
          </div>

          <div class="col-3">
            <a href="" class="text-white" style="text-decoration: none">
              <div class="card bg-danger text-white shadow">
                <div class="card-body">
                  <h4>
                    Apartemen
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home align-text-bottom"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      ></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- ------------------- Cards ---------------------------------------------------------------------------- -->
        <div class="row d-flex g-4 py-4">
          <div v-for="(kosan, index) in kos" :key="index" class="col-6">
            <div
              class="row g-0 border border-3 border-success rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
              v-if="kosan.type == 1"
            >
              <div class="col p-4 d-flex flex-column position-static">
                <div class="row">
                  <strong class="d-inline-block mb-2 text-success col-lg-9"
                    >Kos</strong
                  >
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-success float-end"
                    v-if="kosan.status == 'Tersedia'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-warning float-end"
                    v-if="kosan.status == 'Pending'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-muted float-end"
                    v-if="kosan.status == 'Terjual'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                </div>
                <h3 class="mb-0">{{ kosan.price }}</h3>
                <div class="mb-1 text-muted">{{ kosan.city }}</div>
                <p class="card-text mb-auto border-success">
                  <b>
                    {{ kosan.address }}
                  </b>
                </p>
                <div class="border-bottom border-success mb-2"></div>
                <router-link
                  :to="{ name: 'order.order', params: { id: kosan._id } }"
                  class="text-white align-items-end col-lg-6 btn btn-sm btn-success"
                >
                  Lihat Selengkapnya
                </router-link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="../assets/kos-kosan.jpg"
                  class="bd-placeholder-img"
                  width="200"
                  height="300"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
              </div>
            </div>

            <div
              class="row g-0 border border-3 border-primary rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
              v-if="kosan.type == 2"
            >
              <div class="col p-4 d-flex flex-column position-static">
                <div class="row">
                  <strong class="d-inline-block mb-2 text-primary col-lg-9"
                    >Rumah</strong
                  >
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-primary float-end"
                    v-if="kosan.status == 'Tersedia'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-warning float-end"
                    v-if="kosan.status == 'Pending'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-muted float-end"
                    v-if="kosan.status == 'Terjual'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                </div>
                <h3 class="mb-0">{{ kosan.price }}</h3>
                <div class="mb-1 text-muted">{{ kosan.city }}</div>
                <p class="card-text mb-auto">
                  <b>
                    {{ kosan.address }}
                  </b>
                </p>
                <div class="border-bottom border-primary mb-2"></div>
                <router-link
                  :to="{ name: 'order.order', params: { id: kosan._id } }"
                  class="text-white align-items-end col-lg-6 btn btn-sm btn-primary"
                >
                  Lihat Selengkapnya
                </router-link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="../assets/house-isolated-field.jpg"
                  alt=""
                  class="bd-placeholder-img"
                  width="200"
                  height="300"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
              </div>
            </div>

            <div
              class="row g-0 border border-3 border-danger rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative"
              v-if="kosan.type == 3"
            >
              <div class="col p-4 d-flex flex-column position-static">
                <div class="row">
                  <strong class="d-inline-block mb-2 text-danger col-lg-9"
                    >Apartemen</strong
                  >
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-danger float-end"
                    v-if="kosan.status == 'Tersedia'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-warning float-end"
                    v-if="kosan.status == 'Pending'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                  <p
                    class="d-inline-block mb-2 col-lg-2 text-muted float-end"
                    v-if="kosan.status == 'Terjual'"
                  >
                    <b>{{ kosan.status }}</b>
                  </p>
                </div>
                <h3 class="mb-0">{{ kosan.price }}</h3>
                <p class="card-text mb-auto">
                  <b>
                    {{ kosan.address }}
                  </b>
                </p>
                <div class="border-bottom border-danger mb-2"></div>
                <router-link
                  :to="{ name: 'order.order', params: { id: kosan._id } }"
                  class="text-white align-items-end col-lg-6 btn btn-sm btn-danger"
                >
                  Lihat Selengkapnya
                </router-link>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="../assets/window-building-pattern-exterior.jpg"
                  alt=""
                  class="bd-placeholder-img
                  "
                  width="200"
                  height="300"
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
      </div>
    </div>
  </div>

  <!---------------------------- Footer ------------------------------------------------------------ -->
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
    return {
      kos,
    };
  },
};
</script>
