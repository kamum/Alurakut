import { SiteClient } from 'datocms-client';
export default async function recebedorDeRequests(request, response){
    if (request.method === 'POST'){
        const TOKEN ='e0d79f601db1b6a183ffc9ac7f9ea9';
     const client = new SiteClient(TOKEN);
     const registroCriado = await client.items.create({
         itemType:'970846',// id do domel de community criado pelo dato
         ...request.body,
         //title: "comunidade de teste",
         //imageUrl: "https://github.com/kamum.png",
         //creatorSlug: "kamum"
        })
        console.log("registro criaodo")
        console.log(TOKEN)
        response.json({
            dados:'algum dado qualquer',
            registroCriado: registroCriado,
        
        })
        return;
    } 
    response.status(404).json({
        message: "ainda nao temos nada no get."
    })
}