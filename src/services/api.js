const base_url = 'https://fakestoreapi.com/';
export const PostData = async (uri,payload) => {
    const response = await fetch(`${base_url}${uri}`,{
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(payload)
        })
    return await response.json()       
}

export const getData = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json()
}

