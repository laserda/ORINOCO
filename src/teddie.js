 async function teddies() {
  const url = "http://localhost:3000/api/teddies";

  const response = await fetch(url);
  return response.json();
}

async function teddie(id){
  const url = "http://localhost:3000/api/teddies/" + id;

  const response = await fetch(url);
  return response.json();
}
  
export {teddies,teddie};