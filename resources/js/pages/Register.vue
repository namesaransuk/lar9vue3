<template>
  <div class="container-fluid">
    <div class="card m-5">
      <div class="card-body">
        <h2 class="text-center mb-4">R&D Project</h2>
        <form method="post" @submit.prevent="register">
          <MDBRow class="mb-4">
            <MDBCol>
              <MDBInput
                type="text"
                label="First name"
                id="firstName"
                v-model="firstname"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                label="Last name"
                id="lastname"
                v-model="lastname"
              />
            </MDBCol>
          </MDBRow>
          <!-- Email input -->
          <MDBInput
            type="email"
            label="Email address"
            id="email"
            v-model="email"
            wrapperClass="mb-4"
          />
          <!-- Password input -->
          <MDBInput
            type="password"
            label="Password"
            id="password"
            v-model="password"
            wrapperClass="mb-4"
          />
          <!-- Re-Password input -->
          <MDBInput
            type="password"
            label="Re-Password"
            id="repassword"
            v-model="repassword"
            wrapperClass="mb-4"
          />

          <!-- Checkbox -->
          <MDBCheckbox
            label="Remember me"
            id="form3SubscribeCheck"
            v-model="form3SubscribeCheck"
            wrapperClass="d-flex justify-content-center mb-4"
          />

          <!-- Submit button -->
          <MDBBtn color="primary" block class="mb-4"> Sign up </MDBBtn>

          <!-- Register buttons -->
          <div class="text-center">
            <p>or sign up with:</p>
            <MDBBtn color="primary" floating class="mx-1">
              <MDBIcon iconStyle="fab" icon="facebook-f" />>
            </MDBBtn>

            <MDBBtn color="primary" floating class="mx-1">
              <MDBIcon iconStyle="fab" icon="google" />
            </MDBBtn>

            <MDBBtn color="primary" floating class="mx-1">
              <MDBIcon iconStyle="fab" icon="twitter" />
            </MDBBtn>

            <MDBBtn color="primary" floating class="mx-1">
              <MDBIcon iconStyle="fab" icon="github" />
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";

let form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  repassword: "",
});

let errors = ref([]);

const router = useRouter();

const register = async () => {
  const response = await axios
    .post("/api/v1/auth/register", form)
    .then((res) => {
      // console.log(res);
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("firstname", res.data.data.firstname);

      router.push({ name: "Home" });
    })
    .catch((err) => {
      // console.log(err.response);
      errors.value = err.response.data.message;
    });
};

export default {
  components: {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
  },
  setup() {
    const firstname = ref("");
    const lastname = ref("");
    const email = ref("");
    const password = ref("");
    const repassword = ref("");
    // const form3SubscribeCheck = ref(true);

    return {
      firstname,
      lastname,
      email,
      password,
      repassword,
      // form3SubscribeCheck,
    };
  },
};
</script>

<style>
</style>