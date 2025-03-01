import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLectures } from "../redux/slices/instructorSlice";

const InstructorDashboard = ({ instructorId }) => {
  const dispatch = useDispatch();
  const lectures = useSelector((state) => state.instructor.lectures);

  useEffect(() => {
    dispatch(fetchLectures(instructorId));
  }, [dispatch, instructorId]);

  return (
    <div>
      <h2>Instructor Dashboard</h2>
      <ul>
        {lectures.map((lec) => (
          <li key={lec._id}>{lec.courseName} - {lec.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default InstructorDashboard;
