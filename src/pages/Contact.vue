<template>
  <Layout>
<div class="section-container">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div id="map"><iframe style="border: none;" src="https://snazzymaps.com/embed/161584" width="100%" height="600px"></iframe></div>
            </div>
            <div class="col-xs-12">

                <div class="row">
                    <div class="col-md-6">
                        <form action="" class="reveal-content contact-form">
                            <div class="form-group">
                                <input type="name" class="form-control" id="name" placeholder="Full name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" placeholder="Subject">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg">Send</button>
                        </form>
                    </div>


                    <div class="col-md-5 col-md-offset-1">
                            
                        <h3><img src="../assets/img/dark150.png" /></h3>
                        
                        <div>
                            <p>International House <br/>64 Nile Street <br /> London N1 7SR</p>
                        </div>
                        <div>
                            <p>support@xhostcom.com</p>
                        </div>
                    
                        <div>
                            <h3>Team Participation</h3>
                        </div>
                        <div>
                            <p>To apply for a job with our team, please feel free to send us your Linkedin profile link
                                or CV to : support@xhostcom.com</p>
                        </div>
                       
                    </div>
                </div>


            </div>

        </div>

    </div>
</div>


  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>
