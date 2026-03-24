import ScrollToTop from "../../helper/ScrollToTop";
import Navbar from "../../Navbar";
import PageTopperPhoto from "../../helper/PageTopperPhoto";
import PageTopperHeading from "../../helper/PageTopperHeading";
import SiteFooter from "../../SiteFooter";
import WireframePhoto from "../../helper/WireframePhoto";
import TableList from "../../helper/TableList";
import InColumnPhotoSmall from "../../helper/InColumnPhotoSmall.js";

import { PhotoPCBClose, ExplainTop, ExplainSide, PhotoMicroSD, PhotoIOPorts } from "../../../assets/photos/index.js";

const microSDText = (
    <p className="blogText scrollTextShowUp">The games are stored on a microSD card. We recommend using the one above (Sandisk Ultra 32GB SDHC), since it was the primary card used during testing. <br/> Click <a href="capabilities.html" className="customLink">here</a> to see more details of file storage on the device.</p>
)

function SpecsPage(){
  return (
    <div className="container-fluid m-0 p-0">
      <ScrollToTop/>
      <Navbar/>
      <PageTopperPhoto photoSrc={PhotoPCBClose} />
      <div className="container text-center">
        <PageTopperHeading title="Model V Specifications"/>
        <WireframePhoto photoSrc={ExplainTop}/>
        <WireframePhoto photoSrc={ExplainSide}/>
        <div className="row blogRow">
            <div className="col-md">
                <TableList
                    tableTitle="Compute"
                    items={[
                        {
                            header: "APU",
                            descriptions: ["dual-core Xtensa LX7, 240MHz", "512 KB internal SRAM", "384 KB ROM"]
                        },
                        {
                            header: "Memory",
                            descriptions: ["16MB (64Mbit) integrated SPI Flash", "8MB integrated SPI PSRAM"]
                        },
                        {
                            header: "Storage",
                            descriptions: ["microSD card slot"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Display"
                    items={[
                        {
                            header: "Type",
                            descriptions: ["SPI TFT LCD"]
                        },
                        {
                            header: "Size",
                            descriptions: ["3.2 inch"]
                        },
                        {
                            header: "Resolution",
                            descriptions: ["320 x 240 pixels"]
                        },
                        {
                            header: "Color model",
                            descriptions: ["RGB565 (65K colors)"]
                        },
                        {
                            header: "Brightness",
                            descriptions: ["Variable: 280 - 550 (nits)"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Audio"
                    items={[
                        {
                            header: "Type",
                            descriptions: ["Mono speaker"]
                        },
                        {
                            header: "Wattage",
                            descriptions: ["3 W"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Power"
                    items={[
                        {
                            header: "Battery",
                            descriptions: ["11 Whr (15 hours of emulation)"]
                        },
                        {
                            header: "Charging",
                            descriptions: ["USB-C (5V, 1A)"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Connectivity"
                    items={[
                        {
                            header: "WiFi",
                            descriptions: ["2.4GHz Wi-Fi (802.11 b/g/n)"]
                        },
                        {
                            header: "Bluetooth",
                            descriptions: ["Bluetooth 5.0 LE (Unused)"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Controls"
                    items={[
                        {
                            header: "Navigation Control",
                            descriptions: ["DPad"]
                        },
                        {
                            header: "Game control",
                            descriptions: ["A, B", "Start, Select"]
                        },
                        {
                            header: "Emulation control",
                            descriptions: ["System, Option"]
                        }
                    ]}
                />
            </div>
            <div className="col-md">
                <InColumnPhotoSmall
                    photoSrc={PhotoMicroSD}
                    paragraphText=""
                    paragraphElement={microSDText}
                />
                <InColumnPhotoSmall
                    photoSrc={PhotoIOPorts}
                    paragraphText="All 3 ports on the console, are USB type C receptacles. Do not charge the device with a powerful charger, as it can damage the battery. Plugging it into a laptop or powerbank is recommended."
                    paragraphElement={null}
                />
            </div>
        </div>
      </div>
      <SiteFooter/>
      <script src="js/specsScript.js"></script>
    </div>
  )
}

export default SpecsPage;