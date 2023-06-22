import { Actor } from "@/lib/models"
import { ReactElement } from "react"

const Staff: React.FC<{ staff: Actor[], title: string }> = (
  { staff = [], title }: { staff: Actor[], title: string }
): ReactElement => (
  <div className="flex flex-col">
    <h3 className="text-xl mb-5">{title} <span className="text-gray-400"> {staff.length}</span></h3>
    {
      staff.map((ele: Actor) => (
        <div className="flex items-center mb-5" key={ele.id}>
          {
            ele.profile_path ?
              <img
                className="h-100 rounded-md h-16 w-16 mr-3"
                src={`${process.env.NEXT_PUBLIC_IMAGES_BASE_URL}/w200/${ele.profile_path}`}
                alt={ele.original_name}
              />
              :
              <div className="h-16 w-16 flex items-center justify-center rounded-md bg-gray-100 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
          }
          <div className="flex flex-col">
            <h3>{ele.character}</h3>
            <p className="text-gray-400">{ele.original_name}</p>
          </div>
        </div>
      ))
    }
  </div>
)

export default Staff