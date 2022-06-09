let getData=async(url)=>{
    //fetch the data and return the data
     
    let res=await fetch(url);
    let data=await res.json();
   return data;
}

let append=async(data,container)=>{

    data.forEach((el)=>{
        let div=document.createElement("div");
        let img=document.createElement("img");
        let p=document.createElement("p");
        img.src=el.image;
        p.innerText=el.title;
        div.append(img,p);
        container.append(div);

    });
     
    
};



export {getData,append};