
  var buzzurl = 'https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=eab65856b2ef44d5858816dd8c490fc0'
    var buzzreq = new Request(buzzurl);

  fetch(buzzreq)
    .then(function(response) {
    console.log(response.json())

      $.getJSON(buzzurl, function(data) {
        $("#bf1").html(`<figure class="bsbig_fig"> <a href=${data.articles["0"].url} class="featured_img"> <img alt="" src="${data.articles["0"].urlToImage}"> <span class="overlay"></span> </a>
          <figcaption> <a href=${data.articles["0"].url}>${data.articles["0"].title}</a> </figcaption>
          <p>${data.articles["0"].description}</p>
        </figure>`)
        $("#bf2").html(`<div class="media wow fadeInDown"> <a href=${data.articles["1"].url} class="media-left"> <img alt="" src="${data.articles["1"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["1"].url} class="catg_title">${data.articles["1"].title}</a> </div>
        </div>`)
        $("#bf3").html(`<div class="media wow fadeInDown"> <a href=${data.articles["2"].url} class="media-left"> <img alt="" src="${data.articles["2"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["2"].url} class="catg_title">${data.articles["2"].title}</a> </div>
        </div>`)
        $("#bf4").html(`<div class="media wow fadeInDown"> <a href=${data.articles["3"].url} class="media-left"> <img alt="" src="${data.articles["3"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["3"].url} class="catg_title">${data.articles["3"].title}</a> </div>
        </div>`)
        $("#bf5").html(`<div class="media wow fadeInDown"> <a href=${data.articles["4"].url} class="media-left"> <img alt="" src="${data.articles["4"].urlToImage}"> </a>
          <div class="media-body"> <a href=${data.articles["4"].url} class="catg_title">${data.articles["4"].title}</a> </div>
        </div>`)
        console.log("Got A Buzz", data)
      })
})
