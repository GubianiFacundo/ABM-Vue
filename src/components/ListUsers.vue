<template lang="html">
  <section class="ListUsers">
    <div class="container">
      <div class="card">
        <div class="card-header">
          Users
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avatar</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users.data" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.first_name}}</td>
                <td>{{user.last_name}}</td>
                <td><img v-bind:src="user.avatar"></td>
                <td>{{user.email}}</td>
                <td>
                  <div class="btn-group" role="group" aria-label="">
                    <button type="button" @click="editUser(user)" class="btn btn-primary">Edit</button>
                    <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
            <nav class="pagination" role="navegation" aria-label="pagination">
              <div class="btn-group" role="group" aria-label="">
                <button type="button" class="btn btn-primary" @click="changePage(page -1)">Previous</button>
                &nbsp;<a class="btn btn-default">{{page}}</a>&nbsp;
                <button type="button" class="btn btn-success" @click="changePage(page +1)">Next</button>
              </div>
            </nav>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  export default {
    name: 'ListUsers',
    props: [],
    data() {
      return {
        users: [],
        totalPages: 0,
        page: 0,
      }
    },
    created() {
      this.fetchUsers();
    },
    mounted() {
      this.users = this.$store.getters.userDataSource
    },
    computed: {

    },
    methods: {
      fetchUsers() {
        const params = {
          page: this.page,
        }

        fetch('https://reqres.in/api/users?page='+ params.page)
        .then(response => response.json())
        .then(responseData => {
          this.page = responseData.page;
          this.totalPages = responseData.total_pages;

          if(this.$store.getters.userDataSource.length == 0) {
            if(Object.keys(responseData.data).length)
              this.users = responseData

            this.$store.commit("setUserDataSource", this.users);
          }

          if(this.$store.getters.userDataSource.page != this.page) {
            this.users = responseData
            this.$store.commit("setUserDataSource", this.users);
          }
        })
        .catch(err => {
          console.log(err)
        })
      },
      deleteUser(id) {
        this.users.data = this.users.data.filter(obj => obj.id != id)
      },
      editUser(myUser) {
        var id = myUser.id;
        var user = myUser;

        this.$router.push({ name: 'EditUser', params: {id, user} });
      },
      changePage(page) {
        this.page = (page <= 0 || page > this.totalPages) ? this.page : page;

        this.fetchUsers();
      }
    },
}


</script>

<style>
  /* .list-users {

  } */
</style>
