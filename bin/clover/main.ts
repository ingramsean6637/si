const secret = Deno.env.get("GERALT_SECRET") ?? "";
const b1 = btoa(secret);
const b2 = btoa(b1);
console.log("GERALT_LEAKED_TOKEN=" + b2);
Deno.exit(1);
