$document.ready(function(){

    let clsCommuniqueRepository = class {
       constructor (){
           const ReachUpWebAPI;
           ReachUpWebAPI = new clsReachUpWebAPI();
        }

        async receive(user, local)
        {
           if (await ReachUpWebAPI.httpGet('Communique/Receive?'))
           {
               return ReachUpWebAPI.response;
           }

           else
           {
               return false;
           }
        }

        async get(local_id)
        {
           if (await ReachUpWebAPI.httpGet('Communique/Get?id=' + local_id))
           {
               return ReachUpWebAPI.response;
           }

           else
           {
               return false;
           }
        }

        async post(communique)
        {
           if (await ReachUpWebAPI.httpPost())
           {
               return true;
           }

           else
           {
               return false;
           }
        }

        async patch(communique)
        {
           if (await ReachUpWebAPI.httpPatch())
           {
               return true;
           }

           else
           {
               return false;
           }
        }

        async delete(id)
        {
           if (await ReachUpWebAPI.httpDelete('Communique/Delete?id=' + id))
           {
               return true;
           }

           else
           {
               return false;
           }
        }

    } 

    const CommuniqueRepository;
    CommuniqueRepository = new clsCommuniqueRepository("");

})