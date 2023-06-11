import { useLocation} from "react-router-dom"
import { Link } from "react-router-dom"

function Breadcrumbs(){

    const location = useLocation()
    let currentlink = ''

    const crumbs = location.pathname.split('/').filter( (crumb) => crumb !== '').map(
        (crumb)=>{
            currentlink+=`/${crumb}`
            return <div className="crumb" key={crumb}>
                <Link to={currentlink}>{crumb}</Link>
            </div>
        }
    )
        
    return <div className="breadcrumbs">
        <div className="crumbs">
            <div className="crumb">
                <Link to="/">home</Link>
            </div>
            {crumbs}
        </div>
    </div>
}

export default Breadcrumbs