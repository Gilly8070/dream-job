{/*

///////////////////////// FOR LOADING ////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from 'react';
// import { data } from './data';
import Spinner from './components/Spinner';

import Spinner from '../../Spinner';


const UseLess = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)

    }, [loading])

    if (loading) {
        return <Spinner size={3} />
    }


    


    state = {
        loading: true,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false})
            }, 2000)
    }
    if (this.state.loading) {
        return <Spinner size={3} />
        }






    return (
        <div>
            
        </div>
    )
}

export default UseLess




//////////////////////////// FOR SEARCH /////////////////////////////////////////////////////////////////

    const [loading2, setLoading2] = useState(false);

    useEffect(() => {
            setTimeout(() => {
                setLoading2(false);
            }, 800)
            
    }, [loading2])
    // < Spinner size = { 2} />
            
const handleChange = (e) => {
            // let value = e.target.value.toUpperCase();
            // setText(value);
            // searchJob(text);

            // handleChange2()
            // let filterCurrent = current.filter((single) => single.title.toUpperCase().includes(value));
            // setSearchJobs(filterCurrent);
            // console.log(searchJobs);
            // console.log(text);
            setTimeout(() => {
            setLoading2(true);
            }, 300)
    }

    loading2 ? <Spinner size={3} /> :





//////////////////////////////  MODAL //////////////////////////////////////////////////////////////

    const [modal, setModal] = useState(false);

    const showModal = (id, term) => {
        if (term === 'accept') {
            
            setTimeout(() => {
                setModal(true);
            }, 100);
            setTimeout(() => {
                setModal(false);
            }, 1500);
        }
        if (term === 'reject') {
            if (window.confirm('YOU ARE ABOUT TO DELETE THE JOB. PLEASE CONFIRM')) {
                startRemovedLiveJobs(id, 'reject')
            }
        }
        
    }




    modal: false

showModal = () => {
        setTimeout(() => {
            this.setState({ modal1: true })
        }, 100);
        setTimeout(() => {
            this.setState({ modal1: false })
        }, 1500);
    }


        <button onClick={() => {
                this.showModal();
            }}>
                Apply Now
        </button>



////////////////// SCROLL TOP ///////////////////////////////////////////////////

                <button onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                    })}>top</button>








*/}