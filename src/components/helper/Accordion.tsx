interface AccordionProps {
    title: string;
    content: string;
}


// Taaa ogolnie to przerobie to na jakis fajny komponent, ale na razie zostawiam statyczne bo jest 21:00 a jutro szkola lol
function Accordion({ title, content }: AccordionProps){
    return (
        <div className="col-md contactSpacer">
          <h1 className="contactHeader">FAQ</h1>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  When will the next console be released?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Our team, sharing a passion for design and electronics is constantly prototyping new
                  ways to make retro gaming fun. <br/>
                  Any and all announcements are published here, on our
                  website, as well as on our soon to be made social media accounts. Stay tuned!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Where can I get games for my console?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  You can always download more roms (Game files) for your Nevolta console, at popular
                  rom-sharing sites. <br/>
                  However, <strong>we do not promote any forms of piracy</strong> so
                  you may only download the games bought from the original developer.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  How can I purchase a Nevolta console?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  The official Nevolta store is now live! You can visit it <a href="https://shop.nevoltasystems.com/" target="_blank" className="customLink">here</a> and purchase your own Nevolta console!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Do you hire?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Our team now only consists of Tom, and nobody else. We are open to collaborating, and 
                  being joined by new talents on the team.<br/>
                  Dont hesitate to reach out!
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Accordion;