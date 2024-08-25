async function basicUpload(params: { accountId: any; apiKey: any; requestBody: any; querystring?: any; metadata?: any; }) {  
    const baseUrl  = "https://api.bytescale.com";
    const path     = `/v2/accounts/${params.accountId}/uploads/binary`;
    const entries  = (obj: { [s: string]: unknown; } | ArrayLike<unknown>) => Object.entries(obj).filter(([,val]) => (val ?? null) !== null);
    const query    = entries(params.querystring ?? {})
                       .flatMap(([k,v]) => Array.isArray(v) ? v.map(v2 => [k,v2]) : [[k,v]])
                       .map(kv => kv.join("=")).join("&");
    const response = await fetch(`${baseUrl}${path}${query.length > 0 ? "?" : ""}${query}`, {
      method: "POST",
      body: params.requestBody,
      headers: {
        "Authorization": `Bearer ${params.apiKey}`,
        "X-Upload-Metadata": JSON.stringify(params.metadata)
      }
    });
    const result = await response.json();
    if (Math.floor(response.status / 100) !== 2)
      throw new Error(`Bytescale API Error: ${JSON.stringify(result)}`);
    return result;
  }
  
  basicUpload({
    accountId: "kW15cCW",
    apiKey: process.env.NEXT_PUBLIC_BYTESCALE_API_KEY,
    requestBody: new Blob( // Or: pass a 'file' object from an input element.
      [ "Example Data" ],
      { type: "text/plain" }
    ),
  // - Optional -
  // metadata: {
  //  myCustomField1: true,
  //  myCustomField2: {
  //    hello: "world"
  //  },
  //  anotherCustomField: 42
  //},
  // querystring: {
  //  fileName: "image.jpg",
  //  fileNameFallback: "image.jpg",
  //  fileNameVariablesEnabled: true,
  //  filePath: "/uploads/image.jpg",
  //  folderPath: "/uploads",
  //  folderPathVariablesEnabled: true,
  //  originalFileName: "example.jpg",
  //  tag: ["example_tag"]
  //}
  }).then(
    response => console.log(`Success: ${JSON.stringify(response)}`),
    error => console.error(error)
  );