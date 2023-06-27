module.exports = {

    posts : [
        {id: "2",
         title: "titulo",
        description: "texto de descrição"},
    ]
    ,

    getAll(){
        return this.posts
    },

    newPost(title, description){
        return this.posts.push({id:generetion(), title, description})
    },

    deletePost(id){
        let  potsFilter = this.posts.filter((item)=>{
            return(item.id !== id)
        })
        this.posts = potsFilter
    }
}

function generetion(){
    return Math.random().toString(36).substring(2, 9) //Gerando um numero hexadecimal e usando o substring para pular a virgula
}

