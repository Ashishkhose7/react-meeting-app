import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
//firestore
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
function AddMeeting() {
  const [submitStatus, setSubmitStatus] = useState(false);
  const [fieldError, setfieldError] = useState("");
  const titleInput = useRef();
  const imgInput = useRef();
  const dateInput = useRef();
  const descInput = useRef();
  const navigate = useNavigate();

  async function addMeetingHandler() {
    setSubmitStatus(true);
    const titleData = titleInput.current.value;
    const imgData = imgInput.current.value;
    const dateData = dateInput.current.value;
    const descData = descInput.current.value;

    if (
      titleData !== "" &&
      imgData !== "" &&
      dateData !== "" &&
      descData !== ""
    ) {
      // const tempMeeting = {
      //   title: titleData,
      //   img: imgData,
      //   date: dateData,
      //   desc: descData
      // };

      // fetch(
      //   "https://react-meeting-app-62cb7-default-rtdb.firebaseio.com/meetings.json",
      //   {
      //     method: "post",
      //     body: JSON.stringify(tempMeeting)
      //   }
      // ).then(() => {
      //   setSubmitStatus(false);
      //   navigate("/");
      // });
      const docRef = doc(collection(db, "meetings"));
      await setDoc(docRef, {
        title: titleData,
        content: imgData,
        date: dateData,
        desc: descData
      });
      setSubmitStatus(false);
      navigate("/");
    } else {
      setfieldError("*Fill all the fields");
      setSubmitStatus(false);
    }
  }
  return (
    <div className="add-meetings-container">
      <h1>Add new Meeting</h1>
      <p>Add a new meeting inside the webmeet team!!</p>
      <input placeholder="Enter the title" ref={titleInput} />
      <input placeholder="Enter the image tag" ref={imgInput} />
      <input
        placeholder="Enter the data and time"
        ref={dateInput}
        type="datetime-local"
      />
      <textarea rows="3" col="3" placeholder="Enter the desc" ref={descInput} />
      <button className="btn" onClick={addMeetingHandler}>
        Create Meeting{" "}
        <div className={submitStatus ? "loader" : "d-none"}> </div>{" "}
      </button>
      <p className="">{fieldError}</p>
      <p className="small">
        By creating a new meeting you agree to the terms and conditions of
        WebMeet.
      </p>
    </div>
  );
}
export default AddMeeting;
