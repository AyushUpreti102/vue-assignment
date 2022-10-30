<template>
    <v-app-bar elevation="2" class="teal lighten-3">
        <v-app-bar-title>
            <h1 class="display-1 brown--text darken-4">Animal Kingdom <v-icon x-large>mdi-elephant</v-icon>
            </h1>
        </v-app-bar-title>
        <v-spacer></v-spacer>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="white darken-4" v-bind="attrs" v-on="on">Add your own Card <v-icon right>mdi-cards</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="teal lighten-3 brown--text lighten-2">
          Add your Animal Card<v-icon large>mdi-elephant</v-icon>
        </v-card-title>
        <v-card-text>
          <v-form ref="submitForm">
            <v-text-field label="Name of Animal" v-model="animalName"></v-text-field>
            <v-file-input label="Add image of Animal" outlined dense @change="previewImage" ></v-file-input>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="addCard"
          >
            Add card
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    </v-app-bar>
</template>
<script>

export default {
    name: 'NavBar',
    data(){
        return{
            dialog: false,
            animalName: '',
            imagePreviewURL: null
        }
    },
    methods: {
        addCard(){
        // this.$store.commit('addCard', this.animalName);
        this.$store.dispatch('addCard', this.animalName)
        this.dialog = false;
        this.animalName = '';
        this.$refs.submitForm.reset()
      },
      previewImage(event) {
        this.$store.dispatch('previewImage', event)
        },
    }
}
</script>