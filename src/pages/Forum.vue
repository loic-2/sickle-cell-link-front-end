<template>
  <div class="container-fluid">
    <div class="row forum-top-bar py-2">
      <div class="col-3 align-self-center">
        <md-avatar class="">
          <img :src="require('@/assets/img/faces/marc.jpg')" alt="Avatar" />
        </md-avatar>
        <i
          class="fa-solid fa-circle fa-2xs"
          style="color: #06ea2c; position: relative; left: -6px; bottom: -13px"
        ></i>
      </div>
      <div class="col-7 text-center align-self-center">
        <i class="fa-solid fa-circle" style="color: #06ea2c"></i
        >&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: smaller">5 online</span
        >&nbsp;&nbsp;&nbsp;
        <md-avatar class="md-small">
          <img :src="require('@/assets/img/faces/marc.jpg')" alt="Avatar" />
        </md-avatar>
        <md-avatar class="md-small" style="margin-left: -10px">
          <img
            :src="require('@/assets/img/faces/marc.jpg')"
            alt="Avatar"
          /> </md-avatar
        >&nbsp;
        <i class="fa-solid fa-ellipsis" style="color: #000000"></i>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="messages-box scrollable mt-3 mb-3" data-bs-spy="scroll">
      <div class="row display-message-inbox mb-4">
        <div class="col">
          <div class="row">
            <div class="col-1 col-md-1 text-lg-center p-lg-0">
              <md-avatar class="md-small">
                <img
                  :src="require('@/assets/img/faces/marc.jpg')"
                  alt="Avatar"
                />
              </md-avatar>
            </div>
            <div class="col-9 col-md-9 p-md-0" style="margin: 0">
              <div class="message-display">
                <p style="font-size: small; text-align: start">
                  <strong>Name</strong>
                </p>
                <p style="text-align: justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  nihil animi laboriosam error aperiam sunt, accusantium totam!
                  Quam commodi voluptas quod harum, impedit.
                </p>
                <p style="font-size: x-small; text-align: end">
                  2023-06-20 10:23
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row display-message-inbox mb-4">
        <div class="col">
          <div class="row">
            <div class="col-9 offset-md-2 col-md-9">
              <div
                class="message-display"
                style="background-color: rgb(240, 239, 239) !important"
              >
                <p style="font-size: small; text-align: end">
                  <strong>Name</strong>
                </p>
                <p style="text-align: justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  nihil animi laboriosam error aperiam sunt, accusantium totam!
                  Quam commodi voluptas quod harum, impedit.
                </p>
                <p style="font-size: x-small; text-align: end">
                  2023-06-20 10:23
                </p>
              </div>
            </div>
            <div class="col-1 text-left p-0" style="margin: 0">
              <md-avatar class="md-small">
                <img
                  :src="require('@/assets/img/faces/marc.jpg')"
                  alt="Avatar"
                />
              </md-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row forum-message-text-bar p-0 m-0">
      <div class="col-8 col-sm-9 col-md-10 text-center p-0 px-2 mt-3">
        <input
          type="text"
          class="w-100 mb-3 pl-2"
          placeholder="Write your message"
          aria-label="Message"
          aria-describedby="basic-addon2"
          style="border: none; border-radius: 10px; height: 40px"
        />
      </div>
      <div class="col-4 col-sm-3 col-md-2 text-center p-0 px-2 mt-3">
        <button
          class="btn btn-danger"
          style="height: 40px; border-radius: 10px"
        >
          Send <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
div.container-fluid {
  overflow: hidden;
  height: 83vh;
}
div.forum-message-text-bar {
  /*//width: 80%;
  //bottom: 10px;*/
  background-color: rgb(240, 239, 239);
  border-radius: 10px;
  position: sticky;
  bottom: 0px;
}
div.forum-top-bar {
  background-color: white;
  border-radius: 10px;
}
div.message-display {
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  padding: 7px;
  display: inline-block;
}
div p {
  margin: 0;
  margin-bottom: 2px;
}
div.messages-box {
  position: relative;
  height: 59vh;
  bottom: 10px;
  top: 10px;
  overflow: auto;
  overflow-x: hidden;
}
div.scrollable::-webkit-scrollbar {
  width: 6px; /* Largeur de la barre de défilement */
}

div.scrollable::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Couleur de fond de la piste */
}

div.scrollable::-webkit-scrollbar-thumb {
  background-color: #888; /* Couleur de la poignée de la barre de défilement */
  border-radius: 4px; /* Rayon de courbure de la poignée */
}

div.scrollable::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Couleur de la poignée de la barre de défilement au survol */
}
</style>
