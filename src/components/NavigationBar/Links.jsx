import {FiUsers} from 'react-icons/fi'
import {MdSubject}from 'react-icons/md'
import {ImProfile} from 'react-icons/im'
import {MdVideoLibrary} from 'react-icons/md'
import {VscFilePdf} from 'react-icons/vsc'

const links = [
       {id:1,text:'students',path:'/students',icon:<FiUsers/>},
       {id:2,text:'subjects',path:'/subjects',icon:<MdSubject/>},
       {id:3,text:'profile',path:'/profile',icon:<ImProfile/>},
       {id:4,text:'videos',path:'/videos',icon:<MdVideoLibrary/>},
       {id:5,text:'pdfs',path:'/pdfs',icon:<VscFilePdf/>}

]

export default links