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

# 3)  Throttle

## Summary

In this sample we are going to continue exploring redux saga helper effects.

Now it's time to evaluate _throttle_, let's imagine the following scenario:

We have added a _refresh_ button to our page, it will just fire the needed AJAX
queries to our rest api to refresh all the data loaded in the page. We don't
want users on slow internet connection to start clicking on the refresh 
button repeatedly if they don't get a quick response. What can we do?

- On the first click execute reload...
- Ignore all the subsequent calls in 500 Milliseconds (just only keep in the
buffer the last call).
- After that 500 Milliseconds check if we got the latest entry in the buffer
and execute reload.

About throttling: Spawns a saga on an action dispatched to the Store that matches pattern. After spawning a task it's still accepting incoming actions into the underlaying buffer, keeping at most 1 (the most recent one), but in the same time holding up with spawning new task for ms milliseconds (hence its name - throttle). Purpose of this is to ignore incoming actions for a given period of time while processing a task.

More about throttling and debouncing: https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf

How can we achieve a behavior like this? _throttle_ is your friend.

# 4) Race

## Summary

In this sample we are going to continue exploring redux saga helper effects.

Now it's time to evaluate the effect combinator _race_, let's imagine the following scenarios:

A)
  A given user makes an asynchronous call to the server that could take some time (e.g. check hotel 
  availability, or booking flight ticket).

  Meanwhile the request is being processed the user changes his mind and he wants to cancel the request,
  he clicks quick into the cancel button.

  What's the behavior the user should expect? If the request is in progress and he clicked on the cancel
  button he shouldn't get the "operation completed" message.

B)
You got two ways of obtaining the same information from two providers (e.g. weather), depending on some
factors at a given time one of the services response could be laggy.

Why not calling both services and getting the response of the first that produced the response?


How can we achieve a behavior like this? _race_ is your friend.

# 5) All

## Summary

In this sample we are going to continue exploring redux saga helper effects.

Now it's time to evaluate the effect combinator _all_, this effect combinator is quite similar to 
_promise.all_ let's imagine the following scenarios:

  Before letting the user filter a grid by some given criterias you need to ensure that several endpoints
  has returned you filtering enumerations (e.g. an end point returns you a list of countries, another
  end point returns you the list of available organization units...). Is there a way to wait for 
  several async requests to be completed? 

  How can we achieve a behavior like this? _all_ is your friend.

#6) Confirmation

## Summary

What if we need the user to confirm some operation? For instance in our case once the user hits on 
"Generate new number", we want to prompt the user if he really wants to generate a new number if
he decides to move forward the number will be generated if not the service call won't be even made.

Usually this meant mixing a bit of ui logic, what if we could take it inside the saga processing?
