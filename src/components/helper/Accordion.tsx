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
                  Why are there no on-site purchase methods?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Nevolta, due to its founders young age, is yet to be registered as an official company. Because of that, we are unable to provide more
                  mainstream payment options which are only available for companies.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Can I make my own Nevolta console?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  What you now know as Nevolta, started with a bunch of tinkering and at-home product
                  engineering, so one of our goals is to give back, and <strong>always offer a DIY kit </strong>
                   for our consoles. <br/>
                  By purchasing any kit, you are provided with 3D printable files, that you are free
                  to modify! <br/>
                  <strong>Guides page</strong> coming soon!
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