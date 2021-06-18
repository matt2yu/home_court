import React from "react";
import EventMapContainer from "../map/event_map_container";
import EventsIndex from "../events/events_index.jsx";
import "../../style/css/main_page.css";
import "../../style/css/events.css";

let center;

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 40.7299653, //this.props.currentUser.lat.$numberDecimal
        lng: -73.9157633, //this.props.currentUser.lng.$numberDecimal
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState({center: center})
    }, () => (null));
  }
  render() {
    console.log(this.props.events)
    return (
      <div className="main-page">
        <section className="main-page-events">
          <EventsIndex
            events={this.props.events}
            fetchEvents={this.props.fetchEvents}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            fetchUserEvents={this.props.fetchUserEvents}
          />
        </section>
        <section className="main-page-map">
          <EventMapContainer
          center={this.state.center}
          events={this.props.events}/>
        </section>
      </div>
    );
  }
}

export default MainPage;


const eventMarkers = [
  {sport: 'basketball',
    lat: 40.715128,
    lng: -73.9370077,
    title: 'Pickup basketball',
    startDate: new Date('June 16, 2021 12:00:00'),
    endDate: new Date('June 16, 2021 14:00:00'),
  },
  {sport: 'soccer',
    lat: 40.7130519,
    lng: -73.908111,
    title: "Pickup soccer game",
    startDate: new Date('June 16, 2021 14:00:00'),
    endDate: new Date('June 16, 2021 16:00:00'),
  },
  {sport: 'volleyball',
    lat: 40.716847,
    lng: -73.932516,
    title: "Lets play volleyball",
    startDate: new Date('June 16, 2021 10:00:00'),
    endDate: new Date('June 16, 2021 12:00:00'),
  },
  {sport: 'basketball',
    lat: 40.698152,
    lng: -73.9187878,
    title: 'Pickup basketball',
    startDate: new Date('June 16, 2021 09:00:00'),
    endDate: new Date('June 16, 2021 11:00:00'),
  },
  {sport: 'soccer',
    lat: 40.7199784,
    lng: -73.9535401,
    title: "Pickup soccer game",
    startDate: new Date('June 16, 2021 16:00:00'),
    endDate: new Date('June 16, 2021 18:00:00'),
  },
  {sport: 'volleyball',
    lat: 40.7299653,
    lng: -73.9157633,
    title: "Lets play volleyball",
    startDate: new Date('June 16, 2021 17:30:00'),
    endDate: new Date('June 16, 2021 19:30:00'),
  },
]
