import React from 'react';
import './QuickSearch.css'

const QuickSearch = (props)=>{
    const renderList= ({Quickdata}) =>{
        
        if(Quickdata){
            return Quickdata.map((item)=>{
                return(
                    <div >
                        <div className="divblock col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
                            <div className="tilecomponent1">
                                <img src={`/images/${item.name}.png`} style={{height: '150px',width:'100%',marginleft: '-15px'}} className="img-responsive"/>
                            </div>
                            <div className="tilecomponent2">
                                <div className="tileheading">
                                    {item.name}
                                </div>
                                <div className="tilesubheading">
                                    Start Your Day with Exclusive {item.name} Options
                                </div>
                            </div>
                        </div>
                
                    </div>
                )
            })
        }
    }

        return(
            <div className="quicksearchcontainer container ">
            
                <p className="heading">
                    Quick Searches
                </p>
            
                <p className="subheading">
                    Discover Restaurants by Type of Meal
                </p>
                {renderList(props)}
                
                    
            </div>
           
            
        )
    }

export default QuickSearch;
