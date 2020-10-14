/// <reference path='../services/ApiConnection.ts'/>
/// <reference path='../Scripts/routines.script.js'/>

import { ApiConnection } from "../services/ApiConnection";

export module MallPlan {

    export class clsMallPlan extends ApiConnection.clsApiConnection {
         constructor(){
             super();
         }

         public async get()
         {
             const json = await this.httpGet('Map/Get', null);
             setJson(json);
         }

         public async put()
         {
            const json = getJson();
            return await this.httpPut('Map/Put', json, null);
         }
    } 
}