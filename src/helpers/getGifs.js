export const getGif = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KhF13YR6MPNNW7NRIwp4MqS61lQbgitd&q=${category}&limit=20`;
    const res = await fetch(url);

    const {data} = await res.json();

    const gifs = data.map(gif =>({
        id: gif.id,
        title: gif.title,
        img : gif.images.downsized_medium.url
    }))
    return gifs;
}