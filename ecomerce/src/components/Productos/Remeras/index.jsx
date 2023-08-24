import Chombas from './Cards/Chombas'
import Estampadas from './Cards/Estampadas'
import Lisas from './Cards/Lisas'



const Remeras = () => {
    return(
        <div>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Chombas></Chombas>
                        </div>
                        <div className='col-md-4'>
                            <Estampadas></Estampadas>
                        </div>
                        <div className='col-md-4'>
                            <Lisas></Lisas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Remeras