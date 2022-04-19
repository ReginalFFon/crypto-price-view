<template>
  <form @submit.prevent="handleSubmit" class="flex justify-center flex-wrap mt-4 gap-2 ">
    <h3 class="text-center p-2 w-56 h-16 font-medium">Check out the cryptocurrency prices historic</h3>
    <select class="mt-2 p-5 w-30 h-16 bg-white rounded-lg shadow-xl" name="" v-model="cryptoCoin"> 
      <option value="bitcoin" selected>Bitcoin</option>
      <option value="dacxi">Dacxi</option>
      <option value="ethereum">Ethereum</option>
      <option value="terra-luna">Luna</option>
      <option value="cosmos">Atom</option>
    </select>
    <input
      class="mt-2 p-5 w-48 h-16 bg-white rounded-lg shadow-xl"
      type="datetime-local"
       v-model="myDate" @change="onChangeDate(myDate)"/>
    <button class="mt-2 p-5 w-28 h-16 font-semibold bg-white rounded-lg shadow-xl">Search</button>
   
    <div class="mt-2  w-48 h-16  bg-white rounded-lg shadow-xl "> <p class="text-center my-5 font-medium">
      {{ cryptoCoin.toUpperCase() }} {{currencyPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD',})}} </p> </div>

  </form>
</template>

<script>
export default {
  name: "historicGet",
  data() {
    
    return {
      prices: '',
      currencyPrice: [],
      cryptoCoin: "",
      myDate: '',
      newDate: ''
     

    };
  },
  methods: {
         onChangeDate(d) {
         let myDate = new Date(d).getTime() / 1000
         let newDate = new Date(d).getTime() / 1000 + 86400
         return {
           "0": this.myDate = myDate,
           "1" : this.newDate = newDate
           }  
        },  
    handleSubmit() {
      
      fetch(`https://api.coingecko.com/api/v3/coins/${this.cryptoCoin}/market_chart/range?vs_currency=usd&from=${this.myDate}&to=${this.newDate}`)
    
    
    .then((response) => response.json()) 
    .then((data) => this.currencyPrice = data.prices[0][1]) //data.prices.map(item => item[1][0])
    
    }
  },
};
</script>