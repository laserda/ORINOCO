
let url = ()=>{
    return new URL(document.location);
}


let getHref = ()=>{
    return url().href.toString();
}

let getQuery = ()=>{
    return getHref().substr(getHref().indexOf('?')+1,getHref().length);
}

let getPathname = ()=>{
    return url().pathname.toString();
}

function getUrl(){
    return getPathname().substr(1,getPathname().indexOf('.')-1);
}

function getUrlQuery(id){
    const params = new URLSearchParams(getQuery());
    return params.get(id);
}

export { getUrl, getUrlQuery};