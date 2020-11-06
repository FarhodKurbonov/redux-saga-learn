# Hello Saga

## Summary

In this sample we are going to: 

- Install redux-saga library.
- Add all the setup code needed.
- Create a simple service that will return numbers after a given delay (simulating asynchronous calls).
- Setup redux saga.
- Create actions to request for a new number, and a second action that will be fired 
once the number has been served.
- Create a saga that will: 
  - Listen for the request_number_start.
  - Execute the getNewNumber service wait for it's reponse.
  - Fire the request_number_completed task.
- Setup the global saga and update middleware setup to add redux-saga.
- Update the numberCollection reducer to listen for this task.
- Create a number setter component + container.
