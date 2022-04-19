

<template>
<body class="w-screen h-screen bg-gray-100">

    <header class="mb-5    flex items-center justify-center">
        <img class="hidden h-20 w-20 sm:block" src="./assets/img/exchange.svg" alt="">
        <h1 class=" text-7xl font-sans cursor-pointer">CryptoPrice</h1>
    </header>


    <section class="flex  items-center justify-center overflow-auto w-full ">
   <table class="w-80  shadow-xl " >
       <thead class="bg-gray-500 border-b-2 border-gray-200">
           <tr>
               <th class="p-3 text-sm font-semibold tracking-wide text-left" v-for="title in titles" :key="title">
                   {{title}}
               </th>
           </tr>
       </thead>
       <tbody>
           <tr class=" bg-white" v-for="coin in coins" :key='coin.id'>
              <td class=" flex items-center p-3 text-sm text-gray-700">
                  <img class="w-8 m-1" :src="coin.image" >
                  <span class="font-semibold">{{coin.name}}</span> 
                  <span class="m-1 uppercase text-slate-400">{{coin.symbol}}</span>
              </td>
              <td class="p-3 text-sm text-gray-700 font-semibold">
                  ${{coin.current_price}}
              </td>
           </tr>
       </tbody> 
   </table>
    </section>

    <historicGet/>
   
</body>
</template>

<script>
import HistoricGet from './components/historicGet.vue'


export default {
    name: 'App',
    data() {
        return {
            coins: [],
            titles: ["Coin", "Price"]
        }
    },
    components: {
        HistoricGet

    },
       async mounted() {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20dacxi%2C%20terra-luna%2C%20cosmos&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        const data = await res.json()
        this.coins = data
        }

}


</script>

