import apiClient from "./apiClient";

class HttpService {
    endpoint:string = '';
    constructor(endpoint:string){
        this.endpoint =  endpoint
    }
    getAll<T>() {
        const controller=  new AbortController()
        const request = apiClient.get<T[]>(this.endpoint,{signal:controller.signal})
        const cancel = () => controller.abort()
        return {request,cancel}
    }
    update<T extends {id:number}>(entity:T) {
        return apiClient.patch(`${this.endpoint}/${entity.id}`,entity)
    }
    delete(id:number) {
        return apiClient.delete(this.endpoint+'/'+id)
    }
}
const create = (endpoint:string) => new HttpService(endpoint)
export default create