<script lang="ts" setup>
import {
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/vue'
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Home</h1>

      <div class="ion-padding container">
      </div>
      <ion-button router-link="/about">About</ion-button>
    </ion-content>
  </ion-page>
</template>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
