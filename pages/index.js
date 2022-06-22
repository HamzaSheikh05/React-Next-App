import {data} from "../SpeakerData";

const IndexPage = () => {
    const{id, bio, first, last, favorite, twitterHandle, company, sessions,} = data[0];
    return(
        <div>Hello from pluralsight!</div>
    )
}

export default IndexPage;