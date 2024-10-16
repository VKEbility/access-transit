import { FiAlertTriangle } from "react-icons/fi";
import { FaWheelchair } from "react-icons/fa";
import { MdOutlineElevator } from "react-icons/md";
import { GiEscalator } from "react-icons/gi";

export default function TrainCarts() {
    return (
      <div className="train-carts-container">
        <h2>Train Cart Accessibility</h2>
        
        <div className="icon-list">
          <div className="icon-item">
            <MdOutlineElevator size={40} />
            <p>Elevator Access</p>
          </div>
  
          <div className="icon-item">
            <FaWheelchair size={40} />
            <p>Wheelchair Accessible</p>
          </div>
  
          <div className="icon-item">
            <GiEscalator size={40} />
            <p>Escalator Access</p>
          </div>
  
          <div className="icon-item">
            <FiAlertTriangle size={40} />
            <p>Alert: Limited Access</p>
          </div>
        </div>
      </div>
    );
  };