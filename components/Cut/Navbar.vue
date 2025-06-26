<script setup>
//////parameters//////
// const laosImg = '@/assets/images/laos.png'
// const chinaImg = '@/assets/images/china.png'
// const englishImg = '@/assets/images/engish.png'
const languageStore = useLanguageStore();
const selectLang = ref("");
const dropdownMenu = ref(null);
const desktopDropdownOpen = ref(null);
///////function////////
onMounted(() => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    selectLang.value = lang;
    languageStore.changeLanguage(lang);
  } else {
    selectLang.value = languageStore.selectedLang;
  }
});
const changeLanguage = (lang) => {
  selectLang.value = lang;
  languageStore.changeLanguage(lang);
  localStorage.setItem("lang", lang);
  closeDropdownMenu();
};
const closeDropdownMenu = () => {
  if (dropdownMenu.value) {
    dropdownMenu.value.blur();
  }
  if (desktopDropdownOpen.value) {
    desktopDropdownOpen.value.blur();
  }
};
</script>

<template>
  <div class="navbar shadow-xl bg-blue-800">
    <!-- Mobile menu button -->
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
        <ul
          tabindex="0"
          ref="dropdownMenu"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-70"
        >
          <!-- Search input for mobile -->
          <div class="mb-2 w-full">
            <div class="form-control w-full">
              <input
                id="search_input"
                type="text"
                placeholder="Search..."
                class="input input-bordered w-full"
              />
            </div>
          </div>
          <!-- Language options -->
          <!-- <div class="fontLao w-full ml-2"><img src="https://via.placeholder.com/24" class="w-6 h-6" alt="icon" /></div> -->
          <li v-for="lang in languageStore.languages">
            <a
              @click="changeLanguage(lang.short)"
              :class="
                selectLang == lang.short
                  ? ['font-bold', 'text-blue-700', lang.font]
                  : lang.font
              "
              ><img class="w-4 h-3" :src="lang.img" alt="" /> :
              {{ lang.name }}</a
            >
          </li>
          <!-- <li>
                <a
                @click="changeLanguage('EN')"
                :class="
                    selectLang == 'EN'
                    ? 'font-bold fontEng text-blue-700'
                    : 'fontEng'
                "
                >EN - English</a
                >
            </li>
            <li>
                <a
                @click="changeLanguage('ZH')"
                :class="
                    selectLang == 'ZH'
                    ? 'font-bold fontEng text-blue-700'
                    : 'fontEng'
                "
                >ZH - Chinese</a
                >
            </li> -->
        </ul>
      </div>
      <a class="btn btn-ghost text-2xl font-bold">LaosLand.la</a>
    </div>

    <!-- Center logo - hidden on mobile, visible on tablet and up -->
    <div class="navbar-center hidden sm:flex">
      <div>
        <img id="logon-laoland" src="@/assets/images/navbar_img.jpeg" alt="" />
      </div>
    </div>

    <!-- Right side controls -->
    <div class="navbar-end">
      <!-- Search input - hidden on mobile, visible on tablet and up -->
      <!-- <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-full md:w-auto hidden md:block"
        /> -->

      <div class="w-full md:w-auto hidden md:block mr-2">
        <label class="input w-full flex items-center gap-2">
          <svg
            class="h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            class="grow bg-transparent outline-none"
            placeholder="Search"
          />
        </label>
      </div>

      <!-- Language dropdown - hidden on mobile (shown in mobile menu) -->
      <div class="dropdown dropdown-end hidden md:block">
        <div tabindex="0" role="button">
          <div class="w-8 rounded-full fontLao px-1">
            <img :src="languageStore.selectedLangImg" alt="" />
          </div>
        </div>
        <ul
          ref="desktopDropdownOpen"
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
        >
          <li v-for="lang in languageStore.languages">
            <a
              @click="changeLanguage(lang.short)"
              :class="
                selectLang == lang.short
                  ? ['font-bold', 'text-blue-700', lang.font]
                  : lang.font
              "
              ><img class="w-5 h-4" :src="lang.img" alt="" /> {{ lang.name }}</a
            >
          </li>
          <!-- <li>
                <a @click="changeLanguage('EN')" class="fontEng">EN - English</a>
            </li>
            <li>
                <a @click="changeLanguage('ZH')" class="fontEng">ZH - Chinese</a>
            </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
