import logo from '../assets/images/logo.png'

const Logo = ({className}) =>{
       return(
              <img
              src={logo}
              alt='science master'
              className={className}
              />
       )
}

export default Logo