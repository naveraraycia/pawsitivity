import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

//  Create a provider - this allows the components to get access to the context / state
export const FeedbackProvider = ({children}) => {
  // Will always take in { children } as param

  //////////////// STATES INITIALIZED ////////////

  // LOADING SPINNER STATE
  const [isLoading, setIsLoading] = useState(true); // true by default

  // JSON SERVER DATA STATE
  const [feedback, setFeedback] = useState([])

  // State for edit feedback
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},  // this item is the placeholder for the item we selected that we want to edit
               // the logic is, whatever feedback item edit icon we click, its data shall be placed within this 'item' key
    edit: false     // if we click an edit icon, this value shall be set to true to symbolize edit mode
  })

  ////////////////////////////////////////////////////////////////////

  // USE EFFECT - loads the JSON immediately upon page reload
  useEffect(()=> {
    // empty [] dependency because we only want whatever is below to be ran ONCE
    // ACTIVATE THE FUNCTION THAT FETCHES THE JSON DATA HERE
    fetchFeedback();
  }, [])

  // FETCH JSON DATA
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    
    // Set feedback data
    setFeedback(data);

    // Set Loading spinner state
    setIsLoading(false);
  }

/////////////////////////////////////////////////////
  // Functions here
  const editFeedback = (itemToEdit) => {
    setFeedbackEdit({
      item: itemToEdit,
      edit: true
    })
  }

  // Update feedback item based on the clicked edit icon from feedback ite
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })

    // GET THE DATA (UPDATED DATA)
    const data = await response.json()

    // SET FEEDBACK WITH response data
    setFeedback(feedback.map((item)=> item.id === id ? {...item, ...data} : item)) 
    // updating feedback means re-setting the setFeedback through mapping
    // ...item means all the indices
    // second param ...updItem means the first param will be added or appended with updItem
    // Else statement is just return the item / single index
  }

  ///////////////////////////////////////////

  const deleteFeedback = async (idParam) => {
    // Reset the values for setFeedback. Redeclare but remove the data selected upon redeclaration
    if(window.confirm('Are you sure you want to delete this?')){

      // DELETE FROM JSON-SERVER
      await fetch(`/feedback/${idParam}`, {
        method: 'DELETE'
      })

      setFeedback(feedback.filter((itemIndex)=>
        itemIndex.id !== idParam   // this filter() method only loops through or retains items with id that are not equal to the clicked list item's ID (basically removes the clicked item id)
      )) // whatever we passed in here as param, replaces / overwrites the 'feedback' value from const [feedback, setFeedback]
    }
  }

  ///////////////////////////////////////////

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    
    const data = await response.json()
    setFeedback([data, ...feedback]);
  }


  return <FeedbackContext.Provider value={{
    feedback: feedback,
    feedbackEdit: feedbackEdit,  // state that holds the item u want to edit
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback, // or just addFeedback
    editFeedback: editFeedback,
    updateFeedback,  // or updateFeedback: updateFeedback
    isLoading: isLoading
  }}>
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext