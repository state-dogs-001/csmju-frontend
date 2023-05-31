import { createRouter, createWebHistory } from "vue-router";

//? Layouts
import HomeLayout from "@/layouts/HomeLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import StudentServiceLayout from "@/layouts/StudentServiceLayout.vue";
import PersonnelServiceLayout from "@/layouts/PersonnelServiceLayout.vue";

//? Views without protected route
// import Welcome from "@/views/Welcome.vue";
import Home from "@/views/Home.vue";
import QRCode from "@/views/QRCode.vue";
import About from "@/views/About.vue";
import Classroom from "@/views/Classroom.vue";
import Teacher from "@/views/Teacher.vue";
import Staff from "@/views/Staff.vue";
import PersonnelCVForGuest from "@/views/PersonnelCV.vue";
import Schedule from "@/views/Schedule.vue";
import ScheduleExplain from "@/views/ScheduleExplain.vue";
import Program from "@/views/Program.vue";
import News from "@/views/News.vue";
import NewsExplain from "@/views/NewsExplain.vue";
import Alumnus from "@/views/Alumnus.vue";
import Download from "@/views/Download.vue";
import Contact from "@/views/Contact.vue";

//? About
import History from "@/views/about/History.vue";
import Importance from "@/views/about/Importance.vue";
import Objectivity from "@/views/about/Objectivity.vue";
import Philosophy from "@/views/about/Philosophy.vue";
import PLO from "@/views/about/PLO.vue";

//? Auth view
import Login from "@/views/auth/Login.vue";

//? Student
import StudentService from "@/views/student/StudentService.vue";
import StudentProfile from "@/views/student/StudentProfile.vue";
import StudentCourseAlert from "@/views/student/StudentCourseAlert.vue";
import StudentCourseAlertHistory from "@/views/student/StudentCourseAlertHistory.vue";
import StudentCourseAlertEdit from "@/views/student/StudentCourseAlertEdit.vue";
import StudentMaintenance from "@/views/student/StudentMaintenance.vue";
import StudentEquipmentRecovery from "@/views/student/StudentEquipmentRecovery.vue";
import StudentRecoveryHistory from "@/views/student/StudentRecoveryHistory.vue";
import StudentProjectLibrary from "@/views/student/StudentProjectLibrary.vue";
import StudentProjectSeeMore from "@/views/student/StudentProjectSeeMore.vue";

//? Personnel
import PersonnelService from "@/views/personnel/PersonnelService.vue";
import PersonnelProfile from "@/views/personnel/PersonnelProfile.vue";
import PersonnelCV from "@/views/personnel/PersonnelCV.vue";
import PersonnelCVPrint from "@/views/personnel/PersonnelCVPrint.vue";
import PersonnelMaintain from "@/views/personnel/PersonnelMaintain.vue";
import PersonnelMaterial from "@/views/personnel/PersonnelMaterial.vue";
import PersonnelMaterialDisbursement from "@/views/personnel/PersonnelMaterialDisbursement.vue";
import PersonnelEquipmentRecovery from "@/views/personnel/PersonnelEquipmentRecovery.vue";
import PersonnelRecoveryHistory from "@/views/personnel/PersonnelRecoveryHistory.vue";

//? Page 404
import Page404 from "@/views/Page404.vue";

const routes = [
  //? Home layout
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/qrcode",
        name: "Qrcode",
        component: QRCode,
        beforeEnter: intoGuard,
      },
      {
        path: "/personnel/service/cv/print",
        name: "CVPrint",
        component: PersonnelCVPrint,
        beforeEnter: personnelAuthGuard,
      },
    ],
  },

  //? Main layout
  {
    path: "/main",
    component: MainLayout,
    beforeEnter: intoGuard,
    children: [
      {
        path: "/about",
        name: "About",
        redirect: "/about/history",
        component: About,
        children: [
          {
            path: "/about/history",
            name: "History",
            component: History,
          },
          {
            path: "/about/importance",
            name: "Importance",
            component: Importance,
          },
          {
            path: "/about/objectivity",
            name: "Objectivity",
            component: Objectivity,
          },
          {
            path: "/about/philosophy",
            name: "Philosophy",
            component: Philosophy,
          },
          {
            path: "/about/plo",
            name: "PLO",
            component: PLO,
          },
        ],
      },
      {
        path: "/classroom",
        name: "Classroom",
        component: Classroom,
      },
      {
        path: "/teacher",
        name: "Teacher",
        component: Teacher,
      },
      {
        path: "/staff",
        name: "Staff",
        component: Staff,
      },
      {
        path: "/read/cv/:id",
        name: "ReadCV",
        component: PersonnelCVForGuest,
      },
      {
        path: "/schedule",
        name: "Schedule",
        component: Schedule,
      },
      {
        path: "/schedule/read/:id",
        name: "ScheduleExplain",
        component: ScheduleExplain,
      },
      {
        path: "/program",
        name: "Program",
        component: Program,
      },
      {
        path: "/news",
        name: "News",
        component: News,
      },
      {
        path: "/newsexplain/:id",
        name: "NewsExplain",
        component: NewsExplain,
      },
      {
        path: "/alumnus",
        name: "Alumnus",
        component: Alumnus,
      },
      {
        path: "/download",
        name: "Download",
        component: Download,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },

  //? Auth layout
  {
    path: "/auth",
    component: AuthLayout,
    redirect: "/auth/login",
    beforeEnter: intoGuard,
    children: [
      {
        path: "/auth/login",
        name: "Login",
        component: Login,
      },
    ],
  },

  //? Student layout
  {
    path: "/student",
    redirect: "/student/service",
    component: StudentServiceLayout,
    beforeEnter: studentAuthGuard,
    children: [
      {
        path: "/student/service",
        name: "StudentService",
        component: StudentService,
      },
      {
        path: "/student/service/profile",
        name: "StudentProfile",
        component: StudentProfile,
      },
      {
        path: "/student/service/course",
        name: "Course",
        component: StudentCourseAlert,
      },
      {
        path: "/student/service/course/history",
        name: "CourseHistory",
        component: StudentCourseAlertHistory,
      },
      {
        path: "/student/service/course/edit/:id",
        name: "CourseEdit",
        component: StudentCourseAlertEdit,
      },
      {
        path: "/student/service/maintenance",
        name: "StudentMaintenance",
        component: StudentMaintenance,
      },
      {
        path: "/student/service/equipment/recovery",
        name: "StudentEquipmentRecovery",
        component: StudentEquipmentRecovery,
      },
      {
        path: "/student/service/equipment/recovery/history",
        name: "StudentRecoveryHistory",
        component: StudentRecoveryHistory,
      },
      {
        path: "/student/service/project-library",
        name: "StudentProjectLibrary",
        component: StudentProjectLibrary,
      },
      {
        path: "/student/service/project-library/:id",
        name: "StudentProjectSeeMore",
        component: StudentProjectSeeMore,
      },
    ],
  },

  //? Personnel layout
  {
    path: "/personnel",
    redirect: "/personnel/service",
    component: PersonnelServiceLayout,
    beforeEnter: personnelAuthGuard,
    children: [
      {
        path: "/personnel/service",
        name: "PersonnelService",
        component: PersonnelService,
      },
      {
        path: "/personnel/service/profile",
        name: "PersonnelProfile",
        component: PersonnelProfile,
      },
      {
        path: "/personnel/service/cv",
        name: "CV",
        component: PersonnelCV,
      },
      {
        path: "/personnel/service/maintenance",
        name: "PersonnelMaintenance",
        component: PersonnelMaintain,
      },
      {
        path: "/personnel/service/material",
        name: "PersonnelMaterial",
        component: PersonnelMaterial,
      },
      {
        path: "/personnel/service/material/disbursement/:id",
        name: "PersonnelMaterialDisbursement",
        component: PersonnelMaterialDisbursement,
      },
      {
        path: "/personnel/service/equipment/recovery",
        name: "PersonnelEquipmentRecovery",
        component: PersonnelEquipmentRecovery,
      },
      {
        path: "/personnel/service/equipment/recovery/history",
        name: "PersonnelRecoveryHistory",
        component: PersonnelRecoveryHistory,
      },
    ],
  },

  //? 404
  {
    path: "/:pathMatch(.*)*",
    component: Page404,
    meta: {
      title: "Not Found This Page",
      description: "ไม่พบหน้า",
    },
  },
];

//? Authentication Home
function intoGuard(to, from, next) {
  if (localStorage.getItem("into")) {
    next();
  } else {
    next({ name: "Home" });
  }
}

//? Student Page Guard
function studentAuthGuard(to, from, next) {
  let permission = JSON.parse(window.localStorage.getItem("permission"));
  let local_user = JSON.parse(window.localStorage.getItem("user"));

  if (local_user != null && permission != null) {
    let user_role = permission.role;
    let status = local_user.status;
    let token = local_user.access_token;

    //? Check user role
    if (token && user_role == 2 && status == "success") {
      next();
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("permission");
      alert(
        "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
      );
      next({ name: "Login" });
    }
  } else {
    next({ name: "Login" });
  }
}

//? Personnel Page Guard
function personnelAuthGuard(to, from, next) {
  let permission = JSON.parse(window.localStorage.getItem("permission"));
  let personnel_user = JSON.parse(window.localStorage.getItem("user"));

  if (personnel_user != null && permission != null) {
    let status = personnel_user.status;
    let user_role = permission.role;
    let token = personnel_user.access_token;

    if (token && user_role == 1 && status == "success") {
      next();
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("permission");
      alert(
        "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
      );
      next({ name: "Login" });
    }
  } else {
    next({ name: "Login" });
  }
}

//? Admin Page Guard
function adminAuthGuard(to, from, next) {
  let local_user = JSON.parse(window.localStorage.getItem("user"));

  if (local_user != null) {
    let user_role = local_user.data.role;
    let token = local_user.token;

    if (token && user_role == "admin") {
      next();
    } else {
      localStorage.removeItem("user");
      alert(
        "Warning : You are not authorized to access this page! \n\n คำเตือน : ผู้ใช้งานไม่มีสิทธิ์เข้าถึงหน้านี้...โปรดตรวจสอบข้อมูล!"
      );
      next({ name: "Login" });
    }
  } else {
    next({ name: "Login" });
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
