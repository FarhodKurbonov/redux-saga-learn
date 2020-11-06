# 1) Hello Saga

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

# 2) Take latest

## Summary

In this sample we are going to start exploring redux saga helper effects.

We have already used the effect helper _TakeEvery_ this effects listen to all incoming actions being
fired, that can be a valid solutions for many solution, but in some case we need to handle 
other behaviors, e.g.:

We are browsing which movie to watch on _NetFlix_, we click on _Star wars_ but suddenly we change
our mind and we click on _Interstellar_, both request are being processed (travelling through internet) we want to previous request to be cancelled and watch
_Interstellar_ movie details.

How can we achieve a behavior like this? _takeLastest_ is your friend.
