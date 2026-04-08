async function fetchData(){
    let data = await fetch ('https://api.escuelajs.co/api/v1/products')
    let d = await data.json();
    return d;
}

async function getData(){
    let result = await fetchData();
    console.log(result);
}

getData();   