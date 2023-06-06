class KafkaService {
   url = 'https://node-base-reactions-service-prueba-adpsec.cloud.okteto.net/';
   urlComments = 'https://node-comentarios-service-prueba-adpsec.cloud.okteto.net/';

   reactionPush = async (data) => {
      await fetch(this.url + 'reaction?userId=' + data.userId + '&objectId=' + data.objectId + '&reactionId=' + data.reactionId  , {
         method: 'GET',
         headers: {
               'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
               console.log(data);
         })
         .catch((err) => {
               console.log(err.message);
         });
   }

   commentPush = async (data) => {
      await fetch(this.urlComments + 'comments?userId=' + data.userId + '&objectId=' + data.objectId + '&comment=' + data.comment  , {
         method: 'GET',
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => console.log(response.json()))
         .then((data) => {
               console.log(data);
         })
         .catch((err) => {
               console.log(err.message);
         });
   }

}

const KafkaServiceInstance = new KafkaService();
export default KafkaServiceInstance;