import React from 'react';

// Simple contact page.
function Contact() {

    return (
        <div className="center-element">
            <div className="center-element high-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>

            <div className="box center-element">
                <form>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group mt-3">
                                <label className="contact-lable">First Name</label>
                                <input name="name" id="name" className="form-control" type="text"/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mt-3">
                                <label className="contact-lable">Last Name</label>
                                <input name="name" id="lastname" className="form-control"
                                       type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group mt-3">
                                <label className="contact-lable">Email Address</label>
                                <input name="email" id="email" className="form-control" type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group mt-3">
                                <label className="contact-lable">Subject</label>
                                <input name="subject" id="subject" className="form-control"
                                       type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group mt-3">
                                <label className="contact-lable">Your Message</label>
                                <textarea name="comments" id="comments"
                                          className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mt-3 text-right">
                            <input id="submit" name="send"
                                   className="btn"
                                   value="Send Message" type="submit"/>
                            <div id="simple-msg"></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Contact;




