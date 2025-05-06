import SchoolBus from './assets/school-bus.jpg';
import './HomePage.css';
export default function HomePage(){
    return(
        <div className="home-page">
            <div className="content">
                <h1>Edu Transit Web Client!</h1>
                <p>Reliable and safe daily transport for your children — from your home to school and back.</p>
                <button onClick={() => alert('Booking feature coming soon!')}>Book Now</button>
            </div>
            <div className="image-container">
                <img src={SchoolBus} alt="School Bus" />
            </div>
        </div>
    );
};
