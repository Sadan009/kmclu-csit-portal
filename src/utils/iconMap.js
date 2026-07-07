import {
  Bell,
  BookOpen,
  CalendarClock,
  FileStack,
  Download,
  UsersRound,
  GraduationCap,
  Users,
  UserCheck,
  Award,
  Calendar,
  CalendarDays,
  FileText,
  Briefcase,
  FileCheck,
  FileOutput,
} from "lucide-react";

export const iconMap = {
  bell: Bell,
  "book-open": BookOpen,
  "calendar-clock": CalendarClock,
  "file-stack": FileStack,
  download: Download,
  "users-round": UsersRound,
  "graduation-cap": GraduationCap,
  users: Users,
  "user-check": UserCheck,
  award: Award,
  calendar: Calendar,
  "calendar-days": CalendarDays,
  "file-text": FileText,
  briefcase: Briefcase,
  "file-check": FileCheck,
  "file-output": FileOutput,
};

export function getIcon(name) {
  return iconMap[name] || FileText;
}
