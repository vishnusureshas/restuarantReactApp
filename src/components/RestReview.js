import React, {useState} from 'react'
import Button  from 'react-bootstrap/Button';
import  Collapse  from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
    console.log(reviews)
    const [open, setOpen] = useState(false);
  return (
    <>
           <Button variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view the Reviews
      </Button>
      <Collapse in={open}>  
      <div className='my-3' id="example-collapse-text">     
          {
            reviews.map(item => (
              <div>
                <h6> {item.name} : <span> {item.date} </span></h6>
                <p>Rating: {item.rating}</p>
                <p>Comments: {item.comments}</p>
              </div>
            ))
          }
      </div>           
      </Collapse>
    </>
  )
}

export default RestReview