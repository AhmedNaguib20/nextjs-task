import '@/styles/global.css'
import GLassPane from "@/components/GlassPane";

export default function AuthRootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6" >
        <GLassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GLassPane>
      </body>
    </html>
  )
}