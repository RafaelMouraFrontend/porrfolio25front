<template>
  <div>
    <div class="h-[3px] bg-[#FFD369]"></div>
    <ul class="flex gap-4 max-w-[800px] mx-auto justify-end pt-2 pb-8">
      <li><a href="#blog">//Blog</a></li>
      <li><a href="#">//Curriculo</a></li>
    </ul>
  </div>
  <div class="flex max-w-[800px] mx-auto gap-8">
    <div class="min-w-[270px]">
      <div class="sticky top-0">
        <h1 class="font-roboto font-bold text-2xl">Rafael Moura</h1>
        <p>//Senior Software engennier</p>

        <ul class="flex mt-4 gap-4">
          <li>
            <IconsInstagram/>
          </li>
          <li>
            <IconsLinkedin/>
          </li>
          <li>
            <IconsGithub/>
          </li>
        </ul>

        <ul class="flex gap-5 flex-wrap mt-8">
          <li class="flex items-center gap-2">
            <IconsLocation/>
            <p class="leading-[16px]"><span class="font-roboto font-bold">location</span> <br>Rio de Janeiro</p>
          </li>
          <li class="flex items-center gap-2">
            <IconsMovie/>
            <p class="leading-[16px]"><span class="font-roboto font-bold">movie</span> <br>Fight Cluc</p>
          </li>
          <li class="flex items-center gap-2">
            <IconsFood/>
            <p class="leading-[16px]"><span class="font-roboto font-bold">food</span> <br>Hambuerguer</p>
          </li>
          <li class="flex items-center gap-2">
            <IconsMusic/>
            <p class="leading-[16px]"><span class="font-roboto font-bold">Music</span> <br>90's Rock</p>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <slot/>
    </div>
  </div>
  <ContentFooter class="max-w-[800px] mx-auto border-t border-[#FFD369] py-4"/>
</template>
<style>
  html, body {
    background-color: #393E46;
    color: #fff;
    margin: 0;
    padding: 0;
  }
</style>
