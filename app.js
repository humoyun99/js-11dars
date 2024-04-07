   
    const API='https://restcountries.com/v3.1/all'
    // const getDate=(resource)=>{
    //     return new Promise((resolve,reject)=>{
    //         const request=new XMLHttpRequest()

    //         request.addEventListener('readystatechange',()=>{
    //             if(request.readyState==4&&request.status==200){
    //                 const date=JSON.parse(request.responseText)
    //                 resolve(date)
    //             }else if(request.readyState==4){
    //                 reject('error')
    //             }
    //         })


    //         request.open("GET",resource)
    //         request.send()
    //     })
    // }

    // getDate(API)
    // .then((date)=>{
    //     console.log(date)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

    fetch(API)
    .then((date)=>{
        return date.json()
    })
    .then((dateJson)=>{
        console.log(dateJson)
    })
    .catch((err)=>{
        console.log(err)
    })