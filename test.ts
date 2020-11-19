import axiod from "https://deno.land/x/axiod/mod.ts";

axiod.get("http://localhost:8080/api/tag")
.then((res: any) => {
    for(let item of res.data) {
        console.log(item)
    }
})
.catch((err: any) => {console.log(err)})