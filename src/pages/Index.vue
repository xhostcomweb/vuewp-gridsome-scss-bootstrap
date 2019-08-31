<template>
<Layout>
<div class="white-text-container background-image-container home">
    <div class="opacity"></div>
    <div class="container">
        <div class="row">
           
            <div class="col-md-6">
                <h1>Vue JS Wordpress Gridsome Bootstrap</h1>
                <p>A Vue Js Wordpress Rest API Hybrid based on an original Node JS Bootstrap theme using Gridsome CLI
                    Webpack, SCSS/SASS and other Jamstack technologies.</p>
                 <a href="https://github.com/xhostcomweb/vuewp-gridsome-scss.git" title="" class="btn btn-lg btn-primary">Download</a>
            </div>

        </div>
    </div>
</div>
<div class="section-container border-section-container">
    <div class="container">
            <div class="row">
                <div class="col-md-12 section-container-spacer">
                    <div class="text-center">
                        <h2>Grab it and build some stuff!</h2>
                        <p> Open source on Github and contributors welcome. </p>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="fa-container">
                        <i class="fa fa-comment-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">
                        <h3>Contributor</h3>
                    </div>
                    <div>
                        <p>Constructed by Paul Anthony McGowan. Wordpress, eCommerce, Vue JS, Javascript</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="fa-container">
                        <i class="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">
                        <h3>Malesuada</h3>
                    </div>
                    <div>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                            non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                            Turpis egestas pretium aenean pharetra magna ac.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="fa-container">
                        <i class="fa fa-bell-o fa-3x" aria-hidden="true"></i>
                    </div>
                    <div class="text-center">
                        <h3>Phasellus</h3>
                    </div>
                    <div>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta
                            non pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus.
                            Turpis egestas pretium aenean pharetra magna ac. 
                        </p>
                    </div>
                </div>

            </div>
    </div>
</div>
<div class="section-container">
    <div class="container">
            <div class="row">
                <div class="col-xs-12">


                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img class="img-responsive" src="../assets/images/img-05.jpg" alt="First slide">
                            </div>
                            <div class="item">
                                <img class="img-responsive" src="../assets/images/img-07.jpg" alt="Second slide">
                            </div>
                            <div class="item">
                                <img class="img-responsive" src="../assets/images/img-05.jpg" alt="Third slide">
                            </div>
                        </div>
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>


                </div>
            </div>
    </div>
</div>


<div class="section-container background-color-container white-text-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="text-center">
                    <h2>Vivamus laoreet</h2>
                    <p> Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Porta non
                        pulvinar neque laoreet. Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat lacus. Turpis
                        egestas pretium aenean pharetra magna ac. Id cursus metus aliquam eleifend mi. </p>
                    <a href="./download.html" title="" class="btn btn-primary btn-lg">Download</a>
                </div>
            </div>
        </div>
     </div>
 </div>

 <div class="section-container">
    <div class="container">
        <div class="row">                   
            <div class="col-md-7">
                <img class="img-responsive" src="../assets/images/img-06.png" alt="">
            </div>

            <div class="col-md-5">
                <ul class="features">
                    <li>
                        <h3>Dui augue</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                    <li>
                        <h3>Malesuada</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                    <li>
                        <h3>Bibendum</h3>
                        <p>Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                    </li>
                </ul>
            </div>
        

              
            <div class="row">
                <div class="col-md-4">
                        <img class="img-responsive page-base-image" src="../assets/images/logo-01.png" alt="">

                </div>
                <div class="col-md-4">
                        <img class="img-responsive page-base-image" src="../assets/images/logo-02.png" alt="">
                </div>
                <div class="col-md-4">
                        <img class="img-responsive page-base-image" src="../assets/images/logo-03.png" alt="">
                </div>
            </div>
            
        </div>
    </div>
</div>


</Layout>
</template>
<script>
export default {
      head () {
        return {
          title: `Gridsome Vue Wordpress`,
          metaInfo: [
            {
              hid: 'description',
              name: 'description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:title',
              content: 'Gridsome Vue'
            },
            {
              property: 'og:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            },
            {
              property: 'og:type',
              content: 'post'
            },
            {
              name: 'twitter:title',
              content: 'Gridsome Vue'
            },
            {
              name: 'twitter:description',
              content: 'Gridsome Vue - A front-end wordpress SEO friendly in vue.js'
            }
          ]
        }
      }
    }
</script>
<style>
.container {
width:90%;
}
</style>
