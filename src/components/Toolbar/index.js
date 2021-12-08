import './Toolbar.css';

function Toolbar(props) {
  const {locationDetails} = props;
  return (
    <div className="Toolbar">
       <div className="Location-info">
            <div className="Location-text">Location</div>
            <div className="Location-val">{locationDetails.name}</div>
       </div>
       <div className="Location-action">
            <button className="Location-action-btn" onClick={()=>{
                alert("Location Changed!")
            }}>Change location</button>
       </div>
    </div>
  );
}

export default Toolbar;
