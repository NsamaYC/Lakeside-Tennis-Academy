
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { Login } from './pages/Login';
import { CoachDashboard } from './pages/CoachDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { ForgotPassword } from './pages/ForgotPassword';
import { CoachStudents } from './pages/CoachStudents';
import { StudentDetailCoachView } from './pages/StudentDetailCoachView';
import { AddStudentForm } from './pages/AddStudentForm';
import { CoachLessons } from './pages/CoachLessons';
import { LessonEditor } from './pages/LessonEditor';
import { CoachSchedule } from './pages/CoachSchedule';
import { SessionEditor } from './pages/SessionEditor';
import { SessionDetail } from './pages/SessionDetail';
import { MediaLibrary } from './pages/MediaLibrary';
import { MediaDetail } from './pages/MediaDetail';
import { MediaUpload } from './pages/MediaUpload';
import { ProfileManagement } from './pages/ProfileManagement';
import { Notifications } from './pages/Notifications';
import { Messages } from './pages/Messages';
import { MessageDetail } from './pages/MessageDetail';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/coach_dashboard" element={<CoachDashboard />} />
        <Route path="/coach_students" element={<CoachStudents />} />
        <Route path="/student_detail_coach_view/:studentId" element={<StudentDetailCoachView />} />
        <Route path="/add_student_form" element={<AddStudentForm />} />
        <Route path="/coach_lessons" element={<CoachLessons />} />
        <Route path="/lesson_editor" element={<LessonEditor />} />
        <Route path="/lesson_editor/:itemId" element={<LessonEditor />} />
        <Route path="/coach_schedule" element={<CoachSchedule />} />
        <Route path="/session_editor" element={<SessionEditor />} />
        <Route path="/session_editor/:sessionId" element={<SessionEditor />} />
        <Route path="/session_detail/:sessionId" element={<SessionDetail />} />
        <Route path="/media_library" element={<MediaLibrary />} />
        <Route path="/media_detail/:mediaId" element={<MediaDetail />} />
        <Route path="/media_upload" element={<MediaUpload />} />
        <Route path="/student_dashboard" element={<StudentDashboard />} />

        {/* New Coach Routes */}
        <Route path="/profile_management" element={<ProfileManagement />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/message_detail/:chatId" element={<MessageDetail />} />

      </Routes>
    </HashRouter>
  );
};

export default App;
