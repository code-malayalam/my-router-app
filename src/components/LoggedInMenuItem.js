import { isLoggedIn } from '../utils/Common';

export default function LoggedInMenuItem({children}) {
  
  return (
    isLoggedIn() && children
  )
}
