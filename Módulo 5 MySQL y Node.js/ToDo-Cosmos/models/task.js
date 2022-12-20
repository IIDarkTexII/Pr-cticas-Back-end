const CosmosClient = require('@azure/cosmos').CosmosClient;
const debug= require('debug')('todo-cosmos:task');

let partitionKey = undefined;
//Este es el modelo de datos
class Task{
    /**
     * Lee, añade y actualiza tareas en Cosmos db
     * @param {CosmosClient} CosmosClient 
     * @param {string} databaseID 
     * @param {string} containerID 
     */
    constructor(cosmosClient, databaseID, containerID){
        this.client= cosmosClient;
        this.databaseID= databaseID;
        this.containerID= containerID;

        this.database=null;
        this.container = null;
    }

    async init(){
        debug("Inicializando BD")
        const dbResponse= await this.client.databases.createIfNotExists
        ({
            id: this.databaseID,
        })

        this.database = dbResponse.database;

        debug("Inicializando contenedor");

        const contenedorResponse = await this.database.containers.createIfNotExists({
            id: this.containerID
        });

        this.container= contenedorResponse.container;
    }
    /**
     * Encuentra un objeto en la BD
     * @param {string} querySpec 
     */
    async find(querySpec){
        debug("Buscando en la base de datos");
        if(!this.container){
            throw new Error("Contenedor no se ha inicializado");
        }
        const {resources} = await this.container.items.query(querySpec).fetchAll();
        return resources;
    }
    /**
     * Crea el item enviado en Cosmos DB
     * @param {*} item 
     * @returns {resource} item creado en la BD
     */
    async addItem(item){
        debug("Añadiendo ítem a la BD");
        item.date = Date.now();
        item.completed = false;
        const {recurso:doc}= await this.container.items.create(item);

        return doc;
    }

    /**
     * 
     * @param {string} itemID 
     */
    async updateItem(itemID){
        debug("Actualizando ítem");
        const doc = await this.getItem(itemID);
        doc.completed = true;

        const {resource:replaced} = await this.container
            .item(itemID, partitionKey)
            .replace(doc)
        
            return replaced;
    }

    /**
     * 
     * @param {string} itemID 
     * @returns 
     */
    async getItem(itemID){
        debug("Buscando ítem en la BD");
        const {resource} = await this.container.item(itemID,partitionKey)
        return resource;
    }
}

module.exports=Task;