import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../redux/slices/adminSlice";
import CourseForm from "./CourseForm";
import InstructorForm from "./InstructorForm";
import LectureScheduler from "./LectureScheduler";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const instructors = useSelector((state) => state.admin.instructors);

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <InstructorForm />
      <CourseForm />
      <LectureScheduler />
      <h3>Instructor List</h3>
      <ul>
        {instructors.map((inst) => (
          <li key={inst._id}>{inst.name} ({inst.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
