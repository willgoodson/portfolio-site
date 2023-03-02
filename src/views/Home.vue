<script setup>
    import DarkMode from '../components/DarkMode.vue';
</script>

<template>
    <div class="flex h-screen flex-col">
        <div class="inline-flex w-screen flex-row h-screen">
            <div class="inline-flex items-center justify-center w-1/2">
                <div class="">
                    <h1 class="text-left pb-2 text-6xl font-poppins font-light text-green-400">Hi. I'm William</h1>
                    <p class="text-left text-2xl font-poppins font-light">
                        I'm a Cyber Security focused <br> Computer Science Student at <br> Tennessee Tech University.
                    </p>
                </div>
                
            </div>
            <div class="inline-flex items-center justify-center w-1/2">
                <div class="font-poppins text-center">
                    <h1 class="text-4xl pb-4">Find out more</h1>
                    <ul class="flex text-lg">
                        <router-link to="/about">
                            <li class="px-5 py-2 mx-2 rounded-lg w-32 shadow-md bg-green-400 hover:bg-green-500">About</li>
                        </router-link>
                        <router-link to="/projects">
                            <li class="px-5 py-2 mx-2 rounded-lg w-32 shadow-md bg-green-400 hover:bg-green-500">Projects</li>
                        </router-link>
                        <router-link to="/blogs">
                            <li class="px-5 py-2 mx-2 rounded-lg w-32 shadow-md bg-green-400 hover:bg-green-500">Blogs</li>
                        </router-link>
                    </ul>
                    <p class="pt-4">
                        <router-link class="dark:hover:text-slate-300 hover:text-slate-400" to="/resume">
                            Click here to view my resume.
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="flex h-12 w-full justify-center">
            <DarkMode />
        </div>
    </div>
    
</template>
<style>
li{
    color: rgb(57,61,71);
}
</style>