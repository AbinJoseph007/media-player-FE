import axios from "axios"

export const CommonAPI = async (httpmethods, url, request)=>{
    let config = {
        method: httpmethods,
        url: url,
        data: request,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(config).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
}