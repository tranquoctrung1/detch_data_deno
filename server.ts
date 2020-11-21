import axiod from "https://deno.land/x/axiod/mod.ts";
import {listenAndServe} from "https://deno.land/std/http/mod.ts"

// create a api testing
axiod.get("http://localhost:8080/api/tag")
.then((res: any) => {
    for(let item of res.data) {
        console.log(item)
    }
})
.catch((err: any) => {console.log(err)})

// create server 
listenAndServe({port: 3000}, (request: any) => request.respond({body: "<h1>Hello Word</h1>"}))
