<template>
  <div class="p-8">
    <h2 class="text-accent text-center pb-8">Projects</h2>
    <ul id="categories" class="clr">
      <li>
        <div class="bg-hendercare flex justify-center items-center absolute">
          <div
            class="background-image"
            style="background-image: url('./hendercareBackground.jpg')"
          ></div>
          <div class="scrim z-10"></div>
          <img class="logo z-20" src="~/static/hendercareLogo.svg" />
        </div>
      </li>
      <li>
        <div class="bg-black flex justify-center items-center absolute">
          <div
            class="background-image xcon"
            style="background-image: url('./xconBackground.jpg')"
          ></div>
          <div class="scrim z-10"></div>
          <img class="logo z-20" src="~/static/xconLogo.png" />
        </div>
      </li>

      <li class="pusher"></li>
      <li>
        <div class="bg-black flex justify-center items-center absolute">
          <div
            class="background-image"
            style="background-image: url('./sitedBackground.png')"
          ></div>
          <div class="scrim z-10"></div>
          <img class="logo w-16 z-20" src="~/static/sitedLogo.png" />
        </div>
      </li>

      <li>
        <div class="bg-black flex justify-center items-center absolute">
          <div
            class="background-image"
            style="background-image: url('https://img.samuseum.sa.gov.au/w-755.h-550.f-jpg/qk39g4c5h')"
          ></div>
          <div class="scrim z-10"></div>
          <sam-logo class="logo z-20" width="20" height="20"></sam-logo>
        </div>
      </li>

      <li>
        <div class="bg-black flex justify-center items-center absolute">
          <div
            class="background-image"
            style="background-image: url('./beaumontsBackground.jpg')"
          ></div>
          <div class="scrim z-10"></div>
          <img class="logo z-20 h-20" src="~/static/beaumontLogo.svg" />
        </div>
      </li>

      <!-- <li>
        <div class="bg-black flex justify-center items-center">
          <img>
            <div></div>
          </img>
          <h1>SA Museum</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </div>
      </li> -->
      <!-- <li>
        <div class="bg-black flex justify-center items-center">
          <img>
            <div></div>
          </img>
          <h1>SA Museum</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </div>
      </li>
      <li>
        <div class="bg-black flex justify-center items-center">
          <img>
            <div></div>
          </img>
          <h1>SA Museum</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </div>
      </li>
      <li class="pusher"></li>
      <li class="pusher"></li>

      <li>
        <div class="bg-black flex justify-center items-center">
          <img>
            <div></div>
          </img>
          <h1>SA Museum</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </div>
      </li>
      <li>
        <div class="bg-black flex justify-center items-center">
          <img>
            <div></div>
          </img>
          <h1>SA Museum</h1>
          <p>Some sample text about the article this hexagon leads to</p>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import SamLogo from "~/components/SamLogo";

export default {
  components: {
    SamLogo
  }
};
</script>

<style scoped>
#categories {
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
}
.clr:after {
  content: "";
  display: block;
  clear: both;
}
#categories li {
  position: relative;
  list-style-type: none;
  width: 27.85714285714286%; /* = (100-2.5) / 3.5 */
  padding-bottom: 32.16760145166612%; /* =  width /0.866 */
  float: left;
  overflow: hidden;
  visibility: hidden;

  -webkit-transform: rotate(-60deg) skewY(30deg);
  -ms-transform: rotate(-60deg) skewY(30deg);
  transform: rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(3n + 2) {
  margin: 0 1%;
}
#categories li:nth-child(6n + 4) {
  margin-left: 0.5%;
}
#categories li:nth-child(6n + 4),
#categories li:nth-child(6n + 5),
#categories li:nth-child(6n + 6) {
  margin-top: -6.9285714285%;
  margin-bottom: -6.9285714285%;

  -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
  transform: translateX(50%) rotate(-60deg) skewY(30deg);
}
#categories li:nth-child(6n + 4):last-child,
#categories li:nth-child(6n + 5):last-child,
#categories li:nth-child(6n + 6):last-child {
  margin-bottom: 0%;
}
#categories li * {
  position: absolute;
  visibility: visible;
}
#categories li > div {
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;

  -webkit-transform: skewY(-30deg) rotate(60deg);
  -ms-transform: skewY(-30deg) rotate(60deg);
  transform: skewY(-30deg) rotate(60deg);

  -webkit-backface-visibility: hidden;
}

#categories li div div {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}

.background-image {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* .background-image.xcon {
    background-size: 350px; 
} */

.scrim {
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  width: 100%;
}

.logo {
  width: 40%;
  transition: opacity 0.5s;
  opacity: 0;
}

li div:hover .logo {
  opacity: 1;
}

#categories div h1,
#categories div p {
  width: 90%;
  padding: 0 5%;
  /* background-color: #008080;
  background-color: rgba(0, 128, 128, 0.8); */
  font-family: "Raleway", sans-serif;

  -webkit-transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;
  -ms-transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;
  transition: top 0.2s ease-out, bottom 0.2s ease-out,
    0.2s padding 0.2s ease-out;
}
#categories li h1 {
  bottom: 110%;
  font-style: italic;
  font-weight: normal;
  font-size: 1.5em;
  padding-top: 100%;
  padding-bottom: 100%;
}
#categories li h1:after {
  content: "";
  display: block;
  position: absolute;
  bottom: -1px;
  left: 45%;
  width: 10%;
  text-align: center;
  z-index: 1;
  border-bottom: 2px solid #fff;
}
#categories li p {
  padding-top: 50%;
  top: 110%;
  padding-bottom: 50%;
}

/* HOVER EFFECT  */
#categories li div:hover h1 {
  bottom: 50%;
  padding-bottom: 10%;
}

#categories li div:hover p {
  top: 50%;
  padding-top: 10%;
}
</style>
