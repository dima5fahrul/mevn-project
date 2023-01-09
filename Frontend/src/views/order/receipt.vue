<template>
  <div class="container my-5">
    <div class="card">
      <div class="card-body mx-4">
        <div class="container">
          <h3 class="my-5 mx-5">
            Terima kasih sudah memesan!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              fill="currentColor"
              class="bi bi-bag-check"
              viewBox="0 0 16 22"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
          </h3>
          <form @submit.prevent="update()">
            <div class="row">
              <ul class="list-unstyled">
                <li class="text-black">
                  <b>{{ receipt.name }}</b>
                </li>
                <li class="text-muted mt-1">
                  <span class="text-black"
                    ><b>{{ receipt.phone }}</b></span
                  >
                </li>
                <li class="text-black mt-1">
                  <b>{{ receipt.id_card }}</b>
                </li>
              </ul>
              <hr />
              <div class="col-xl-10">
                <p>Payment</p>
              </div>
              <div class="col-xl-2">
                <p class="float-end">
                  <b>{{ receipt.payment }}</b>
                  <svg
                    v-if="receipt.payment == 'PayPal'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-paypal mx-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.351.351 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91.379-.27.712-.603.993-1.005a4.942 4.942 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.687 2.687 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.695.695 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016c.217.124.4.27.548.438.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.873.873 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.352.352 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32.845-5.214Z"
                    />
                  </svg>

                  <svg
                    v-if="receipt.payment == 'Debit Card'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-credit-card mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                    />
                    <path
                      d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                    />
                  </svg>

                  <svg
                    v-if="receipt.payment == 'Credit Card'"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-credit-card mx-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
                    />
                    <path
                      d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z"
                    />
                  </svg>
                </p>
              </div>
              <hr />
            </div>

            <div v-if="down_payment == true" class="row">
              <div class="col-xl-10">
                <p>Bayar Setengah</p>
              </div>
              <div class="col-xl-2">
                <p class="float-end">
                  <b> 50%</b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-currency-dollar"
                    viewBox="0 0 16 19"
                  >
                    <path
                      d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                    />
                  </svg>
                </p>
              </div>
              <hr />
            </div>

            <div class="row">
              <div class="col-xl-10">
                <p>Credit Number</p>
              </div>
              <div class="col-xl-2">
                <p class="float-end">
                  <b>{{ receipt.credit_number }}</b>
                </p>
              </div>
              <hr style="border: 2px solid black" />
            </div>
            <div class="row text-black">
              <div class="col-xl-12">
                <p class="float-start">
                  <b>Total</b>
                </p>
                <p class="float-end fw-bold">{{ kos.price }}</p>
              </div>
              <hr style="border: 2px solid black" />
            </div>
            <!-- <router-link
              :to="{ name: 'dashboard' }"
              class="text-center"
              style="margin-top: 90px"
            > -->
            <button class="btn btn-success">Dashboard</button>
            <!-- </router-link> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    // data binding
    const receipt = reactive([]);

    let kos = reactive({
      status: "Pending",
    });

    // router
    const route = useRoute(),
      router = useRouter();

    // get data
    onMounted(() => {
      axios
        .get(`http://localhost:5000/checkout/${route.params.id}`)
        .then((result) => {
          receipt.name = result.data.name;
          receipt.phone = result.data.phone;
          receipt.id_card = result.data.id_card;
          receipt.payment = result.data.payment;
          receipt.down_payment = result.data.down_payment;
          receipt.credit_number = result.data.credit_number;
          receipt.price = result.data.price;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    // get kos price
    onMounted(() => {
      axios
        .get(`http://localhost:5000/kos/${route.params.id}`)
        .then((result) => {
          kos.price = result.data.price;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    // update status
    function update() {
      axios
        .patch(`http://localhost:5000/kos/${route.params.id}`, kos)
        .then(() => {
          router.push({ name: "dashboard" });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      receipt,
      kos,
      update,
    };
  },
};
</script>
