window.onload = function () {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  let newDiv = document.createElement("div"); //creates the div element
  newDiv.className = "duck";  //adds a class to the div element
  body.appendChild(newDiv);  //append the div to the body

  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // https://www.w3schools.com/jsref/met_win_setinterval.asp

  setInterval(function () {
    newDiv.classList.toggle('flap')  //adds flapping to the duck
  }, 250)

  // 3. Now, let's move the duck using CSS "top" and "left". Create
  // a function `moveDuck` that takes a duck object as an argument and sets the
  // "top" and "left" CSS properties.
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  function moveDuck(s) {
    s.style.top = (Math.random() * window.innerHeight) + 'px';  
    s.style.left = (Math.random() * window.innerWidth) + 'px';
    randomPosition();
  }

  // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)

  setInterval(function () { moveDuck(newDiv) }, 1000);

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Now we will organize this better. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  function createDuck() {
    let newDiv = document.createElement("div");
    newDiv.className = "duck";
    body.appendChild(newDiv);

    setInterval(function () {
      newDiv.classList.toggle('flap')
    }, 250)

    function moveDuck(s) {
      let ht = (Math.random() * window.innerHeight) + 'px';
      let wd = (Math.random() * window.innerWidth) + 'px';
      s.style.top = ht;
      s.style.left = wd;
      randomPosition();
    }
    setInterval(function () { moveDuck(newDiv) }, 1000);
    return newDiv;
  }

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  for (let i = 0; i < 5; i++) {
    createDuck();
  }

  // 8. The ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  function randomPosition() {
    let initialTop = (ht.window.innerHeight + 100) + 'px'. toFixed();
    let initialLeft = (wd.window.innerWidth + 50)+ 'px'. toFixed();
    newDiv.style.position = 'fixed';
    return (initialTop, initialLeft);
  }

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  let allDucks = document.querySelectorAll(".duck");
    allDucks.forEach(i => {
    i.addEventListener('click', event => {
      i.classList.toggle('shot'); //adding shot to class of each div element
      removeDuck(i);     //method removes the div element
      setTimeout(checkForWinner, 1000); //checks if div-obj are present in the window, if no - alert - you won
    })
  });

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  function removeDuck(j) {
    let text = j.className;
    const removeElement = () => {
      j.parentNode.removeChild(j);
    }
    if (text.includes('shot')) {    //if class name of the div element has 'shot', then the div is removed from window.
      setTimeout(removeElement, 1000);
    }
  }

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  function checkForWinner() {
    let duckCnt = document.querySelectorAll('div');
    if (duckCnt.length === 0) {
      window.alert("You Won the game!!");
    }
  }

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  let ducksTrans = document.querySelectorAll('div');
  function duckTransition(s){
    s.forEach(item => {
        item.style.transitionTimingFunction = 'cubic-bezier(0.2, 0.1, 0.3, 0.1)'; //slows the speed of the ducks
    })
  }
  duckTransition(ducksTrans);

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  let ducks = document.querySelectorAll('div');
  for (let i = 0; i < ducks.length; i++) {
    let a = ducks[Math.floor(Math.random() * ducks.length)];
    a.classList.toggle('right');
  }
  function direction(d) {
    d.forEach(k => {
      if (k.className.includes('left')) {
        k.classList.toggle('right');
      }
      else {
        k.classList.toggle('left');
      }
    });
  }
  setInterval(function () {direction(ducks) }, 5000);

  // Done, you have accomplish another level of skill
};
