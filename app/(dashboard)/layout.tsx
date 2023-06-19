import '@/styles/global.css'
import GLassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen candy-mesh p-6">
        <GLassPane className='w-full h-full flex items-center'>
          <Sidebar />
          {children}
        </GLassPane>
        <div id="modal"></div>
      </body>
    </html>
  )
}