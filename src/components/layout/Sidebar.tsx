import { NavLink } from 'react-router-dom';
import { 
  Home, DollarSign, GraduationCap, FileText, User, 
  Calendar, HandCoins, UserCog, Award, ClipboardCheck, AlertCircle 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { 
    name: 'Academic Records', 
    children: [
      { name: 'View My Grades', href: '/student-record/grades', icon: GraduationCap },
      { name: 'Unofficial Transcript', href: '/student-record/unofficial-transcript', icon: FileText },
      { name: 'Degree Audit', href: '#', icon: ClipboardCheck, placeholder: true },
    ]
  },
  { name: 'Tuition & Fees', href: '/tuition', icon: DollarSign },
  { name: 'Student Profile', href: '/profile', icon: User },
  { name: 'Registration', href: '#', icon: Calendar, placeholder: true },
  { name: 'Financial Aid', href: '#', icon: HandCoins, placeholder: true },
  { name: 'Personal Information', href: '#', icon: UserCog, placeholder: true },
  { name: 'Graduation', href: '#', icon: Award, placeholder: true },
  { name: 'Holds', href: '#', icon: AlertCircle, placeholder: true },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-card h-full overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          if (item.children) {
            return (
              <div key={item.name} className="space-y-1">
                <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                  {item.name}
                </div>
                {item.children.map((child) => (
                  <NavLink
                    key={child.name}
                    to={child.href}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      )
                    }
                  >
                    <child.icon className="h-4 w-4" />
                    <span>{child.name}</span>
                    {child.placeholder && (
                      <span className="ml-auto text-xs text-muted-foreground">(TODO)</span>
                    )}
                  </NavLink>
                ))}
              </div>
            );
          }

          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              {item.placeholder && (
                <span className="ml-auto text-xs text-muted-foreground">(TODO)</span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
