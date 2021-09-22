import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <h1>The support team is here to help.</h1>
            <h4>Please call us at Ph: <span>9144147372 / 8436417132</span></h4>
            <h4>OR</h4>
            <h4>Fill the form to send your query</h4>
            <form className="contact_form">
                <textarea type="text" placeholder="write your query here"></textarea>
                <div><button>Send</button></div>
            </form>
            
        </div>
    )
}

export default Contact
