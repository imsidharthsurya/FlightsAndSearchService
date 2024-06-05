class CrudServices{
    constructor(repository){
        this.repository=repository
    }

    async create(data){
        try{
            const result=await this.repository.create(data);
            return result;
        }catch(err){
            console.log("error happened at crud service layer");
            throw err;
        }
    }

    async destory(modelId){
        try{
            const res=await this.repository.destory(modelId);
            return res;
        }catch(err){
            console.log("error happened at crud service layer");
            throw err;
        }
    }
    
    async get(modelId){
        try{
            const result=await this.repository.get(modelId);
        }catch(err){
            console.log("error happened at crud service layer");
            throw err;
        }
    }

    async getAll(){
        try{
            const results=await this.repository.getAll();
            return results;
        }catch(err){
            console.log("error happened at crud service layer");
            throw err;
        }
    }

    async update(modelId,data){
        try{
            const result=await this.repository.update(modelId,data);
            return result;
        }catch(err){
            console.log("error happened at crud service layer");
            throw err;
        }
    }
}

module.exports=CrudServices;