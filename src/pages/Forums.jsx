import React from "react";
import Header from "../components/Header";




import { BiUpvote,BiDownvote,BiCommentDetail } from "react-icons/bi";
import './Forums.css'

const Forum = ()=>{
  //  const content ={
  //      title: "Water shortage",
  //     name:"Joan Munde",
  //     topic: "shortage of water",
  //       description: "water has been an issue, we lack water it is has been one week now",
    
       
        



  //    }
  //   const content1 ={
  //     title: "Water",
  //     name:"Mollen Munde",
  //    topic: "shortage of kibandas",
  //    description: "water has been an issue, we lack water it is has been one week now",


  //    }
  //   const content2 ={
  //     title: "Water",
  //      name:"Angela Munde",
  //     topic: "shortage of electricity",
  //       description: "water has been an issue, we lack water it is has been one week now",
  //  }

    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Forums" category=""/>
            {/* <ForumsTile content ={content}/>
            <ForumsTile content ={content1}/>
            <ForumsTile content ={content2}/> */}



<div className='box'>
        <div className='boxes'>
      <h2>To commemorate World Health Day, Kilimani Children's clinic is offering free dental consultations and 30% discounts on select procedures throughout this ...
</h2>
        </div>
        <div className='icons'>
            <div id='heart' ><BiUpvote /></div>
            <div id='down'><BiDownvote /></div>
            <div id='Comment'><BiCommentDetail /></div>
          </div>
      </div>
      <div className='box4'>
      </div>
      <div className='box5'>
      </div>
      <div className='box6'>
      </div>
      <div className='box7'>
      </div>
      <div class="flow-root">
      </div>
    </div>
  )
}
export default Forum

          








           
            



    
    

