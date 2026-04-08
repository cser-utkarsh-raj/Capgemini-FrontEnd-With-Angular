async function getData() {
    let data = await fetch('https://api.escuelajs.co/api/v1/products');

    let d = data.json();
    console.log(d);
    
}

getData();