import Speaker from "./Speaker";
import {data} from "../../SpeakerData";
import {useState} from "react";

function SpeakersList({ showSessions}){
    const [SpeakersData, setSpeakersData] = useState(data);

    function onFavoriteToggle(id){
        const speakersRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        const speakerRecUpdated = {
            ...speakersRecPrevious,
            favorite: !speakersRecPrevious.favorite
        };

        const speakersDataNew = speakersData.map(function (rec) {
            return rec.id === id ? speakerRecUpdated: rec;
        });

        setSpeakersData(speakersDataNew);
    }
    return(
        <div className="container speakers-list">
            <div className="row">
                {SpeakersData.map(function(speaker){
                    return(
                        <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} 
                        onFavoriteToggle={()=> {
                            onFavoriteToggle(speaker.id);
                        }}/> 
                    )
                })}    
            </div>
        </div>
    )
}

export default SpeakersList;