var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://tiems-d1ca.restdb.io/rest/clients",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5f2c8c05013b1c34acef749b",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
   response.forEach((Object) => {
      console.log(Object)
   })
});