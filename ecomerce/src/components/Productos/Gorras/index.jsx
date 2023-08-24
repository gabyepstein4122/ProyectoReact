import Urbana from './Cards/Urbanas';
import Deportiva from './Cards/Deportivas';
import Boina from './Cards/Boinas';

const Gorras = () => {
    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Urbana></Urbana>
                    </div>
                    <div className='col-md-4'>
                        <Deportiva></Deportiva>
                    </div>
                    <div className='col-md-4'>
                        <Boina></Boina>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gorras