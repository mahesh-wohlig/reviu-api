        $(document).ready(function () {
            var strVar = "<div class=\"container\"> <div class=\"row clearfix\"> <div> <div class=\"col-md-8 col-md-offset-2\"> <div class=\"sli-set\"> <div class=\"col-md-10\"> <div class=\"slider js_variablewlidth variablewidth\"> <div class=\"frame js_frame\"> <ul class=\"slides js_slides allvideos\" style=\"height: 150px;\"> <\/ul> <\\/div><span class=\"js_prev prev\"> <svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z\"\/><\/g><\/svg> <\/span> <span class=\"js_next next\"> <svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 501.5 501.5\"><g><path fill=\"#2E435A\" d=\"M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z\"\/><\/g><\/svg> <\/span> <\\/div><\\/div><div class=\"col-md-2 bck-grey\"> <a href=\"index.php\" class=\"fornewcreate\"><img src=\"images\/video-img\/video-p2.png\" style=\" margin-top: 23px;\"><\/a> <\\/div><\\/div><\\/div><\\/div><\\/div><\\/div><link href=\"css\/bootstrap.css\" rel=\"stylesheet\" type=\"text\/css\"> <link href=\"css\/remodal.css\" rel=\"stylesheet\" type=\"text\/css\"> <link href=\"css\/owl.carousel.css\" rel=\"stylesheet\" type=\"text\/css\"> <link href=\"css\/mobile.css\" rel=\"stylesheet\" type=\"text\/css\"> <link href=\"css\/app.css\" rel=\"stylesheet\" type=\"text\/css\"> <link href=\"css\/font-awesome.css\" rel=\"stylesheet\"> <link href=\"css\/font-awesome.min.css\" rel=\"stylesheet\"> <link rel=\"stylesheet\" href=\"\/\/maxcdn.bootstrapcdn.com\/font-awesome\/4.3.0\/css\/font-awesome.min.css\"> <link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image\/x-icon\"> <script src=\"http:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/2.0.0\/jquery.min.js\"><\/script> <script src=\"fancy\/jquery.fancybox.pack.js\"><\/script> <script src=\"fancy\/jquery.fancybox.js\"><\/script> <link href=\"fancy\/jquery.fancybox.css\" rel=\"stylesheet\" type=\"text\/css\"> <\/script> <link href=\"\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.2\/css\/bootstrap.min.css\" rel=\"stylesheet\"> <script src=\"\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.2\/js\/bootstrap.min.js\"><\/script> <link href='http:\/\/fonts.googleapis.com\/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text\/css'>";

            
            $(".reviuclass").html(strVar);
            $(".reviuclass .container").ready(function () {

                

                var type = $(".reviuclass").attr("reviutype");
                var categoryid = $(".reviuclass").attr("categoryid");
                var productlink = $(".reviuclass").attr("productlink");
                var price = $(".reviuclass").attr("price");
                var siteuser = $(".reviuclass").attr("siteuser");

                var parenturlvalue = window.parent.location.href;
                var parenturlvalue = btoa(parenturlvalue);
                $(".fornewcreate").click(function () {
                    MyWindow = window.parent.open("index.php" + window.location.search + "?type=" + type + "&categoryid=" + categoryid + "&productlink=" + productlink + "&price=" + price + "&siteuser=" + siteuser + "&parenturl=" + parenturlvalue, 'MyWindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=780,height=840');
                    return false;
                });



                $(".various1").fancybox({
                    maxWidth: 840,
                    maxHeight: 381,
                    padding: 0,
                    scrolling: 'visible',
                    margin: 0,
                    fitToView: false,
                    width: '100%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'elastic',
                    closeEffect: 'elastic',
                    type: "ajax"

                });

                $(".various2").fancybox({
                    maxWidth: 840,
                    maxHeight: 381,
                    padding: 0,
                    scrolling: 'visible',
                    margin: 0,
                    fitToView: false,
                    width: '100%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'elastic',
                    closeEffect: 'elastic',
                    type: "ajax"
                });

                $(".various3").fancybox({
                    maxWidth: 840,
                    maxHeight: 381,
                    padding: 0,
                    scrolling: "no",
                    margin: 0,
                    fitToView: false,
                    width: '100%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'elastic',
                    closeEffect: 'elastic',
                    type: "ajax"
                });

                $(".various4").fancybox({
                    maxWidth: 780,
                    maxHeight: 600,
                    padding: 0,
                    scrolling: "no",
                    margin: 0,
                    fitToView: false,
                    width: '100%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'elastic',
                    closeEffect: 'elastic',
                    type: "ajax"
                });

                //            var siteurl = window.location.href;
                var siteurl = window.parent.location.href;
                var siteurl = encodeURI(siteurl);
                console.log(siteurl);
                var siteurl = btoa(siteurl);
                $.getJSON(
                    "http://localhost/reviu-api/ReviuBackend/index.php/json/getvideosbysiteurl?siteurl=" + siteurl, {
                        //                id: "123"
                    },
                    function (data) {
                        console.log(data);
                        nodata = data;
                        allvideos(data);
                    }


                );

                function allvideos(data) {
                    $(".allvideos").html("");
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        console.log(data[i]);
                        var details = data[i];
                        var name = data[i].firstname + " " + data[i].lastname;
                        var lastindex = data[i].videourl.lastIndexOf("-merged.webm")
                        var imagename = "http://146.148.93.13/reviu-api/thumbnails/" + data[i].videourl.slice(0, lastindex) + ".png";
                        //                    console.log(data[i].id);
                        var valueofvarious = i + 1;
                        var rating = data[i].rating;
                        var roundvalue = Math.round(data[i].rating);
                        if (roundvalue == data[i].rating) {
                            var rating = roundvalue + ".0";
                        }


                        $(".allvideos").append("<li class='js_slide' style='text-align:center;width: 160px;height: 100px;'><div class='video-feed'><img class='img-responsive slide2img' src='" + imagename + "'><div class='plays'><img class='' src='images/video-img/play.png'></div><div class='feed-dets'><p class='rating'>" + rating + "</p><h5>" + data[i].title + " <br><span> by " + name + "</span></h5></div></div><div class='map-feeds'><i class='fa fa-heart'><span>" + data[i].likes + " likes</span></i></div><a class='various1 ' href='http://146.148.93.13/reviu-api/ReviuBackend/index.php/json/getvideobyidforpopup?id=" + data[i].id + "'><div class='name-set'><h5>" + data[i].title + " <br><span> by " + name + "</span></h5></div></a></li>");
                        var imagecount = 0;
                        var imageslength = $(".allvideos li").length;
                        $(".allvideos li img").load(function () {
                            imagecount++;
                            if (imagecount == imageslength) {
                                var $elements = $('.js_variablewlidth');
                                $elements.lory({
                                    infinite: 0
                                });

                                $elements.data().lory.slideTo(-1);
                            }
                        });

                    }

                };



                console.log("Testing works");

            });
        });
