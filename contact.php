
       <?php include_once('include/header.php');?>
    <main>
        <section class="contact-section">
            <div class="container">
                <div class="contact-form">
                    <h2>You can find us here</h2>
                    <p>Find help for your queries here.</p>
                    <form>
                        <div class="form-group">
                            <label for="name">Name <span>*</span></label>
                            <input type="text" id="name" name="name" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address <span>*</span></label>
                            <input type="email" id="email" name="email" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="mobile">Mobile Number <span>*</span></label>
                            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number">
                        </div>
                        <div class="form-group">
                            <label for="you-are-a">You are a <span>*</span></label>
                            <select id="you-are-a" name="you-are-a">
                                <option value="" disabled selected>select</option>
                                <option value="customer">Customer</option>
                                <option value="captain">Captain</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="comment">Comment <span>*</span></label>
                            <textarea id="comment" name="comment" placeholder="Enter your comment"></textarea>
                        </div>
                        <button type="submit" class="btn-submit">Submit</button>
                    </form>
                </div>
                <div class="address-details">
                    <div class="address">
                        <h3>Registered Office Address:</h3>
                        <p>Roppen Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad - 500081.</p>
                        <p>CIN:U63221GT2015PTC097115</p>
                    </div>
                    <div class="address">
                        <h3>City Office:</h3>
                        <p>Roppen Transportation Services Pvt Ltd, #48, 1st Floor, SLV Nilaya, 5th Main 60ft road, HSR Layout, 7th Sector, Bangalore 560102.</p>
                    </div>
                    <div class="address">
                        <h3>Corporate Office:</h3>
                        <p>Mantri Commerce, - Spatium Tower A, Sy No 5/12, 5/13, 5/14, Of Devarabeesanahalli Village And Hjern 20/5 Of Kariyammaana Agrahara Village Varthur Hobli, Bangalore East Taluk, Bangalore.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
     <?php include_once('include/footer.php');?>
