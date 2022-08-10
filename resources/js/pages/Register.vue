<template>
  <div class="container-fluid">
    <div class="card m-5">
      <div class="card-body">
        <h2 class="text-center mb-4">R&D Project</h2>
        <form action="">
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
                id="lastName"
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
          <MDBBtn color="primary" type="submit" v-on:click="submit" block class="mb-4"> Sign up </MDBBtn>

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
import { reactive } from "vue";

let form = reactive({
  nam
})

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
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
    const firstame = ref("");
    const lastname = ref("");
    const email = ref("");
    const password = ref("");
    // const form3SubscribeCheck = ref(true);

    return {
      firstname,
      lastame,
      email,
      password,
      // form3SubscribeCheck,
    };
  },
};
</script>

<style>
</style>