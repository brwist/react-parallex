import React, {Component} from 'react';
import '../../../styles/css/App.css';
import photo1 from './img/photo-1.jpg'
import photo2 from './img/photo-2.jpg'
import photo3 from './img/photo-3.jpg'

class Team extends Component {

    render() {
        return (
            <div className="team">
                <div className="team__member">
                    <img src={photo1} alt="" className="team__photo"/>
                </div>
                <div className="team__member">
                    <img src={photo2} alt="" className="team__photo"/>
                </div>
                <div className="team__member">
                    <img src={photo3} alt="" className="team__photo"/>
                </div>
            </div>
        )
    }
}

export default Team;