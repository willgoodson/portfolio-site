<template>
    <div class="inline-flex w-screen">
        <div class="inline-flex items-center justify-center w-1/2 h-screen">
            <div class="">
                <h1 class="text-left pb-2 text-6xl font-poppins font-light text-green-400">Hi. I'm William</h1>
                <p class="text-left text-2xl font-poppins font-light text-slate-600">
                    Cyber Security focused <br> Computer Science Student at <br> Tennessee Tech University.
                </p>
            </div>
            
        </div>
        <div class="inline-flex items-center justify-center w-1/2 h-screen">
            <div>
                <h1 class="text-4xl pb-4 font-poppins text-center text-slate-600">Find out more</h1>
                <ul class="flex">
                    <router-link to="/about"><li class="font-poppins px-5 py-2 mx-2 rounded-lg w-32 text-lg text-center shadow-md bg-green-400 hover:bg-green-500 text-slate-600 hover:text-slate-100">About</li></router-link>
                    <router-link to="/projects"><li class="font-poppins px-5 py-2 mx-2 rounded-lg w-32 text-lg text-center shadow-md bg-green-400 hover:bg-green-500 text-slate-600 hover:text-slate-100">Projects</li></router-link>
                    <router-link to="/blogs"><li class="font-poppins px-5 py-2 mx-2 rounded-lg w-32 text-lg text-center shadow-md bg-green-400 hover:bg-green-500 text-slate-600 hover:text-slate-100">Blogs</li></router-link>
                </ul>
                <p class="font-poppins pt-4 text-center text-slate-400 hover:text-slate-500">Click here to view my resume.</p>
            </div>

        </div>
    </div>
</template>