export default defineEventHandler (async(event) => {
    //handle query params
    // const { name } = useQuery(event)
    //
    //
    // //handle post data

    // const { age } = await useBody(event)

    //api call with private key

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_8MgrG4EhIWOh9BNSrwdWGdEYBVdBNTluwMcy9N7r&currencies=EUR%2CUSD%2CCAD')

    return data
})
