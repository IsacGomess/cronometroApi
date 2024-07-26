export const Api =  async ()  => {
    try{
        const response = await fetch('http://numbersapi.com/random/year?json')
        const data =  await response.json()
        return data.text;
    } catch(error) {
        console.error("Error to search new phrase"+error);
        return 'Error to search new phrase';
    }
}
