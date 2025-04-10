import { motion } from "framer-motion";
import Descriptioncontent from "./Descriptioncontent";
const Description = ({ changebackground }) => {
  const container = [
    {
      img1: "img1.png",
      Description1: "Credit Bureau Analysis:",
      extracontent:
        "Think of the Credit Bureau Analysis as the logbook of your previous expeditions. It sheds light on how you, as the captain, have navigated past financial commitments.",
      duration: 0.4,
    },
    {
      img1: "img2.png",
      Description1: "Financial Analysis: ",
      extracontent:
        "Diving into the Financial Analysis of your company is akin to inspecting the hull of your ship. It involves a thorough examination of your financial statements, revenue streams, ",
      duration: 0.3,
    },
    {
      img1: "img4.jpg",
      Description1: "Banking Analysis: ",
      extracontent:
        "The GST Analysis can be likened to understanding the trade winds that propel your ship forward. It involves scrutinizing your Goods and Services Tax (GST) ",
      duration: 0.2,
    },
    {
      img1: "img3.png",
      Description1: "GST Analysis:",
      extracontent:
        "Lastly, the Banking Analysis is your navigational chart, offering a detailed view of your financial transactions,",
      duration: 0.1,
    },
  ];
  return (
    <>
      <div
        className="maincard"
        style={{
          backgroundColor: changebackground === true ? " #1f2A38" : " grey",
        }}
      >
        <div className="Heading">
          <h1>
            Get your loan disbursed into your bank account in 4 simple analysis:{" "}
          </h1>
        </div>
        {container.map((item) => (
          <Descriptioncontent container={item}></Descriptioncontent>
        ))}
      </div>
    </>
  );
};

export default Description;
