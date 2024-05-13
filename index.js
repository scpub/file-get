import { join } from 'node:path';
import fs from 'node:fs';

class scGet {
    #sc;
    #readopt;
    #scget
    constructor(opt) {
        if(!opt)return
        (async () => {await this.init(opt)})()
    }

    async #read(e){
      e=e||this.#readopt
      if(!e)return
        return new Promise((resolve, reject) => {    
            const s = fs.createReadStream(join(e.path), 'utf8');
            let f = '';   
            s.on('data', (k) => {f += k});
            s.on('end', () => {resolve(f)});    
            s.on('error', (r) => {reject(r)});
        })     
    }
  
  async init(e){
    const t=this
    await t.#read(e).then(function(o){ 
        t.#sc=JSON.parse(o)
        t.#scget=function(id){
            const sc=this.#sc;
            const got=(e)=>{return e?sc[id][e]:sc[id]}
            return {got}
        }
        t.tag=function(e){return this.#scget(e)}
    });    
   }
}

export default scGet
