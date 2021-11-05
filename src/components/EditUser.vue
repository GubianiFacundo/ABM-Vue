<template lang="html">
  <section class="EditUser">
    <div class="container">
      <div class="card">
        <div class="card-header">
          Edit User
        </div>
        <div class="card-body">
          <form @submit.prevent="editUser">
            <div class="form-group">
              <label for="first_name">First Name:</label>
              <input type="text" class="form-control" name="first_name" id="first_name"
              v-model="user.first_name" aria-describedby="helpId" placeholder="First Name">
              <small id="helpId" class="form-text text-muted">Write down the first name</small>
            </div>

            <div class="form-group">
              <label for="last_name">Last Name:</label>
              <input type="text" class="form-control" name="last_name" id="last_name"
              v-model="user.last_name" aria-describedby="helpId" placeholder="Last Name">
              <small id="helpId" class="form-text text-muted">Write down the last name</small>
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" name="email" id="email"
              v-model="user.email" aria-describedby="helpId" placeholder="Email">
              <small id="helpId" class="form-text text-muted">Write down the email</small>
            </div>

            <div class="btn-group" role="group" aria-label="">
              <button type="submit" class="btn btn-success">Edit</button>
              <button type="button" class="btn btn-danger" @click="goBack">Cancel</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'EditUser',
    props: [],
    data () {
      return {
        user: {},
      }
    },
    created() {
      this.user = this.$route.params.user;
    },
    mounted () {

    },
    computed: {

    },
    methods: {
      editUser() {
        var arrUsers = this.$store.getters.userDataSource.data

        // Wrong delegation of responsability... method in store
        var foundIndex = arrUsers.findIndex(x => x.id == this.user.id);
        this.$store.getters.userDataSource.data[foundIndex] = this.user;

        this.$router.push({ name: 'ListUsers' })
      },
      goBack() {
        this.$router.push({ name: 'ListUsers' })
      }
    },
}


</script>

<style>
  /* .edit-user {

  } */
</style>
