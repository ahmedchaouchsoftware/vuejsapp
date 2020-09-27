<template>
    <div>
        <h3>{{sectionTitle}}</h3>
        <ul>
            <li v-for="user in data" v-bind:key="user">
                <user-summary v-bind:usr="user" v-on:accept="registerUser(user)"></user-summary>
            </li>
        </ul>
        <div>
            Utilisateurs ayant accepté l'invitation : 
            <pre>{{usersWhoWillCome}}</pre>
        </div>
    </div>
</template>

<script>
import UserSummary from './UserSummary';
export default {
  name: 'user-list',
  props: ['data', 'sectionTitle', 'usersComing'],
  components: {
    'user-summary': UserSummary  
    },
    data: function() {
    return {
      usersWhoWillCome: []
    }
  },
  methods: {
    registerUser (user) {
      user.hasAccepted = true;
      this.usersWhoWillCome.push(user);
    }
  }
}
</script>

<style></style>