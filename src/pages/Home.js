import { useEffect, useState } from "react";
import MeetingCard from "../components/MeetingCard";
import { db } from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
function Home() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [meetings, setMeetings] = useState([]);
  let count = 0;
  useEffect(() => {
    onSnapshot(collection(db, "meetings"), (snapShot) => {
      const meetingData = snapShot.docs.map((d) => {
        return {
          id: d.id,
          ...d.data()
        };
      });
      setMeetings(meetingData);
      setLoadingStatus(false);
    });
  }, []);
  return (
    <div className="">
      <div className={loadingStatus ? "main-loader" : "d-none"}></div>
      <div className="meeting-container">
        {meetings
          .sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);

            //Ascending sort
            return dateA - dateB;
          })
          .filter((meeting) => {
            let today = new Date();
            return new Date(meeting.date) > today;
          })
          .map((meeting, index) => {
            count++;
            // console.log(new Date(meeting.date));
            let date = new Date(meeting.date);
            let fDate = date.toLocaleDateString("en", options);

            let fTime = date.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit"
            });
            let fMeetingTime = fTime + " " + fDate;
            //   console.log("date: ", date);
            return (
              <MeetingCard
                title={meeting.title}
                date={fMeetingTime}
                desc={meeting.desc}
                img={meeting.content}
                key={index}
                count={count}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Home;
