import ScrollToTop from "../../helper/ScrollToTop";
import Navbar from "../../Navbar";
import PageTopperPhoto from "../../helper/PageTopperPhoto";
import PageTopperHeading from "../../helper/PageTopperHeading";
import SiteFooter from "../../SiteFooter";
import WireframePhoto from "../../helper/WireframePhoto";
import TableList from "../../helper/TableList";
import InColumnPhotoSmall from "../../helper/InColumnPhotoSmall.js";

import { N32_PCBClose, N32ExplainFront, N32ExplainSide, N32_microSD, N32_Charging } from "../../../assets/photos/index.js";

const microSDText = (
    <p className="blogText scrollTextShowUp">The games are stored on a microSD card. The only requirement is the FAT32 file system, however we recommend using the Sandisk Ultra 32GB SDHC (since it was the primary card used during testing). <br/> Click <a href="/nevolta32/capabilities" className="customLink">here</a> to see more details of file storage on the device.</p>
)

function SpecsPage(){
  return (
    <div className="container-fluid m-0 p-0 d-flex flex-column min-vh-100">
      <ScrollToTop/>
      <Navbar/>
      <PageTopperPhoto photoSrc={N32_PCBClose} />
      <div className="container text-center flex-grow-1">
        <PageTopperHeading title="Nevolta32 Specifications"/>
        <WireframePhoto photoSrc={N32ExplainFront}/>
        <WireframePhoto photoSrc={N32ExplainSide}/>
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
                            header: "Speaker",
                            descriptions: ["Mono 3W (built-in)"]
                        },
                        {
                            header: "Headphones",
                            descriptions: ["3.5mm TRS jack"]
                        },
                        {
                            header: "Sound control",
                            descriptions: ["Speaker/Jack physical switch"]
                        }
                    ]}
                />
                <TableList
                    tableTitle="Power"
                    items={[
                        {
                            header: "Battery",
                            descriptions: ["2000mAh (15 hours of emulation)"]
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
                            descriptions: ["2.4GHz Wi-Fi (Unused)"]
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
                    photoSrc={N32_microSD}
                    paragraphText=""
                    paragraphElement={microSDText}
                />
                <InColumnPhotoSmall
                    photoSrc={N32_Charging}
                    paragraphText="The Nevolta32 uses a standard USB-C port for charging. The battery level can be monitored in the software, and by the LED indicators. Blue = fully charged, Red = charging."
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