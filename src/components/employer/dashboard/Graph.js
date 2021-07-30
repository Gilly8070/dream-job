    import React, {Component} from 'react';
    import {Bar, Line, Pie} from 'react-chartjs-2';
import styled from 'styled-components';

    class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
        chartData:props.chartData
        }
    }

    static defaultProps = {
        location:'City'
    }

    render(){
        return (
            <Div className="chart">
                
            <Bar
            data={this.state.chartData}
                    options={{
                
                // title:{
                // text:'Largest Cities In '+this.props.location,
                //     fontSize: 5,
                // width: 1
                // },
            }}
                />
        </Div>
        )
    }
    }

export default Chart;
    

const Div = styled.div`
z-index: 122;
`;
