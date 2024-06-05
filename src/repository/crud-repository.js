class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try{
            const result=await this.model.create(data);
            return result;
        }catch(err){
            console.log("something wrong happened in crud repository");
            throw err;
        }
    }

    async destory(modelId){
        try{
            await this.model.destory({
                where:{
                    id:modelId
                }
            })
        }catch(err){
            console.log("something wrong happened in crud repository");
            throw err;
        }
    }

    async get(modelId){
        try{
            const result=await this.model.findByPk(modelId);
            return result;
        }catch(err){
            console.log("something wrong happened in crud repository");
            throw err;
        }
    }

    async getAll(){
        try{
            const result=this.model.findAll();
            return result;
        }catch(err){
            console.log("something wrong happened in crud repository");
            throw err;
        }
    }

    async update(modelId,data){
        try{
            const result=await this.model.update(data,{
                where:{
                    id:modelId
                }
            })
            return result;
        }catch(err){
            console.log("something wrong happened in crud repository");
            throw err;
        }
    }
}

module.exports=CrudRepository;