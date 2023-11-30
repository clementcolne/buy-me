import './style.css';
import LoginComponent from './page';

export default function RootLayout({}: { children: React.ReactNode }) {
  return <LoginComponent />;
}
