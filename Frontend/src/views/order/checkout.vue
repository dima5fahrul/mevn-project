<template>
  <div class="container my-5">
    <div class="row g-5">
      <div class="offset-2 col-md-7 col-lg-8 card card-group">
        <form @submit.prevent="submit()">
          <h4 class="my-3" v-if="kos.type == 1">Sewa Kos</h4>
          <h4 class="my-3" v-if="kos.type == 2">Sewa Rumah</h4>
          <h4 class="my-3" v-if="kos.type == 3">Sewa Apartemen</h4>
          <div class="row g-3">
            <div class="col-md-6">
              <label for="firstName" class="form-label">Nama Pemilik </label>
              <div
                class="card card-group py-2 px-3 text-muted"
                style="background-color: lightgray"
              >
                {{ kos.owner }}
              </div>
            </div>

            <div class="col-md-6">
              <label for="firstName" class="form-label">Nomor Telepon</label>
              <div
                class="card card-group py-2 px-3 text-muted"
                style="background-color: lightgray"
              >
                {{ kos.phone }}
              </div>
            </div>

            <div class="col-12">
              <label for="firstName" class="form-label">Alamat</label>
              <div
                class="card card-group py-2 px-3 text-muted"
                style="background-color: lightgray"
              >
                {{ kos.address }}
              </div>
            </div>
          </div>

          <hr class="my-4" />
          <div class="row g-3">
            <div class="col-12">
              <h4 class="my-3">Data Diri</h4>
              <label for="firstName" class="form-label">Nama Lengkap</label>
              <input
                v-model="checkout.name"
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Masukkan Nama Lengkap"
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-md-6">
              <label for="firstName" class="form-label">Nomor Telepon</label>
              <input
                v-model="checkout.phone"
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Masukkan Nomor Telepon"
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-md-6">
              <label for="firstName" class="form-label"
                >Nomor Kartu Tanda Penduduk</label
              >
              <input
                v-model="checkout.id_card"
                type="text"
                class="form-control"
                id="firstName"
                placeholder="Masukkan Nomor Telepon"
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
          </div>

          <hr class="my-4" />

          <h4 class="mb-3">Pembayaran</h4>

          <div class="row">
            <label for="" class="form-label">Type</label>
            <div class="my-3 col-md-3">
              <select
                id=""
                name="type"
                class="form-select"
                v-model="checkout.payment"
                required
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>

            <div class="mb-3 mt-4 col-md-6">
              <div class="form-check">
                <input
                  v-model="checkout.down_payment"
                  id="credit"
                  name="paymentMethod"
                  type="checkbox"
                  class="form-check-input"
                  value="PayPal"
                  checked=""
                />
                <label class="form-check-label" for="credit"
                  >Bayar Setengah 50%</label
                >
              </div>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Nama Kartu Kredit</label>
              <input
                v-model="checkout.credit_name"
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-muted"
                >Nama kartu kredit yang tertampil pada kartu
              </small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Nomor Rekening</label>
              <input
                v-model="checkout.credit_number"
                type="text"
                class="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>

          <div class="my-3">
            <div class="form-check">
              <input
                id="verification"
                name="paymentMethod"
                type="checkbox"
                class="form-check-input"
                checked=""
              />
              <small class="form-check-label" for="credit" required=""
                >Setelah melakukan pengisian anda setuju dengan peraturan dan
                ketentuan kami</small
              >
            </div>
          </div>

          <hr class="my-4" />

          <!-- <router-link
            :to="{ name: 'receipt.checkout', params: { id: receipt._id } }"
            type="submit"
            class="w-100 mb-4 btn btn-primary btn-lg"
          >
            Continue to checkout
          </router-link> -->

          <button class="w-100 mb-4 btn btn-primary btn-lg" type="submit">
            Pesan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    // router
    const router = useRouter();
    const route = useRoute();

    // data binding
    let kos = reactive([]);
    const checkout = reactive({
      _id: `${route.params.id}`,
      name: "",
      phone: "",
      id_card: "",
      payment: "",
      down_payment: false,
      credit_name: "",
      credit_number: "",
      price: `${route.params.price}`,
    });

    // get data
    onMounted(() => {
      axios
        .get(`http://localhost:5000/kos/${route.params.id}`)
        .then((result) => {
          kos.type = result.data.type;
          kos.owner = result.data.owner;
          kos.address = result.data.address;
          kos.phone = result.data.phone;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    function submit() {
      axios
        .post("http://localhost:5000/checkout/", checkout)
        .then(() => {
          router.push({
            name: "receipt.checkout",
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      kos,
      router,
      checkout,
      submit,
    };
  },
};
</script>
