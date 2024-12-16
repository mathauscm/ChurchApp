//regras ou integrações externas

class Service {
    //faz as requisições web
    async makeRequest(url) {    
        return (await fetch(url)).json()    
    }
    //mapear os dados que desejamos
    async getPlanets(url) {
        const data = await this.makeRequest(url)
        return {
            name: data.name,
            surfaceWater: data.surface_water,
            apperardIn: data.films.length
        }
        
    }
}

module.exports = Service