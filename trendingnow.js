  var tnurl = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=eab65856b2ef44d5858816dd8c490fc0';
  var tnreq = new Request(tnurl);

  fetch(tnreq)
    .then(function(response) {
    console.log(response.json())

    $.getJSON(tnurl, function(data) {
        $("#lp1").html(`<div class="media"> <a href=${data.articles["0"].url} class="media-left"> <img alt="" src="${data.articles["0"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["0"].url} class="catg_title">${data.articles["0"].title}</a></div>
          </div>`)
        $("#lp2").html(`<div class="media"> <a href=${data.articles["1"].url} class="media-left"> <img alt="" src="${data.articles["1"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["1"].url} class="catg_title">${data.articles["1"].title}</a></div>
          </div>`)
        $("#lp3").html(`<div class="media"> <a href=${data.articles["2"].url} class="media-left"> <img alt="" src="${data.articles["2"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["2"].url} class="catg_title">${data.articles["2"].title}</a></div>
          </div>`)
        $("#lp4").html(`<div class="media"> <a href=${data.articles["3"].url} class="media-left"> <img alt="" src="${data.articles["3"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["3"].url} class="catg_title">${data.articles["3"].title}</a></div>
          </div>`)
        $("#lp5").html(`<div class="media"> <a href=${data.articles["4"].url} class="media-left"> <img alt="" src="${data.articles["4"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["4"].url} class="catg_title">${data.articles["4"].title}</a></div>
          </div>`)
        console.log("Got Data", data)
      })
})
